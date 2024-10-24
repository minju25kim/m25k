import os
import json

md_directory = './public/md'
output_file = './public/md_files.json'

# Get list of markdown files
md_files = [f for f in os.listdir(md_directory) if f.endswith('.md')]

# Write to JSON file
with open(output_file, 'w') as f:
    json.dump(md_files, f)

print(f"List of markdown files saved to {output_file}")
