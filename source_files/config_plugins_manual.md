___
## Manual Plugins Configuration
___

### Overview

All plugins will eventually be included in [**DiskoverAdmin**](), but a few are still only configurable manually.

🟨 **IMPORTANT!** Please [open a support ticket](https://support.diskoverdata.com/) if you currently use one of these plugins and need to upgrade to v2.3 and/or if you are interested in using a plugin for the first time.

### BAM Info Plugin

<img src="images/button_edition_life_science.png" width="125">

#### [🍿 Watch Demo Video](https://vimeo.com/678914314?share=copy)

#### Overview

The BAM info plugin is designed to enable additional metadata collection for BAM (Binary Alignment Map) and SAM (Sequence Alignment Map) about a file without granting the Diskover user any read/write file system access. The BAM info plugin enables additional metadata for the SAM and BAM file formats to be harvested at time of index, and are therefore searchable, reportable, actionable, and can be engaged in workflows within Diskover.

- The specification for the SAM file format can be found here:
  [https://samtools.github.io/hts-specs/SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf)
- The BAM info plugin uses the Python **pysam** to harvest attributes about the BAM and SAM files:
  [https://pysam.readthedocs.io/en/latest/](https://pysam.readthedocs.io/en/latest/)

New indices will use the plugin, and any SAM or BAM file will get additional info added to the Elasticsearch index’s **bam_info** field. The attributes provide the ability to view storage and file system content from a workflow perspective, for example, all the frame rates on any given storage.

![Image: Diskover BAM Plugin Overview](images/diagram_diskover_plugin_bam.png)

_[Click here for a full-screen view of this image.](images/diagram_diskover_plugin_bam.png)_

#### BAM Info Fields in Diskover-Web

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

###
