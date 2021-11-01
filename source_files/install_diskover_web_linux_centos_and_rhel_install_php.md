### Install PHP 7 and PHP-FPM (fastcgi)

➡️ Perform the following commands to install PHP and PHP-FPM:
```
yum-config-manager --enable remi-php74
yum -y install php php-common php-fpm php-opcache php-pecl-mcrypt php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json
```

➡️ Set PHP configuration settings for NGINX:

`vi /etc/php-fpm.d/www.conf`

➡️ Change ownership to **nginx**:
```
user = nginx
group = nginx
```

➡️ Uncomment and change the NGINX listen parameters:
```
listen.owner = nginx
listen.group = nginx
```

➡️ Change the  NGINX listen socket:

`listen = /var/run/php-fpm/php-fpm.sock`

➡️ Change file system ownership, enable and start PHP-FPM service:
```
chown -R root:nginx /var/lib/php
chown -R nginx:nginx /var/run/php-fpm/
systemctl enable php-fpm
systemctl start php-fpm
systemctl status php-fpm
```
