#### Install PHP 7 and PHP-FPM (fastcgi)

>Note: For CentOS/RedHat 8.X, the **remi** repository is not needed, but access to the **EPEL repo** is for PHP modules. The issue is there are some PHP modules missing in the RHEL 8 distribution. The **php-pecl-mcrypt** module was dropped.

🔴 &nbsp;Install the repos (epel and remi) on CentOS/RHEL 7.X (if already not installed):
```
yum -y install epel-release yum-utils
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

🔴 &nbsp;Install the repo (epel) on CentOS/RHEL 8.X (if already not installed):
```
yum -y install epel-release yum-utils
```

🔴 &nbsp;Enable remi php 7.4 on CentOS/RHEL 7.X:
```
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
