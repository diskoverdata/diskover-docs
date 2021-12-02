___
### Software Update for Linux

The update process for Diskover curation platform consists of updating two parts: 1) the Diskover indexer(s), and 2) the Diskover-Web server.

The software can be updated using either 1) an update script that uses your Diskover ftp credentials to pull-down the latest version and update, or 2) extracting a tar file and copying the Diskover files to the proper locations.

#### Upgrading with Update Script

The following explains how to update the Diskover curation platform via the update script. To update Diskover v2, download the latest `update-diskover.sh` file from the [diskoverspace.com](https://github.com/diskoverdata/diskover-community) ftp server's scripts directory.

🔴 &nbsp;After downloading, edit the top of the file to include your ftp info, paths to Diskover v2, and then save it and run it. This will update Diskover v2 and Diskover-Web v2 to the latest version on the ftp server.

🔴 &nbsp;Make a backup of your existing config files (optional):
```
cd ~/.config/diskover && cp config.yaml config.yaml.bak
cd <diskover-web_dir>/src/diskover && cp Constants.php Constants.php.bak
```

🔴 &nbsp;Make a backup of your existing data files (optional):
```
cd <diskover-web_dir>/public && for f in *.txt; do cp $f $f.bak; done
cd <diskover-web_dir>/public/tasks && for f in *.json; do cp $f $f.bak; done
```

🔴 &nbsp;Stop **diskovered** if running:
```
sudo systemctl stop diskoverd
ps -ef | grep diskoverd
```

🔴 &nbsp;Run update script:
```
chmod +x update-diskover.sh
./update-diskover.sh
```

🔴 &nbsp;Check your config files are not missing any new settings:
```
diff <diskover_dir>/configs_sample/diskover/config.yaml ~/.config/diskover/config.yaml
cd <diskover-web_dir>/src/diskover && diff Constants.php.sample Constants.php
```

🔴 &nbsp;Restart NGINX:
```
systemctl restart nginx
```

🔴 &nbsp;Restart PHP-FPM:
```
systemctl restart php-fpm
```

🔴 &nbsp;Check for any errors in NGINX log (ex: permission issues):
```
tail -f /var/log/nginx/error.log
```

#### Upgrading from tar.gz File

The following explains how to update both Diskover and Diskover-Web.

This example assumes the tar file was extracted to  **/tmp/diskover/**
```
cd /tmp/diskover/
```

🔴 &nbsp;Copy the Diskover files to proper locations:
```
rsync -rcv --exclude=diskover.lic diskover/ /opt/diskover/
rsync -rcv --exclude=diskover-web.lic diskover-web/ /var/www/diskover-web/
```

🔴 &nbsp;Set proper file systems permissions on Diskover files:
```
chown -R nginx:nginx /var/www/diskover-web  
chmod 660 /var/www/diskover-web/public/*.txt
chmod 660 /var/www/diskover-web/public/tasks/*.json
```

🔴 &nbsp;Check your config files are not missing any new settings:
```
diff <diskover_dir>/configs/diskover/config.yaml ~/.config/diskover/config.yaml
cd <diskover-web_dir>/src/diskover && diff Constants.php.sample Constants.php
```

🔴 &nbsp;Restart NGINX:
```
systemctl restart nginx
```

🔴 &nbsp;Restart PHP-FPM:
```
systemctl restart php-fpm
```

🔴 &nbsp;Check for any errors in NGINX log (ex: permission issues):
```
tail -f /var/log/nginx/error.log
```
