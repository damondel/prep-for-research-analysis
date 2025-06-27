/**
 * Test the image to markdown conversion functionality
 */

import { MCPExplorer } from '../mcp-explorer.js';
import fs from 'fs/promises';

async function testImageConversion() {
  console.log('🖼️  Testing Image to Markdown Conversion with OCR');
  console.log('═══════════════════════════════════════════════════');
  
  const explorer = new MCPExplorer();
  
  try {
    // Connect to the server
    console.log('📡 Connecting to Azure AI Foundry MCP Server...');
    const connected = await explorer.connectToServer('node', ['../azure-ai-foundry-server-fixed.js']);
    
    if (!connected) {
      console.error('❌ Failed to connect');
      return;
    }
    
    console.log('✅ Connected successfully!\n');
    
    // Check if we have any image files to test with
    const testImagePath = '../examples/test-screenshot.png';
    
    try {
      await fs.access(testImagePath);
      console.log('📸 Found test image, running OCR conversion...');
      
      // Test image conversion
      await explorer.callTool('convert_image_to_md', {
        filePath: testImagePath,
        outputPath: 'test-image-output.md',
        title: 'Test Screenshot OCR',
        contentType: 'screenshot',
        anonymize: true,
        tags: ['test', 'ocr', 'screenshot'],
        includeImageInfo: true
      });
      
    } catch (error) {
      console.log('ℹ️  No test image found, creating a simple test...');
      console.log('💡 To test with a real image, add a PNG/JPG file to examples/test-screenshot.png');
      
      // Test with non-existent file to verify error handling
      console.log('\n🔄 Testing error handling with non-existent file...');
      await explorer.callTool('convert_image_to_md', {
        filePath: 'non-existent-image.png',
        title: 'Test Error Handling'
      });
    }
    
    console.log('\n🔄 Testing complete pipeline with image (if available)...');
    try {
      await explorer.callTool('process_file_for_azure', {
        inputPath: testImagePath,
        outputPath: 'pipeline-image-output.md',
        anonymize: true,
        title: 'Pipeline Test - Screenshot',
        tags: ['pipeline', 'test', 'image', 'ocr']
      });
    } catch (error) {
      console.log('ℹ️  Pipeline test skipped - no test image available');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    console.log('\n👋 Disconnected from MCP server');
    await explorer.disconnect();
  }
}

testImageConversion().catch(console.error);
