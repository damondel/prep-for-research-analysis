/**
 * Test the enhanced VTT processing with speaker anonymization
 */

import { MCPExplorer } from '../mcp-explorer.js';

async function testEnhancedVTT() {
  console.log('🎯 Testing Enhanced VTT Processing with Speaker Anonymization');
  console.log('══════════════════════════════════════════════════════════════');
  
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
    
    // Test VTT conversion with speaker anonymization
    console.log('🔄 Testing VTT conversion with speaker anonymization...');
    await explorer.callTool('convert_vtt_to_md', {
      filePath: 'examples/research-meeting.vtt',
      includeTimestamps: true,
      anonymizeSpeakers: true
    });
    
    console.log('\n🔄 Testing complete pipeline with complex VTT...');
    await explorer.callTool('process_file_for_azure', {
      inputPath: 'examples/research-meeting.vtt',
      outputPath: 'anonymized-research-meeting.md',
      anonymize: true,
      title: 'Research Review Meeting Transcript',
      tags: ['research', 'meeting', 'anonymized', 'transcript']
    });
    
    console.log('\n✅ Enhanced VTT processing completed successfully!');
    console.log('📄 Check the output file: anonymized-research-meeting.md');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await explorer.disconnect();
  }
}

testEnhancedVTT().catch(console.error);
