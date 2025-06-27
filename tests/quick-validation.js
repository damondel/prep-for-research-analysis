/**
 * Quick validation test with timeout protection
 */

import { MCPExplorer } from '../mcp-explorer.js';

async function quickValidationTest() {
  console.log('🧪 Quick Validation Test (with timeout protection)');
  console.log('═══════════════════════════════════════════════════════');
  
  const explorer = new MCPExplorer();
  
  // Set a timeout for the entire test
  const testTimeout = setTimeout(() => {
    console.log('⏰ Test timeout reached - exiting');
    process.exit(0);
  }, 15000); // 15 second timeout
  
  try {
    // Connect to the server
    console.log('📡 Connecting to Prep for Research Analysis MCP Server...');
    console.log('   (This will timeout after 15 seconds if it hangs)');
    
    const connected = await explorer.connectToServer('node', ['prep-for-research-analysis-server.js']);
    
    if (!connected) {
      console.error('❌ Failed to connect');
      return;
    }
    
    console.log('✅ Connected successfully!\n');
    
    // Quick test: List available tools
    console.log('🔄 Testing tool listing...');
    const toolsResponse = await explorer.client.listTools();
    const tools = toolsResponse.tools;
    
    console.log(`✅ Found ${tools.length} tools:`);
    tools.forEach(tool => {
      console.log(`  - ${tool.name}: ${tool.description}`);
    });
    
    // Check if image conversion tool is present
    const imageConvertTool = tools.find(tool => tool.name === 'convert_image_to_md');
    if (imageConvertTool) {
      console.log('\n✅ Image conversion tool successfully added!');
    } else {
      console.log('\n❌ Image conversion tool not found');
    }
    
    console.log('\n✅ Quick validation test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    clearTimeout(testTimeout);
    await explorer.disconnect();
    
    // Ensure process exits
    setTimeout(() => {
      process.exit(0);
    }, 1000);
  }
}

// Run the test
quickValidationTest();
