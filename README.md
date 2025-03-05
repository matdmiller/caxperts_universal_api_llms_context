# @caxperts/universal.api Context Generator

[![Update NPM Package](https://github.com/matdmiller/caxperts_universal_api_llms_context/actions/workflows/update-npm-package.yml/badge.svg)](https://github.com/matdmiller/caxperts_universal_api_llms_context/actions/workflows/update-npm-package.yml)

This repository automatically fetches and organizes the [@caxperts/universal.api](https://www.npmjs.com/package/@caxperts/universal.api) npm package files for use as context with Large Language Models (LLMs).

## Current Version

**Package Version:** 7.2.1

Last Updated: 2025-03-05

## Repository Structure

The files are organized into three main directories:

- **api/** - Contains API reference files (*.d.ts) and documentation
- **implementation/** - Contains implementation files (*.js)
- **not_needed/** - Contains files not needed for LLM context (*.d.ts.map)

Additionally, an [`api_merged.md`](api_merged.md) file is generated in the root directory, containing all API reference files concatenated with XML-like tags.

## Using with Your LLM

There are two main options for providing this API as context to your LLM:

1. **Simple approach**: Use the [`api_merged.md`](api_merged.md) file - a single document you can easily copy and paste into your LLM's context window.

2. **Advanced approach**: If you're using an LLM IDE or application that supports multiple files as context, include:
   - The entire [`api`](api) directory for comprehensive function documentation
   - Optionally, the [`implementation`](implementation) directory for access to the actual code implementation when more detailed understanding is needed

## Automation

This repository uses GitHub Actions to:

1. Automatically fetch the latest version of the package weekly
2. Sort the files into appropriate directories
3. Generate the merged API reference file
4. Update this README with the current version information

You can also manually trigger the update workflow by going to the Actions tab and selecting "Run workflow" on the "Update NPM Package" workflow.

## Usage with LLMs

The `api_merged.md` file is designed to be used as context for Large Language Models when answering questions about the @caxperts/universal.api package. Each file's contents are encapsulated in XML-like tags with the filename, making it easy for the LLM to reference specific parts of the API.

## License

This repository is for organizational purposes only. All content from the @caxperts/universal.api package maintains its original licensing.