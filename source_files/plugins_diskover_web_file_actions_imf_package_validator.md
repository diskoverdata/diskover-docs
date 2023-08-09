___
### File Action > IMF Package Validator

![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

#### [🍿 Watch Demo Video](https://vimeo.com/833500176?share=copy)

The IMF package validator plugin allows organizations to validate IMF packages before delivery from a remote platform, saving immense amounts of man-hours over the course of a business year.

Oxagile’s IMF Package Validator Plugin, exclusively designed for the AJA Diskover Media Edition, allows users to scan and validate IMF packages before delivery from any location, regardless of the location of the IMF package data.

IMF stands for Interoperable Master Format, which is a technical standard used in the Media and Entertainment industry for the exchange of digital content between different platforms and systems. The IMF format is used by content creators, distributors, and broadcasters to deliver high-quality video content to a variety of devices, including TVs, mobile devices, and web browsers.

Netflix, for example, requires all their content to be delivered in IMF format, which undergoes rigorous validation to ensure compliance with industry standards. The validation process involves extensive testing of the content's video, audio, and metadata to ensure that it meets the technical specifications and can be delivered to viewers in the highest quality possible.

Once the content has been validated, it is then encoded into various formats, including 4K and HDR, and made available for streaming on various platforms. The IMF validation process is a critical step in the content delivery pipeline.

#### Trial and Purchase of the plugin

The IMF Package Validator plugin is developed and sold exclusively by [Oxagile](https://www.oxagile.com/), a major technological partner working with both Diskover Data and [AJA Video Systems](https://www.aja.com/). For more information, to start a 30 day trial, or to purchase the IMF Package Validator plugin, please contact [Oxagile](mailto:IMF@Oxagile.com).

#### Functional Limitations

The following are the limitations of the current plugin version:

1.	Verification capabilities are limited with those of the latest version of Netflix Photon tool.
2.	Validation by schedule is not supported.
3.	Cloud storage is not supported.
4.	Archives are not supported.
5.	DCP packages are not supported.

#### IMPORTANT! Notes For Installation Instructions

Please refer to the **Read Me** document and any other documentation attached to the plugin, like the **Secure FTP Server Settings**  you will receive from Oxagile, as they may contain more recent information.

#### IMF Package Validator Plugin Installation
 
##### Python / Diskover Folder

There are no changes in python part and/or diskover folder.

##### PHP Diskover-Web Folder

For PHP diskover-web folder:

🔴 &nbsp;Copy the new file action from `/src/diskover/Constants.php.sample` and add file action **validate IMF package**. For more information on [adding a file action](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#diskover-web-plugins-file-actions).

🔴 &nbsp;Copy file `imfvalidate.php` from `/public/fileactions/fileaction_samples` into `/public/fileactions`

🔴 &nbsp;Copy new task template with **"type": "imf_validation"** from `/public/tasks/templates.json.sample` into `/public/tasks/templates.json`

🔴 &nbsp;Copy new custom tags **imf valid** and **imf not valid** from `/public/customtags.txt.sample` into `/public/customtags.txt`

🔴 &nbsp;There are files that should be updated from this archive if it's not a fresh install:

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

##### Java IMF-Plugin

**Important**

- The IMF-Plugin must be on the same machine as the python worker and validation files.
- The optimal versions of ElasticSearch against which the plugin was tested are 7.17.9 and 7.10.2

🔴 &nbsp;If ElasticSearch is configured with security enabled username and password for connection, then you need to set the appropriate username and password values in these files, depending on the deployment method:

```
imf-plugin.properties
```

Or

```
docker-compose.yml
```

🔴 &nbsp;From Linux Docker container, create folder:

```
/root/imf-plugin
```

🔴 &nbsp;Copy the following files from `/imf-plugin` into the folder created during the previous step:

```
imfplugin-0.0.1.jar
```

```
Dockerfile
```

```
docker-compose.yml
```

🔴 &nbsp;In `docker-compose.yml` file, change the URL for Diskover `DISKOVER_URL`, host and port (username and password if needed) for `ELASTICSEARCH_HOST` and `ELASTICSEARCH_PORT` in the **environment** block. For example:

```
DISKOVER_URL=http://192.189.117.68:8000
```

```
ELASTICSEARCH_HOST=192.189.117.68
```

```
ELASTICSEARCH_PORT=9200
```

🔴 &nbsp;If the shared folder for validation is not `/media` on your host machine, then you need to change volumes in `docker-compose.yml`. For example, if the folder for validation is `/usr/imf`, then the volumes should be like this:

```
/usr/imf:/media
```

🔴 &nbsp;In order to launch the IMF plugin, we have to mount local directory to a container:

```
./:/home/imf-plugin
```

🔴 &nbsp;From `/root/imf-plugin` build:

```
docker build -t imf-plugin:0.0.1 .
```

🔴 &nbsp;From `/root/imf-plugin` run:

```
docker compose up -d
```

#### Setting Up Application As Windows Service

🔴 &nbsp;Unzip archive `jdk1.8.0_152.zip` to folder `C:\Program Files\Java\`
   
🔴 &nbsp;Copy `imf-plugin` folder (with jar and imf-plugin.properties files) into work folder, for example: `C:\aja\imf-plugin`

🔴 &nbsp;If necessary, configure the `imf-plugin.properties` file.
      
🔴 &nbsp;Setting up application as windows service - if there is already `nssm.exe` file in the plugin folder and you have 64bit system, then you can skip steps 1 to 3:

1) Download `NSSM` application from [https://nssm.cc/download](https://nssm.cc/download), for example `nssm-2.24.zip`

2) Unzip archive to temporary folder and copy `nssm.exe` file from win64 or win32 folder relative to your system version.

3) Paste `nssm.exe` file into folder where imf-plugin jar file is located.

4) Run cmd as administrator and go to folder with `nssm.exe` file.

5) Run command `nssm install` (`.\nssm install` for PowerShell) and you will see a window with `nssm` settings.

6) In the Application tab, insert the following settings:

> **Path**: path to `java.exe` file, for example:
>
> ```
> C:\Program Files\Java\jdk1.8.0_152\bin\java.exe
> ```
>
> **Startup directory**: path to any work folder with imf-plugin, for example: 
>
> ```
> C:\aja\imf-plugin
> ```
> 
> **Arguments**: path to jar file with property file path parameter for property file path, for example: 
>
> ```
> -jar "C:\aja\imf-plugin\imfplugin-0.0.1.jar" --spring.config.location=C:/aja/imf-plugin/imf-plugin.properties
> ```
> 
> **Service name**: name of service, for example just `imf-plugin`

7) Click **Install service**.

8) Open Windows services (Windows search by "services"), find your service by name and start it.

#### Setting Up Application As Linux Service

🔴 &nbsp;Install `Open JDK 8`:

```
sudo apt-get update
```

```
sudo apt-get install openjdk-8-jdk -y
```

```
java -version
```

🔴 &nbsp;Create a folder for IMF plugin:

```
mkdir ~/imfplugin
```

🔴 &nbsp;Unzip archive:

```
sudo apt-get install unzip -y
```

```
mv imfplugin.zip ~/imfplugin/
```

```
cd ~/imfplugin/
```

```
unzip imfplugin.zip
```

```
rm imfplugin.zip
```

🔴 &nbsp;Update `imf-plugin.properties` for your environment.

🔴 &nbsp;Create a service by first customizing `imfplugin.service` to your environment with the following comments:

```
mv imfplugin.service /etc/systemd/system/
```

```
sudo systemctl daemon-reload
```

```
sudo systemctl start imfplugin.service
```

🔴 &nbsp;Check service status:

```
sudo systemctl status imfplugin.service
```

🔴 &nbsp;Enable a service and start it immediately:

```
sudo systemctl enable imfplugin.service
```
