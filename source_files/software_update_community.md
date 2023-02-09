___
### Software Update for Community Edition

🔴 &nbsp;If the Diskover repo is no longer cloned in `/tmp/diskover-v2-ce`, clone again:
```
mkdir /tmp/diskover-v2-ce
git clone https://github.com/diskoverdata/diskover-community.git /tmp/diskover-v2-ce
```

🔴 &nbsp;Update local cloned repo and sync changes to installed locations:
```
cd /tmp/diskover-v2-ce
git fetch && git pull
rsync -rcv diskover/ /opt/diskover/
rsync -rcv diskover-web/ /var/www/diskover-web/
chown -R nginx:nginx /var/www/diskover-web
```

🔴 &nbsp;Verify that your config files are not missing any new settings:
> _Note_: refer to [changelogs](https://docs.diskoverdata.com/diskover_changelogs/) for any breaking config changes, or view CHANGELOG.md files in diskover and diskover-web directories
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
