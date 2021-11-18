### Diskover Indexer(s) Backup

#### Diskover Indexer(s) Backup for Linux

The Diskover indexer can be distributed among multiple hosts. Each indexer stores the user configured settings in a series of **yaml** files located within directories named **diskover*** under **/root/.config/**

🔴 &nbsp;A backup of the user configured settings will need to be completed for each distributed indexer(s). The following provides an example to back up a single indexer:
```
rsync -avz /root/.config/diskover* /var/opt/diskover/backups/diskover/$(date +%Y%m%d)/
```

🔴 &nbsp;Backup the Diskover indexer license file:
```
rsync -avz /opt/diskover/diskover.lic /var/opt/diskover/backups/diskover/$(date +%Y%m%d)/
```
