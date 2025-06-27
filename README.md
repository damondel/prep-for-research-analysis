# Prep for Research Analysis MCP Server

> A specialized Model Context Protocol (MCP) server for converting transcripts and documents to clean Markdown format for research analysis workflows.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io/)

## 🎯 Purpose

Transform raw transcripts, documents, and images into clean, anonymized Markdown perfect for research analysis. Designed specifically for researchers, analysts, and anyone working with interview data, meeting transcripts, or document conversion workflows.

## ✨ Key Features

- **🎙️ VTT Transcript Conversion**: Convert subtitle files with intelligent speaker identification
- **🔒 Privacy Protection**: Automatic speaker anonymization (e.g., "Jennifer Adams" → "(JA)")
- **📊 Research-Ready Output**: YAML frontmatter for AI analysis tools and Agent Playground
- **🖼️ Image Processing**: Extract content from screenshots and documents using OCR
- **📝 Content Sanitization**: Remove emails, phone numbers, and sensitive data
- **⚡ Production-Ready**: Handles large files (6000+ lines tested) efficiently

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/your-username/prep-for-research-analysis.git
cd prep-for-research-analysis
npm install
```

### Configuration

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. (Optional) Add Azure AI credentials for advanced image processing:
   ```env
   AZURE_AI_FOUNDRY_ENDPOINT=your-endpoint-here
   AZURE_AI_FOUNDRY_KEY=your-key-here
   ```

### Start the Server

```bash
npm start
```

## 💬 GitHub Copilot Integration

### Setup

Add to your VS Code `settings.json`:

```json
{
  "github.copilot.chat.mcp.servers": {
    "prep-for-research-analysis": {
      "name": "Prep for Research Analysis",
      "command": "node",
      "args": ["prep-for-research-analysis-server.js"],
      "cwd": "/path/to/your/project"
    }
  }
}
```

### Usage Examples

```text
@prep-for-research-analysis convert_vtt_to_md filePath="interview.vtt" anonymizeSpeakers=true

@prep-for-research-analysis process_file_for_azure inputPath="meeting.vtt" title="Strategy Meeting" tags=["strategy", "planning"]

@prep-for-research-analysis convert_image_to_md filePath="diagram.png" title="System Architecture"
```

## 📊 Sample Output

### Input (VTT)
```vtt
WEBVTT

00:07:10.709 --> 00:07:15.070
<v Jennifer Adams>I think we need to focus on user experience first.</v>

00:07:15.070 --> 00:07:17.709
<v Mike Johnson>Absolutely, that's our top priority.</v>
```

### Output (Markdown)
```markdown
---
title: Strategy Meeting
created: '2025-06-27T18:45:00.000Z'
content_type: transcript
tags:
  - strategy
  - planning
azure_ai_foundry:
  ready: true
  format_version: '1.0'
---

# Transcript

## Speaker Key
- (JA): [Speaker anonymized]
- (MJ): [Speaker anonymized]

---

**(JA):** I think we need to focus on user experience first.

**(MJ):** Absolutely, that's our top priority.
```

## 🛠️ Available Tools

| Tool | Description | Use Case |
|------|-------------|----------|
| `convert_vtt_to_md` | Convert VTT files to Markdown | Basic transcript conversion |
| `process_file_for_azure` | Full pipeline with YAML frontmatter | Research analysis preparation |
| `convert_image_to_md` | Extract text from images | Document digitization |
| `anonymize_content` | Remove sensitive information | Privacy protection |
| `add_yaml_frontmatter` | Add metadata headers | AI tool compatibility |

## 📁 Project Structure

```
prep-for-research-analysis/
├── prep-for-research-analysis-server.js  # Main MCP server
├── package.json                          # Dependencies
├── .env.example                         # Environment template
├── tests/
│   └── sample-files/                    # Test data
├── docs/                                # Documentation
└── .vscode/                            # VS Code integration
```

## 🧪 Testing

```bash
# Run all tests
npm run test:all

# Test basic functionality
npm run test:basic

# Test VTT conversion
npm test
```

## 📖 Documentation

- **[VTT Conversion Guide](VTT_CONVERSION_GUIDE.md)** - Step-by-step conversion instructions
- **[VS Code Integration](VSCODE_INTEGRATION.md)** - Setup guide for VS Code
- **[GitHub Copilot Integration](GITHUB_COPILOT_INTEGRATION.md)** - Copilot configuration
- **[Usage Guide](USAGE_GUIDE.md)** - Comprehensive usage documentation

## ⚙️ Advanced Configuration

### Large File Processing
The server efficiently handles large transcripts (6000+ lines tested). For extremely large files, the parser uses streaming techniques to maintain performance.

### Custom Anonymization
Speaker anonymization can be customized by modifying the `extractSpeakerInfo` function in the main server file.

### Azure AI Integration
For advanced image processing, configure Azure AI Foundry credentials in your `.env` file.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**
- Check Node.js version (18+ required)
- Verify all dependencies are installed (`npm install`)

**Large files timing out:**
- Increase timeout in your MCP client
- Consider processing in chunks for extremely large files

**Image processing fails:**
- Ensure Tesseract.js dependencies are installed
- Check Azure AI credentials if using advanced mode

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on the [Model Context Protocol](https://modelcontextprotocol.io/)
- Uses [Tesseract.js](https://tesseract.projectnaptha.com/) for OCR processing
- Inspired by the need for clean, research-ready transcript conversion

---

**Ready to convert your transcripts?** Start with the [VTT Conversion Guide](VTT_CONVERSION_GUIDE.md)!

## Project Structure

```
mcp-explore/
├── azure-ai-foundry-server-fixed.js  # Main MCP server
├── mcp-explorer.js                    # MCP client utility
├── package.json                       # Node.js dependencies
├── .env                               # Environment variables (your credentials)
├── .env.example                       # Environment template
├── README.md                          # This file
├── USAGE_GUIDE.md                     # Comprehensive usage guide
├── CHANGELOG.md                       # Version history
├── CONTRIBUTING.md                    # Contribution guidelines
├── LICENSE                            # MIT license
├── examples/                          # Sample files for testing
│   ├── sample-presentation.vtt        # Sample VTT file
│   ├── research-meeting.vtt           # Another VTT example
│   └── *.md                          # Generated outputs
├── tests/                             # Test suite
│   ├── quick-validation.js            # Quick server validation
│   ├── full-pipeline-test.js          # Complete workflow test
│   ├── test-azure-ai-foundry.js       # Azure AI specific tests
│   └── test-enhanced-vtt.js           # VTT processing tests
├── docs/                              # Additional documentation
└── .github/                           # GitHub workflows
```

## Installation

```bash
npm install
```

## Usage

### Start the MCP Server
```bash
npm start
# or
npm run server
```

### Run Tests
```bash
# Run all enhanced tests
npm test

# Run specific tests
npm run test:basic     # Basic functionality
npm run test:pipeline  # Full pipeline test
npm run test:enhanced  # Enhanced VTT processing
```

## Available Tools

1. **convert_vtt_to_md** - Convert VTT files to Markdown with speaker anonymization
2. **convert_image_to_md** - Convert images to Markdown using OCR or Azure AI Foundry
3. **anonymize_content** - Remove sensitive information from text
4. **add_yaml_frontmatter** - Add Azure AI Foundry metadata
5. **process_file_for_azure** - Complete pipeline (recommended)

## Example Usage

### Input VTT Format
```vtt
WEBVTT

3e2f4a5b-9d8c-5f3e-b2c3-4d5e6f708901/10-0
00:00:01.000 --> 00:00:06.000
<v Dr. Jennifer Adams (She/Her)>Good afternoon everyone.</v>
```

### Output Markdown
```markdown
---
title: Meeting Transcript
created: '2025-06-27T00:00:00.000Z'
content_type: transcript
tags: ['meeting', 'anonymized', 'azure-ai-foundry']
azure_ai_foundry:
  ready: true
  format_version: '1.0'
---

# Transcript

## Speaker Key
- (JA): [Speaker anonymized]

---

**(JA):** Good afternoon everyone.
```

## Directory Structure

```
├── azure-ai-foundry-server-fixed.js  # Main MCP server
├── mcp-explorer.js                    # MCP client
├── package.json                       # Project configuration
├── README.md                          # This file
├── examples/                          # Sample files and outputs
│   ├── research-meeting.vtt          # Sample complex VTT
│   ├── sample-presentation.vtt       # Sample simple VTT
│   ├── anonymized-research-meeting.md # Sample output
│   └── processed-presentation.md     # Sample output
└── tests/                            # Test scripts
    ├── test-azure-ai-server.js       # Basic tests
    ├── test-enhanced-vtt.js          # Enhanced VTT tests
    └── full-pipeline-test.js         # Complete pipeline tests
```

## Supported File Types

- **VTT**: WebVTT subtitle files with speaker identification
- **Images**: PNG, JPG, JPEG, GIF, BMP, TIFF, WEBP with OCR or AI processing
- **Future**: Additional formats as needed

## Processing Options

### Image Processing
- **OCR Mode** (default): Uses Tesseract.js for text extraction
- **Azure AI Foundry Mode**: Uses multimodal AI for enhanced content understanding

### Configuration

To use Azure AI Foundry mode:
1. Copy `.env.example` to `.env`
2. Add your Azure AI Foundry credentials:
   ```
   AZURE_AI_FOUNDRY_ENDPOINT=https://your-resource.openai.azure.com/
   AZURE_AI_FOUNDRY_API_KEY=your_api_key_here
   AZURE_AI_FOUNDRY_MODEL_NAME=gpt-4-vision
   ```
3. Use `processingMode: "azure-ai"` in your tool calls

## Azure AI Foundry Integration

The server generates markdown files with proper YAML frontmatter that Azure AI Foundry agents can consume directly:

- `title`: Document title
- `content_type`: Type of content (transcript, document, etc.)
- `tags`: Categorization tags
- `azure_ai_foundry.ready`: Indicates file is ready for AI consumption
- `azure_ai_foundry.format_version`: Format specification version

## Development

To extend functionality:

1. Add new tools to the `setupHandlers()` method
2. Implement tool logic as async methods
3. Update the tools list in `ListToolsRequestSchema` handler
4. Add tests in the `tests/` directory

## License

ISC
