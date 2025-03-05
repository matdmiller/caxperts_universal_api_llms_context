#!/usr/bin/env python3
"""
API Reference Merger

This script finds all .d.ts files in the api directory,
concatenates them with XML-like tags, and generates a single
api_merged.md file for use as context with LLMs.
"""

import os
from pathlib import Path
from typing import List, Tuple


def find_api_files(api_dir: Path) -> List[Tuple[str, Path]]:
    """
    Find all .d.ts files in the api directory.
    
    Args:
        api_dir: Path to the api directory
        
    Returns:
        List of tuples containing (relative path, absolute path) for each .d.ts file
    """
    api_files = []
    
    for root, _, files in os.walk(api_dir):
        for file in files:
            if file.endswith(".d.ts"):
                abs_path = Path(root) / file
                # Calculate the relative path from the api directory
                rel_path = abs_path.relative_to(api_dir)
                api_files.append((str(rel_path), abs_path))
    
    # Sort files alphabetically for consistent output
    return sorted(api_files)


def generate_merged_file(api_files: List[Tuple[str, Path]], output_file: Path) -> None:
    """
    Generate a merged markdown file containing all API files with XML-like tags.
    
    Args:
        api_files: List of tuples containing (relative path, absolute path) for each .d.ts file
        output_file: Path to the output markdown file
    """
    print(f"Generating merged API file: {output_file}")
    
    with open(output_file, "w", encoding="utf-8") as out_f:
        # Add header
        out_f.write("# @caxperts/universal.api Reference\n\n")
        out_f.write("This file contains all TypeScript declaration files from the package, merged for easy reference.\n\n")
        
        # Add each file with XML-like tags
        for rel_path, abs_path in api_files:
            out_f.write(f"## {rel_path}\n\n")
            out_f.write(f"<{rel_path}>\n")
            
            # Read and write the file content
            with open(abs_path, "r", encoding="utf-8") as in_f:
                content = in_f.read()
                out_f.write(content)
            
            # Add closing tag and separator
            out_f.write(f"\n</{rel_path}>\n\n")
            out_f.write("---\n\n")
    
    print(f"Generated {output_file} with {len(api_files)} API files")


def main() -> None:
    """Main function to find API files and generate the merged file."""
    api_dir = Path("api")
    output_file = Path("api_merged.md")
    
    # Ensure api directory exists
    if not api_dir.exists() or not api_dir.is_dir():
        print(f"Error: API directory '{api_dir}' not found!")
        return
    
    # Find all .d.ts files
    api_files = find_api_files(api_dir)
    
    if not api_files:
        print("No .d.ts files found in the api directory!")
        return
    
    # Generate the merged file
    generate_merged_file(api_files, output_file)


if __name__ == "__main__":
    main()