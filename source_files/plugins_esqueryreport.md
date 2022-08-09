___
### Index ES Query Report Plugin

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

The index Elasticsearch (es) query report plugin is designed to search for es query string in an existing completed index and create a csv report with the ability to to send the report to one or more email recipients.

🔴 &nbsp;The index es query report plugin runs post index and operates on completed indices as a scheduled job or on demand job to search for docs in an index.

🔴 &nbsp;Copy default/sample config:

```
mkdir /root/.config/diskover_esqueryreport
cd /opt/diskover
cp configs_sample/diskover_esqueryreport/config.yaml /root/.config/diskover_esqueryreport/
```

🔴 &nbsp;Edit the es query report config and edit for your env:
```
vim /root/.config/diskover_esqueryreport/config.yaml
```
>Note: By default report csv files are saved in /tmp folder

🔴 &nbsp;To run es query report plugin via command line:
```
cd /opt/diskover/plugins_postindex
python3 diskover-esqueryreport.py -q "es query string" indexname
```

🔴 &nbsp;To get help and see all cli options:
```
python3 diskover-esqueryreport.py -h
```
