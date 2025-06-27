# API Documentation

## Azure AI Foundry MCP Server API

This document describes the available tools and their parameters for the Azure AI Foundry MCP server.

## Available Tools

### 1. convert_vtt_to_md

Convert VTT (WebVTT) subtitle files to Markdown format with speaker anonymization.

**Parameters:**
- `file_path` (string, required): Path to the VTT file
- `anonymize_speakers` (boolean, optional): Whether to anonymize speaker names (default: true)

**Returns:**
- Markdown-formatted text with speaker anonymization

**Example:**
```javascript
{
  "name": "convert_vtt_to_md",
  "arguments": {
    "file_path": "examples/research-meeting.vtt",
    "anonymize_speakers": true
  }
}
```

### 2. anonymize_content

Remove or anonymize sensitive information from text content.

**Parameters:**
- `content` (string, required): Text content to anonymize
- `types` (array, optional): Types of data to anonymize (default: ["email", "phone", "speaker"])

**Returns:**
- Anonymized text content

**Anonymization Rules:**
- **Emails**: `user@domain.com` → `[EMAIL_REDACTED]`
- **Phone Numbers**: `(555) 123-4567` → `[PHONE_REDACTED]`
- **Speaker Names**: `Dr. Jennifer Adams` → `(JA)`

**Example:**
```javascript
{
  "name": "anonymize_content",
  "arguments": {
    "content": "Contact me at john@example.com or call (555) 123-4567",
    "types": ["email", "phone"]
  }
}
```

### 3. add_yaml_frontmatter

Add YAML frontmatter to content for Azure AI Foundry compatibility.

**Parameters:**
- `content` (string, required): Content to add frontmatter to
- `title` (string, optional): Document title
- `content_type` (string, optional): Type of content (default: "transcript")
- `tags` (array, optional): Tags for categorization

**Returns:**
- Content with YAML frontmatter prepended

**Generated Frontmatter:**
```yaml
---
title: Document Title
created: '2025-06-26T12:00:00.000Z'
content_type: transcript
tags: ['meeting', 'anonymized', 'azure-ai-foundry']
azure_ai_foundry:
  ready: true
  format_version: '1.0'
---
```

**Example:**
```javascript
{
  "name": "add_yaml_frontmatter",
  "arguments": {
    "content": "# Meeting Notes\n\nContent here...",
    "title": "Weekly Team Meeting",
    "content_type": "meeting_notes",
    "tags": ["weekly", "team", "notes"]
  }
}
```

### 4. process_file_for_azure (Recommended)

Complete end-to-end processing pipeline that combines all tools.

**Parameters:**
- `file_path` (string, required): Path to the input file
- `output_path` (string, optional): Path for output file (auto-generated if not provided)
- `title` (string, optional): Document title
- `anonymize` (boolean, optional): Whether to anonymize content (default: true)

**Returns:**
- Complete processed content with frontmatter
- Also saves to output file if `output_path` specified

**Processing Steps:**
1. Convert VTT to Markdown
2. Anonymize sensitive content
3. Add YAML frontmatter
4. Save to output file (if specified)

**Example:**
```javascript
{
  "name": "process_file_for_azure",
  "arguments": {
    "file_path": "examples/research-meeting.vtt",
    "output_path": "output/processed-meeting.md",
    "title": "Research Team Meeting",
    "anonymize": true
  }
}
```

## Error Handling

All tools return error information in case of failure:

```javascript
{
  "content": [
    {
      "type": "text",
      "text": "Error: File not found at path: invalid-file.vtt"
    }
  ]
}
```

Common error scenarios:
- File not found
- Invalid file format
- Permission denied
- Invalid parameters

## File Format Support

### Current Support
- **VTT**: WebVTT subtitle files with speaker identification

### Planned Support
- **PNG/Images**: OCR processing with Tesseract.js
- **PDF**: Text extraction and processing
- **SRT**: SubRip subtitle format
- **TXT**: Plain text processing

## Integration with Azure AI Foundry

The generated markdown files are optimized for Azure AI Foundry consumption:

- **YAML Frontmatter**: Contains metadata for AI agent processing
- **Speaker Keys**: Clear mapping of anonymized speakers
- **Structured Content**: Consistent formatting for AI parsing
- **Ready Flag**: Indicates content is processed and ready
- **Format Version**: Ensures compatibility tracking
