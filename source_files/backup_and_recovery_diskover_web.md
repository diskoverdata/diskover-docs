### Diskover-Web Backup

The Diskover-Web stores the user configured settings in the following series of files:
```
/var/www/diskover-web/src/diskover/Constants.php
/var/www/diskover-web/public/*.txt
/var/www/diskover-web/public/tasks/*.json
```

Perform the following commands to backup the Diskover-Web user configured settings. 

🔴 &nbsp;Make a directory date for collection of backups:
```
mkdir -p /var/opt/diskover/backups/diskover-web/$(date +%Y%m%d)/src/diskover/
```

```
mkdir -p /var/opt/diskover/backups/diskover-web/$(date +%Y%m%d)/public/tasks/
```

🔴 &nbsp;Backup user configured settings:
```
rsync -avz /var/www/diskover-web/src/diskover/Constants.php /var/opt/diskover/backups/diskover-web/$(date +%Y%m%d)/src/diskover/
```

```
rsync -avz /var/www/diskover-web/public/*.txt /var/opt/diskover/backups/diskover-web/$(date +%Y%m%d)/public/
```

```
rsync -avz /var/www/diskover-web/public/tasks/*.json /var/opt/diskover/backups/diskover-web/$(date +%Y%m%d)/public/tasks/
```

🔴 &nbsp;Backup the Diskover-Web license file:
```
rsync -avz /var/www/diskover-web/src/diskover/diskover-web.lic /var/opt/diskover/backups/diskover-web/$(date +%Y%m%d)/src/diskover/
```
