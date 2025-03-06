<p id="indices"></p>

### Indices

#### [🍿 Watch Quick Tips | Indexing and Live View](https://vimeo.com/767272643)

Diskover continuously scans all your storage volumes and creates indices, which act like snapshots of your files and their attributes at a specific point in time. These indices provide an up-to-date view of your data, allowing you to quickly analyze file sizes, types, ownership, usage patterns, and more. By regularly refreshing indices, Diskover ensures you always have the latest insights into your storage environment, helping with all aspects of sustainable data management.

#### Accessing the Indices

You can access the indices by selecting ⚙️ → **Indices**.

![Image: Accessing the Indices Page](images/indices_selection.png)

#### Indices Overview

![Image: Indices Overview](images/indices_overview.png)

✏️ Take the time to read the tips in the blue message bars, they are very helpful!

| REFERENCE | DESCRIPTION |
| :---: | --- |
| A | <a id="index_selection"></a> **Always use latest indices**: This box is selected by default so you can search all the latest data at all time—if you must manually select specific indices, make sure to deselect that box first. Some use cases why selecting specific indices may be useful:<ul><li>[Heatmap](#heatmap) for comparison purposes.</li><li>If you have multiple [volumes](#volumes) indexed by Diskover but only some of them are relevant to your work.</li><li>Refer back to an older index (or indices) for search, comparison, monitoring, or reporting purposes.</li><ul> |
| B | **Show Indices newer than**: You can filter your indices by aging to narrow down the list of indices in your results. |
| C | **Select all**: Will select all indices from column 🅗. |
| D | **Unselect all**: To unselect all indices—you must first deselect **Always use latest indices**. |
| E | **Save Selection**: If you manually select indices from either column 🅗 and/or 🅘, you need to click  **Save selection**  before leaving the indices page. |
| F | **Show # Entries**: To change how many rows of indices/results you want to display on a page (between 10 to 100). |
| G | **Search**: You can filter your indices by searching with a keyword, only leaving the desired indices in your results by hiding the other lines. |
| H | **Index**: For manual selection of an index when **Always use latest indices** is deactivated. |
| I | **Index 2**: For manual selection of an index when **Always use latest indices** is deactivated and selecting indices for the [heatmap report](#heatmap). |
| J | **Results pane**: The results are sorted by ascending creation date by default - you can sort differently by clicking on the ascending or descending arrows in the headers:<ul><li>**Start Time**: The date/time the scan started indexing (in UTC unless you [changed your settings to your local time zone](#time)).</li><li>**Finish Time**: The date/time the scan finished indexing (in UTC unless you [changed your settings to your local time zone](#time)).</li><li>**Crawl Time**: The time a scan took to index that storage volume.</li></ul> |
| K | **Reload indices**: To refresh the list of indices. |
| L | **Max indices to load**: To reduce the number of indices to load at all times. |



#### Indexing Schedule

Your System Administrator is responsible for setting the index scanning schedule, ensuring it aligns with your organization's workflow and data volume. Scans are scheduled based on workload demands—for example, in high-paced environments like media production, new scans may start immediately after the previous one finishes.

Diskover scans all storage volumes in parallel, not one by one, ensuring faster indexing and up-to-date insights across your entire storage environment.
