___
### Software Update for Linux

The update process for Diskover curation platform consists of updating two parts: 1) the Diskover indexer(s), and 2) the Diskover-Web server.

The software can be updated by extracting the latest tar.gz or zip file downloaded from the Diskover download portal and updating the Diskover source files in the proper locations.

#### Upgrading from tar.gz File

The following explains how to update both Diskover and Diskover-Web assuming they are installed in the default locations.

🔴 &nbsp;Stop **diskoverd** (Task worker daemon) if running (WARNING: this could kill any running tasks):
```
sudo systemctl stop diskoverd
ps -ef | grep diskoverd
```

This example assumes the tar file was extracted to  **/tmp/diskover-v2/**
```
tar -zxvf diskover-v2-<version>.tar.gz -C /tmp/diskover-v2/
cd /tmp/diskover-v2/
```

🔴 &nbsp;Copy the Diskover files to proper locations:
```
rsync -rcv diskover/ /opt/diskover/
rsync -rcv diskover-web/ /var/www/diskover-web/
```

🔴 &nbsp;Set proper file systems permissions on Diskover files:
>Note: txt and json chmod only in Essential+ versions
```
chown -R nginx:nginx /var/www/diskover-web
chmod 660 /var/www/diskover-web/public/*.txt
chmod 660 /var/www/diskover-web/public/tasks/*.json
```

🔴 &nbsp;Check your config files are not missing any new settings:
>Important: Refer to [changelog](https://docs.diskoverdata.com/diskover_changelogs/) for any new breaking config changes. Changes are also in CHANGELOG.md files in diskover and diskover-web directories.
```
diff <diskover_dir>/configs_sample/diskover/config.yaml ~/.config/diskover/config.yaml
diff <diskover_dir>/configs_sample/diskoverd/config.yaml ~/.config/diskoverd/config.yaml
...
cd <diskover-web_dir>/src/diskover && diff Constants.php.sample Constants.php
```

🔴 &nbsp;Start **diskoverd** (Task worker daemon) if running previously:
```
sudo systemctl start diskoverd
sudo systemctl status diskoverd
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

🔴 &nbsp;After updating Diskover-web, it is recommended to [force/hard refresh](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache) your web browser to get the latest files from the web server and clear your local browser cache.
