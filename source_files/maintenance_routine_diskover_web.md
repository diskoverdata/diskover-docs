## Diskover-Web

To update Diskover-Web, download the latest update-diskover.sh file from the [diskoverspace.com](https://github.com/diskoverdata/diskover-community) ftp server's scripts directory. After downloading, edit the top of the file to include your ftp info, paths to Diskover-Web, and then save it and run it. This will update Diskover-Web v2 to the latest version on the ftp server.

>To make sure you always run the latest version of Diskover, please [subscribe to our newsletter](https://www.diskoverdata.com/subscribe/).

➡️ Make a backup of your existing config files (optional):
```
cd <diskover-web_dir>/src/diskover && cp Constants.php Constants.php.bak
```

➡️ Make a backup of your existing data files (optional):
```
cd <diskover-web_dir>/public/tasks && for  f  in  *.json;  do  cp  $f  $f.bak;  done
```

➡️ Run update script:
```
chmod +x update-diskover.sh
./update-diskover.sh
```

➡️ Check your config files are not missing any new settings:
```
cd <diskover-web_dir>/src/diskover  &&  diff Constants.php.sample Constants.php
```

➡️ Restart NGINX:
```
systemctl restart nginx
```

➡️ Restart PHP-FPM:
```
systemctl restart php-fpm
```

➡️ Check for any errors in NGINX log  (ex: permission issues):
```
tail -f /var/log/nginx/error.log
```
