<p id="user_interface"></p>

___
## User Interface Overview
___

### Terminology

Although the terms described in this section may have slightly different interpretations in other contexts, they are defined here within the Diskover end-user environment.

<p id="storage_volume"></p>

#### Storage Volume

A storage location that you want to index, for example: Windows Share/drive, Linux mount/NFS Export, cloud storage, S3 bucket, etc.

Examples of other names for storage volume that might be used in your organization: storage mount, mount point, top level path, top level storage directory, volume.

Read more about [how to select a volume](#select_volume).

<p id="index"></p>

#### Index/Indices

An index is an inventory of all the files on a storage volume; it allows the data to be searched quickly via the index instead of the operating system  find commands. Both  **indexes**  and  **indices**  have the same meaning, and are the plural of index, although indices is usually preferred in a technical context.

- You can have multiple inventories/indices of a storage volume at different times.
- Indices typically contain directory name, file name, file size, creation date, modify date, owner, etc.
- Diskover’s software populates the indices with additional metadata  and makes these attributes searchable, pushing the searches and reporting to a higher level of business and schedule awareness:
	- Adds business context.
	- Adds schedule context.
	- Allow searches on image attributes for media files (resolution, frame rate, color bits), etc.

Read more about [how to use indices](#indices).

<p id="directory"></p>

#### Directory/Folder

There are very subtle differences between a directory and a folder, but in the context of this guide, they are interchangeable and have the same meaning: a container to store/organize other directories/folders and files.

Read more about [how to select a directory](#select_directory).

<p id="recursive"></p>

#### Recursive and Non-Recursive

**Non-Recursive**: Will search or apply action to only the path/directory/file you are pointing to.

**Recursive**: Will search or apply action to the path/directory, as well as all sub-directories and files, inside that path.

#### Elasticsearch

Diskover uses Elasticsearch in the backend for its speed and reliability. Below is an overview of the Diskover architecture.

![Image: Diskover Architecture Overview](images/diagram_diskover_architecture_overview.png)

_[Click here for a full screen view of the Diskover Architecture Overview diagram.](images/diagram_diskover_architecture_overview.png)_

In order to better understand the terminology used by Elasticsearch and throughout the Diskover documentation, please refer to this diagram.

![Image: Diskover Architecture Overview](images/diagram_diskover_elasticsearch_architecture.png)

_[Click here for a full screen view of the Elasticsearch Architecture diagram.](images/diagram_diskover_elasticsearch_architecture.png)_

You can search across several indices with: &nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

You can search across several clusters with: &nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

___
### Web Browser

Diskover should look and act the same on any browser. The only thing to keep in mind is if, for example, you apply some modifications in your [settings](#settings) in Google Chrome, they will not transfer to Safari because the [settings](#settings) are tied to the cookies  of a browser. In this example, you would need to apply the same [settings](#settings) in Safari.

<p id="login"></p>

___
### Login

A) Open a  **Web browser**  of your choice and type the  **URL address**  that was supplied to you by the System Administrator of your facility.
B) Enter the  **Username**  and  **Password**. Your System Administrator configures the login mechanism.
C) Click on  **Login**.

<img src="images/image_login_window_logo_diskover.png" width="300">

<p id="ui_overview"></p>

___
### User Interface Overview

This section offers an overview of the user interface. All icons, drop-down lists and tools will be further explained in the next chapters.

![Image: Quick Tour of the User Interface](images/image_file_search_page_overview.png)

A) **Company logo**: No functions.

B) **[Dashboard](#dashboard)**: Offers a visual summary of a selected storage volume.

C) [**File search page**](#file_search): The file search tool with which most users will interact.

D) **Analytics**: Built-in data analytic reports.

E) [**Quick search**](#quick_search): To quickly search on a single pre-established criterion.

F) **Search bar**: To type and paste [search queries](#search_syntax).

G) **Clear**: To clear the search bar.

H) **Launch a search**: Same function as a  **Return**  key.

I)  **Current Dir**: Toggle right to narrow your results to a selected storage volume and/or directory.

J) [**Search Filters**](#filters): Built-in filters to refine your searches.

K) [**Storage volumes**](#storage_volume): Drop-down list for selection of available storage volumes.

L) [**Settings**](#settings): To personalize your interface via the settings, access to indices, help and logout.

M) **Info bar**: Depending on your interaction, this bar will give you one, or a combination, of the following:

>- Details on the results of your search, ex:  _Showing 1 to 100 of 270 items found in 0.0201 seconds. Results size: 664.3 GB (this page)_
>- Which storage volume/directory you are pointing to, ex:  _parent_path:/mnt/media_
>- Shows search query either you are typing a manual query or using a built-in search tool (Filters, Quick Search, etc.), ex:  _Search query: mov and tags:archive_
>- This bar can be closed clicking the  **X**  at the far right.

N) **Path navigation bar**: Shows the path you’re working in (storage volume, directory, sub-directory, etc.), you cannot type in it, but you can click on any storage volume or directory and navigate that way.

O) [**Storage volumes**](#storage_volume): To view and select available storage volumes.

P) [**Directories**](#directory): To view and select available directories inside the selected storage volume.

Q) **Items per page**: To modify the number of items per page to display – choices between 10 to 1,000.

R) **Pages of results**: The number of pages of results is directly related to the number of Q) items per page.
<p id="result_pane_columns"></p>

S) **Headers and Columns**: Columns can be added or removed in [Settings](#settings) > [Hide fields in search results](#hide_columns). <a id="columns_sort"></a>Also, you can sort any columns:
>- By using the arrows as specified in the legend.
>- Choice of primary and secondary sort.
>- Ascending or descending.
>- Start by clearing the [sorted columns by default](#default_columns_sort) by clicking on the colored arrows and then select the columns and orders you want.
>![Image: Column Sorting](images/image_file_search_page_column_sorting.png)

T) **Search results pane**: Section where you can either see the full content of a storage volume, a directory, or search results following a query.

> 🔆 &nbsp;You can adjust the width of the columns in T) search results  pane by sliding the thin vertical line in between the columns.

U) **Storage volume last indexed**: Gives the date and time of the last scan of the selected storage volume.

> 🔆 &nbsp;Hovering  your mouse over a [storage volume](#storage_volume) or a [directory](#directory) in the left pane will show more data about that specific directory (path, size, number of items, etc.).

<img src="images/image_file_search_hovering_directory.png" width="300"> ![Image: Hovering Over a Storage Volume](images/image_file_search_hovering_volume.png)

It is preferable to use the  **backward**  and  **forward**  buttons on your web browser to navigate between pages you have already visited. You can also use the back and forth buttons on the left pane of the file search window, but we found that they are not always responsive depending on which browser is being used.

<p id="select_volume"></p>

___
### How to Select a Storage Volume

![Image: How to Select a Storage Volume](images/image_file_search_page_select_volume.png)

A) Via the  **left pane** (at the top in green).

B) Via the  **path navigation bar**.

C) Via the  **drop-down list**  at the top right corner.

<p id="select_directory"></p>

___
### How to Select a Directory

![Image: How to Select a Directory](images/image_file_search_page_select_directory.png)

A) Via the  **left pane**  below the storage volumes – click on a directory to drill down the file tree.

B) Via the  **path navigation bar**.

C) Within the  **search results pane**.
