## Search Results

Please refer to the [built-in search tools](https://docs.diskoverdata.com/diskover_user_guide/#built-in-search-tools), [manual search queries](https://docs.diskoverdata.com/diskover_user_guide/#manual-queries) and/or the [Quick Reference Card](https://docs.diskoverdata.com/images/quick_reference_card_diskover_core_features.pdf) for detailed information about searching.


#### Some directories and/or files seem to be missing in search results

- Expand your search using the [* wildcard](https://docs.diskoverdata.com/diskover_user_guide/#wildcard).
- If using [operators (AND, NOT, OR)](https://docs.diskoverdata.com/diskover_user_guide/#operators), ensure they are correctly used and grouped if needed.
- When searching within a specific [field name](https://docs.diskoverdata.com/diskover_user_guide/#field-names), verify that both the field name and value are correctly typed.
- Check if you have saved [filters](https://docs.diskoverdata.com/diskover_user_guide/#filters) that might be limiting your results.
- Ensure [Current Dir](https://docs.diskoverdata.com/diskover_user_guide/#limit-searches-to-a-specific-index) is **deselected** so Diskover searches all storage volumes and directories.
- Verify that no specific [index/indices](https://docs.diskoverdata.com/diskover_user_guide/#indices) are selected, which could be restricting results.
- Try refreshing your volumes by selecting ⛭ → **Reload Indices**.

#### Too many items found in search results

- Overuse of the [* wildcard](https://docs.diskoverdata.com/diskover_user_guide/#wildcard) can lead to overly broad results.
- [Use Predictive Search](https://docs.diskoverdata.com/diskover_user_guide/#use-predictive-search) may be enabled, automatically expanding searches with `*`.
- If using [operators (AND, NOT, OR)](https://docs.diskoverdata.com/diskover_user_guide/#operators), review their grouping and placement.
- Try searching within specific [field name(s)](https://docs.diskoverdata.com/diskover_user_guide/#field-names) to narrow results.
- Apply [Filters](https://docs.diskoverdata.com/diskover_user_guide/#filters) to refine your search.
- Use [Current Dir](https://docs.diskoverdata.com/diskover_user_guide/#limit-searches-to-a-specific-index) to focus results within a specific directory path.

#### How to display only files or only directories in search results

- Use the search [filters](https://docs.diskoverdata.com/diskover_user_guide/#filters) and select **file** or **directory** from the **Doc type** drop-down list.
- Alternatively, use these [field name](https://docs.diskoverdata.com/diskover_user_guide/#field-names) in the search bar:
  - `type:file`
  - `type:directory`

#### Green info bar shows thousands of results, but not all are visible in the results pane

- By default, only **10 results per page** are shown, but you can increase this up to **1,000** via the [items per page selector](https://docs.diskoverdata.com/diskover_user_guide/#items_per_page).
- If there are more than **1,000 results**, multiple pages will be available. The **page navigation** is at the top-right of the search results pane.

#### Search results are displayed across multiple pages instead of one long list

- Diskover's search results are paginated for **performance optimization and usability**:
  1. **For speed**
  2. **For speed**
  3. **To make navigating large result sets easier**

#### Lost location and/or path while drilling down

- The current **path location** is always visible in the [Path Bar](https://docs.diskoverdata.com/diskover_user_guide/#software-overview) (below the green info bar). You can click on any directory in the path bar to jump back.
- The [green info bar](https://docs.diskoverdata.com/diskover_user_guide/#software-overview) also displays the active search path.

#### How to export search results

- Click the [Export button](https://docs.diskoverdata.com/diskover_user_guide/#export) on the search page:
  - Export paths along with metadata (size, ctime, mtime, atime, type, etc.) to your download folder.
  - Copy paths or file names for pasting elsewhere.

#### How to share search results

- Use the [Export options](https://docs.diskoverdata.com/diskover_user_guide/#export) or the [Share button](https://docs.diskoverdata.com/diskover_user_guide/#share).
  - Share the **URL link** to your search results with co-workers.
  - Copy and share the **search query** for repeatable searches.

#### How to achieve complex sorting of search results

- Sorting within the UI can be limited when working with large datasets across multiple pages.
- The best approach is to [Export](https://docs.diskoverdata.com/diskover_user_guide/#export) the results as a **CSV file**, then use [**Excel** or another spreadsheet tool](https://docs.diskoverdata.com/diskover_user_guide/#data-manipulation-in-excel) for advanced sorting and filtering.
