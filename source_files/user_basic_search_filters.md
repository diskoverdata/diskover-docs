<p id="filters"></p>

___
### Built-In Search Tool | Filters

Using the built-in filters is an easy way to start getting acquainted with Diskover, as well as get quick and accurate results. Using the filters adds a layer of criteria to your results without you having to type in complicated queries in the search bar. Filters can be used on their own or can be combined with manual searches and/or other built-in search tools.

![Image: Search Filters](images/image_file_search_filters_overview_20230214.png)

A) **Doc type**: From the drop-down list, select  **all**,  **file**  or  **directory**.

B) **File size**: Type in the  **minimum**  and/or  **maximum**  file size, as well as select the desired byte measurement in the drop-down list.

>🔆 &nbsp;To avoid having empty directories in your search results, type  **1**  in the  **File size (min)**  field.

C) **Last modified**: Select a value from the drop-down list for  **from** (default is  **any time**)  and/or  **to** (default is  **now**).

D) **Last accessed**: Select a value from the drop-down list for  **from** (default is  **any time**)  and/or  **to** (default is  **now**).

E) **Last changed**: Select a value from the drop-down list for  **from** (default is  **any time**)  and/or  **to** (default is  **now**).

F) **Hardlinks**: When searching for a file with [hardlinks](#hardlinks), select the  **min**imum and/or  **max**imum number of hardlinks.

G) **Owner**: Select an operator  from the drop-down list and type a value in the field to the right. Owners are setup by the System Administrator during the configuration and are also linked to the [user analysis report](#user_analysis).

H) **Group**: Select an operator  from the drop-down list and type a value in the field to the right. Groups are setup by the System Administrator during the configuration and are also linked to the [user analysis report](#user_analysis).

I) **Extensions**: Select an operator  from the drop-down list and check the box(es) for the extensions you want to include or exclude.

J) **Extension**: Diskover indexes all file types but does not necessarily recognize all extensions. If you need to search on an extension that is not listed in J), select an operator  from the drop-down list and type a value in the field to the right.
> _Note:_ Only type the extension letters, do not put the  **.**  in front.

K) **File type**: To search on a group of file type which can include multiple file extensions. Select an operator from the drop-down list and check the box(es) for the file type you want to include or exclude.

L) **Tags**: Select an operator from the drop-down list and check the box(es) for the tags  you want to include or exclude.

M) **Tag**: To search on tags that were set outside of Diskover’s user interface but are indexed as an attribute. Select an operator from the drop-down list and type the tag name you want to include or exclude.

N) **Other field**: 1) Select a field in the first drop-down list, 2) select an operator in the second drop-down list and 3) type a value in the field to the right.

O) **Exclude folders**: For less restrictive search results and be able to drill down a tree, will exclude the filtering from the folder view.

P) **Filter charts**: Clicking this box will temporary apply the filters to the following items, until you come back and R) clear the filters. To permanently apply filters to these items, please refer to [filter charts settings](#settings_filter_charts).

> - The charts at the top of the file search page, you can validate the query/criteria in the [green bar](#green_info_bar).
> - The [dashboard](#dashboard) results/analytics.

Q) **Tips**:  Refer to [Manual Queries | Syntax and Rules](#search_syntax) for more details, especially the [Operators](#operators), [Complex Queries and Grouping](#complex_queries), and [Queries with Field Names](#search_field_names) sections.

<p id="clear_filters"></p>

R) **Clear filters**: To clear all the filters in this window.

S) **Save filters**: To save all the filters in this window.

>🔆 &nbsp;Search criteria selected in the [filters will remain active](#clear_filters) and affect all your future searches, until you go back in the filters window and click Q) clear filters.

When you close the filters window, you will see if you have some saved criteria in a blue square by the filters icon.

![Image: Active Filters](images/image_file_search_filters_selected.png)
