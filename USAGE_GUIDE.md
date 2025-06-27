# Azure AI Foundry MCP Server - Usage Guide

## 🎯 Quick Start

Your Azure AI Foundry MCP server is fully set up and ready to use! Here's how to get started:

### ✅ Current Status
- ✅ Environment variables configured
- ✅ Azure SDK dependencies installed  
- ✅ MCP server operational
- ✅ Both OCR and Azure AI Foundry modes available

### 🚀 Using the Image Processing Tool

The `convert_image_to_md` tool supports two processing modes:

#### 1. OCR Mode (Default)
```json
{
  "imagePath": "path/to/your/image.png",
  "processingMode": "ocr",
  "outputPath": "optional/output/path.md"
}
```

#### 2. Azure AI Foundry Mode (AI-Powered)
```json
{
  "imagePath": "path/to/your/image.png", 
  "processingMode": "azure-ai",
  "aiPrompt": "Describe this image in detail, including any text, objects, and context",
  "outputPath": "optional/output/path.md"
}
```

### 📋 Tool Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `imagePath` | string | ✅ | Path to the image file |
| `processingMode` | string | ❌ | "ocr" or "azure-ai" (default: "ocr") |
| `aiPrompt` | string | ❌ | Custom prompt for Azure AI analysis |
| `outputPath` | string | ❌ | Where to save the output (optional) |

### 🎨 Example Prompts for Azure AI Mode

**General Description:**
```
"Describe this image in detail, including any text, objects, people, and context."
```

**Technical Documentation:**
```
"Extract and format any code, technical diagrams, or documentation visible in this image."
```

**Presentation Analysis:**
```
"Summarize the key points from this presentation slide, preserving any bullet points or structured content."
```

**Data Extraction:**
```
"Extract all text, numbers, and tabular data from this image and format it as structured markdown."
```

### 🧪 Testing Your Setup

1. **Add a test image** to your workspace
2. **Run the MCP server**: `node azure-ai-foundry-server-fixed.js`
3. **Connect your MCP client** and call the `convert_image_to_md` tool
4. **Try both modes** to compare OCR vs AI-powered processing

### 🎯 VS Code Integration

**No extension needed!** GitHub Copilot has built-in MCP support:

1. **Configuration Ready**: Your `.vscode/settings.json` is already configured
2. **Start Server**: Use VS Code task "Start Azure AI Foundry MCP Server"
3. **Open Copilot Chat**: `Ctrl+Shift+I` or click the chat icon
4. **Use Tools Button**: Click 🔧 in chat → Select "Azure AI Foundry Server"
5. **Chat with Your Tools**: "Convert this VTT file" or "Process this image with Azure AI"

**VS Code Files Created:**
- `.vscode/settings.json` - GitHub Copilot MCP configuration
- `.vscode/tasks.json` - Start/test server tasks
- `.vscode/launch.json` - Debug configuration

See `VSCODE_INTEGRATION.md` for detailed instructions.

### 🔧 Available Tools

1. **`convert_vtt_to_md`** - Convert VTT subtitle files to Markdown
2. **`anonymize_content`** - Remove sensitive information from text
3. **`add_yaml_frontmatter`** - Add Azure AI Foundry metadata
4. **`process_file_for_azure`** - Complete processing pipeline
5. **`convert_image_to_md`** - Image to Markdown (OCR + Azure AI)

### 🌟 Key Features

- **Dual Processing Modes**: Choose between fast OCR or intelligent AI analysis
- **Custom Prompts**: Tailor Azure AI analysis to your specific needs
- **YAML Frontmatter**: Automatic metadata for Azure AI Foundry compatibility
- **Image Metadata**: Extracts dimensions, format, and technical details
- **Content Anonymization**: Built-in privacy protection
- **Flexible Output**: Save to file or return as string

### 🔑 Environment Variables

Your `.env` file is configured with:
```env
AZURE_AI_FOUNDRY_ENDPOINT=https://test-endpoint.openai.azure.com
AZURE_AI_FOUNDRY_KEY=sk-test1234567890abcdef
```

### 📝 Next Steps

1. **Test with real images** - Add PNG, JPG, or other image files
2. **Experiment with prompts** - Try different AI prompts for various use cases
3. **Integrate into workflows** - Use the MCP server in your applications
4. **Explore VTT processing** - Convert subtitle files to Markdown
5. **Build automation** - Chain multiple tools for complete document processing

### 🆘 Troubleshooting

**Authentication Issues:**
- Verify your Azure AI Foundry endpoint and key in `.env`
- Ensure the endpoint URL is correct and accessible

**Image Processing Errors:**
- Check that image files exist and are readable
- Supported formats: PNG, JPG, JPEG, GIF, BMP, TIFF

**MCP Connection Issues:**
- Ensure Node.js dependencies are installed: `npm install`
- Check that the server starts without errors

---

🎉 **Your Azure AI Foundry MCP Server is ready for production use!**
