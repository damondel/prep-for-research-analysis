# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-06-26

### Added

- Initial release of Azure AI Foundry MCP Server
- VTT to Markdown conversion with speaker anonymization
- Content anonymization for emails, phone numbers, and sensitive data
- YAML frontmatter generation for Azure AI Foundry compatibility
- Complete processing pipeline tool
- Comprehensive test suite
- Example files and documentation

### Features

- **convert_vtt_to_md**: Convert VTT files to Markdown with speaker anonymization
- **anonymize_content**: Remove sensitive information from text
- **add_yaml_frontmatter**: Add Azure AI Foundry metadata
- **process_file_for_azure**: Complete end-to-end processing pipeline

### Technical Details

- Built with @modelcontextprotocol/sdk
- Support for complex VTT files with speaker identification
- Configurable anonymization rules
- Clean project structure with examples and tests
