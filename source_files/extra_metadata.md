<p id="extra_metadata"></p>

## Business-Context Metadata

### Overview
Additional metadata fields can be harvested using Diskover plugins, extending the depth of searchable information beyond the default fields. These plugins enable you to extract specialized metadata tailored to your workflows, providing enhanced visibility and search capabilities. For a complete list of available fields, along with instructions and examples on how to search using them, please refer to our [Metadata Catalog](https://docs.diskoverdata.com/diskover_metadata_catalog/#extra_metadata).

### Additional Metadata Fields

listed aphabelitacally

These extra metadata fields are harvested using index and post-index plugins. filesystem



| FIELD NAME | USE CASE | DESCRIPTION | HOW TO USE |
| --- | --- | --- | --- |

**Arrival time**



**Azure**

azure_etag
azure_tier


| **BAM** | extra metadata for [sam and bam files when using the BAM plugin](https://diskoverdata.com/products/life-science-edition/#bam-plugin) | refer to the [Diskover Life Science User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/#bam-harvest-plugin) for the list of fields |

bam_info
bam_info.co
bam_info.co_cmd
bam_info.co_cmd_checksum
bam_info.pg


| **Cost** | storage space cost when [Cost Analysis feature is configured in Diskover](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#storage-cost-reporting) | `costpergb` > search example `costpergb:[10 TO 500]` |
costpergb


| **Dupes Finder** | field populated when using the [Dupes Finder plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#duplicates-finder-plugin) | `is_dupe`


| **Dell PowerScale** | multiple [Dell PowerScale attributes](https://diskoverdata.com/products/dataiq-migration/#platform-overview) can be harvested when using the alternate indexer | please refer to the [indexer diagram for all fields harvested](https://diskoverdata.com/products/dataiq-migration/#platform-overview) |


| **Grant** | extra metadata for [research grant info when using the Grant plugin](https://diskoverdata.com/products/life-science-edition/#grant-plugin) | `assigned_grant`, `SG-group`, `ProjectId` |


| **Hash Values** | harvested when using the [hash value plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#duplicates-plugin) for checksums | `hash.xxhash`, `hash.md5`, `hash.sha256`, `hash.sha1` |


**Image Info**
image_info
image_info.error
image_info.exif_59932
image_info.exif_artist
image_info.exif_bitspersample
image_info.exif_compression
image_info.exif_contrast
image_info.exif_copyright
image_info.exif_customrendered
image_info.exif_datetime
image_info.exif_digitalzoomratio
image_info.exif_documentname
image_info.exif_exifoffset
image_info.exif_exposuremode
image_info.exif_extrasamples
image_info.exif_fillorder
image_info.exif_focallengthin35mmfilm
image_info.exif_gaincontrol
image_info.exif_gamma
image_info.exif_gpsinfo
image_info.exif_hostcomputer
image_info.exif_imagedescription
image_info.exif_imagelength
image_info.exif_imageresources
image_info.exif_imagewidth
image_info.exif_intercolorprofile
image_info.exif_jpegtables
image_info.exif_make
image_info.exif_model
image_info.exif_newsubfiletype
image_info.exif_orientation
image_info.exif_pagename
image_info.exif_pagenumber
image_info.exif_photometricinterpretation
image_info.exif_planarconfiguration
image_info.exif_predictor
image_info.exif_primarychromaticities
image_info.exif_printimagematching
image_info.exif_referenceblackwhite
image_info.exif_relatedimagelength
image_info.exif_relatedimagewidth
image_info.exif_resolutionunit
image_info.exif_rowsperstrip
image_info.exif_sampleformat
image_info.exif_samplesperpixel
image_info.exif_saturation
image_info.exif_scenecapturetype
image_info.exif_sharpness
image_info.exif_software
image_info.exif_stripbytecounts
image_info.exif_stripoffsets
image_info.exif_subfiletype
image_info.exif_subjectdistancerange
image_info.exif_whitebalance
image_info.exif_whitepoint
image_info.exif_xmlpacket
image_info.exif_xpauthor
image_info.exif_xpcomment
image_info.exif_xpkeywords
image_info.exif_xpsubject
image_info.exif_xptitle
image_info.exif_xresolution
image_info.exif_ycbcrcoefficients
image_info.exif_ycbcrpositioning
image_info.exif_ycbcrsubsampling
image_info.exif_yresolution
image_info.format
image_info.height
image_info.is_animated
image_info.mode
image_info.n_frames
image_info.width

| **Media Info** | attributes harvested using the [Media Info plugin](https://diskoverdata.com/products/products-aja-media-edition/#mediainfo) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#media-info-attributes) for the list of fields and how to use them |

media_info
media_info.Audio
media_info.General
media_info.Other
media_info.Video
media_info.bitrate
media_info.codec
media_info.codeclong
media_info.codectag
media_info.duration
media_info.error
media_info.framerate
media_info.frames
media_info.pixfmt
media_info.resolution

| **Microsoft Azure Blob** | fields collected when using the Microsoft Azure Blob indexer | `azure_etag`, `azure_tier` |

**PDF info**
pdf_info
pdf_info.author
pdf_info.company
pdf_info.creation_date
pdf_info.creator
pdf_info.error
pdf_info.keywords
pdf_info.modification_date
pdf_info.producer
pdf_info.subject
pdf_info.title


**PowerScale**
pool_target_data
pool_target_data_name
pool_target_metadata
pool_target_metadata_name
protection_current
protection_target
pscale
pscale.atime_date
pscale.btime
pscale.btime_date
pscale.ctime_date
pscale.file_access_pattern
pscale.file_compression_ratio
pscale.file_is_ads
pscale.file_is_compressed
pscale.file_is_dedupe_disabled
pscale.file_is_deduped
pscale.file_is_inlined
pscale.file_is_packed
pscale.file_is_smartlinked
pscale.file_is_sparse
pscale.inode_mirror_count
pscale.inode_parent
pscale.inode_revision
pscale.mtime_date
pscale.perms_group
pscale.perms_unix_bitmask
pscale.perms_user
pscale.pool_target_data
pscale.pool_target_data_name
pscale.pool_target_metadata
pscale.pool_target_metadata_name
pscale.protection_current
pscale.protection_target
pscale.size_logical
pscale.size_physical_data
pscale.size_protection
pscale.ssd_status
pscale.ssd_status_name
pscale.ssd_strategy
pscale.ssd_strategy_name
pscale.user_attributes


| **S3** | attributes collected when using the [S3 alternate indexer](https://docs.diskoverdata.com/diskover_installation_guide/#create-an-index-of-an-s3-bucket) | `s3_etag`, `s3_storageclass` |


| **ShotGrid** | fields harvested when using the [Autodesk Flow Production Tracking (formerly ShotGrid) plugin](https://diskoverdata.com/products/products-aja-media-edition/#flowprodtracking) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#flow-production-tracking-plugin) for the list of fields |

shotgrid
shotgrid.Created_By
shotgrid.assets
shotgrid.date_updated
shotgrid.description
shotgrid.project
shotgrid.sequence
shotgrid.shot_code
shotgrid.status
shotgrid.tags
shotgrid.type


| **Tags** | manual or auto tags attributed for [items tagged within Diskover](https://docs.diskoverdata.com/diskover_user_guide/#tags) | `tags`, search example `tags:delete` > any tag name associated with a file or directory, tag name is case sensitive |


| **Unix Permissions** | field harvested when using the [Unix Permission plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#unix-permissions-plugin) | `unix_perms` > search example `unix_perms:777` |

perms_group
perms_unix_bitmask
perms_user


| **Windows Owner** | fields harvested when using the [Windows Owner plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#windows-owner-plugin) | `windows_owner`, `windows_group` |


| **Xytech Asset Creation** | fields harvested when using the [Xytech Asset Creation plugin](https://diskoverdata.com/products/products-aja-media-edition/#xytech-asset-creation) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-asset-creation-plugin-overview) for the list of fields and how to use them |



| **Xytech Order Status** | fields harvested when using the [Xytech Order Status plugin](https://diskoverdata.com/products/products-aja-media-edition/#xytech-order-status) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-order-status-plugin-overview) for the list of fields and how to use them |
