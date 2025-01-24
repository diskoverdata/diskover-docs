
## Indices

#### Unable to select indices

- Make sure the box [Always use latest indices](https://docs.diskoverdata.com/diskover_user_guide/#index_selection) is unselected.

#### Need more frequent scans of indices

- Your System Administrator may need to schedule scans of one or more of your volumes on a more frequent basis, please address the matter with your technical department.

#### Waiting for files to be indexed

- If you know that some files were onboarded to a directory but are not yet indexed by Diskover, you can have a live view of the directory(ies) via [File Action → Live View](https://docs.diskoverdata.com/diskover_user_guide/#file_action_list_dir) and pro-actively search/copy paths. Note that this feature needs to be configured and part of your current subscription plan.

#### Scanning/indexing takes a long time

- The storage volume may have a very large amount of data and although Diskover is extremely quick and powerful, it can still require some time. 
- Some storage types are much faster to scan than others, for example new technology versus old.
- There might also be an obscure reason in the backend for that issue and it should be addressed with your System Administrator.

#### Missing Indices

By default, Diskover does not load all indices all the time. This is for performance reasons in case there are thousands of indices.

On the indices page, there is an input field with **Max indices to load** that controls the number of indices to load. Indices are loaded by order of creation date. If you are missing indices in the list, try increasing this number. This is a per-user setting that gets stored in a cookie in each user's browser.
