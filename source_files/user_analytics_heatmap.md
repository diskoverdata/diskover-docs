<p id="heatmap"></p>

### Heatmap 

The heatmap report is a powerful analytical snapshot offering a differential comparison of two indices across two different points in time:

- An instant visual of the location of data growth and shrinkage:
  - **Red** = data growth
  - **Green** = data shrinkage
  - **No color** = the absence of color is meaningful—it indicates data inertia, which may signal anomalies—also useful for comparisons, such as ensuring a cloud backup matches an on-premise server.
- Insightful for data curation efforts.
- A useful tool to monitor activity, ex: awaiting new project to be onboarded, monitor backups, etc.


#### How to Select Indices for Heatmap

Before accessing the heatmap report, you need to [select 2 indices from 2 different points in time](#index_selection):

- You need to select the same index/volume name to compare the same data.
- For backups though, it makes sense to select different indices or volumes, such as comparing an on-premise index to a cloud index.

![Image: Indices Selection for Heatmap Report](images/analytics_heatmap_indices_selection.png)

⚠️ These selections will stay active and affect all your future interactions until you return to this page and select 🅑 **Always use latest indices**.

| STEP | DESCRIPTION |
| :---: | --- |
| A | Click the ⛭ and select **Indices** |
| B | Deselect **Always use latest indices**. |
| C | Click **Unselect all** to ensure all indices are deselected. |
| D | OPTIONAL - You can filter your indices by searching with a keyword, only leaving the desired indices in your results. |
| E | OPTIONAL - you can filter your indices by aging to narrow down the list of indices in your results. |
| F | Select one index from  **Index**  column. |
| G | Select one index from  **Index 2**  column, with a different date. |
| H | Click  **Save selection**. |

🔆 The tips in the blue help bars are very helpful!


#### Accessing Heatmap

⚠️ As explained above, you must select two indices for comparison; otherwise, an error message will appear..

| From the **Analytics** drop-down list | From the <img src="images/icon_more.png" width="25"> located in the path column in the results pane |
| --- | --- |
| Will aggregate data from all volumes if no filters are activated.<br> <img src="images/analytics_select_heatmap.png" width="300"> | Will load the report for that path only.<br><img src="images/image_analytics_heatmap_access_via_results_pane_20230215.png" width="600"> |

You need to select the [indices](#index_selection) to compare as explained above before accessing the report, otherwise, you’ll get an error message.



#### Heatmap Overview

![Image: Heatmap Report Overview](images/image_analytics_heatmap_overview.png)

>🔆 &nbsp;Hovering over the graphics will give you a snapshot of their attributes.

A) **Path bar**: You can view as well as manually type in the [path](#path) you want to investigate.

B) **Go**: If you manually enter or edit a value in A) path bar, the  **Go**  button acts like a  **Return**  key.

C) **Up Level**: Will bring you one directory up per click until you reach the top of the volume.

D) **Reload**: To reload the chart and tree cache/data.

E) **Size Filter**: To select a minimum data size you want to pinpoint in the results.

F) **Mtime Filter**: To select a specific period when the data was last modified.

G) **Hide Thresh**: To make the graphics less busy by hiding the results with low percentages.

H) **Size or Count**: Select whether you want to see the report by the  **Size**  of the data or **Count** of items.

I) **Maxdepth**: Select how many levels/directories deep you want the results to show.

J) **Show new dirs**: Leave unselected if you want to hide all the new directories that might have been created, as it can be misleading by adding a lot of red due to the fact that they are new. New directories can distract from the real changes you want to analyze OR it can be exactly what you are looking for.

K) **Show Files**: By default, the results pane will only show directories, select if you want to see files as well in the results pane.

L) **Filters**: Summary of the filters or preferences that you might have selected.

>🔆 &nbsp;Filters will stay active, even if you navigate away to another page.

M) **Items per page**: To modify the number of items per page (between 10 to 100).

N) **Search within page**: To refine your search for the current page only, it acts similarly as CTRL or CMD + F would, but will only leave the line items for which it finds a match:
  - You can enter more than one search word and/or number.
  - This field will not recognize or know what to do with [operators](#operators).
  - You do not need to use [wild cards](#wildcards) as this field will search on partial words or numbers.
  - You cannot use this field to search on [tags](#tags).
  - It will not search other pages if you have more than one page of results, nor will it search [recursively](#recursive).

O) **Results pane**: You can sort on a single column at a time by clicking the arrows in the headers.

P) **Show path in heatmap** **icon**: Will show the heatmap report for that particular [path](#path).

Q) **Search for path icon**: To open that [path](#path) in the search page.

R) **Navigation within pages of results**: To go back and forth if you have several pages of results.

#### Comparing Indices in the Search Page

You can compare indices in the search page as well. You will see red/growth or green/shrinkage status results:

![Image: Comparing Indices in the Search Page](images/image_analytics_heatmap_results_in_search_page.png)
