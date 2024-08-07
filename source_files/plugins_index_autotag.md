___
### Index Auto Tag Plugin

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

The index auto tag plugin is designed to auto tag an existing completed index. Auto-tagging can also be done during crawl time by adding tag rules in the diskover config file.

🔴 &nbsp;The index auto tag plugin runs post index and operates on completed indices as a scheduled job or on demand job to auto tag docs in an index.

🔴 &nbsp;Copy default/sample config:

```
mkdir /root/.config/diskover_autotag
cd /opt/diskover
cp configs_sample/diskover_autotag/config.yaml /root/.config/diskover_autotag/
```

🔴 &nbsp;Edit the autotag config and set the directory and file tag rules:
```
vim /root/.config/diskover_autotag/config.yaml
```

🔴 &nbsp;To run auto tag via command line:
```
cd /opt/diskover/plugins_postindex
python3 diskover-autotag.py indexname
```

🔴 &nbsp;To get help and see all cli options:
```
python3 diskover-autotag.py -h
```
