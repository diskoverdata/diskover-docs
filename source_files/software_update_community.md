___
### Software Update for Community Edition

🔴 &nbsp;Make a backup of your existing config files (optional):
```
cd ~/.config/diskover && cp config.yaml config.yaml.bak
cd <diskover-web_dir>/src/diskover && cp Constants.php Constants.php.bak
```

🔴 &nbsp;If the Diskover repo is no longer cloned in `/tmp/diskover_install`, clone again:
```
mkdir /tmp/diskover_install
git clone https://github.com/diskoverdata/diskover-community.git /tmp/diskover_install
```

🔴 &nbsp;Update local cloned repo and sync changes to installed locations:
```
cd /tmp/diskover_install
git pull
rsync -rcv diskover/ /opt/diskover/
rsync -rcv diskover-web/ /var/www/diskover-web/
chown -R nginx:nginx /var/www/diskover-web
```

🔴 &nbsp;Verify that your config files are not missing any new settings:
```
diff <diskover_dir>/configs_sample/diskover/config.yaml ~/.config/diskover/config.yaml
cd <diskover-web_dir>/src/diskover && diff Constants.php.sample Constants.php 
```

🔴 &nbsp;Restart NGINX and PHP-FPM:
```
systemctl restart nginx
systemctl restart php-fpm
```

🔴 &nbsp;Check for any errors in NGINX log (ex: permission issues):
```
tail -f /var/log/nginx/error.log
```

🔴 &nbsp;After updating Diskover-web, it is recommended to [force/hard refresh](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache) your web browser to get the latest files from the web server and clear your local browser cache.
