<p id="config_plugins_index"></p>

## Index Plugins Configuration

### Overview

Diskover sets the standard in the data management market with its extensive range of metadata harvest plugins, which enrich data with a comprehensive set of business-context attributes.

This extra metadata is an invaluable asset for locating, organizing, and analyzing specific data, as well as for designing workflows tailored to precise data management tasks. To ensure optimal performance and scanning speed, some of these plugins can be executed at time of index or as a post-index task. **This chapter covers plugins that run at time of index.**

⚠️ &nbsp;**IMPORTANT!** Once the plugin is configured, a task needs to be created and scheduled in the [**Task Panel**](#task_panel).

| Plugins Configurable via DiskoverAdmin | Plugins Manually Configurable |
| --- | --- |
| <ul><li>Most plugins are now configurable directly in the **DiskoverAdmin** panel.</li><li>Help information is available directly within the user interface.</li><li>This section provides additional guidance when applicable.</li></ul><br><img src="images/diskoveradmin_menu_plugins_index.png" width="200"> | <ul><li>Note that a few plugins are still configurable via a terminal.</li><li>[🛟 Open a support ticket](https://support.diskoverdata.com/) if you currently use one of these plugins and need to upgrade to v2.3+.</li></ul> |

### Quick Access List

The plugins in this chapter are listed alphabetically. Here is a quick access list by edition:

| APPLICATION |  PLUGIN |
| --- | --- |
| **Core** | <ul><li>[Checksums](#plugin_index_checksums)</li><li>[File Kind](#plugin_index_file_kind)</li><li>[First Index/Arrival Time](#plugin_index_first_index)</li><li>[Grafana](#plugin_index_grafana)</li><li>[Grafana Cloud](#plugin_index_grafana_cloud)</li><li>[Image Info](#plugin_index_image_info)</li><li>[Path Tokens](#plugin_index_path_tokens)</li><li>[PDF Info](#plugin_index_pdf_info)</li><li>[Tag Copier](#plugin_index_tag_copier)</li><li>[Unix Perms](#plugin_index_unix_perms)</li><li>[Windows Owner](#plugin_index_windows_owner)</li></ul> |
| **Media** | <ul><li>[Media Info](#plugin_index_mediainfo)</li></ul> |
| **Life Science** | <ul><li>[BAM Index Plugin](#plugin_index_bam)</li></ul> |



<p id="plugin_index_bam"></p>

#### BAM Info

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_life_science.png" width="95"> |
| Enable/Config | Via a terminal<br>🛟 &nbsp;[Open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin |
| Learn More | [Visit our website](https://diskoverdata.com/products/life-science-edition/#bam-plugin) \| [Contact Diskover](mailto:sales@diskoverdata.com) |
| User Guide | [Diskover Life Science Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/#bam-harvest-plugin) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/678914314?share=copy) |
| Purpose | The BAM info plugin is designed to enable additional metadata collection for BAM (Binary Alignment Map) and SAM (Sequence Alignment Map) about a file without granting the Diskover user any read/write file system access. The BAM info plugin enables additional metadata for the SAM and BAM file formats to be harvested at time of index, and are therefore searchable, reportable, actionable, and can be engaged in workflows within Diskover.<br><br>[Learn more about the specification for the SAM file format.](https://samtools.github.io/hts-specs/SAMv1.pdf)<br><br>[Learn more about how the BAM info plugin uses the Python **pysam** to harvest attributes about the BAM and SAM files.](https://pysam.readthedocs.io/en/latest/)<br><br>New indices will use the plugin, and any SAM or BAM file will get additional info added to the Elasticsearch index’s **bam_info** field. The attributes provide the ability to view storage and file system content from a workflow perspective, for example, all the frame rates on any given storage. |



<p id="plugin_index_checksums"></p>

#### Checksums

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_essential.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| To learn more | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Demo | [🍿 Watch a video](https://vimeo.com/828166808) showing one way hash values can be used |
| Purpose | Adds xxhash, md5, sha1, and sha256 hash values to files in Elasticsearch indices to use for checksums/data integrity. Hash values are like fingerprints; they are unique to each file. They are the results of a cryptographic algorithm, which is a mathematical equation with different complexity and security levels, used to scramble the plain text and make it unreadable. They are used for data encryption, authentication, and digital signatures. |


<p id="plugin_index_file_kind"></p>

#### File Kind

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Allows users to categorize file types by groups and adds the extra metadata to the Elasticsearch index during the scanning process, useful for reporting purposes. |


<p id="plugin_index_first_index"></p>

#### First Index/Arrival Time

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Triggers the creation of an additional attribute when Diskover first detects a new file in a given location and adds the extra metadata to the Elasticsearch index during the scanning process.|



<p id="plugin_index_grafana"></p>

#### Grafana

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_essential.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Provides the ability to visualize and trend data metrics over time using Grafana. The plugin rolls up summary data and creates Grafana-specific indices within Elasticsearch. These indices use time series @timestamp metrics to separate logstash- indices, indexes directory size, counts up to N dir depths (default 2). Elasticsearch can then use these summary indexes as a data source for viewing these logstash indices from Grafana. |



<p id="plugin_index_grafana_cloud"></p>

#### Grafana Cloud

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_essential.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Provides the ability to visualize and trend data metrics over time using Grafana Cloud. The plugin rolls up summary data and creates Grafana-specific indices within Elasticsearch. These indices use time series @timestamp metrics to separate logstash- indices, indexes directory size, counts up to N dir depths (default 2). Elasticsearch can then use these summary indexes as a data source for viewing these logstash indices from Grafana. |


<p id="plugin_index_image_info"></p>

#### Image Info

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Designed to add Image EXIF info metadata from your image files to the Elasticsearch index during the scanning process. Exchangeable Image File Format is a standardized way of storing useful metadata in digital image files. It holds a wealth of technical information about how the image was created, including the time and date it was taken, the camera and lens that was used, and the shooting settings. |




<p id="plugin_index_mediainfo"></p>

#### Media Info

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#mediainfo) \| [Contact AJA Video Systems](mailto:sales@aja.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#media-info-attributes) |
| Purpose | Adds business context and searchability via additional media file attributes (resolution, codec, pixel format, etc.). The enriched metadata is key for granular analysis, workflow automation, and overall data curation. <br><br>The media info harvest plugin is designed to provide media metadata attributes about a file without granting the Diskover user any read/write file system access. New indices will use the plugin and any video file will get additional media info added to the Elasticsearch index’s **media_info field**. The attributes provide the ability to view storage and file system content from a workflow perspective, for example, all the frame rates on any given storage. |


<p id="plugin_index_path_tokens"></p>

#### Path Tokens

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Designed to break down concatenated directory/file names and add the tokenized metadata to the Elasticsearch index during the scanning process. |


<p id="plugin_index_pdf_info"></p>

#### PDF Info

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Designed to add several metadata fields from your PDF files to the Elasticsearch index during the scanning process. |




<p id="plugin_index_tag_copier"></p>

#### Tag Copier

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Visit our website](https://diskoverdata.com/platform/enrich/#tags) | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purppose | Designed to migrate tags from one index to the next. Generally, these tags are applied post index through manual tag application or plugin tag application. Note that there is also a [post-index Tag Copier plugin](#plugin_post_index_tag_copier). |



<p id="plugin_index_unix_perms"></p>

#### Unix Perms

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_essential.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Adds the Unix permission attributes of each file and directory to the Elasticsearch data catalog during indexing. Two tags are added, **unixperms-plugin** and **ugo+rwx**, if a file or directory is found with fully open permissions (777 or 666). |



<p id="plugin_index_windows_owner"></p>

#### Windows Owner

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_essential.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95"> |
| Enable/Config | Via the DiskoverAdmin panel |
| Learn More | [Contact Diskover](mailto:sales@diskoverdata.com) |
| Purpose | Adds the Windows file owner and primary group of each file and directory to the Diskover index at time of indexing. It replaces all docs showing username 0 with the Windows file/directory owner name. |
