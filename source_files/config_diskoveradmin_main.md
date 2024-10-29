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

All alternate indexers will eventually be included in the DiskoverAdmin panel, but a few [alternate indexers are still configurable manually](#config_manual_alt_indexers). All alternated indexers configurable in DiskoverAdmin can be found here:

<img src="images/diskoveradmin_menu_diskover.png" width="200">



<p id="config_alt_indexer_azure"></p>

#### Azure Blob

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | <p>While you can cost-effectively store and access unstructured data at scale with Microsoft Azure blob storage, searching through multiple accounts or blob containers is not possible from the Azure interface. The storage explorer portal doesn't allow users to search all folders at once, plus you need to know the exact file name you are looking for as wild cards are not permitted either.</p><p>Diskover offers the Azure blob storage scanner allowing you to index petabytes of data at blazing speed. In turn, you can easily find any file with a single query, whether that file is located in an Azure blob or any other volumes indexed with Diskover.</p><p>Note that attributes are collected during this process. These extra fields become searchable, reportable for analysis, and actionable, allowing for potential upstream file management, manually or via automated scheduled tasks.</p> |



<p id="config_alt_indexer_dircache"></p>

#### DirCache Alternate Indexer

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_essential.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | The DirCache alternate scanner can be used to speed up subsequent crawls when indexing slower network-mounted storage. DirCache uses an SQLite database to store a local cache of directories' mtimes (modified times), directories' file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount. |



<p id="config_alt_indexer_offline_media"></p>

#### Offline Media Indexer

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | <p>The Offline Media Indexer offers a simple solution to index all your offline data devices. During the indexing process, Diskover automatically creates a new OFFLINE MEDIA volume listing all indexed offline devices as a directory. The index of your offline media stays persistent once the drive is disconnected and put back on the shelf.</p><p>If your search results point to an offline media, use the reference name or number you attributed to the offline media to locate the device. Then, just reconnect it to retrieve the desired files.</p><p>There are several Diskover features you can use with those static indices like tags, export, share, and investigate using our multiple analytical tools. Then, if you decide to fully rehydrate that data, more cool things are available like actions via plugins and scheduled workflow automation.</p> |



<p id="config_alt_indexer_s3"></p>

#### S3 | AWS or Non-AWS Endpoints

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | <p>Unlock the full potential of your cloud storage with Diskover's advanced indexing capabilities for S3 buckets and S3-compatible storage with endpoints different than AWS. Seamlessly integrate and manage data across various cloud environments, ensuring comprehensive metadata extraction and efficient data organization. Diskover's robust indexing solution supports diverse storage configurations, providing unparalleled flexibility and control over your data assets.</p><p>Enhance your cloud storage strategy with Diskover Data's powerful indexing tools, designed to optimize your data visibility and streamline your workflows across multiple platforms.</p> |


<p id="config_diskoverd"></p>

___
### DiskoverD

<img src="images/diskoveradmin_menu_diskoverd.png" width="200">






<p id="config_system"></p>

___
### System

<img src="images/diskoveradmin_menu_system.png" width="200">


