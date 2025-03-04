<p id="base_metadata"></p>

## Base Metadata

### Overview

### Base Metadata Fields

| Field name | What it means | How to search |
| --- | --- | --- |
| **atime** | last accessed | refer to [Queries with Time](#search_time) for syntax examples |
| **ctime** | last changed  | refer to [Queries with Time](#search_time) for syntax examples |
| **dir_count** | number of sub-directories in a directory [recursive](#recursive) | `dir_count:2` > would list directories with exactly 2 sub-directories _or_ 1 file and 1 directory _or_ 2 files |
| **dir_count_norecurs** | number of items (files and folders) in a directory [non-recursive](#recursive) | `dir_count_norecurs:1` > would list directories with at least 1 sub-directory in them |
| **dir_depth** | directory depth in a path | `dir_depth:2` > would search directories at level 2 in the file tree | 
| **extension** | file extension | `extension:mov` |
| **file_count** | number of files inside a directory | `file_count:85` `file_count:500*` `file_count:10?` > to find directories with a specific or approximate number of files |
| **file_count_norecurs** | number of files inside a directory [non-recursive](#recursive) | `file_count_norecurs:*` > to find directories with a specific or approximate number of files |
| **file_size** | file size | in bytes > see [Queries with File Size](#search_size) for examples |
| **file_size_du** | disk usage size aka allocated size for files only | in bytes > see [Queries with File Size](#search_size) for examples |
| **group** | user group name | `group:colorists` > can vary depending on how Diskover was configured, see [User Analysis Report](#user_analysis) section for more details and/or ask your System Administrator |
| **ino** | file inode number | `ino:8838389885` or `ino:8838*` > is usually used by System Administrators |
| **mtime** | last modified | refer to [Queries with Time](#search_time) for syntax examples |
| **name** | file name | is case sensitive, ex: `name:*Jungle*` if the file name is TheJungleBook.mov |
| **name.text** | same as **name** but is not case sensitive | `name.text:*jungle*` even if the file name is TheJungleBook.mov |
| **nlink** | number of [hard links](#hardlinks) | `nlink:3` |
| **owner** | owner name | `owner:*Joe*` > can vary depending on how Diskover was configured, see [User Analysis Report](#user_analysis) section for more details and/or ask your System Administrator |
| **parent_path** | path name | `parent_path:\/Some\/Folder*` > is case sensitive, will search the specified folder and all its sub-folders ([recursive](#recursive)) |
| **parent_path.text** | same as **parent_path** but is not case sensitive | `parent_path:\/some\/folder*` |
| **size** | file and/or directory size | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on size |
| **size_norecurs** | file and/or directory size [non-recursive](#recursive) | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on size |
| **size_du** | disk usage size aka allocated size for files and/or directories | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on sizes |
| **size_du_norecurs** | disk usage size [non-recursive](#recursive) | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on size |
| **type** | file or directory | `type:file` or `type:directory` > is case sensitive, all lowercase needed |


