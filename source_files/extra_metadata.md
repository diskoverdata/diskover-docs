<p id="additional_metadata"></p>

## Base Metadata

### Overview

### Additional Metadata Fields

These extra metadata fields are harvested using index and post-index plugins.

| Tool | What it means | Field names |
| --- | --- | --- |
| **BAM** | extra metadata for [sam and bam files when using the BAM plugin](https://diskoverdata.com/products/life-science-edition/#bam-plugin) | refer to the [Diskover Life Science User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/#bam-harvest-plugin) for the list of fields |
| **Cost** | storage space cost when [Cost Analysis feature is configured in Diskover](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#storage-cost-reporting) | `costpergb` > search example `costpergb:[10 TO 500]` |
| **Dupes Finder** | field populated when using the [Dupes Finder plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#duplicates-finder-plugin) | `is_dupe`
| **Dell PowerScale** | multiple [Dell PowerScale attributes](https://diskoverdata.com/products/dataiq-migration/#platform-overview) can be harvested when using the alternate indexer | please refer to the [indexer diagram for all fields harvested](https://diskoverdata.com/products/dataiq-migration/#platform-overview) |
| **Grant** | extra metadata for [research grant info when using the Grant plugin](https://diskoverdata.com/products/life-science-edition/#grant-plugin) | `assigned_grant`, `SG-group`, `ProjectId` |
| **Hash Values** | harvested when using the [hash value plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#duplicates-plugin) for checksums | `hash.xxhash`, `hash.md5`, `hash.sha256`, `hash.sha1` |
| **Media Info** | attributes harvested using the [Media Info plugin](https://diskoverdata.com/products/products-aja-media-edition/#mediainfo) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#media-info-attributes) for the list of fields and how to use them |
| **Microsoft Azure Blob** | fields collected when using the Microsoft Azure Blob indexer | `azure_etag`, `azure_tier` |
| **S3** | attributes collected when using the [S3 alternate indexer](https://docs.diskoverdata.com/diskover_installation_guide/#create-an-index-of-an-s3-bucket) | `s3_etag`, `s3_storageclass` |
| **ShotGrid** | fields harvested when using the [Autodesk Flow Production Tracking (formerly ShotGrid) plugin](https://diskoverdata.com/products/products-aja-media-edition/#flowprodtracking) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#flow-production-tracking-plugin) for the list of fields |
| **Tags** | manual or auto tags attributed for [items tagged within Diskover](https://docs.diskoverdata.com/diskover_user_guide/#tags) | `tags`, search example `tags:delete` > any tag name associated with a file or directory, tag name is case sensitive |
| **Unix Permissions** | field harvested when using the [Unix Permission plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#unix-permissions-plugin) | `unix_perms` > search example `unix_perms:777` |
| **Windows Owner** | fields harvested when using the [Windows Owner plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#windows-owner-plugin) | `windows_owner`, `windows_group` |
| **Xytech Asset Creation** | fields harvested when using the [Xytech Asset Creation plugin](https://diskoverdata.com/products/products-aja-media-edition/#xytech-asset-creation) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-asset-creation-plugin-overview) for the list of fields and how to use them |
| **Xytech Order Status** | fields harvested when using the [Xytech Order Status plugin](https://diskoverdata.com/products/products-aja-media-edition/#xytech-order-status) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-order-status-plugin-overview) for the list of fields and how to use them |
