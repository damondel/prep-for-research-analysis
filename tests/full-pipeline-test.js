/**
 * Full Pipeline Test for Azure AI Foundry MCP Server
 */

import { MCPExplorer } from '../mcp-explorer.js';

async function fullPipelineTest() {
  console.log('🎯 Azure AI Foundry MCP Server - Full Pipeline Test');
  console.log('══════════════════════════════════════════════════════');
  
  const explorer = new MCPExplorer();
  
  try {
    // Connect to the server
    console.log('📡 Connecting to Azure AI Foundry MCP Server...');
    const connected = await explorer.connectToServer('node', ['azure-ai-foundry-server-fixed.js']);
    
    if (!connected) {
      console.error('❌ Failed to connect');
      return;
    }
    
    console.log('✅ Connected successfully!\n');
    
    // Test the complete pipeline
    console.log('🔄 Testing complete file processing pipeline...');
    await explorer.callTool('process_file_for_azure', {
      inputPath: 'examples/sample-presentation.vtt',
      outputPath: 'processed-presentation.md',
      anonymize: true,
      title: 'Azure AI Foundry Presentation',
      tags: ['azure', 'ai', 'foundry', 'presentation', 'mcp']
    });
    
    console.log('\n✅ Pipeline completed successfully!');
    console.log('📄 Check the output file: processed-presentation.md');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await explorer.disconnect();
  }
}

fullPipelineTest().catch(console.error);
