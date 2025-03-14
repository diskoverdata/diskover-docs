<p id="base_metadata"></p>

## Base Metadata

This section outlines the fundamental attributes naturally attached to files and directories, harvested by Diskover without the need for special plugins. The fields are listed alphabetically.

| FIELD NAME | DESCRIPTION | HOW TO USE |
| --- | --- | --- |
| **atime** | last accessed time | <ul><li>Learn how to search on time using Diskover [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools).</li><li>Learn how to [manually search on time](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-time).</li></ul> |
| **ctime** | last changed time  | <ul><li>Learn how to search on time using Diskover [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools).</li><li>Learn how to [manually search on time](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-time).</li></ul> |
| **dir_count** | number of [recursive](#recursive) sub-directories in a directory | <ul><li>Sample query → `dir_count:22`</li><li>Results → would list all directories containing exactly 22 sub-directories.</li></ul><img src="images/metadata_base_dir_count.png" width=""> |
| **dir_count_norecurs** | number of [non-recursive](#recursive) sub-directories a directory | <ul><li>Represents the number of immediate subdirectories within a given directory, excluding any deeper nested folders. Unlike a recursive directory count, which tallies all subdirectories at every level, `ir_count_norecurs` only counts the first-level subdirectories inside a folder. This makes it useful for analyzing folder structures without unnecessary depth.</li><li>Sample query → `dir_count_norecurs:5`</li><li>Results → directories that contain exactly 5 immediate subdirectories, without counting any deeper nested folders.</li></ul><img src="images/metadata_base_dir_count_norecurs.png" width=""> |
| **dir_depth** | directory depth in a path | <ul><li>Sample query → `dir_depth:2`</li><li>Results → will return all directories that are exactly at depth level 2 in the directory hierarchy.</li></ul> | 
| **extension** | file extension | <ul><li>You can search extension using the [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools).</li><li>Manual searches, such as `extension:mov`, help refine results by targeting files with `mov` extension. While a general search for `mov` could return unrelated paths containing those letters, using `extension:mov` ensures precision by filtering only files with the exact `.mov` extension.</li></ul> |
| **file_count** | number of [recursive](#recursive) files inside a directory | <ul><li>Represents the total number of files within a directory, including all files in its subdirectories. Unlike `file_count_norecurs`, which only counts files directly inside a folder, `file_count` provides a recursive total of all files contained within a directory and all its subfolders.</li><li>Refer to the [syntax for mathematical symbols](https://docs.diskoverdata.com/diskover_user_guide/#complex-queries-syntax-and-grouping) to learn about the equations you can use to build relevant queries.</li><li>Sample queries → `file_count:85`, `file_count:10?`, `file_count:>100`</li><li>Results →  using the last example, `file_count:>100`, we search for recursive file counts greater than 100.</li></ul><img src="images/metadata_base_file_count.png" width=""> | 
| **file_count_norecurs** | number of [non-recursive](#recursive) files within a directory | <ul><li>Is used to retrieve the number of files within a directory without counting files in its subdirectories. This makes it an efficient way to quickly assess folder contents at a single directory level rather than performing a full [recursive](#recursive) count. It’s particularly useful for gaining insights into storage structure and identifying clutter without the overhead of deep indexing.</li><li>Query sample → `file_count_norecurs:<=100`</li><li>Results → will retrieve all directories that contain 100 or fewer files, excluding any files within their subdirectories—this is useful for:<ul><li>Identifying small directories that may be candidates for cleanup or consolidation.</li><li>Finding underutilized folders within a dataset.</li><li>Gaining insights into storage distribution at the directory level without recursive counting.</li></ul><li>Refer to the [syntax for mathematical symbols](https://docs.diskoverdata.com/diskover_user_guide/#complex-queries-syntax-and-grouping) to learn about the equations you can use to build relevant queries.</li></ul> |
| **file_size** | file and/or directory size | <ul><li>We recommend using the [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools) as you need to translate the figures in bytes.</li><li>If you want to search manually, please refer to [Queries with Data Size](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-data-size) for examples.</li></ul> |
| **file_size_du** | disk usage size, aka allocated size, for files only | <ul><li>We recommend using the [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools) as you need to translate the figures in bytes.</li><li>If you want to search manually, please refer to [Queries with Data Size](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-data-size) for examples.</li></ul> |
| **group** | user group name | <ul><li>Sample query → `group:engineering`</li><li>Results → would return all files and directories with the group `engineering`</li><li>Groups vastly vary depending on how Diskover is configured, see [User Analysis Report](https://docs.diskoverdata.com/diskover_user_guide/#user-analysis) section for more details and/or ask your System Administrator.</li></ul> |
| **ino** | file inode number | `ino:8838389885` or `ino:8838*` > is usually used by System Administrators |


| **mtime** | last modified time | <ul><li>Learn how to search on time using Diskover [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools).</li><li>Learn how to [manually search on time](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-time).</li></ul> |
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


### Queries with File Extensions

- Use [quick search](#quick_search) which you can combine with a manual query for max efficiency.
- Type in the search bar the pre-determined field name for file extensions, for example **extension:mov**

>🔆 &nbsp;Note that the file extension letters might be part of the file name and give you misleading results. By searching using the field name **extension** you focus your searches on that field exclusively.

🔎  A few example:

- If only typing **mov** in the search bar, the results would include all files with **.mov** extension, but could also return a file with the name **all_mov_titles_2021.txt**

- If only typing **jpg** in the search bar, the results would include all files with **.jpg** extension, but could also return a file with the name **montage_jpg_png_images.gif**
