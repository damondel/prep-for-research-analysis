# 🎯 GitHub Copilot Native MCP Integration - Quick Start

## ✅ You're Right - No Extension Needed!

GitHub Copilot has built-in MCP support. Your configuration is ready to go!

## 🚀 How to Use It

### Step 1: Start Your MCP Server
```bash
# Option 1: Using VS Code Task
Ctrl+Shift+P → "Run Task" → "Start Azure AI Foundry MCP Server"

# Option 2: Terminal Command
node azure-ai-foundry-server-fixed.js
```

### Step 2: Open GitHub Copilot Chat
- Press `Ctrl+Shift+I` 
- Or click the Copilot chat icon in VS Code

### Step 3: Access Your Tools
1. **Look for the Tools button** (🔧) in the chat interface
2. **Click it** to see available MCP servers
3. **Select "Azure AI Foundry Server"** from the list
4. **Your 5 tools will be available**:
   - `convert_vtt_to_md` - Convert VTT subtitle files
   - `convert_image_to_md` - Process images (OCR or Azure AI)
   - `anonymize_content` - Remove sensitive data
   - `add_yaml_frontmatter` - Add Azure AI metadata
   - `process_file_for_azure` - Complete processing pipeline

### Step 4: Chat with Your Tools
Try these example prompts:

**VTT Processing:**
```
"Convert the sample-presentation.vtt file in the examples folder to markdown with anonymization"
```

**Image Processing:**
```
"Process an image using Azure AI mode and describe what you see"
```

**Complete Pipeline:**
```
"Process the research-meeting.vtt file with full Azure AI Foundry formatting"
```

## 🔧 Configuration Details

Your `.vscode/settings.json` contains:
```json
{
  "github.copilot.chat.mcp.servers": {
    "azure-ai-foundry": {
      "name": "Azure AI Foundry Server",
      "command": "node",
      "args": ["azure-ai-foundry-server-fixed.js"],
      "cwd": "${workspaceFolder}",
      "env": {
        "AZURE_AI_FOUNDRY_ENDPOINT": "https://test-endpoint.openai.azure.com",
        "AZURE_AI_FOUNDRY_KEY": "sk-test1234567890abcdef"
      }
    }
  }
}
```

## ✅ Benefits of Native Integration

- ✅ **No extensions needed** - Uses GitHub Copilot's built-in MCP support
- ✅ **Seamless integration** - Tools appear directly in chat
- ✅ **Environment variables** - Your Azure credentials are automatically loaded
- ✅ **Workspace context** - Server runs in your project folder
- ✅ **Easy debugging** - Use VS Code's built-in debugging tools

## 🎉 Ready to Use!

Your Azure AI Foundry MCP server is now perfectly integrated with GitHub Copilot's native MCP support. Just start the server and start chatting with your tools!

---

**Pro Tip**: Keep the server running in the background while you work, and your tools will always be available in Copilot Chat! 🚀
