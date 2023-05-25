___
### File Action > IMF Package Validator

![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

The IMF package validator plugin allows organizations to validate IMF packages before delivery from a remote platform, saving immense amounts of man-hours over the course of a business year.

Oxagile’s IMF Package Validator Plugin, exclusively designed for the AJA Diskover Media Edition, allows users to scan and validate IMF packages before delivery from any location, regardless of the location of the IMF package data.

IMF stands for Interoperable Master Format, which is a technical standard used in the Media and Entertainment industry for the exchange of digital content between different platforms and systems. The IMF format is used by content creators, distributors, and broadcasters to deliver high-quality video content to a variety of devices, including TVs, mobile devices, and web browsers.

Several production studios require all their content to be delivered in IMF format, which undergoes rigorous validation to ensure compliance with industry standards. The validation process involves extensive testing of the content's video, audio, and metadata to ensure that it meets the production studios' technical specifications and can be delivered to viewers in the highest quality possible.

Once the content has been validated, it is then encoded into various formats, including 4K and HDR, and made available for streaming on various platforms. The IMF validation process is a critical step in the content delivery pipeline, ensuring that viewers receive high-quality content that meets industry standards and can be enjoyed on a variety of devices.

The IMF Package Validator plugin is developed by [Oxagile](https://www.oxagile.com/), a major technological partner working with both Diskover Data and [AJA Video Systems](https://www.aja.com/). For more information or to purchase the IMF Package Validator plugin, please contact [Oxagile](mailto:IMF@Oxagile.com).

#### IMF Package Validator Plugin Installation
 
1. There are no changes in python part and/or diskover folder.

2. For PHP diskover-web folder:

🔴 &nbsp;Copy the new file action from `/src/diskover/Constants.php.sample` and add **validate IMF package**. For more information on [adding a file action](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#diskover-web-plugins-file-actions).

🔴 &nbsp;Copy file `imfvalidate.php` from `/public/fileactions/fileaction_samples` into `/public/fileactions`

🔴 &nbsp;Copy new task template with **"type": "imf_validation"** from `/public/tasks/templates.json.sample` into `/public/tasks/templates.json`

🔴 &nbsp;Copy new custom tags **imf valid** and **imf not valid** from `/public/customtags.txt.sample` into `/public/customtags.txt`

🔴 &nbsp;There are files that should be updated from this archive (if it's not a fresh install):

```
      /src/diskover/Diskover.php
      /public/css/diskover.css
      /public/js/diskover.js
      /public/tasks/index.php
      /public/api.php
      /public/d3_data_search.php
      /public/d3_inc.php
      /public/export.php
      /public/export_imf_report.php
      /public/imfreport.php
      /public/results.php
      /public/view.php
```      
      
3. For Java IMF-PlugIn - from linux Docker container:

> _Note:_&nbsp;**IMF-Plugin** must be on the same machine as the python worker and validation files.

🔴 &nbsp;Create folder:

```
/root/imf-plugin
```

🔴 &nbsp;Copy the following files from `/imf-plugin` into the folder created during the previous step:

```
imfplugin-0.0.1.jar
Dockerfile
docker-compose.yml
```

🔴 &nbsp;In `docker-compose.yml` file, change the `DISKOVER_URL` address, `ELASTICSEARCH_HOST`, and `ELASTICSEARCH_PORT` in the **environment** block. For example:

```
DISKOVER_URL=http://192.189.117.68:8000
ELASTICSEARCH_HOST=192.189.117.68
ELASTICSEARCH_PORT=9200
```

🔴 &nbsp;If the shared folder for validation is not `/media` on your host machine, then you need to change volumes in `docker-compose.yml`, for example, if the folder for validation is `/usr/imf`, then the volumes should be like this:

```
/usr/imf:/media
```

🔴 &nbsp;Build from `/root/imf-plugin`:

```
docker build -t imf-plugin:0.0.1 .
```

🔴 &nbsp;Run from `/root/imf-plugin`:

```
docker compose up -d
``` 
