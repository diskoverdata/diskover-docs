#### Diskover-Web for Windows

🔴 &nbsp;Check status of NGINX service.

🔴 &nbsp;Open Windows Powershell:
```
get-process | Select-String "nginx"
```

<img src="images/image_health_check_windows_status_nginx.png" width="750">

🔴 &nbsp;Check status of PHP-FPM service.

🔴 &nbsp;Open Windows Powershell:
```
get-process | Select-String "php"
```

<img src="images/image_health_check_windows_status_php.png" width="750">
