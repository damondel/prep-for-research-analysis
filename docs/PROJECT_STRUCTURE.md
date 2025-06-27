# Project Structure

This document provides an overview of the project structure and organization.

## Root Directory

```
mcp-explore/
├── .env.example              # Environment variables template
├── .github/                  # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml           # CI/CD pipeline
├── .gitignore               # Git ignore patterns
├── CHANGELOG.md             # Version history and changes
├── CONTRIBUTING.md          # Contribution guidelines
├── LICENSE                  # MIT License
├── README.md                # Main project documentation
├── package.json             # Project configuration and dependencies
├── azure-ai-foundry-server-fixed.js  # Main MCP server
├── mcp-explorer.js          # MCP client for testing
├── docs/                    # Additional documentation
│   ├── API.md               # API documentation
│   └── DEPLOYMENT.md        # Deployment guide
├── examples/                # Sample files and outputs
│   ├── research-meeting.vtt     # Complex VTT example
│   ├── sample-presentation.vtt  # Simple VTT example
│   ├── anonymized-research-meeting.md   # Sample output
│   └── processed-presentation.md        # Sample output
├── tests/                   # Test scripts
│   ├── test-azure-ai-server.js         # Basic server tests
│   ├── test-enhanced-vtt.js            # Enhanced VTT processing tests
│   └── full-pipeline-test.js           # Complete pipeline tests
└── archived/                # Legacy/demo files (not in active use)
    ├── basic-test.js
    ├── build-your-own.js
    ├── concepts-demo.js
    ├── copilot-mcp-server.js
    ├── direct-test.js
    └── explore.js
```

## Key Files

### Core Application
- **`azure-ai-foundry-server-fixed.js`**: The main MCP server implementation
- **`mcp-explorer.js`**: MCP client for testing and interaction
- **`package.json`**: Project configuration, dependencies, and scripts

### Documentation
- **`README.md`**: Main documentation with usage examples
- **`docs/API.md`**: Detailed API documentation for all tools
- **`docs/DEPLOYMENT.md`**: Production deployment guide
- **`CONTRIBUTING.md`**: Guidelines for contributors
- **`CHANGELOG.md`**: Version history and change tracking

### Configuration
- **`.env.example`**: Template for environment variables
- **`.gitignore`**: Git ignore patterns for clean repository
- **`LICENSE`**: MIT license for the project

### Testing
- **`tests/`**: All test scripts with comprehensive coverage
- **`examples/`**: Sample input and output files for demonstration

### CI/CD
- **`.github/workflows/ci.yml`**: GitHub Actions pipeline for testing

## Organization Principles

1. **Separation of Concerns**: Core logic, tests, examples, and documentation are clearly separated
2. **Clean Repository**: All temporary and development files are properly ignored or archived
3. **Production Ready**: Includes deployment guides, CI/CD, and proper licensing
4. **Developer Friendly**: Clear structure with helpful scripts and comprehensive documentation
5. **Extensible**: Easy to add new features following established patterns

## Scripts Available

- `npm start` - Start the MCP server
- `npm test` - Run enhanced VTT tests
- `npm run test:all` - Run all test suites
- `npm run test:basic` - Basic functionality tests
- `npm run test:pipeline` - Full pipeline tests
- `npm run test:enhanced` - Enhanced VTT processing tests
- `npm run client` - Start the MCP client explorer
- `npm run dev` - Start server with debugging

## Ready for Sharing

This project structure is optimized for:
- **Open Source Distribution**: Proper license, contributing guidelines, clean repository
- **Professional Development**: CI/CD pipeline, comprehensive testing, documentation
- **Easy Onboarding**: Clear structure, examples, and setup instructions
- **Future Development**: Extensible architecture with proper separation of concerns
