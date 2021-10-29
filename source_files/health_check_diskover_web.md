## Diskover-Web

To validate health of the Diskover-Web, basically ensures the Web serving applications are functioning properly.

### Diskover-Web for Linux

➡️ Check status of NGINX service:
```
systemctl status nginx
```

![Image: Health Check Diskover-Web for Linux](images/image_health_check_linux_diskover_web.png)

➡️ Check status of PHP-FPM service:
```
systemctl status php-fpm
```

### Diskover-Web for Windows

➡️ Check status of NGINX service.

➡️ Open Windows Powershell:
```
get-process | Select-String "nginx"
```

![Image: Check Health Status of NGINX Service](images/image_health_check_windows_status_nginx.png)

➡️ Check status of PHP-FPM service.

➡️ Open Windows Powershell:
```
get-process | Select-String "php"
```

![Image: Check Status of PHP-FPM Service](images/image_health_check_windows_status_php.png)
