## Index Differential Plugin

The index differential plugin is designed to provide a list of file differences between two indices (or points in time). The differential list can be used to feed synchronization tools (i.e. rsync) or identify deltas where two repositories should be identical. Output can be text file or CSV formatted file.

➡️ The index differential plugin runs post index and operates on completed indices as a scheduled job or on demand job to provide differences between two indices. To enable:
```
vim /root/.config/diskover_indexdiff/config.yaml
```

![Image: Index Differential Plugin Enabling](images/image_plugins_indexdiff_enabling.png)

➡️ No configuration changes are required to the configuration file unless comparison involves indices from different Elasticsearch clusters.

![Image: Index Differential Plugin Configuration](images/image_plugins_indexdiff_configuration.png)

➡️ To run the duplicates check via command line:
```
cd /opt/diskover
python3 diskover_indexdiff.py --index=indexname1 –index2=indexname2
```
