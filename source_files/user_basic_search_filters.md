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
| J | **Extension - if not listed in 🅘**: select **is** or **is not** from the drop-down list and type the ex

Diskover indexes all file types but does not necessarily recognize all extensions. If you need to search on an extension that is not listed in J), select an operator  from the drop-down list and type a value in the field to the right.
>🔆 &nbsp; Only type the extension letters, do not put the  **.**  in front.

K) **File type**: To search on a group of file type which can include multiple file extensions. Select an operator from the drop-down list and check the box(es) for the file type you want to include or exclude.

L) **Tags**: Select an operator from the drop-down list and check the box(es) for the tags  you want to include or exclude.

M) **Tag**: To search on tags that were set outside of Diskover’s user interface but are indexed as an attribute. Select an operator from the drop-down list and type the tag name you want to include or exclude.

N) **Other field**: 1) Select a field in the first drop-down list, 2) select an operator in the second drop-down list and 3) type a value in the field to the right.

O) **Exclude folders**: For less restrictive search results and be able to drill down a tree, will exclude the filtering from the folder view.

P) **Filter charts**: Clicking this box will temporarily apply the filters to the following items until you come back and R) clear the filters. To permanently apply filters to these items, please refer to [filter charts settings](#settings_filter_charts).

  - The charts at the top of the file search page, you can validate the query/criteria in the [green bar](#green_info_bar).
  - The [dashboard](#dashboard) results/analytics.

Q) **Tips**:  Refer to [Manual Queries | Syntax and Rules](#search_syntax) for more details, especially the [Operators](#operators), [Complex Queries and Grouping](#complex_queries), and [Queries with Field Names](#search_field_names) sections.

<p id="clear_filters"></p>

R) **Clear filters**: To clear all the filters in this window.

S) **Save filters**: To save all the filters in this window.

>🔆 &nbsp;Search criteria selected in the [filters will remain active](#clear_filters) and affect all your future searches until you go back in the filters window and click Q) clear filters.

When you close the filters window, you will see if you have some saved criteria in a blue square by the filters icon.

![Image: Active Filters](images/image_file_search_filters_selected.png)
