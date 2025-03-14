
## Indices


#### Unable to select indices

- Ensure that the [**Always use latest indices**](https://docs.diskoverdata.com/diskover_user_guide/#indices) option is **unchecked**.

#### Need more frequent scans of indices

- Your **System Administrator** may need to schedule more frequent scans of specific volumes. Please contact your system administrator to possibly adjust the scan frequency as needed.

#### Waiting for files to be indexed

- If you know that files were recently added to a directory but have not yet been indexed by Diskover, you can view them **in real-time** using [**File Action → Live View**](https://docs.diskoverdata.com/diskover_user_guide/#live-view).  
- This allows you to **proactively search and copy paths** while waiting for indexing to complete.  
- *Note:* This feature must be **configured** and [**included in your subscription plan**](https://diskoverdata.com/solutions/).

#### Scanning/indexing takes a long time

- The storage volume may contain **a very large amount of data**, and although Diskover is highly optimized, indexing can still take time.  
- Some storage types scan **faster than others**, depending on **hardware and technology** (e.g., **newer vs. older storage systems**).  
- If performance seems **unusually slow**, there may be **backend-related factors**, and the issue should be reported to your **System Administrator**.

#### Missing indices

- By default, Diskover **does not load all indices** at once for **performance reasons**, especially in environments with thousands of indices.  
- On the **Indices page**, there is a **Max indices to load** input field that controls how many indices are displayed.  
- Indices load in **order of creation date**—if you don’t see certain indices in the list, try **increasing this number**.  
- *Note:* This is a **per-user setting** stored as a **cookie** in your browser.  
