<p id="bam_plugin"></p>

___
### BAM Info Plugin

<img src="images/button_edition_life_science.png" width="125">

#### [🍿 Watch Demo Video](https://vimeo.com/678914314?share=copy)

#### Overview

The BAM info harvest plugin is designed to provide BAM metadata attributes about a file without granting the Diskover user any read/write file system access.
The BAM info plugin enables additional metadata for the SAM and BAM file formats to be harvested at time of index, and are therefore searchable, reportable, actionable, and can be engaged in workflows within Diskover.

- The specification for the SAM file format can be found here:
  [https://samtools.github.io/hts-specs/SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf)
- The BAM info plugin uses the Python **pysam** to harvest attributes about the BAM and SAM files:
  [https://pysam.readthedocs.io/en/latest/](https://pysam.readthedocs.io/en/latest/)

New indices will use the plugin, and any SAM or BAM file will get additional info added to the Elasticsearch index’s **bam_info** field.

The attributes provide the ability to view storage and file system content from a workflow perspective, for example, all the frame rates on any given storage.

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

![Image: BAM Info Detailed View in File Attributes](images/plugin_bam_attributes_window.png)

#### Install BAM Info Dependencies

🔴 &nbsp;Copy the BAM info content in the install location:
```
cp __init__.py /opt/diskover/plugins/baminfo/
cp README.rnd /opt/diskover/plugins/baminfo/
cp requirements.txt /opt/diskover/plugins/baminfo/
mkdir /root/.config/diskover_baminfo/
cp config.yaml /root/.config/diskover_baminfo/
```

🔴 &nbsp;Edit the BAM info plugin to specify programs used within the software pipeline, in the example below the following programs are used:
```
  - "STAR"
  - "bwa"
  - "BEDTools_bedToBam"
  - "bowtie2"
  - "CASAVA"
  - "MarkDuplicates"
  - "samtools"
  - "TopHat"
```

![Image: Config BAM Info Plugin in Terminal](images/image_plugins_bam_config_in_terminal.png)

🔴 &nbsp;The BAM info plugin requires the following dependencies on CentOS:
```
yum install  zlib-devel -y
yum install bzip2-devel
yum install xz-devel

cd /opt/diskover/plugins/baminfo/
pip3 install -r requirements.txt
```

🔴 &nbsp;The BAM info plugin runs as part of the indexing process, to enable:
```
vim /root/.config/diskover/config.yaml
```

🔴 &nbsp;Set → **enable**: `True`

🔴 &nbsp;Set → **files**: `[‘baminfo’]`

![Image: Config BAM yaml File](images/image_plugins_bam_yaml_config.png)
<br>

🟨 &nbsp;The BAM info plugin is currently not supported for S3-based object storage. If the BAM info plugin is enabled in the default configuration file, an [alternate configuration file must be created where the BAM plugin is disabled](). The alternate configuration file must be invoked when indexing S3-based volumes:

```
/root/.config/diskover_pluginsdisabled
```

![Image: Disable Plugin in Task Panel for S3 Storage](images/image_plugins_bam_task_panel.png)

#### Expose BAM Info Field in Diskover-Web

🔴 &nbsp;To expose the `bam_info` fields within Diskover-Web, edit the `Contants.php` configuration:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

🔴 &nbsp;Add the following under `EXTRA_FIELDS`:
```
const EXTRA_FIELDS = [
    'Bam Info' => 'bam_info'
];
```

![Image: Extra Field for BAM Plugin](images/plugin_bam_attributes_search_page.png)

