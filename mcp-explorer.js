/**
 * Simple MCP Client for testing MCP servers
 * This script helps you interact with MCP servers to understand how they work
 */

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { spawn } from 'child_process';

class MCPExplorer {
  constructor() {
    this.client = null;
    this.transport = null;
  }

  async connectToServer(serverCommand, serverArgs = []) {
    try {
      console.log(`🚀 Connecting to MCP server: ${serverCommand} ${serverArgs.join(' ')}`);
      
      // Let StdioClientTransport handle the spawning
      this.transport = new StdioClientTransport({
        command: serverCommand,
        args: serverArgs,
        env: process.env
      });

      this.client = new Client({
        name: 'mcp-explorer',
        version: '1.0.0',
      }, {
        capabilities: {}
      });

      // Connect to the server
      await this.client.connect(this.transport);
      console.log('✅ Connected to MCP server successfully!');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to connect to MCP server:', error);
      return false;
    }
  }

  async exploreServer() {
    if (!this.client) {
      console.error('❌ No client connected');
      return;
    }

    try {
      console.log('\n📋 Exploring server capabilities...\n');

      // List available tools
      const tools = await this.client.listTools();
      console.log('🛠️  Available Tools:');
      tools.tools.forEach(tool => {
        console.log(`  - ${tool.name}: ${tool.description}`);
      });

      // List available resources
      try {
        const resources = await this.client.listResources();
        console.log('\n📁 Available Resources:');
        resources.resources.forEach(resource => {
          console.log(`  - ${resource.uri}: ${resource.name || 'No name'}`);
        });
      } catch (e) {
        console.log('\n📁 No resources available or server doesn\'t support resources');
      }

      // List available prompts
      try {
        const prompts = await this.client.listPrompts();
        console.log('\n💬 Available Prompts:');
        prompts.prompts.forEach(prompt => {
          console.log(`  - ${prompt.name}: ${prompt.description || 'No description'}`);
        });
      } catch (e) {
        console.log('\n💬 No prompts available or server doesn\'t support prompts');
      }

      return { tools, resources: null, prompts: null };
    } catch (error) {
      console.error('❌ Error exploring server:', error);
    }
  }

  async callTool(toolName, args = {}) {
    if (!this.client) {
      console.error('❌ No client connected');
      return;
    }

    try {
      console.log(`\n🔧 Calling tool: ${toolName} with args:`, args);
      const result = await this.client.callTool({
        name: toolName,
        arguments: args
      });
      
      console.log('✅ Tool result:', JSON.stringify(result, null, 2));
      return result;
    } catch (error) {
      console.error('❌ Error calling tool:', error);
    }
  }

  async disconnect() {
    if (this.transport) {
      await this.transport.close();
      console.log('👋 Disconnected from MCP server');
    }
  }
}

export { MCPExplorer };
