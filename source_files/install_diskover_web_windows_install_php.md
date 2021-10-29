### Install PHP

➡️ Go to the official download link and download the required version of PHP 7 for Windows: <a href=“https://www.php.net/downloads.php”>https://www.php.net/downloads.php</a>

➡️ Download the **Thread Safe** version 7.X for Windows.

➡️ Create the following folder **C:\Program Files\Php**

➡️ Extract the **php zip file** and move to **C:\Program Files\Php**

➡️ Configure the environment variable to access PHP from the command line.

➡️ Type **environment** in the search box and select **Edit the system environment variables**.

➡️ Select the **Environment variables** button, then click on the path row under **System variables**, and click **Edit**.

➡️ Add the following and replace with *your install location*:
```
C:\Program Files\Php\php-7.4.14-Win32-vc15-x64
```

![Image: Install PHP](image_diskover_web_install_for_windows_replace_php_install_location.png)

### Verify Environment Variables

➡️ Open Windows PowerShell and type in `php -v` to verify PHP is working.

![Image: Confirm PHP is Working](images/image_diskover_web_install_for_windows_verify_php_working.png)

➡️ Create **php.ini** file to enable required dynamic extensions **C:\Program Files\Php\php-7.4.14-Win32-vc15-x64\php.ini**
```
; Directory in which the loadable extensions (modules) reside.
extension_dir = "C:\Program Files\Php\php-7.4.14-Win32-vc15-x64\ext\"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Dynamic Extensions Required ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

extension=php_curl.dll
zend_extension=php_opcache.dll
extension=php_gd2.dll
extension=php_ldap.dll
extension=php_xmlrpc.dll
extension=php_mbstring.dll
extension=php_openssl.dll
```

➡️ Configure integration of NGINX with PHP.

➡️ Start PHP at **127.0.0.1:9999**

➡️ Open Windows PowerShell as administrator and run:
```
C:\Program Files\Php\php-7.4.14-Win32-vc15-x64> php-cgi.exe -b 127.0.0.1:9999
```

![Image: NGINX and PHP Integration Configuration](images/image_diskover_web_install_for_windows_nginx_php_integration.png)

➡️ Make a backup of **nginx.conf** file and copy:
```
C:\Program Files\Nginx\nginx-1.19.6\conf\nginx.conf” “C:\Program Files\Nginx\nginx-1.19.6\conf\nginx.conf.bak
```

➡️ Edit **nginx.conf** file:
```
C:\Program Files\Nginx\nginx-1.19.6\conf\nginx.conf
```

>*Note:* This configuration file assumes Diskover-Web is the only Web server running on the machine.

➡️ Replace contents with the following text:
```
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    server {
        listen   8000;
        server_name  diskover-web;
        root   /var/www/diskover-web/public;
        index  index.php  index.html index.htm;
        error_log  /var/log/nginx/error.log;
        access_log /var/log/nginx/access.log;
        location / {
            try_files $uri $uri/ /index.php?$args =404;
        }
        location ~ \.php(/|$) {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            set $path_info $fastcgi_path_info;
            fastcgi_param PATH_INFO $path_info;
            try_files $fastcgi_script_name =404;
            fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;
            #fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
            fastcgi_read_timeout 900;
            fastcgi_buffers 16 16k;
            fastcgi_buffer_size 32k;
        }
}

}
```

➡️ Create a file:
```
C:\Program Files\Nginx\nginx-1.19.6\html\info.php
```

➡️ And test PHP configuration with the text below:
```
<?php
    phpinfo();
?>
```

➡️ Start the NGINX Web server.

➡️ Open Windows PowerShell as administrator and run:
```
PS C:\Program Files\Nginx\nginx__-1.19.6> .\nginx__.exe
```

![Image: Start NGINX Web Server](images/image_diskover_web_install_for_windows_run_nginx_exe_from_powershell.png)

➡️ Open **info.php** page to confirm proper configuration: <a href=“http://localhost/info.php”>http://localhost/info.php</a>

![Image: Verify PHP Configuration](images/image_diskover_web_install_for_windows_verify_php_config.png)
