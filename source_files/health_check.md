___
## Health Check
___

The following section outlines health checks for the various Diskover's components.

### Elasticsearch Domain

#### Status of Elasticsearch Service for Linux

🔴 &nbsp;Check status of Elasticsearch  service:
```
systemctl status elasticsearch.service
```

![Image: Health Check of Elasticsearch for Linux](images/image_health_check_linux_elasticsearch.png)

#### Status of Elasticsearch Service for Windows

🔴 &nbsp;To check the status of the Elasticsearch service under Windows, open **Services** by typing **services** in the search bar.

<img src="images/image_health_check_windows_open_services_to_check_elasticsearch.png" width="700">

🔴 &nbsp;Ensure the Elasticsearch service is running:

![Image: Ensure Elasticsearch Service is Running](images/image_health_check_windows_confirm_elasticsearch_is_running.png)


### Diskover-Web

To validate health of the Diskover-Web, basically ensures the Web serving applications are functioning properly.

#### Diskover-Web for Linux

🔴 &nbsp;Check status of NGINX service:
```
systemctl status nginx
```

![Image: Health Check Diskover-Web for Linux](images/image_health_check_linux_diskover_web.png)

🔴 &nbsp;Check status of PHP-FPM service:
```
systemctl status php-fpm
```
![Image: Health Check Diskover-Web for Linux](images/image_aws_customer_deployment_diskover_web_check_status_php_fpm.png)

#### Diskover-Web for Windows

🔴 &nbsp;Check status of NGINX service.

🔴 &nbsp;Open Windows Powershell:
```
get-process | Select-String "nginx"
```

<img src="images/image_health_check_windows_status_nginx.png" width="700">

🔴 &nbsp;Check status of PHP-FPM service.

🔴 &nbsp;Open Windows Powershell:
```
get-process | Select-String "php"
```

<img src="images/image_health_check_windows_status_php.png" width="750">
