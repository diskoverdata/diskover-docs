<p id="config_diskoveradmin_main"></p>

## DiskoverAdmin Configuration | Main Components

### Overview

Most help information is available directly in the user interface. This section offers additional guidance when applicable to support you during the configuration process.

🟨 &nbsp;**IMPORTANT!**

- Although specified throughout **DiskoverAdmin**, always assume that the fields are case-sensitive.
- For more information about [Python re.search](https://docs.python.org/3.7/library/re.html) whenever mentioned in the help text in DiskoverAdmin.


<p id="config_diskover_web"></p>

<p id="config_es_web"></p>

___
### Diskover-Web

<img src="images/diskoveradmin_menu_web.png" width="200">


<p id="config_top_paths"></p>

#### Top Paths
<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

By default, users will see a list of all volumes indexed by Diskover in the left pane of the user interface. You can however create Top Paths to organize your volumes (by location, project, etc.). In this example, note that the first collapsible option will always be **All Top Paths** and will list all your repositories.

<img src="images/top_path_by_location.png" width="300">


<p id="config_path_translation"></p>

#### Path Translation

##### Path Translation | Example 1

Here is an example of path translations. If you set the following path translation sets in DiskoverAdmin:

<img src="images/translation_set_1.png" width="">
<img src="images/translation_set_2.png" width="">

This is what users will see in their ⛭ → **Settings** and be able to select:

<img src="images/translation_sets_in settings.png" width="500">

##### Path Translation | Example 2

Let's say that this is the choice offered to a user in their ⛭ → **Settings**:

<img src="images/image_paths_translation_settings_in_diskover_ui.png" width="600">

And that this is the path structure they see in their results, then if they copy to the 📋 clipboard:

![Image: Pasted Path Within Clipboard](images/image_paths_translation_copy_path_from_diskover_ui.png)

This is the resulting path that would be copied:

![Image: Pasted Path Within Clipboard](images/image_paths_translation_paste_path_in_clipboard.png)





<p id="config_indexers"></p>

<p id="config_es"></p>

___
### Diskover Indexers/Workers & Elasticsearch

<img src="images/diskoveradmin_menu_diskover.png" width="200">

<p id="autotag"></p>

#### AutoTags
<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

Given the importance of tagging in data management, we dedicated an [entire chapter to **tags**](#tags).

#### Costs
<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

Besides the help text in DiskoverAdmin, you can find [more information here regarding **cost** configuration](#analytics_costs) as well as some use cases.


<p id="config_alt_indexers"></p>

___
### Diskover Alternate Indexers

<img src="images/diskoveradmin_menu_diskover.png" width="200">



<p id="config_alt_indexer_dircache"></p>

#### DirCache Alternate Indexer
<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

The DirCache alternate scanner can be used to speed up subsequent crawls when indexing slower network-mounted storage. DirCache uses an SQLite database to store a local cache of directories' mtimes (modified times), directories' file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount.








<p id="config_diskoverd"></p>

___
### DiskoverD

<img src="images/diskoveradmin_menu_diskoverd.png" width="200">






<p id="x"></p>

___
### System

<img src="images/diskoveradmin_menu_system.png" width="200">

<p id="config_message_queue"></p>

#### Message Queue

<p id="config_smtp"></p>

#### SMTP

<p id="config_api"></p>

#### API
