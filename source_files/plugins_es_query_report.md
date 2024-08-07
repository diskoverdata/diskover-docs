___
### Index ES Query Report Plugin

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

The index Elasticsearch (ES) query report plugin is designed to search for es query string in an existing completed index and create a csv report with the ability to to send the report to one or more email recipients.

🔴 &nbsp;The index ES query report plugin runs post index and operates on completed indices as a scheduled job or on demand job to search for docs in an index.

🔴 &nbsp;Copy default/sample config:

```
mkdir /root/.config/diskover_esqueryreport
cd /opt/diskover
cp configs_sample/diskover_esqueryreport/config.yaml /root/.config/diskover_esqueryreport/
```

🔴 &nbsp;Edit the ES query report config and edit for your environment:
```
vim /root/.config/diskover_esqueryreport/config.yaml
```
> _Note:_ By default report csv files are saved in `/tmp folder`

🔴 &nbsp;To run es query report plugin via command line:
```
cd /opt/diskover/plugins_postindex
python3 diskover-esqueryreport.py -q "es query string" indexname
```

🔴 &nbsp;To get help and see all cli options:
```
python3 diskover-esqueryreport.py -h
```
