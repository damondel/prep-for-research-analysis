# Contributing to Azure AI Foundry MCP Server

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mcp-explore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

## Project Structure

```
├── azure-ai-foundry-server-fixed.js  # Main MCP server
├── mcp-explorer.js                    # MCP client for testing
├── examples/                          # Sample files and outputs
├── tests/                            # Test scripts
├── archived/                         # Legacy/demo files
└── docs/                            # Additional documentation
```

## Adding New Features

### Adding a New Tool

1. **Define the tool** in the `ListToolsRequestSchema` handler
2. **Implement the handler** in the `CallToolRequestSchema` handler
3. **Add the logic** as a new method in the server class
4. **Write tests** in the `tests/` directory
5. **Update documentation** in README.md

### Example: Adding a new file format

```javascript
// In setupHandlers()
case 'convert_pdf_to_md':
    return {
        content: [
            {
                type: 'text',
                text: await this.convertPdfToMarkdown(args.file_path, args.options)
            }
        ]
    };

// Add method
async convertPdfToMarkdown(filePath, options = {}) {
    // Implementation here
}
```

## Testing

- **Unit tests**: Test individual functions
- **Integration tests**: Test complete workflows
- **Example tests**: Verify examples work as documented

Run specific test suites:
```bash
npm run test:basic     # Basic functionality
npm run test:pipeline  # Full pipeline
npm run test:enhanced  # Enhanced features
```

## Code Style

- Use ES6+ features
- Async/await for asynchronous operations
- Clear variable and function names
- JSDoc comments for public methods
- Error handling with try/catch blocks

## Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Add** or update tests
5. **Update** documentation
6. **Commit** your changes (`git commit -m 'Add amazing feature'`)
7. **Push** to the branch (`git push origin feature/amazing-feature`)
8. **Open** a Pull Request

## Commit Messages

Use clear, descriptive commit messages:
- `feat: add PDF to Markdown conversion`
- `fix: resolve speaker anonymization bug`
- `docs: update API documentation`
- `test: add integration tests for new features`

## Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Sample input files (if applicable)
- System information (OS, Node.js version)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (ISC).
