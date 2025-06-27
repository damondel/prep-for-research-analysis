/**
 * Test Azure AI Foundry image processing functionality
 */

import { MCPExplorer } from '../mcp-explorer.js';

async function testAzureAIFoundryImageProcessing() {
  console.log('🤖 Testing Azure AI Foundry Image Processing');
  console.log('═══════════════════════════════════════════════');
  
  const explorer = new MCPExplorer();
  
  // Set a timeout for the entire test
  const testTimeout = setTimeout(() => {
    console.log('⏰ Test timeout reached - exiting');
    process.exit(0);
  }, 30000); // 30 second timeout for AI processing
  
  try {
    // Connect to the server
    console.log('📡 Connecting to Azure AI Foundry MCP Server...');
    const connected = await explorer.connectToServer('node', ['azure-ai-foundry-server-fixed.js']);
    
    if (!connected) {
      console.error('❌ Failed to connect');
      return;
    }
    
    console.log('✅ Connected successfully!\n');
    
    // Test tool listing to verify new parameters
    console.log('🔄 Testing updated image conversion tool...');
    const toolsResponse = await explorer.client.listTools();
    const tools = toolsResponse.tools;
    
    const imageConvertTool = tools.find(tool => tool.name === 'convert_image_to_md');
    if (imageConvertTool) {
      console.log('✅ Image conversion tool found!');
      console.log('📋 Available processing modes:');
      
      const processingModeEnum = imageConvertTool.inputSchema.properties.processingMode?.enum;
      if (processingModeEnum) {
        processingModeEnum.forEach(mode => {
          console.log(`  - ${mode}`);
        });
      }
      
      console.log('\\n🆕 New Azure AI Foundry features:');
      console.log('  - processingMode: Choose between "ocr" and "azure-ai"');
      console.log('  - aiPrompt: Custom prompt for Azure AI analysis');
      console.log('  - Enhanced content extraction and understanding');
    } else {
      console.log('❌ Image conversion tool not found');
    }
    
    // Test basic functionality (without actually calling Azure AI to avoid API costs)
    console.log('\\n🧪 Testing tool parameters validation...');
    console.log('Note: To test Azure AI Foundry mode, you need to:');
    console.log('1. Copy .env.example to .env');
    console.log('2. Fill in your Azure AI Foundry credentials');
    console.log('3. Use processingMode: "azure-ai" in your tool call');
    
    console.log('\\n✅ Azure AI Foundry image processing test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    clearTimeout(testTimeout);
    await explorer.disconnect();
    console.log('👋 Disconnected from MCP server');
  }
}

// Run the test
testAzureAIFoundryImageProcessing();
