<p id="config_diskoveradmin_main"></p>

## DiskoverAdmin Configuration | Main Components

### Overview

Most help information is available directly in the user interface. This section offers additional guidance to support you during the configuration process.


<p id="config_diskover_web"></p>

___
### Extra Notes | Diskover-Web

<img src="images/diskoveradmin_menu_web.png" width="200">


<p id="config_path_translation"></p>

#### Path Translation

Here is an example of path translations. If you set the following path translation sets in DiskoverAdmin:

<img src="images/translation_set_1.png" width="">
<img src="images/translation_set_2.png" width="">

This is what users will see in their ⛭ → **Settings**:

<img src="images/translation_sets_in settings.png" width="500">


<p id="config_indexers"></p>

<p id=“config_es”></p>

___
### Extra Notes | Diskover Indexers/Workers & Elasticsearch

<img src="images/diskoveradmin_menu_diskover.png" width="200">





<p id="config_diskoverd"></p>

___
### Extra Notes | DiskoverD

<img src="images/diskoveradmin_menu_diskoverd.png" width="200">





<p id="config_alt_indexers"></p>

___
### Extra Notes | Diskover Alternate Indexers

<img src="images/diskoveradmin_menu_diskover.png" width="200">



<p id="config_alt_indexer_dircache"></p>

#### DirCache Alternate Indexer
<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

The DirCache alternate scanner can be used to speed up subsequent crawls when indexing slower network-mounted storage. DirCache uses an SQLite database to store a local cache of directories' mtimes (modified times), directories' file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount.




<p id="x"></p>

___
### Extra Notes | System

<img src="images/diskoveradmin_menu_system.png" width="200">

<p id="config_message_queue"></p>

#### Message Queue

<p id="config_smtp"></p>

#### SMTP

<p id="config_api"></p>

#### API
