<p id="media_info_plugin"></p>

___
### Media Info Harvest Plugin

![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

The media info harvest plugin is designed to provide media metadata attributes about a file without granting the Diskover user any read/write file system access.

The media info plugin enables additional metadata for video files to be harvested at time of index. The media info plugin uses **ffmpeg/ffprobe** to harvest attributes about the media file.

New indices will use the plugin and any video file will get additional media info added to the Elasticsearch index’s **media_info** field.

The attributes provide the ability to view storage and file system content from a workflow perspective, for example all the frame rates on any given storage.

You can view and search on media info attributes in Diskover-Web since it will store it in a new field for video files, the field name is **media_info**.

![Image: Media Info Field in UI Results Pane](images/image_plugins_media_info_diskover_ui_column_in_results_pane.png)

#### Install Media Info Dependencies

🔴 &nbsp;The media info plugin uses the **ffmpeg** [https://www.ffmpeg.org/](https://www.ffmpeg.org/) open-source package to harvest media attributes for media file types.

Install ffmpeg on Centos 7.x:
```
yum install epel-release
yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
yum install ffmpeg ffmpeg-devel
ffmpeg -version
```

Install ffmpeg on Centos 8.x:
```
dnf install epel-release dnf-utils
yum-config-manager --set-enabled PowerTools
yum-config-manager --add-repo=https://negativo17.org/repos/epel-multimedia.repo
dnf install ffmpeg
ffmpeg -version
```

Install ffmpeg on Ubuntu 18.x/20.x:
```
apt update
apt install ffmpeg
ffmpeg -version
```

🔴 &nbsp;The media info plugin runs as part of the indexing process. To enable:
```
vim /root/.config/diskover/config.yaml
```
🔴 &nbsp;enable: set to **True**

🔴 &nbsp;files: **[‘mediainfo’]**

![Image: Media Info Plugin Configuration in Terminal](images/image_plugins_media_info_config_in_terminal.png)

🔴 &nbsp;Copy the default/sample media info config file:
```
mkdir /root/.config/diskover_mediainfo_plugin
cp /opt/diskover/configs_sample/diskover_mediainfo_plugin/config.yaml /root/.config/diskover_mediainfo_plugin
```

🔴 &nbsp;Edit media info config file:
```
vim /root/.config/diskover_mediainfo_plugin/config.yaml
```

>_Note:_  The media info plugin is currently not supported for S3 based object storage. If the media info plugin is enabled in the default configuration file, an alternate configuration file must be created where the media info plugin is disabled. The alternate configuration file must be invoked when indexing S3 based volumes.

![Image: Media Info Plugin Configuration in Task Panel](images/image_plugins_media_info_task_panel_config_for_s3_bucket.png)
