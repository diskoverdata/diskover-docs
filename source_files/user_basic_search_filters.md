<p id="filters"></p>

### Filters

Using the built-in filters is a great way to get familiar with Diskover while quickly refining your results. Filters add criteria to your search without requiring you to type complex queries in the search bar. You can use filters on their own or combine them with manual searches and other built-in search tools for even more precise results.  

![Image: Search Filters](images/image_file_search_filters_overview_20230214.png)

✏️ Only adjust the fields you want to filter.  Now, let’s explore how Diskover filters work.  

| REFERENCE | DESCRIPTION |
| :---: | --- |
| A | **Doc type**: options of **all**,  **file**  or  **directory** in your results. |
| B | **File size**: enter the **minimum** and/or **maximum** file size, then choose the desired unit of measurement (e.g., KB, MB, GB) from the drop-down list.<br>✏️ Type  **1** in the  **File size (min)**  field to exclude empty directories from your search results. |
| C | **Last modified (mtime)**: enter the time range, starting with the oldest **from** (default is  **any time**) and ending with the newest **to** (default is  **now**). |
| D | **Last accessed (atime)**: enter the time range, starting with the oldest **from** (default is  **any time**) and ending with the newest **to** (default is  **now**). |
| E | **Last changed (ctime)**: enter the time range, starting with the oldest **from** (default is  **any time**) and ending with the newest **to** (default is  **now**). |
| F | **Hardlinks**: you can select the  **min**imum and/or  **max**imum number of hardlinks when searching for a file with [hard links](#hardlinks). |
| G | **Owner**: select **is** or **is not** from the drop-down list and type a value in the field to the right.<br>✏️ Reach out to your System Administrator for details on how users are set up in your instance. |
| H | **Group**: select **is** or **is not** from the drop-down list and type a value in the field to the right.<br>✏️ Reach out to your System Administrator for details on how groups are set up in your instance. |
| I | **Extensions - if listed here**: select **is** or **is not** from the drop-down list and check the appropriate box(es). |
| J | **Extension - if not listed in 🅘**: select **is** or **is not** from the drop-down list and type a single extension - no dots just the letters. |
| K | **File type**: select **is** or **is not** from the drop-down list and check the appropriate box(es).<br>✏️ Diskover allows multiple file extensions to be categorized under a single group, streamlining search and analysis:<ul><li>This configuration is managed by your System Administrator.</li><li>An easy way to figure out the list of file extensions under a group is by launching [Quick Search](#quick_search) → Files → Type → launch a query on the category of interest → look in the green bar for the query/extensions included in that group. |
| L | **Tags**: select **is** or **is not** from the drop-down list and check the appropriate [tag(s)[(#tags)/box(es). |
| M | **Tag**: select **is** or **is not** from the drop-down list and type a known tag name.<br>✏️ This feature is useful for searching tags that were set outside of Diskover’s user interface but are indexed as attributes. |
| N | **Other field**: use this to filter metadata that is not listed above:<ul><li>Select an [attribute/metadata](#attributes) field in the first drop-down list.</li><li>Select a conditional operator from the next drop-down list.</li><li>Type a value/criteria in the last field.</li></ul>
| O | **Exclude folders**: check this box to prevent filters from limiting the folder view to allow broader search results and the ability to navigate through the folder structure. |  
| P | **Filter charts**: checking this box will temporarily apply the selected filters to the following:<ul><li>The [charts](#search_page_charts) at the top of the search page.</li><li>The [dashboard](#dashboard).</li><li>To permanently apply filters to the charts and dashboard, please refer to [filter charts settings](#settings_filter_charts).</li></ul> |
| Q | **Tips**: refer the [operators](#operators) and [case sensitivity](#case_sensitivity) sections for details. |
| R | <a id="clear_filters"></a> **Clear filters**: to clear all the active filters in this window. |
| S | **Save filters**: to save all the filters in this window.<br>⚠️ The filters will remain active and affect all your future searches until you reopen the filters and clear the filters .|

✏️ You can see from the search page if you have active filters and how many.

![Image: Active Filters](images/search_tools_active_filters.png)
