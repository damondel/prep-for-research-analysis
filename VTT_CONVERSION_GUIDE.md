# VTT to Markdown Converter - Quick Start Guide

This tool allows you to easily convert raw VTT (subtitle) files to Markdown with YAML frontmatter, perfect for use in the Agent Playground and GitHub Copilot MCP integration.

## Quick Usage

### Method 1: Convert VTT file directly

```text
@prep-for-research-analysis Convert this VTT file to markdown: [path/to/your/file.vtt]
```

### Method 2: Full pipeline with Azure AI frontmatter

```text
@prep-for-research-analysis Process this VTT file for Azure AI: [path/to/your/file.vtt] with title "Your Title Here"
```

## Examples

### Basic Conversion

- **Input**: Raw VTT file with complex timestamps, UUID cue IDs, overlapping segments
- **Output**: Clean Markdown with anonymized speakers

### Advanced Conversion with Azure AI Frontmatter

- **Input**: Same VTT file
- **Output**: Markdown with full YAML frontmatter ready for Agent Playground

## What the Tool Handles

✅ **Large Files**: Successfully processes 6000+ line VTT files  
✅ **Complex Structure**: UUID cue IDs, overlapping timestamps, multi-line segments  
✅ **Speaker Recognition**: Extracts and anonymizes speaker names  
✅ **Real-world Transcripts**: Handles messy, raw transcription data  
✅ **Azure AI Ready**: Adds proper YAML frontmatter for Agent Playground  

## Sample Input (VTT format)

```vtt
WEBVTT

8292d02e-6e6e-4b02-80d5-69c8b6903ff0/803-0
00:07:10.709 --> 00:07:15.070
<v David Mondello>I I know that you feel that a Screener,
but I'm wondering if you could tell me a</v>

8292d02e-6e6e-4b02-80d5-69c8b6903ff0/803-1
00:07:15.070 --> 00:07:17.709
<v David Mondello>little bit about maybe you know where
your work,</v>
```

## Sample Output (Markdown with YAML)

```markdown
---
title: Complete Azure Arc Interview - Shutterfly IT Discussion
created: '2025-06-27T18:39:22.534Z'
content_type: transcript
tags:
  - transcript
  - interview
  - azure-arc
azure_ai_foundry:
  ready: true
  format_version: '1.0'
---

# Transcript

## Speaker Key

- (DM): [Speaker anonymized]
- (CS): [Speaker anonymized]

---

**(DM):** I I know that you feel that a Screener, but I'm wondering if you could tell me a

**(DM):** little bit about maybe you know where your work,
```

## Tips for Best Results

1. **Save your VTT file** to any location on your system
2. **Use the full path** when referencing the file
3. **Add meaningful tags** for better organization in Agent Playground
4. **Choose descriptive titles** to help with future searches

## Workflow

1. **Copy** your raw VTT transcript to a `.vtt` file
2. **Run** the MCP tool conversion command
3. **Use** the generated Markdown file in Agent Playground or GitHub Copilot
4. **Benefit** from anonymized, well-formatted transcripts ready for AI analysis

The tool is production-ready and handles the exact type of complex, large VTT files you work with most!
