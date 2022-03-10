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
C:\Program Files\Nginx\nginx-1.19.6\logs\error.log
```

___
### Diskover-Web Task Management

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
___
### Hard Reload After a Software Update

Sometimes when the Web user interface gets updated, it requires a forced/hard reload of the browser, in order to reload the new Javascript, etc. cached files.

[Click here for more information](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache).

For example, this overlay display of the volumes and directories might happen after a software update and a hard reload might be necessary:

<img src="images/image_troubleshooting_reload_cache_example.png" width="300">

___
### Missing Indicies

By default diskover-web does not load all indices in Elasticsearch. This is for performance reasons in case there are thousands of indices in ES.

On the indices page, there is a `max indices to load` input setting which controls the number of indices to load. Indices are loaded in order by creation date. If you are missing indices in the list, try increasing this number. This is a per user setting that gets stored in a cookie in each user's browser.

This number can also be set for all users in web config's `MAX_INDEX` setting. If the user's browser `maxindex` cookie is lower than this number, there cookie will be set to this number.
