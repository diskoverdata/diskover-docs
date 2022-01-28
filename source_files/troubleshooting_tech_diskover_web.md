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
