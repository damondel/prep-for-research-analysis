# Deployment Guide

## Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
npm install
npm start
```

The server will start and listen for MCP connections.

## Production Deployment

### Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t azure-ai-foundry-mcp .
docker run -p 3000:3000 azure-ai-foundry-mcp
```

### Azure Container Apps

1. **Create container app**:
```bash
az containerapp create \
  --name azure-ai-foundry-mcp \
  --resource-group myResourceGroup \
  --environment myEnvironment \
  --image myregistry.azurecr.io/azure-ai-foundry-mcp:latest \
  --target-port 3000 \
  --ingress external
```

2. **Configure environment variables** (if needed):
```bash
az containerapp update \
  --name azure-ai-foundry-mcp \
  --resource-group myResourceGroup \
  --set-env-vars KEY1=value1 KEY2=value2
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Optional: GitHub token for enhanced features
GITHUB_TOKEN=your_github_token_here

# Optional: Brave Search API for future features  
BRAVE_API_KEY=your_brave_api_key_here
```

## Integration with Azure AI Foundry

### Setup Steps

1. **Deploy the MCP server** using one of the methods above
2. **Configure Azure AI Foundry** to connect to your MCP server
3. **Test the connection** using the provided examples

### Configuration

In Azure AI Foundry, configure the MCP connection:
```json
{
  "name": "Azure AI Foundry MCP Server",
  "type": "mcp",
  "endpoint": "https://your-server-url.com",
  "tools": [
    "convert_vtt_to_md",
    "anonymize_content", 
    "add_yaml_frontmatter",
    "process_file_for_azure"
  ]
}
```

## Monitoring and Logging

### Health Check
The server exposes basic health information. Monitor for:
- Connection status
- Processing errors
- Memory usage
- Response times

### Logging
Configure logging level via environment variable:
```bash
LOG_LEVEL=info  # debug, info, warn, error
```

## Scaling Considerations

### Horizontal Scaling
- The server is stateless and can be horizontally scaled
- Use load balancers for multiple instances
- Consider file storage for shared access

### Performance Tuning
- Adjust memory limits for large file processing
- Configure timeouts for long-running operations
- Use CDN for static assets if serving files

## Security

### Best Practices
- Use HTTPS in production
- Implement authentication if needed
- Validate all input files
- Sanitize file paths
- Set appropriate CORS policies

### Network Security
- Use private networks where possible
- Implement rate limiting
- Monitor for suspicious activity
- Regular security updates

## Backup and Recovery

### Data Backup
- Backup processed files if persistence is needed
- Export configuration and environment variables
- Document deployment procedures

### Disaster Recovery
- Use Infrastructure as Code (IaC) for reproducible deployments
- Implement automated backups
- Test recovery procedures regularly
