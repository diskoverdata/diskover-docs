## Setup Backup Environment for Linux

The following explains how to create a backup of all data components of the Diskover environment. 

➡️ First, we need to create/identify the directory location where the backup will be stored. The following provides a location example, but it can be changed to meet the organizations standards for backup locations.
```
mkdir -p /var/opt/diskover/backups/
```
```
mkdir -p /var/opt/diskover/backups/elasticsearch/
```

➡️ We need to provide the Elasticsearch user access to the location so that the Elasticsearch user can write snapshots:
```
chown -R elasticsearch /var/opt/diskover/backups/elasticsearch
```
```
mkdir -p /var/opt/diskover/backups/diskover/
```
```
mkdir -p /var/opt/diskover/backups/diskover-web/
```
```
mkdir -p /var/opt/diskover/backups/diskover-web/tasks/
```
