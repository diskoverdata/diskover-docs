<p id="config_manual_plugins"></p>

## Manual Configuration | Plugins

### Overview

  - All plugins will eventually be included in the [DiskoverAdmin](#config_diskoveradmin) panel, but a few are still only configurable manually.
  - Please [open a support ticket](https://support.diskoverdata.com/) if you currently use one of these plugins and need to upgrade to v2.3+.
  - Visit our [Plugins Ecosystem](https://diskoverdata.com/products/plugins/) webpage for a complete list of all our plugins.
  - The plugins in this chapter are listed alphabetically within each edition group. Here is a quick access list by category:

| EDITION |  PLUGIN |
| --- | --- |
| **Core Editions** | <ul><li>[Hash Differential Checksums File Action](#plugin_hash_diff)</li><li>[Ngenea Data Orchestrator File Action by PixtiMedia](#plugin_ngenea)</li><li>[Vcinity High-Speed Data Transfer File Action](#plugin_vcinity)</li></ul> |
| **Media** | <ul><li>[CineViewer Player File Action](#plugin_cineviewer)</li><li>[Find File Sequences File Action](#plugin_find_file_sequences)</li><li>[Flow Production Tracking Index Plugin (formerly ShotGrid)](#plugin_shotgrid)</li><li>[IMF Validator File action by Oxagile](#plugin_imf_validator)</li><li>[GLIM File Action](#plugin_glim)</li><li>[Xytec Asset Creation Index Plugin](#plugin_xytech_asset_creation)</li><li>[Xytec Order Status Index Plugin](#plugin_xytech_order_status)</li></ul> |
| **Life Science** | <ul><li>[BAM Index Plugin](#plugin_bam)</li><li>[Grant File Action](#plugin_grant)</li></ul> |

___
### Plugins | Core Editions

<p id="plugin_hash_diff"></p>

#### Hash Differential Checksums | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/plugins/#data-integrity) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/768967081) |

The Xytech Media Operations Platform order status plugin is designed to automate the correlation of the order management system and the storage system, by harvesting key business context from Xytech and applying that context within the AJA Diskover Media Edition. In turn, this business context metadata can be used to automate workflows, curate data, monitor costs, create highly customized reports, and search granularly.

Facilities often manually correlate the order management system with the storage repositories. However, manual processes are subject to human errors and difficult to scale as the volume of media orders and data turnover increases constantly.

Therefore, the lack of integration for file-based workflows between the order management system and the underlying storage repositories, makes data management decisions difficult as they are solely based on attributes of files or objects on storage. Additional business context is needed from the order management system to increase precision and accuracy of data management decisions.

An instance of key information might be the invoice date for a work order. A status change for a work order can be aa key indicator for data management, for example, once a Xytech media order has been “invoiced”, then the data associated with that media order can be a candidate for archival.


<p id="plugin_ngenea"></p>

#### Ngenea Data Orchestrator by PixitMedia | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | Download this [Solution Brief](https://diskoverdata.com/wp-content/uploads/2024/08/diskover_pixitmedia_ngenea_solution_brief.pdf) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/833500176?share=copy) |

With the Ngenea Data Orchestrator File Action, authorized users can quickly and securely transport data, directly from the Diskover UI, to and from globally distributed cloud, object storage, traditional NAS files, and tape resources, automatically moving data into the ‘right cost’ resource according to value and usage as your work teams and business needs demand.

<p id="plugin_vcinity"></p>

#### Vcinity High-Speed Data Transfer | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_professional.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="100">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | Download this [Solution Brief](https://diskoverdata.com/wp-content/uploads/2024/05/Diskover_Data_SB.pdf) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| Demo | [🍿 Watch Demo Video](https://youtu.be/l1XZoe-ZtEI) |

Regardless of distance and latency, the high-speed data transfer Vcinity Plugin provides the framework for reliable and fast data movement based on pre-configured source and destination profiles. 

The plugin can move NFS, SMB, and S3 to any NFS, SMB, and S3 vendor, no matter the brand, ex: Dell, NetApp, HPE, etc.

The Vcinity High-Speed Data Transfer Plugin provides two mechanisms within Diskover to trigger data movement: 1) on-demand user-initiated file action directly from the Diskover interface, and 2) scheduled automated workflow based on file attributes meeting predetermined criteria.






___
### Plugins | Media Edition

<p id="plugin_cineviewer"></p>

#### CineViewer Player by CineSys | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#cineviewer) and/or [contact AJA Video Systems](mailto:sales@aja.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#cineviewer-player) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/765285042?share=copy) |

##### Overview

CineViewer is a video playback and management system designed for video and broadcast professionals. It is designed to securely view high-resolution media from a remote browser, without giving users access to the source files, as well as play content that may not be supported by standard web browsers, including file formats such as ProRes and MXF. Additionally, Cineviewer allows users to play back image sequences in formats such as DPX and EXR. The player can be launched in one click from the AJA Diskover Media Edition user interface, allowing for seamless validation of media assets, therefore increasing productivity, while safeguarding your production network.

With its timecode-accurate playback and seeking capabilities, CineViewer enables users to navigate through content with precision. The system also supports up to 16 channels of audio, providing a variety of audio configuration options to accommodate different projects. Furthermore, Cineviewer includes closed captioning functionality, ensuring an accessible experience for all users.

The following sections will guide you through the installation and configuration of CineViewer, helping you utilize this tool effectively for your video and broadcast needs.

The CineViewer Player is developed by [CineSys LLC](https://cinesys.io/), a major technological and channel partner working with both Diskover Data and [AJA Video Systems](https://www.aja.com/). For more information, support, or to purchase the CineViewer Player, please contact [CineSys.io](https://cinesys.io/contact-us/).

![Image: CineViewer Player Preview](images/image_file_action_cineviewer_preview.png)

<p id="plugin_find_file_sequences"></p>

#### Find File Sequences | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#file-sequences) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#find-file-sequences) |

The File Sequence web plugin File Action is designed to list out any file sequences in a directory or from a single file in a sequence. File sequences are printed out with `%08d` to show the 0 padding and number of digits in the sequence. Each sequence, whole or broken, are put into a [ ] list. [Learn more about this plugin](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#find-file-sequences).

![Image: File Sequences Results](images/image_file_action_results_tech.png)

<p id="plugin_shotgrid"></p>

#### Flow Production Tracking (formerly ShotGrid) | Index Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#flowprodtracking) and/or [contact AJA Video Systems](mailto:sales@aja.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#flow-production-tracking-plugin) |

Designed to enhance basic metadata with detailed production status information, aligning data management with production schedules. The Diskover Flow Production Tracking Plugin harvests additional attributes from the [Autodesk Flow Production Tracking platform](https://www.autodesk.com/products/flow-production-tracking/) for every shot directory located on storage. These attributes become properties of the shot directories and include status information such as finaled, out-of-picture, multiple project tracking dates, and many more, totaling around one hundred indexable fields. Note that users can opt to only index the fields that are relevant to their business.


<p id="plugin_imf_validator"></p>

#### IMF Package Validator by Oxagile | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#imf-package-validator) and/or [contact Oxagile](mailto:IMF@Oxagile.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#imf-package-validator) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/828166808) |

##### Overview

The IMF package validator plugin allows organizations to validate IMF packages before delivery from a remote platform, saving immense amounts of man-hours over the course of a business year.

Oxagile’s IMF Package Validator Plugin, exclusively designed for the AJA Diskover Media Edition, allows users to scan and validate IMF packages before delivery from any location, regardless of the location of the IMF package data.

IMF stands for Interoperable Master Format, which is a technical standard used in the Media and Entertainment industry for the exchange of digital content between different platforms and systems. The IMF format is used by content creators, distributors, and broadcasters to deliver high-quality video content to a variety of devices, including TVs, mobile devices, and web browsers.

Netflix, for example, requires all their content to be delivered in IMF format, which undergoes rigorous validation to ensure compliance with industry standards. The validation process involves extensive testing of the content's video, audio, and metadata to ensure that it meets the technical specifications and can be delivered to viewers in the highest quality possible.

Once the content has been validated, it is then encoded into various formats, including 4K and HDR, and made available for streaming on various platforms. The IMF validation process is a critical step in the content delivery pipeline.

##### Trial and Purchase of the Plugin

The IMF Package Validator plugin is developed and sold exclusively by [Oxagile](https://www.oxagile.com/), a major technological partner working with both Diskover Data and [AJA Video Systems](https://www.aja.com/). For more information, to start a 30 day trial, or to purchase the IMF Package Validator plugin, please contact [Oxagile](mailto:IMF@Oxagile.com).

##### Functional Limitations

The following are the limitations of the current plugin version:

1.	Verification capabilities are limited with those of the latest version of Netflix Photon tool.
2.	Validation by schedule is not supported.
3.	Cloud storage is not supported.
4.	Archives are not supported.
5.	DCP packages are not supported.

<p id="plugin_glim"></p>

#### Telestream GLIM | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#glim) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#glim-previewvalidate-media-files) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/665037937) |

This plugin results in a seamless integration with GLIM, allowing end-users to safely view and validate media files, while safeguarding your source assets and production network. Diskover allows users to do advanced searches of media assets, and then launch GLIM in one click via our File Actions. You need to have a GLIM account and be logged in previously to launch the GLIM preview plugin within Diskover.



<p id="plugin_xytech_asset_creation"></p>

#### Xytech Asset Creation | Index Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#xytech-asset-creation) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-asset-creation-plugin-overview) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/660789118) |

Post facilities often have customers’ assets that have been archived and lack findability, visibility, and searchability, and therefore, the opaque nature of these assets makes them difficult to reuse or repurpose. Companies with years of such archived assets have often stored these on tape media or removable hard drives, which are often stored in a physical vault.

Assets were often stored on such “offline” media due to costs; however, with the advent of cloud and object storage, the economics are now making it viable to store such vaulted assets on more “online media”. Although, simply putting these assets onto online media does not necessarily make these assets findable in context or within the facility’s order management system.

The Xytech asset creation tool is designed to find and index newly restored online assets from LTO tapes, removable hard drives, etc., making them available, findable, and searchable within the Xytech order management system, as well as Diskover.

The plugin operates on the assumption that the assets restored to online media are placed into a folder with the following naming convention: **CustomerID_CustomerName**

The path location is added to the asset within Xytech and the asset number is assigned to the file via a tag within the Diskover Index.



<p id="plugin_xytech_order_status"></p>

#### Xytech Order Status | Index Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_media.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment.
| Learn more | [Visit our website](https://diskoverdata.com/products/products-aja-media-edition/#xytech-order-status) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| User Guide | [AJA Diskover Media Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-order-status-plugin-overview) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/768967081) |

The Xytech Media Operations Platform order status plugin is designed to automate the correlation of the order management system and the storage system, by harvesting key business context from Xytech and applying that context within the AJA Diskover Media Edition. In turn, this business context metadata can be used to automate workflows, curate data, monitor costs, create highly customized reports, and search granularly.

Facilities often manually correlate the order management system with the storage repositories. However, manual processes are subject to human errors and difficult to scale as the volume of media orders and data turnover increases constantly.

Therefore, the lack of integration for file-based workflows between the order management system and the underlying storage repositories, makes data management decisions difficult as they are solely based on attributes of files or objects on storage. Additional business context is needed from the order management system to increase precision and accuracy of data management decisions.

An instance of key information might be the invoice date for a work order. A status change for a work order can be aa key indicator for data management, for example, once a Xytech media order has been “invoiced”, then the data associated with that media order can be a candidate for archival.


___
### Plugins | Life Science Edition

<p id="plugin_bam"></p>

#### BAM Info | Index Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_life_science.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/life-science-edition/#bam-plugin) and/or [contact Diskover](mailto:sales@diskoverdata.com) |
| User Guide | [Diskover Life Science Edition Companion Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/#bam-harvest-plugin) |
| Demo | [🍿 Watch Demo Video](https://vimeo.com/678914314?share=copy) |

##### Overview

The BAM info plugin is designed to enable additional metadata collection for BAM (Binary Alignment Map) and SAM (Sequence Alignment Map) about a file without granting the Diskover user any read/write file system access. The BAM info plugin enables additional metadata for the SAM and BAM file formats to be harvested at time of index, and are therefore searchable, reportable, actionable, and can be engaged in workflows within Diskover.

- The specification for the SAM file format can be found here:
  [https://samtools.github.io/hts-specs/SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf)
- The BAM info plugin uses the Python **pysam** to harvest attributes about the BAM and SAM files:
  [https://pysam.readthedocs.io/en/latest/](https://pysam.readthedocs.io/en/latest/)

New indices will use the plugin, and any SAM or BAM file will get additional info added to the Elasticsearch index’s **bam_info** field. The attributes provide the ability to view storage and file system content from a workflow perspective, for example, all the frame rates on any given storage.

![Image: Diskover Grant Plugin Overview](images/diagram_diskover_plugin_grant.png)

_[Click here for a full-screen view of this image.](images/diagram_diskover_plugin_grant.png)_

##### BAM Info Fields in Diskover-Web

Please refer to the [Diskover User Guide Companion | Life Science Edition](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/) for more details, including how to search using the BAM info fields.

The BAM info attributes in Diskover-Web:
```
bam_info.co_cmd:
bam_info.co_cmd_checksum:
bam_info.co.key:
bam_info.co.value:
bam_info.pg.id:
bam_info.pg.vn:
```

![Image: Extra Field for BAM Plugin](images/plugin_bam_attributes_search_page.png)

![Image: BAM Info Detailed View in File Attributes](images/plugin_bam_attributes_window.png)


<p id="plugin_grant"></p>

#### Grant Research | File Action Plugin

| HELP | RESOURCE |
| --- | --- |
| Availability | <img src="images/button_edition_life_science.png" width="100"> |
| Installation | 🛟 &nbsp;[Click here to open a support ticket](https://support.diskoverdata.com/) to request assistance with installing this plugin, whether you want to test or deploy it in your production environment. |
| Learn more | [Visit our website](https://diskoverdata.com/products/life-science-edition/#grant-plugin) and/or [contact Diskover](mailto:sales@diskoverdata.com) |

The Grant Plugin has a dual purpose 1) assisting research institutes in managing their grants/members/storage costs internally, and 2) fulfilling the requirements for the new NIH DMS Policy.

The Grant Plugin collects and parses grants’ metadata (grant number, group ID, etc.) to curated datasets. In turn, staff associated with a specific grant has visibility/searchability of their limited data/grant without access to the source files or other grants. That extra metadata is also available to use for further workflow automation if needed.

![Image: Diskover BAM Plugin Overview](images/diagram_diskover_plugin_grant.png)

_[Click here for a full-screen view of this image.](images/diagram_diskover_plugin_grant.png)_





