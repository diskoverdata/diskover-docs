<p id="recursive_search"></p>

___
### Recursive/Non-Recursive Path Search and Data Manipulation in Excel

<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

#### [🍿 Watch Quick Tips | Recursive Search, Export, and Excel Manipulation](https://vimeo.com/762454710)

From the [search page](#file_search), you can list in one click all the directories and/or files that are [recursive or non-recursive](#recursive) under a path.

![Image: File Search Path Recursive](images/image_file_search_path_recursive.png)

A) From the [results pane](#result_pane_columns), identify the path that you wish to search.

B) Click the **3 dots icon** that can be found in the **Path** column - follow these [instructions to unhide the **Path** column](#hide_columns) if it's not visible in your [results pane](#results_pane_overview).
  
C) Select **search path (non-recursive)** to include ONLY the directories and files included in the selected path, the results will open in a new browser tab.
  
D) Select **search path (recursive)** to include ALL the sub-directories and files included under the selected path, the results will open in a new browser tab.

#### Export Directories and/or Files to Excel

Please refer to the **[export search results](#export)** section of this guide if needed to learn how to export to a **csv** format.

#### Multiple Path/Directory Levels Manipulation in Excel

When exporting data in a **csv** format, you will get all the metadata associated with a file and/or directory, displayed within multiple columns. This will allow you to use Excel **sort** and/or **filters** to easily pinpoint the specific data you are looking for.

##### Excel > Data > Sort

Once you export the desired data to a **csv** format, open that file with Excel.

![Image: Sort in Excel](images/image_file_search_results_export_excel_sort.png)

A) From the Excel application menu, select **Data**.

B) Click on the **Sort** icon.

C) Select **parent_path** to sort by path/directories:
  - You can add multiple levels of column sort by clicking on the **+** sign.
  - The same **Data > Sort** selection can be achieved from the Excel drop-down top menu.
  - Please refer to **Excel > Help** menu for further instructions.

##### Excel > Data > Filter - When Exporting _Files_ from Diskover

Once you [export](#export) the desired **files** from Diskover to a **csv** format, open that file with Excel.

![Image: Filter in Excel](images/image_file_search_results_export_excel_filter.png)

A) From the Excel application menu, select **Data**.

B) Click on the **Filter** icon.

C) Click on the **down-arrow** in the **parent_path** column which will open a window with multiple options:
  - Select the path(s) which you want to isolate in your results and click on **Apply Filter**.
  - The same **Data > Filter** selection can be achieved from the Excel drop-down top menu.
  - Please refer to **Excel > Help** menu for further instructions.

##### Excel > Data > Filter - When Exporting _Directories_ from Diskover

The same instructions as above apply when you [export](#export) **directories** from Diskover, but the results will include a few more columns, giving you more filtering options.

![Image: Filter in Excel](images/image_file_search_results_export_excel_filter_dir_depth.png)

A) From the Excel application menu, select **Data**.

B) Click on the **Filter** icon.

C) Instead of clicking on the **down-arrow** in the **parent_path** column, click the down-arrow from the **dir_depth** column, which will open a window with multiple options:
  - Select the depth of sub-directory(ies) you want to isolate in your results and click on **Apply Filter**.
  - The same **Data > Filter** selection can be achieved from the Excel drop-down top menu.
  - Please refer to **Excel > Help** menu for further instructions.


>🔆 &nbsp;In Excel, you can use both **sort** and **filters** at the same time to isolate and display the results you want to achieve.
