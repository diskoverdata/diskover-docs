#### Install PHP 7 and PHP-FPM (FastCGI)

>_Note:_ PHP 8.1 can also be used instead of PHP 7.4, replace php74/php7.4 with php81/php8.1

##### Centos/RHEL 8.x

🔴 &nbsp;Install epel and remi repos on CentOS/RHEL 8.x (if not already installed):
```
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

🔴 &nbsp;Enable remi php 7.4:
```
dnf module enable php:remi-7.4
```

🔴 &nbsp;Install PHP and other PHP packages:
```
dnf install php php-common php-fpm php-opcache php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json php-sqlite3
```

🔴 &nbsp;Copy php production ini file php.ini-production to php.ini file:
```
find / -mount -name php.ini-production
find / -mount -name php.ini
cp php.ini-production php.ini
```

#### Configure NGNIX

🔴 &nbsp;Set PHP configuration settings for NGINX:
```
vi /etc/php-fpm.d/www.conf
```

🔴 &nbsp;Set user and group to **nginx** user:
```
user = nginx
group = nginx
```

🔴 &nbsp;Uncomment and change listen owner and group to nginx user:
```
listen.owner = nginx
listen.group = nginx
```

🔴 &nbsp;Change the listen socket on Centos/RHEL 7.x:
```
listen = /var/run/php-fpm/php-fpm.sock
```

🔴 &nbsp;Change the listen socket on Centos/RHEL 8.x:
```
listen = /var/run/php-fpm/www.sock
```

🔴 &nbsp;Change directory ownership for nginx user:
```
chown -R root:nginx /var/lib/php
mkdir /var/run/php-fpm
chown -R nginx:nginx /var/run/php-fpm
```

🔴 &nbsp;Enable at boot and start PHP-FPM service:
```
systemctl enable php-fpm
systemctl start php-fpm
systemctl status php-fpm
```
