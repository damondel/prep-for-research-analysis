# Adding Azure AI Foundry MCP Server to VS Code

## 🚀 GitHub Copilot Native Integration (Recommended)

**No extension needed!** GitHub Copilot has built-in MCP support. Just configure your server in VS Code settings.

### Step 1: Configure in VS Code Settings

Your `.vscode/settings.json` is already configured with:

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

### Step 2: Use with GitHub Copilot

1. **Open GitHub Copilot Chat** (`Ctrl+Shift+I` or click the chat icon)
2. **Click the "Tools" button** (🔧) in the chat interface
3. **Select your Azure AI Foundry server** from the available MCP servers
4. **Use your tools** directly in chat:
   - "Convert this VTT file to markdown"
   - "Process this image with Azure AI"
   - "Anonymize this content"

### Step 3: Test the Integration

1. **Start your server** using the VS Code task: `Ctrl+Shift+P` → "Run Task" → "Start Azure AI Foundry MCP Server"
2. **Open Copilot Chat** and look for the tools button
3. **Your server should appear** in the available MCP servers list
4. **Test a tool**: Try asking Copilot to convert a VTT file or process an image

## 🛠️ Alternative: Manual Task Usage

If you prefer to run commands directly, use the configured VS Code tasks:

### Step 1: Create VS Code Task

Create `.vscode/tasks.json` in your workspace:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Azure AI Foundry MCP Server",
      "type": "shell",
      "command": "node",
      "args": ["azure-ai-foundry-server-fixed.js"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      },
      "isBackground": true,
      "problemMatcher": [],
      "options": {
        "cwd": "${workspaceFolder}"
      }
    }
  ]
}
```

### Step 2: Create Launch Configuration

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Azure AI Foundry MCP Server",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/azure-ai-foundry-server-fixed.js",
      "console": "integratedTerminal",
      "env": {
        "AZURE_AI_FOUNDRY_ENDPOINT": "https://test-endpoint.openai.azure.com",
        "AZURE_AI_FOUNDRY_KEY": "sk-test1234567890abcdef"
      }
    }
  ]
}
```

## 🔧 Usage in VS Code

Once configured, you can:

1. **Start the server** using Command Palette or tasks
2. **Use with GitHub Copilot Chat** - Your tools will be available in chat
3. **Access tools directly** through the MCP extension interface
4. **Debug and monitor** server activity in VS Code

## 🎯 Available Tools in VS Code

Your Azure AI Foundry MCP server provides these tools:

- **`convert_vtt_to_md`** - Convert VTT subtitle files
- **`convert_image_to_md`** - Process images with OCR or Azure AI
- **`anonymize_content`** - Remove sensitive information
- **`add_yaml_frontmatter`** - Add Azure AI metadata
- **`process_file_for_azure`** - Complete processing pipeline

## ✅ Testing the Integration

1. **Start your server** using the VS Code task
2. **Open GitHub Copilot Chat** (if using Copilot MCP extension)
3. **Test a tool**: Try asking "Convert this VTT file to markdown" with a file
4. **Verify functionality**: Check that your Azure AI credentials work

## 🆘 Troubleshooting

**Server not starting:**
- Check that Node.js dependencies are installed: `npm install`
- Verify your `.env` file contains correct Azure credentials
- Check VS Code terminal for error messages

**Tools not appearing:**
- Restart VS Code after configuration changes
- Check MCP extension logs for connection issues
- Verify server is running and responding

**Authentication errors:**
- Double-check Azure AI Foundry endpoint and key
- Ensure credentials are properly set in environment variables

---

🎉 **Your Azure AI Foundry MCP server is now integrated with VS Code!**
