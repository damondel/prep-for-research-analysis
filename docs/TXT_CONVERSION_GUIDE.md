# TXT to Markdown Conversion Guide

The `convert_txt_to_md` tool transforms plain text files into structured Markdown with YAML frontmatter, perfect for research analysis and AI processing.

## Features

- **Automatic Anonymization**: Removes emails, phone numbers, SSNs, and credit card numbers
- **Smart Formatting**: Converts plain text to readable Markdown structure
- **YAML Frontmatter**: Adds Azure AI Foundry compatible metadata
- **Flexible Options**: Preserve original formatting or auto-format for readability

## Usage

### Basic Conversion

```bash
@prep-for-research-analysis convert_txt_to_md filePath="document.txt"
```

### With Custom Options

```bash
@prep-for-research-analysis convert_txt_to_md filePath="notes.txt" title="Meeting Notes" tags=["meeting", "Q1-2025"] anonymize=true preserveFormatting=false
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `filePath` | string | *required* | Path to the text file to convert |
| `outputPath` | string | *optional* | Path for output Markdown file |
| `anonymize` | boolean | `true` | Apply anonymization to sensitive data |
| `title` | string | *filename* | Document title for frontmatter |
| `contentType` | string | `"document"` | Content type classification |
| `tags` | array | `[]` | Tags for categorization |
| `preserveFormatting` | boolean | `false` | Keep original line breaks and spacing |
| `addYamlFrontmatter` | boolean | `true` | Include YAML frontmatter for AI tools |

## Examples

### Input Text File

```text
Meeting Notes - Q1 Planning Session

Attendees:
- John Smith (john.smith@company.com)
- Sarah Jones (555-123-4567)

AGENDA ITEMS:

1. Budget Review
   The Q1 budget shows strong performance in key areas.

2. Product Roadmap
   - Feature A launch scheduled for March
   - Feature B in development phase

Contact Information:
Support: help@company.com
Emergency: 1-800-555-0199
```

### Output Markdown

```markdown
---
title: Meeting Notes - Q1 Planning Session
created: '2025-06-30T10:30:00.000Z'
content_type: document
tags:
  - meeting
  - planning
  - Q1
azure_ai_foundry:
  ready: true
  format_version: '1.0'
---

# Meeting Notes - Q1 Planning Session

Attendees:

- John Smith ([EMAIL_REDACTED])
- Sarah Jones ([PHONE_REDACTED])

AGENDA ITEMS:

1. Budget Review

The Q1 budget shows strong performance in key areas.

2. Product Roadmap

- Feature A launch scheduled for March
- Feature B in development phase

Contact Information:

Support: [EMAIL_REDACTED]
Emergency: [PHONE_REDACTED]
```

## Anonymization Features

The tool automatically detects and anonymizes:

- **Email addresses**: `user@domain.com` → `[EMAIL_REDACTED]`
- **Phone numbers**: `(555) 123-4567` → `[PHONE_REDACTED]`
- **Social Security Numbers**: `123-45-6789` → `[SSN_REDACTED]`
- **Credit Card Numbers**: `1234 5678 9012 3456` → `[CARD_REDACTED]`

## Use Cases

- **Meeting Notes**: Convert recorded meeting transcripts to structured format
- **Research Documents**: Prepare raw text for AI analysis
- **Document Digitization**: Transform scanned text (via OCR) to markdown
- **Content Sanitization**: Remove sensitive information from shared documents
- **Knowledge Base**: Convert plain text documentation to structured format

## Integration with Other Tools

The txt conversion tool works seamlessly with other MCP tools:

1. **Anonymization Pipeline**: `convert_txt_to_md` → `anonymize_content` for extra privacy
2. **Azure AI Preparation**: Built-in YAML frontmatter for direct AI analysis
3. **Batch Processing**: Use with `process_file_for_azure` for complete workflows
