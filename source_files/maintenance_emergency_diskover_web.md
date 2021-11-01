## Diskover-Web

This topic describes how to identify and solve Diskover-Web issues.

### Can’t Access Diskover-Web from Browsers:

➡️ Ensure the Web server components are running:
```
systemctl status nginx
```

```
systemctl status php-fpm
```

➡️ Check the NGINX Web server error logs:
```
tail -f /var/log/nginx/error.log
```

➡️ Trace access from Web session by reviewing NGINX access logs. Open a Web browser and attempt to access Diskover-Web, the access attempt should be evident in the access log:
```
tail -f /var/log/nginx/access.log
```
