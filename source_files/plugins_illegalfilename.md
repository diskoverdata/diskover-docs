___
### Index Illegal File Name Plugin

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

The index illegal file name plugin is designed search for illegal file names and directory names in an existing completed index.

🔴 &nbsp;The index illegal file name plugin runs post index and operates on completed indices as a scheduled job or on demand job to search for and tag docs in an index.

🔴 &nbsp;Copy default/sample config:

```
mkdir /root/.config/diskover_illegalfilename
cd /opt/diskover
cp configs_sample/diskover_illegalfilename/config.yaml /root/.config/diskover_illegalfilename/
```

🔴 &nbsp;Edit the illegal file name config and edit defaults if needed:
```
vim /root/.config/diskover_illegalfilename/config.yaml
```
>Note: By default any illegal file names are tagged with "illegalname" and any long file names are tagged with "longname"

🔴 &nbsp;To run illegal file name plugin via command line:
```
cd /opt/diskover/plugins_postindex
python3 diskover-illegalfilename.py indexname
```

🔴 &nbsp;To get help and see all cli options:
```
python3 diskover-illegalfilename.py -h
```
