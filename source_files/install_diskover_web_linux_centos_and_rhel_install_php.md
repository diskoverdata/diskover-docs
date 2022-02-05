#### Install PHP 7 and PHP-FPM (fastcgi)

🔴 &nbsp;Install epel repo on CentOS/RHEL 7.X (if already not installed):
```
yum -y install epel-release yum-utils
```

🔴 &nbsp;Install remi repo and enable remi php 7.4 on CentOS/RHEL 7.X:
```
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php74
```

🔴 &nbsp;Install PHP and PHP-FPM:
```
yum -y install php php-common php-fpm php-opcache php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json
```

🔴 &nbsp;Set PHP configuration settings for NGINX:
```
vi /etc/php-fpm.d/www.conf
```

🔴 &nbsp;Change ownership to **nginx**:
```
user = nginx
group = nginx
```

🔴 &nbsp;Uncomment and change the NGINX listen parameters:
```
listen.owner = nginx
listen.group = nginx
```

🔴 &nbsp;Change the  NGINX listen socket:
```
listen = /var/run/php-fpm/php-fpm.sock
```

🔴 &nbsp;Change file system ownership, enable and start PHP-FPM service:
```
chown -R root:nginx /var/lib/php
chown -R nginx:nginx /var/run/php-fpm/
systemctl enable php-fpm
systemctl start php-fpm
systemctl status php-fpm
```
