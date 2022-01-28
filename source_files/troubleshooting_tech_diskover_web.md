___
## Diskover-Web
___

### Diskover-Web for Linux

🔴 &nbsp;To view log files associated with Diskover-Web errors:
```
tail -f /var/log/nginx/error.log
```

___
### Diskover-Web for Windows

🔴 &nbsp;To view log files associated with Diskover-Web errors:
```
C:Program FilesNginxnginx-1.19.6logserror.log
```

___
#### Diskover-Web Task Management

🔴 &nbsp;To get started with the task panel, check that you have the json files in diskover-web `public/tasks/` directory.
```
cd /var/www/diskover-web/public/tasks
ls *.json
tasklog.json	tasks.json	templates.json	workers.json
```

You should see the above `.json` files which are used by the Task Panel for storing task and worker related data. 

🔴 &nbsp;If you only see `.json.sample` files, copy the sample/default files:
```
for f in *.json.sample; do cp $f "${f%.*}"; done
chmod 660 *.json
chown nginx:nginx *.json
```

- You will need to start at least one Diskover worker daemon `diskoverd` to work on tasks. 
- `diskoverd` can run on the diskover host or on any host. 
- `diskoverd` requires access to the Diskover-Web REST API which is located at `http://<diskover-web-host>:<port>/api.php`

___
### Unable to Access Diskover-Web from Browser

🔴 &nbsp;Ensure the web-server components are running:
```
systemctl status nginx
systemctl status php-fpm
```

🔴 &nbsp;Check the nginx web-server error logs:
```
tail -f /var/log/nginx/error.log
```

🔴 &nbsp;Trace access from Web session by reviewing NGINX access logs. Open Web browser and attempt to access diskover-web, the access attempt should be evident in the access log:
```
tail -f /var/log/nginx/access.log
```
