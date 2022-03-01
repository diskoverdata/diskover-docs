#### Install PHP 7 and PHP-FPM (FastCGI)

##### Centos/RHEL 7.x

🔴 &nbsp;Install epel and remi repos on CentOS/RHEL 7.x (if not already installed):
```
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

🔴 &nbsp;Enable remi php 7.4:
```
yum -y install yum-utils
yum-config-manager --enable remi-php74
```

🔴 &nbsp;Install PHP and other PHP packages:
```
yum -y install php php-common php-fpm php-opcache php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json
```

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
dnf install php php-common php-fpm php-opcache php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json
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
