#### Diskover-Web for Windows

🔴 &nbsp;Check status of NGINX service.

🔴 &nbsp;Open Windows Powershell:
```
get-process | Select-String "nginx"
```

<img src="images/image_health_check_windows_status_nginx.png" width="600">

![Image: Check Health Status of NGINX Service](images/image_health_check_windows_status_nginx.png)

🔴 &nbsp;Check status of PHP-FPM service.

🔴 &nbsp;Open Windows Powershell:
```
get-process | Select-String "php"
```

![Image: Check Status of PHP-FPM Service](images/image_health_check_windows_status_php.png)
