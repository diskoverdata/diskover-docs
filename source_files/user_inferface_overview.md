<p id="user_interface"></p>

## User Interface Overview

#### [🍿 Watch Quick Tips | User Interface Overview](https://vimeo.com/787050664)


<p id="login"></p>

### Login

<img src="images/login_window.png" width="350">

| STEP | DESCRIPTION |
| :---: | --- |
| 1 | Open a  **Web browser**  of your choice and type the  **URL address**  that was given to you to access Diskover. |
| 2 | Enter your  **Username**  and  **Password**, which were also given to you, probably by your System Administrator. |
| 3 | Click  **Login**. |

✏️ _Diskover should look and act the same on any web browser. The only thing to keep in mind is if you apply some modifications in your [settings](#settings) using Google Chrome, for example, they will not transfer if you switch to Safari because the [settings](#settings) are tied to your browser's cookies._


<p id="ui_overview"></p>


### User Interface Overview

By default, upon login, you will land on the file search page shown below or the [dashboard](#dashboard) page, depending on how your System Administrator configured your instance. The search page is the most used tool, and this section offers an overview. The subsequent chapters will further explain all other icons, drop-down lists, and features.

🔆 _Hovering almost anything(buttons, charts, volumes, etc.) in Diskover will give you additional information._

![Image: User Interface Overview](images/user_interface_overview_20250226.png)

⭐️ _Indicates the most used features._

| FEATURE | DESCRIPTION|
| :---: | --- |
| A | Software logo, has no function |
| B | <ul><li>[**Dashboard**](#dashboard): gives a snapshot of an entire [volume](#volume)</li><li>[**Analytics**](#analytics): drop-down list offering multiple analytics and reports</li></ul> |
| C | 📍 Use the **folder icon** to navigate back to this page called the **search page** |
| D ⭐️ | Integrated search tools:<ul><li>[**Quick search**](#quick_search): to quickly search all volumes using pre-established criteria</li><li>[**Filters**](#filters): to refine your results either when drilling down or searching</li><li>[**Search within results**](#search_within_results): acts like CTRL or CMD F on steroids</li></ul> |
| E ⭐️ | **Search bar**:<ul><li>You can type or paste [search queries](#manual_queries)</li><li>Use the **x** to clear the search bar</li><li>Click **Enter** or **Return** to launch a search or use the 🔍 next to the **x**</li></ul> |
| F | Toggle [**Current Dir**](#current_dir) ON to limit your searches to a selected [path](#path) - will remain active until you manually toggle OFF |
| G | [**Volume**](#volume) selection from either the left pane or the drop-down list at top right |




D) [**Analytics**](#analytics): To select one of the several built-in analytics.





I) 



K) [**Volumes**](#storage_volume): Drop-down list to select a specific volume - volumes can also be selected via O) the left pane.

L) **Gear Icon**: 
  - **Settings**: To modify the [settings](#settings) of the Diskover interface.
  - **Indices**: To select specific [indices](#indices).
  - **Task Panel**: For system administrators.
  - **Help**: Direct link to access our complete documentation catalog [docs.diskoverdata.com](https://docs.diskoverdata.com/)
  - **Reload Indices**: To refresh your [indices](#indices) and Z) charts.
  - **Logout**: To log out of Diskover.

<p id="green_info_bar"></p>

M) **Green bar**: This bar displays the following details:

  - **Items per page**: Number of items found during a search or when drilling down, ex:  _Showing 1 to 1000 of **9 items found**_
  - **Size of data**: Listed on the current page, ex: _Results size: **12 GB (this page)**_
  - **Path**: Shows the [path](#path) you are pointing to when drilling down, ex: _parent_path:\/mnt\/lucidlink\/projects_
  - **Search criteria**: Shows the criteria used for a search, either you are typing a manual query or using a [built-in search tool](#builtin_search_tools), ex:  _Search query: mov and tags:archive_
  - **Close green bar**: You can close this green bar by clicking the  **X**  at the far right, but it will reappear following your next action.
  - **Save queries**: You can [save a personal query](#save_query) that will only be visible to you by clicking the **Save** button in the green bar. You can then find and rerun that query under E) Quick > Saved Queries

<p id="path_navigation_bar"></p>

N) **Path bar**: Shows the [path](#path) you're drilling down, you cannot type in it, but you can click on any directory to navigate directly to it.

O) [**Volumes**](#storage_volume): To view and select available volumes from the left pane:
  - Your instance may have **top paths** as per this example where some [volumes](#storage_volume) may be regrouped under geo locations, data centers, etc.
  - If you hover a volume name, you will see the date and time that volume was last indexed.

    <img src="images/image_file_search_hovering_volume.png" width="350">

  - If you hover a fill bar, you will see the space used, free, and total for each volume.

    <img src="images/image_file_search_hovering_fill_bar.png" width="350">

P) [**Directories**](#directory): To view or drill down the directories inside the O) selected volume:
  - Hovering your mouse over a directory in the left pane will give you a snapshot of additional information.
  - Note that the left pane will only show directories with data in them. You can find all directories, empty or containing data, in the W) results pane.

    <img src="images/image_file_search_hovering_directory.png" width="400">

Q) **Last indexed**: Gives the date and time of the last scan of the selected volume.

R) **Optional navigation buttons**:
  - **Top**: Will bring you back to the top/root of the active [volume](#storage_volume).
  - **Up**: To drill up one [directory](#directory) at a time.
  - **Back and forth arrows**: To navigate back and forth between visited pages, you can also use the browser's arrows and the results will be the same.
  - **Hide Tree**: Will hide the left pane allowing for more space to investigate W) your results.
  - **Charts**: To hide/unhide the Z) charts.
  - **Reload**: To refresh your [indices](#indices) and Z) charts.

S) **Extension bar**: Will show all the file extensions detected in your results, either from drilling down or resulting from a search. Click any extension to list these specific items.

<p id="items_per_page"></p>

T) **Items per page**: To modify the number of items per page to display in W) the results pane – 10 minimum and 1,000 maximum - the reason to limit the number of items per page is speed, so data loads faster.

U) **Pages of results**: The number of pages of results is directly related to the number of T) items per page.

V) 

<p id="results_pane_overview"></p>

W) **Results pane**: To see the results when you drill down or from a [search](#file_search):
  - You can see more or less columns > gear icon > [Settings](#settings) > [Hide fields in search results](#hide_columns).
  - You can change the width of the columns by holding/dragging the line between two columns.
  - Contains several clickable icons which are explained in later in this guide, but briefly:
    - Grey **i** button: Will open the [attributes/metadata](#attributes) window for a [directory](#directory).
    - Grey **clipboard** button: To copy a [path](#path).
    - Blue **gears** button: To launch a [file action](#file_action)
    - Pinkish **dots** button - quick load: To launch a path in an [analytic](#analytics) format or to search [non-recursively or recursively](#recursive)

X) [**Sort**](#sort): You can sort the data in the W) results pane.

Y) **Action buttons**: These features are explained later in this guide or click a link below:
  - To [select all and unselect all](#line_selection) line items in your results pane.
  - To apply a manual [tag](#tags).
  - To [export](#export) your results, copy paths, or copy file names.
  - To [share](#share) your results URL with a co-worker or to copy a search query.
  - To launch a [file action](#file_action).

<p id="select_volume"></p>

Z) [**Charts**](#file_search_charts): Quick analytics of the selected path with different options in the drop-down list at the left top corner.

___
### How to Select a Volume

![Image: How to Select a Storage Volume](images/image_file_search_page_select_volume_20240219.png)

A) From the **left pane**, click on an arrow first to open a top path, if applicable, as you may not have any top paths in your instance.

B) From the **drop-down list** in the top menu.


<p id="select_directory"></p>

___
### How to Select a Directory

![Image: How to Select a Directory](images/image_file_search_page_select_directory_20240219.png)

There are several ways to drill down a file tree, here are the main ones:

A) From the **left pane**  below the volumes.

B) From the  **results pane**.

C) From the **path bar**, click any directory to navigate back to that specific directory.

D) Some people like to drill down using the [file tree analytic](#filetree).

>🔆 &nbsp;Note that the directories in A) the left pane and B) the results pane may differ as the left pane only shows directories with data in them. Empty directories will only be listed in the results pane.
