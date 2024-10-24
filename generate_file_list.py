import os
import json
from datetime import datetime

md_directory = os.path.join('.', 'md')
output_file = os.path.join('.', 'md.json')
def format_timestamp(timestamp):
    return datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')

try:
    md_files_data = []

    for file_name in os.listdir(md_directory):
        if file_name.endswith('.md'):
            file_path = os.path.join(md_directory, file_name)
            file_size = os.path.getsize(file_path)  
            creation_time = os.path.getctime(file_path)  
            modified_time = os.path.getmtime(file_path)  

            creation_time_str = format_timestamp(creation_time)
            modified_time_str = format_timestamp(modified_time)
            
            file_metadata = {
                "name": file_name,
                "size": file_size,  
                "creation_date": creation_time_str,  
                "last_modified_date": modified_time_str  
            }
            
            md_files_data.append(file_metadata)

    with open(output_file, 'w') as json_file:
        json.dump(md_files_data, json_file, indent=2)

    print(f"Markdown file list with metadata generated successfully: {output_file}")

except Exception as e:
    print(f"Error while generating the Markdown file list: {e}")