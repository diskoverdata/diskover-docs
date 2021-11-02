___
# Chapter 13 - Software Update Installation

When subscribing to a paid [Diskover Solution](https://www.diskoverdata.com/solutions/), all software updates, bug fixes, patches and version upgrades are included during the licensed period. Diskover will send an email notification to its customer base which will contain all necessary information.

## Software Update for Linux

The update process for the Diskover Data curation platform consists of updating two parts: 1) the Diskover indexer(s), and 2) the Diskover-Web server.

The software can be updated using either 1) an update script that uses your Diskover ftp credentials to pull-down the latest version and update, or 2) extracting a tar file and copying the Diskover files to the proper locations.

### Upgrading with Update Script

The following explains how to update the Diskover curation platform via the update script. To update Diskover v2, download the latest [update-diskover.sh](https://github.com/diskoverdata/diskover-community/wiki/Diskover-v2-Install-Guide#updating-diskover-v2-to-latest-version)  file from the [diskoverspace.com](https://github.com/diskoverdata/diskover-community/wiki/Diskover-v2-Install-Guide#updating-diskover-v2-to-latest-version)  ftp server's scripts directory.

➡️ After downloading, edit the top of the file to include your ftp info, paths to Diskover v2, and then save it and run it. This will update Diskover v2 and Diskover-Web v2 to the latest version on the ftp server.

➡️ Make a backup of your existing config files (optional):
```python
cd ~/.config/diskover && cp config.yaml config.yaml.bak
cd <diskover-web_dir>/src/diskover && cp Constants.php Constants.php.bak
```
➡️ Make a backup of your existing data files (optional):
```python
cd <diskover-web_dir>/public && for f in *.txt; do cp $f $f.bak; done
cd <diskover-web_dir>/public/tasks && for f in *.json; do cp $f $f.bak; done
```
➡️ Run update script:
```python
chmod +x update-diskover.sh
./update-diskover.sh
```
➡️ Check your config files are not missing any new settings:
```python
diff <diskover_dir>/configs_sample/diskover/config.yaml ~/.config/diskover/config.yaml
cd <diskover-web_dir>/src/diskover && diff Constants.php.sample Constants.php
```
➡️ Restart NGINX:
```python
systemctl restart nginx
```
➡️ Restart PHP-FPM:
```python
systemctl restart php-fpm
```
➡️ Check for any errors in NGINX log (ex: permission issues):
```python
tail -f /var/log/nginx/error.log
```
### Upgrading from tar.gz File

The following explains how to update both Diskover and Diskover-Web.

This example assumes the tar file was extracted to  **/tmp/diskover/**
```python
cd /tmp/diskover/
```
➡️ Copy the Diskover files to proper locations:
```python
rsync -rcv --exclude=diskover.lic diskover/ /opt/diskover/
rsync -rcv --exclude=diskover-web.lic diskover-web/ /var/www/diskover-web/
```
➡️ Set proper file systems permissions on Diskover files:
```python
chown -R nginx:nginx /var/www/diskover-web  
chmod 660 /var/www/diskover-web/public/*.txt
chmod 660 /var/www/diskover-web/public/tasks/*.json
```
➡️ Check your config files are not missing any new settings:
```python
diff <diskover_dir>/configs/diskover/config.yaml ~/.config/diskover/config.yaml
cd <diskover-web_dir>/src/diskover && diff Constants.php.sample Constants.php
```
➡️ Restart NGINX:
```python
systemctl restart nginx
```
➡️ Restart PHP-FPM:
```python
systemctl restart php-fpm
```
➡️ Check for any errors in NGINX log (ex: permission issues):
```python
tail -f /var/log/nginx/error.log
```
