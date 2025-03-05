#!/usr/bin/env python3
"""
NPM Package Downloader and Sorter

This script downloads the @caxperts/universal.api package from npm,
extracts its contents, and sorts the files into appropriate directories
based on their file extensions.
"""

import os
import json
import shutil
import subprocess
import tempfile
from pathlib import Path
from typing import Dict, List, Tuple


def setup_directories() -> Tuple[Path, Path, Path]:
    """
    Create the necessary directories if they don't exist.
    
    Returns:
        Tuple of Paths for api, implementation, and not_needed directories
    """
    # Create directories if they don't exist
    api_dir = Path("api")
    impl_dir = Path("implementation")
    not_needed_dir = Path("not_needed")
    
    for directory in [api_dir, impl_dir, not_needed_dir]:
        directory.mkdir(exist_ok=True)
        
    return api_dir, impl_dir, not_needed_dir


def clean_directories(directories: List[Path]) -> None:
    """
    Clean the target directories to ensure we don't have old files.
    
    Args:
        directories: List of directory paths to clean
    """
    for directory in directories:
        for item in directory.glob("*"):
            if item.is_file():
                item.unlink()
            elif item.is_dir():
                shutil.rmtree(item)


def download_npm_package(package_name: str) -> Tuple[str, Path]:
    """
    Download an npm package and extract its contents.
    
    Args:
        package_name: Name of the npm package to download
        
    Returns:
        Tuple containing the package version and path to the extracted contents
    """
    print(f"Downloading npm package: {package_name}")
    
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
        
        # Create a package.json file
        package_json = {
            "name": "temp-package",
            "version": "1.0.0",
            "dependencies": {
                package_name: "latest"
            }
        }
        
        with open(temp_path / "package.json", "w") as f:
            json.dump(package_json, f)
        
        # Install the package
        subprocess.run(["npm", "install"], cwd=temp_dir, check=True)
        
        # Get the installed version
        npm_list = subprocess.run(
            ["npm", "list", "--json"], 
            cwd=temp_dir, 
            check=True, 
            capture_output=True, 
            text=True
        )
        
        npm_list_json = json.loads(npm_list.stdout)
        version = npm_list_json["dependencies"][package_name]["version"]
        
        # Path to the installed package
        package_path = temp_path / "node_modules" / package_name
        
        # Copy to a new temporary directory that won't be deleted when we exit this context
        extract_dir = Path(tempfile.mkdtemp())
        shutil.copytree(package_path, extract_dir / package_name, dirs_exist_ok=True)
        
        print(f"Downloaded version: {version}")
        return version, extract_dir / package_name


def sort_files(source_dir: Path, api_dir: Path, impl_dir: Path, not_needed_dir: Path) -> None:
    """
    Sort files from the npm package into the appropriate directories.
    
    Args:
        source_dir: Path to the extracted npm package
        api_dir: Path to the API directory
        impl_dir: Path to the implementation directory
        not_needed_dir: Path to the not_needed directory
    """
    print("Sorting files...")
    
    # Track special files that should go to the api directory
    special_files = ["README.md", "package.json", "LICENSE"]
    
    # Walk through the directory structure
    for root, _, files in os.walk(source_dir):
        rel_path = Path(root).relative_to(source_dir)
        
        for file in files:
            source_file = Path(root) / file
            
            # Determine target directory based on file extension
            if file.endswith(".d.ts.map"):
                target_dir = not_needed_dir / rel_path
            elif file.endswith(".d.ts") or file in special_files:
                target_dir = api_dir / rel_path
            elif file.endswith(".js"):
                target_dir = impl_dir / rel_path
            else:
                # Default to api directory for other files
                target_dir = api_dir / rel_path
            
            # Create target directory if it doesn't exist
            target_dir.mkdir(parents=True, exist_ok=True)
            
            # Copy the file
            shutil.copy2(source_file, target_dir / file)
    
    print("Files sorted successfully.")


def update_readme(version: str) -> None:
    """
    Update the README.md with the current version and date.
    
    Args:
        version: The package version
    """
    import datetime
    
    readme_path = Path("README.md")
    if not readme_path.exists():
        print("README.md not found, skipping update.")
        return
    
    # Read the current content
    with open(readme_path, "r") as f:
        content = f.read()
    
    # Update the version and date
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    
    # Replace version placeholder
    content = content.replace("**Package Version:** _Will be updated automatically_", 
                             f"**Package Version:** {version}")
    
    # Replace date placeholder
    content = content.replace("Last Updated: _Will be updated automatically_", 
                             f"Last Updated: {today}")
    
    # Write the updated content
    with open(readme_path, "w") as f:
        f.write(content)
    
    print(f"README updated with version {version} and date {today}")


def main() -> None:
    """Main function to orchestrate the download and sorting process."""
    package_name = "@caxperts/universal.api"
    
    # Setup directories
    api_dir, impl_dir, not_needed_dir = setup_directories()
    
    # Clean directories
    clean_directories([api_dir, impl_dir, not_needed_dir])
    
    # Download and extract the package
    version, extract_dir = download_npm_package(package_name)
    
    # Sort the files
    sort_files(extract_dir, api_dir, impl_dir, not_needed_dir)
    
    # Update the README
    update_readme(version)
    
    # Clean up the temporary directory
    shutil.rmtree(extract_dir.parent)
    
    print("Process completed successfully.")


if __name__ == "__main__":
    main()