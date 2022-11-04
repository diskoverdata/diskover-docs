<p id="indices"></p>

___
### Indices

#### [🍿 Watch Quick Tips | Indexing and Live View](https://vimeo.com/767272643)

> 🔆 &nbsp;Please refer to the [Elasticsearch Terminology](#elasticsearch_terminology) section for detailed information regarding the Diskover architecture as well as search limitations depending on which [Diskover solution](https://www.diskoverdata.com/solutions/) you are using.

The default is set to use the most recent  indices. You may want to select multiple indices to search across different points in time for comparison purposes (ex: this file is not here today, was it there two days ago?). Selecting different indices is also needed for the [heatmap report](#heatmap).

Diskover continuously scans all your storage volumes and creates new indices to give you the latest snapshot of all your files and their attributes. This diagram is a simplistic way of explaining how the data is scanned.

<img src="images/diagram_diskover_indexing.png" width="600">

You can access the available indices within the  **gear icon** drop-down menu.

![Image: Accessing the Indices Page](images/image_menu_gear_icon_selection_indices.png)

#### Using the Latest Indices

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

When you log in, Diskover automatically defaults to the latest indices.

Unless you must compare indices from different points in time or want to use the [heatmap report](#heatmap), you always want to use the latest indices and the  **Always use latest indices**  box needs to be selected.

![Image: Always Use Latest Indices](images/image_indices_always_use_latest_indices.png)

<p id="index_selection"></p>

#### Selecting Indices

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

This section will guide you in case you need to go back to an older index (or indices) for search, comparison, or reporting  purposes.

Selecting multiple indices in the H) index column allows you to search across more than one index, as well as quickly access/switch the said indices using the  **Storage volumes**  drop-down list in the file search page.

This part of the interface is best explained visually along with the instructions below. Note that the indices are sorted by ascending creation date but can be sorted as you wish using the arrows in J) headers in the results pane.

>🔆 &nbsp;Take the time to read the instructions and tips in the blue message bars.

![Image: Indices Overview](images/image_indices_overview.png)

A) **Always use latest indices**: If you must manually select indices, make sure to deselect that box first.

B) **Show Indices newer than**: Select the aging of the indices you want to make available in the list.

C) **Select all**: Click to select all indices from column H) Index.

D) **Unselect all**: Click to unselect all indices from either column H) Index or I) Index 2.

E) **Save Selection**: If you manually click indices from either column H) Index or I) Index 2, you need to click  **Save selection**  before leaving the indices page.

F) **Show # Entries**: You can change how many rows of indices you want to display in a page (between 10 to 100).

G) **Search**: You can search within the indices with a single name or date (indices name will show date of each scan with format yyyymmdd), but you cannot use [operators](#operators) or complex syntax.

H) **Index** column: If you are not using A) always use latest indices, you need to select at least one index by clicking a box in this column and click E) Save selection.

I) **Index 2**: If you are not using A) always use latest indices, selecting indices in this column is optional and is used for data comparison like the [heatmap report](#heatmap).

>🔆 &nbsp;When selecting more than one index from H) Index, you cannot select an index from I) Index 2.

J) **Results pane**: You can find valuable information in those columns, which can be sorted by clicking on the grey arrows in the headers.
>- **Start Time**: The date/time the scan started indexing (UTC time unless you [changed your settings to your local time](#time)).
>- **Finish Time**: The date/time the scan finished indexing (UTC time unless you [changed your settings to your local time](#time)).
>- **Crawl Time**: The time a scan took to index that storage volume.
>- The other columns are self-explanatory.

K) **Reload** **indices**: To refresh the list of indices.

L) **Max indices to load**: To reduce the number of indices to load.

#### Indexing Schedule

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

The System Administrator of your facility is responsible for configuring the indices’ scanning schedule. Scans are scheduled according to the users’ needs; for high pace work environment like media production, new scans may be scheduled soon after the previous one is completed. Diskover scans all storage volumes parallelly, not serially.
