/**
 * Prep for Research Analysis MCP Server
 * Converts transcripts, documents, and images to clean Markdown format for research analysis
 * Specializes in VTT transcript conversion with speaker anonymization and Azure AI frontmatter
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';
import sharp from 'sharp';
import { createWorker } from 'tesseract.js';
import ModelClient from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';

class PrepForResearchAnalysisMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'prep-for-research-analysis',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
  }

  setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'convert_vtt_to_md',
            description: 'Convert VTT subtitle files to Markdown format with speaker anonymization',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: {
                  type: 'string',
                  description: 'Path to the VTT file to convert'
                },
                includeTimestamps: {
                  type: 'boolean',
                  description: 'Whether to include timestamps in the output',
                  default: false
                },
                anonymizeSpeakers: {
                  type: 'boolean',
                  description: 'Whether to anonymize speaker names to initials',
                  default: true
                }
              },
              required: ['filePath']
            }
          },
          {
            name: 'anonymize_content',
            description: 'Anonymize sensitive information in text content',
            inputSchema: {
              type: 'object',
              properties: {
                content: {
                  type: 'string',
                  description: 'Text content to anonymize'
                },
                anonymizeEmails: {
                  type: 'boolean',
                  description: 'Anonymize email addresses',
                  default: true
                },
                anonymizePhones: {
                  type: 'boolean',
                  description: 'Anonymize phone numbers',
                  default: true
                }
              },
              required: ['content']
            }
          },
          {
            name: 'add_yaml_frontmatter',
            description: 'Add YAML frontmatter to Markdown content for Azure AI Foundry',
            inputSchema: {
              type: 'object',
              properties: {
                content: {
                  type: 'string',
                  description: 'Markdown content to add frontmatter to'
                },
                title: {
                  type: 'string',
                  description: 'Document title'
                },
                contentType: {
                  type: 'string',
                  description: 'Type of content (vtt, image, document, etc.)'
                },
                tags: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Tags for categorization'
                }
              },
              required: ['content']
            }
          },
          {
            name: 'process_file_for_azure',
            description: 'Complete pipeline: convert file, anonymize, and add Azure AI frontmatter',
            inputSchema: {
              type: 'object',
              properties: {
                inputPath: {
                  type: 'string',
                  description: 'Path to input file (VTT, etc.)'
                },
                outputPath: {
                  type: 'string',
                  description: 'Path for output Markdown file (optional)'
                },
                anonymize: {
                  type: 'boolean',
                  description: 'Apply anonymization',
                  default: true
                },
                title: {
                  type: 'string',
                  description: 'Document title for frontmatter'
                },
                tags: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Tags for Azure AI Foundry'
                }
              },
              required: ['inputPath']
            }
          },
          {
            name: 'convert_image_to_md',
            description: 'Convert image files (screenshots, etc.) to Markdown using OCR or Azure AI Foundry with Azure AI frontmatter',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: {
                  type: 'string',
                  description: 'Path to the image file to convert (PNG, JPG, JPEG, etc.)'
                },
                outputPath: {
                  type: 'string',
                  description: 'Path for output Markdown file (optional)'
                },
                title: {
                  type: 'string',
                  description: 'Document title for the converted content'
                },
                contentType: {
                  type: 'string',
                  description: 'Type of content (screenshot, document, diagram, etc.)',
                  default: 'image'
                },
                processingMode: {
                  type: 'string',
                  description: 'Processing method: "ocr" for Tesseract OCR, "azure-ai" for Azure AI Foundry multimodal',
                  enum: ['ocr', 'azure-ai'],
                  default: 'ocr'
                },
                language: {
                  type: 'string',
                  description: 'Language for OCR processing (eng, spa, fra, etc.) - only used with OCR mode',
                  default: 'eng'
                },
                aiPrompt: {
                  type: 'string',
                  description: 'Custom prompt for Azure AI Foundry processing (optional)',
                  default: 'Analyze this image and extract all visible text, describe the layout, and identify key information. Format the response as clear, structured content.'
                },
                anonymize: {
                  type: 'boolean',
                  description: 'Apply anonymization to extracted text',
                  default: true
                },
                tags: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Tags for Azure AI Foundry categorization'
                },
                includeImageInfo: {
                  type: 'boolean',
                  description: 'Include image metadata in the output',
                  default: true
                }
              },
              required: ['filePath']
            }
          }
        ]
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case 'convert_vtt_to_md':
          return await this.convertVTTToMarkdown(args);
        
        case 'anonymize_content':
          return await this.anonymizeContent(args);
        
        case 'add_yaml_frontmatter':
          return await this.addYAMLFrontmatter(args);
        
        case 'process_file_for_azure':
          return await this.processFileForAzure(args);
        
        case 'convert_image_to_md':
          return await this.convertImageToMarkdown(args);
        
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  parseVTT(vttContent) {
    console.log('Starting VTT parsing...');
    const cues = [];
    const lines = vttContent.split('\n');
    const speakerMap = new Map();
    let speakerCounter = 1;
    
    console.log(`Processing ${lines.length} lines`);
    
    // More efficient parsing - process line by line without nested loops
    let currentCue = null;
    let collectingText = false;
    let textLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines and header
      if (!line || line === 'WEBVTT') {
        continue;
      }
      
      // Check if this is a timestamp line
      if (line.includes('-->')) {
        // Save previous cue if we were collecting text
        if (currentCue && textLines.length > 0) {
          const fullText = textLines.join(' ');
          const { speaker, text } = this.extractSpeakerInfo(fullText, speakerMap, speakerCounter);
          
          if (speaker && !speakerMap.has(speaker)) {
            speakerMap.set(speaker, `Speaker${speakerCounter}`);
            speakerCounter++;
          }
          
          cues.push({
            id: currentCue.id,
            start: currentCue.start,
            end: currentCue.end,
            speaker: speaker,
            text: text,
            originalText: fullText
          });
        }
        
        // Start new cue
        const [start, end] = line.split('-->').map(s => s.trim());
        currentCue = { start, end, id: null };
        textLines = [];
        collectingText = true;
        continue;
      }
      
      // If we're collecting text and this isn't a timestamp
      if (collectingText && !line.includes('-->')) {
        // Check if this might be a cue ID (UUID pattern)
        if (!currentCue.id && line.match(/^[a-f0-9-]+\/\d+-\d+$/)) {
          currentCue.id = line;
        } else {
          // This is text content
          textLines.push(line);
        }
      }
    }
    
    // Don't forget the last cue
    if (currentCue && textLines.length > 0) {
      const fullText = textLines.join(' ');
      const { speaker, text } = this.extractSpeakerInfo(fullText, speakerMap, speakerCounter);
      
      if (speaker && !speakerMap.has(speaker)) {
        speakerMap.set(speaker, `Speaker${speakerCounter}`);
        speakerCounter++;
      }
      
      cues.push({
        id: currentCue.id,
        start: currentCue.start,
        end: currentCue.end,
        speaker: speaker,
        text: text,
        originalText: fullText
      });
    }
    
    console.log(`Parsed ${cues.length} cues with ${speakerMap.size} speakers`);
    return { cues, speakerMap };
  }

  extractSpeakerInfo(text, speakerMap, speakerCounter) {
    // Handle <v Speaker Name>text</v> format
    const speakerMatch = text.match(/<v\s+([^>]+)>(.*?)<\/v>/s);
    if (speakerMatch) {
      const speakerInfo = speakerMatch[1].trim();
      const speechText = speakerMatch[2].trim();
      
      // Extract name - handle various formats
      // "David Mondello", "Christopher Swatty", etc.
      let cleanSpeaker = speakerInfo;
      
      // Remove titles like Dr., Prof., etc.
      cleanSpeaker = cleanSpeaker.replace(/^(?:Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, '');
      
      // Remove pronouns like (She/Her), (He/Him)
      cleanSpeaker = cleanSpeaker.replace(/\s*\([^)]*\)\s*$/, '');
      
      // Get the clean name
      const nameParts = cleanSpeaker.trim().split(/\s+/);
      if (nameParts.length >= 2) {
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1]; // Last part as surname
        const fullName = `${firstName} ${lastName}`;
        const initials = `${firstName[0]}${lastName[0]}`;
        return { speaker: fullName, text: speechText, initials };
      } else if (nameParts.length === 1) {
        const name = nameParts[0];
        const initials = name[0];
        return { speaker: name, text: speechText, initials };
      }
      
      return { speaker: speakerInfo, text: speechText, initials: null };
    }
    
    // No speaker tags, return as is
    return { speaker: null, text: text, initials: null };
  }

  anonymizeSpeakers(cues, speakerMap) {
    return cues.map(cue => {
      if (cue.speaker && speakerMap.has(cue.speaker)) {
        // Create initials from full name
        const nameParts = cue.speaker.split(' ');
        const initials = nameParts.map(part => part[0]).join('');
        
        return {
          ...cue,
          anonymizedSpeaker: `(${initials})`,
          text: cue.text
        };
      }
      return cue;
    });
  }

  async convertVTTToMarkdown(args) {
    try {
      const { filePath, includeTimestamps = false, anonymizeSpeakers = true } = args;
      
      // Read VTT file
      const vttContent = await fs.readFile(filePath, 'utf-8');
      
      // Parse VTT with speaker information
      const { cues, speakerMap } = this.parseVTT(vttContent);
      
      // Apply speaker anonymization if requested
      const processedCues = anonymizeSpeakers ? this.anonymizeSpeakers(cues, speakerMap) : cues;
      
      let markdown = '# Transcript\n\n';
      
      // Add speaker mapping if anonymized
      if (anonymizeSpeakers && speakerMap.size > 0) {
        markdown += '## Speaker Key\n\n';
        Array.from(speakerMap.entries()).forEach(([original, anonymous]) => {
          const nameParts = original.split(' ');
          const initials = nameParts.map(part => part[0]).join('');
          markdown += `- (${initials}): [Speaker anonymized]\n`;
        });
        markdown += '\n---\n\n';
      }
      
      processedCues.forEach((cue, index) => {
        if (includeTimestamps) {
          markdown += `**[${cue.start} - ${cue.end}]**\n`;
        }
        
        if (cue.anonymizedSpeaker) {
          markdown += `**${cue.anonymizedSpeaker}:** ${cue.text}\n\n`;
        } else if (cue.speaker) {
          markdown += `**${cue.speaker}:** ${cue.text}\n\n`;
        } else {
          markdown += `${cue.text}\n\n`;
        }
      });
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              markdown: markdown,
              cueCount: cues.length,
              speakerCount: speakerMap.size,
              anonymized: anonymizeSpeakers,
              sourceFile: filePath
            }, null, 2)
          }
        ]
      };
      
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: false,
              error: error.message
            }, null, 2)
          }
        ]
      };
    }
  }

  async anonymizeContent(args) {
    try {
      const { 
        content, 
        anonymizeEmails = true, 
        anonymizePhones = true
      } = args;
      
      let anonymized = content;
      
      // Anonymize email addresses
      if (anonymizeEmails) {
        anonymized = anonymized.replace(
          /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
          '[EMAIL_REDACTED]'
        );
      }
      
      // Anonymize phone numbers
      if (anonymizePhones) {
        anonymized = anonymized.replace(
          /(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g,
          '[PHONE_REDACTED]'
        );
      }
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              originalLength: content.length,
              anonymizedLength: anonymized.length,
              anonymizedContent: anonymized,
              changesApplied: {
                emails: anonymizeEmails,
                phones: anonymizePhones
              }
            }, null, 2)
          }
        ]
      };
      
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: false,
              error: error.message
            }, null, 2)
          }
        ]
      };
    }
  }

  async addYAMLFrontmatter(args) {
    try {
      const { 
        content, 
        title, 
        contentType, 
        tags = []
      } = args;
      
      const frontmatter = {
        title: title || 'Converted Document',
        created: new Date().toISOString(),
        content_type: contentType,
        tags: tags,
        azure_ai_foundry: {
          ready: true,
          format_version: '1.0'
        }
      };
      
      const yamlHeader = yaml.dump(frontmatter);
      const markdownWithFrontmatter = `---\n${yamlHeader}---\n\n${content}`;
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              markdownWithFrontmatter: markdownWithFrontmatter,
              frontmatter: frontmatter
            }, null, 2)
          }
        ]
      };
      
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: false,
              error: error.message
            }, null, 2)
          }
        ]
      };
    }
  }

  async processFileForAzure(args) {
    try {
      const { 
        inputPath, 
        outputPath, 
        anonymize = true, 
        title, 
        tags = [] 
      } = args;
      
      const ext = path.extname(inputPath).toLowerCase();
      let markdown = '';
      let contentType = '';
      
      // Convert based on file type
      if (ext === '.vtt') {
        contentType = 'transcript';
        const result = await this.convertVTTToMarkdown({ filePath: inputPath });
        const resultData = JSON.parse(result.content[0].text);
        if (!resultData.success) throw new Error(resultData.error);
        markdown = resultData.markdown;
      } else if (['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp'].includes(ext)) {
        contentType = 'image';
        const result = await this.convertImageToMarkdown({ 
          filePath: inputPath,
          anonymize: false, // We'll handle anonymization separately
          includeImageInfo: true
        });
        const resultData = JSON.parse(result.content[0].text);
        if (!resultData.success) throw new Error(resultData.error);
        
        // Extract just the markdown content without frontmatter for further processing
        const fullMarkdown = resultData.markdownPreview.includes('...') 
          ? await fs.readFile(resultData.outputFile || inputPath + '.md', 'utf8')
          : resultData.markdownPreview;
        
        // Remove existing frontmatter if present
        markdown = fullMarkdown.replace(/^---[\s\S]*?---\s*/, '');
      } else {
        throw new Error(`Unsupported file type: ${ext}. Supported formats: .vtt, .png, .jpg, .jpeg, .gif, .bmp, .tiff, .webp`);
      }
      
      // Anonymize if requested
      if (anonymize) {
        const anonymizeResult = await this.anonymizeContent({ content: markdown });
        const anonymizeData = JSON.parse(anonymizeResult.content[0].text);
        if (!anonymizeData.success) throw new Error(anonymizeData.error);
        markdown = anonymizeData.anonymizedContent;
      }
      
      // Add YAML frontmatter
      const frontmatterResult = await this.addYAMLFrontmatter({
        content: markdown,
        title: title || `Converted ${path.basename(inputPath)}`,
        contentType: contentType,
        tags: [...tags, contentType, 'azure-ai-foundry']
      });
      
      const frontmatterData = JSON.parse(frontmatterResult.content[0].text);
      if (!frontmatterData.success) throw new Error(frontmatterData.error);
      
      const finalMarkdown = frontmatterData.markdownWithFrontmatter;
      
      // Save to file
      let savedPath = outputPath;
      if (!savedPath) {
        const baseName = path.basename(inputPath, path.extname(inputPath));
        savedPath = path.join(path.dirname(inputPath), `${baseName}_azure_ai.md`);
      }
      
      await fs.writeFile(savedPath, finalMarkdown, 'utf-8');
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              inputFile: inputPath,
              outputFile: savedPath,
              contentType: contentType,
              anonymized: anonymize,
              markdownPreview: finalMarkdown.substring(0, 500) + '...',
              fileSize: finalMarkdown.length
            }, null, 2)
          }
        ]
      };
      
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: false,
              error: error.message
            }, null, 2)
          }
        ]
      };
    }
  }

  async convertImageToMarkdown(args) {
    try {
      const { 
        filePath, 
        outputPath, 
        title, 
        contentType = 'image',
        processingMode = 'ocr',
        language = 'eng',
        aiPrompt = 'Analyze this image and extract all visible text, describe the layout, and identify key information. Format the response as clear, structured content.',
        anonymize = true,
        tags = [],
        includeImageInfo = true
      } = args;

      // Validate file exists
      try {
        await fs.access(filePath);
      } catch (error) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Validate image file type
      const ext = path.extname(filePath).toLowerCase();
      const supportedFormats = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp'];
      if (!supportedFormats.includes(ext)) {
        throw new Error(`Unsupported image format: ${ext}. Supported formats: ${supportedFormats.join(', ')}`);
      }

      // Get image metadata using Sharp
      let imageInfo = null;
      if (includeImageInfo) {
        try {
          const metadata = await sharp(filePath).metadata();
          imageInfo = {
            width: metadata.width,
            height: metadata.height,
            format: metadata.format,
            size: metadata.size,
            channels: metadata.channels,
            density: metadata.density
          };
        } catch (error) {
          console.warn('Could not extract image metadata:', error.message);
        }
      }

      let extractedText = '';
      let processingInfo = {};

      // Choose processing method
      if (processingMode === 'azure-ai') {
        console.error('Starting Azure AI Foundry processing...');
        const aiResult = await this.processImageWithAzureAI(filePath, aiPrompt);
        extractedText = aiResult.content;
        processingInfo = {
          method: 'Azure AI Foundry',
          model: aiResult.model,
          confidence: aiResult.confidence || 'N/A'
        };
      } else {
        console.error('Starting OCR processing...');
        const ocrResult = await this.processImageWithOCR(filePath, language);
        extractedText = ocrResult.text;
        processingInfo = {
          method: 'Tesseract OCR',
          language: language,
          confidence: `${ocrResult.confidence.toFixed(1)}%`
        };
      }

      // Apply anonymization if requested
      if (anonymize && extractedText) {
        const anonymizeResult = await this.anonymizeContent({ 
          content: extractedText,
          anonymizeEmails: true,
          anonymizePhones: true
        });
        
        const resultText = anonymizeResult.content[0].text;
        const resultData = JSON.parse(resultText);
        if (resultData.success) {
          extractedText = resultData.anonymizedContent;
        }
      }

      // Build the markdown content
      let markdownContent = '';
      
      // Add title if provided
      if (title) {
        markdownContent += `# ${title}\n\n`;
      }

      // Add image information if requested
      if (includeImageInfo && imageInfo) {
        markdownContent += `## Image Information\n\n`;
        markdownContent += `- **File**: ${path.basename(filePath)}\n`;
        markdownContent += `- **Format**: ${imageInfo.format?.toUpperCase()}\n`;
        markdownContent += `- **Dimensions**: ${imageInfo.width} × ${imageInfo.height} pixels\n`;
        if (imageInfo.size) {
          markdownContent += `- **File Size**: ${(imageInfo.size / 1024).toFixed(1)} KB\n`;
        }
        markdownContent += `- **Processing Method**: ${processingInfo.method}\n`;
        if (processingInfo.model) {
          markdownContent += `- **AI Model**: ${processingInfo.model}\n`;
        }
        markdownContent += `- **Confidence**: ${processingInfo.confidence}\n`;
        markdownContent += '\n';
      }

      // Add extracted text content
      if (extractedText && extractedText.trim().length > 0) {
        markdownContent += `## Extracted Content\n\n`;
        markdownContent += extractedText;
        markdownContent += '\n\n';
      } else {
        markdownContent += `## Extracted Content\n\n`;
        markdownContent += `*No readable content was found in this image.*\n\n`;
      }

      // Add source information
      markdownContent += `---\n\n`;
      markdownContent += `*Source: ${path.basename(filePath)}*\n`;
      markdownContent += `*Processed with: ${processingInfo.method}*\n`;
      if (anonymize) {
        markdownContent += `*Content has been anonymized for privacy.*\n`;
      }

      // Add YAML frontmatter
      const frontmatterTags = [
        contentType,
        `${processingMode}-processed`,
        'azure-ai-foundry',
        ...(anonymize ? ['anonymized'] : []),
        ...tags
      ];

      const frontmatterResult = await this.addYAMLFrontmatter({
        content: markdownContent,
        title: title || `${processingInfo.method} Content from ${path.basename(filePath)}`,
        contentType: contentType,
        tags: frontmatterTags
      });

      const finalMarkdown = JSON.parse(frontmatterResult.content[0].text).markdownWithFrontmatter;

      // Save to file if output path provided
      let savedPath = null;
      if (outputPath) {
        await fs.writeFile(outputPath, finalMarkdown, 'utf8');
        savedPath = outputPath;
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              inputFile: filePath,
              outputFile: savedPath,
              contentType: contentType,
              processingMethod: processingInfo.method,
              confidence: processingInfo.confidence,
              textLength: extractedText?.length || 0,
              anonymized: anonymize,
              imageInfo: imageInfo,
              markdownPreview: finalMarkdown.substring(0, 500) + (finalMarkdown.length > 500 ? '...' : ''),
              fileSize: finalMarkdown.length
            }, null, 2)
          }
        ]
      };

    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: false,
              error: error.message,
              details: 'Image processing failed'
            }, null, 2)
          }
        ]
      };
    }
  }

  async processImageWithOCR(filePath, language) {
    const worker = await createWorker();
    
    try {
      await worker.loadLanguage(language);
      await worker.initialize(language);
      
      // Configure OCR parameters for better accuracy
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,!?@#$%^&*()_+-=[]{}|;:,.<>?',
        tessedit_pageseg_mode: '1', // Automatic page segmentation with OSD
        preserve_interword_spaces: '1'
      });

      const { data: { text, confidence } } = await worker.recognize(filePath);

      // Clean up the extracted text
      const cleanedText = text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n\n');

      return { text: cleanedText, confidence };

    } finally {
      await worker.terminate();
    }
  }

  async processImageWithAzureAI(filePath, prompt) {
    // Check for Azure AI Foundry configuration
    const endpoint = process.env.AZURE_AI_FOUNDRY_ENDPOINT;
    const apiKey = process.env.AZURE_AI_FOUNDRY_KEY || process.env.AZURE_AI_FOUNDRY_API_KEY; // Support both naming conventions
    const modelName = process.env.AZURE_AI_FOUNDRY_MODEL_NAME || 'gpt-4-vision';

    if (!endpoint || !apiKey) {
      throw new Error('Azure AI Foundry configuration missing. Please set AZURE_AI_FOUNDRY_ENDPOINT and AZURE_AI_FOUNDRY_KEY environment variables.');
    }

    try {
      // Read and encode image as base64
      const imageBuffer = await fs.readFile(filePath);
      const base64Image = imageBuffer.toString('base64');
      const mimeType = this.getMimeType(path.extname(filePath).toLowerCase());

      // Create Azure AI client
      const client = ModelClient(endpoint, new AzureKeyCredential(apiKey));

      // Prepare the request
      const response = await client.path("/chat/completions").post({
        body: {
          model: modelName,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: prompt
                },
                {
                  type: "image_url",
                  image_url: {
                    url: `data:${mimeType};base64,${base64Image}`
                  }
                }
              ]
            }
          ],
          max_tokens: 2000,
          temperature: 0.1
        }
      });

      if (response.status !== "200") {
        throw new Error(`Azure AI Foundry API error: ${response.status} ${response.body?.error?.message || 'Unknown error'}`);
      }

      const result = response.body;
      const content = result.choices[0]?.message?.content || '';

      return {
        content: content,
        model: modelName,
        confidence: 'AI-generated'
      };

    } catch (error) {
      console.error('Azure AI Foundry processing failed:', error);
      throw new Error(`Azure AI Foundry processing failed: ${error.message}`);
    }
  }

  getMimeType(extension) {
    const mimeTypes = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.bmp': 'image/bmp',
      '.tiff': 'image/tiff',
      '.webp': 'image/webp'
    };
    return mimeTypes[extension] || 'image/jpeg';
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Prep for Research Analysis MCP Server started');
  }
}

// Start the server
const server = new PrepForResearchAnalysisMCPServer();
server.start().catch(console.error);
