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

🔴 &nbsp;Perform the following commands to install PHP and PHP-FPM on CentOS/RHEL 7.X:
```
yum-config-manager --enable remi-php74
yum -y install php php-common php-fpm php-opcache php-pecl-mcrypt php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json
```

🔴 &nbsp;The following packages need to be installed for **php-pecl-mcrypt** on CentOS/RHEL 8.X:
```
yum -y install libtomcrypt-devel libmcrypt-devel libmcrypt libtomcrypt
```
For more information: [https://hostadvice.com/how-to/how-to-install-mcrypt-on-centos-8/](https://hostadvice.com/how-to/how-to-install-mcrypt-on-centos-8/)

🔴 &nbsp;Perform the following commands to install PHP and PHP-FPM on CentOS/RHEL 8.X:
```
yum -y install php php-common php-fpm php-opcache php-pecl-mcrypt php-cli php-gd php-mysqlnd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json
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

#### NGINX Diskover-web Config Modifications Required for CentOS/RHEL 8.X

🔴 &nbsp;Make the following change in the **/etc/nginx/conf.d/diskover-web.conf**. Change the following line from:
```
fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;
```

🔴 &nbsp;To:
```
fastcgi_pass unix:/var/run/php-fpm/www.sock;
```

🔴 &nbsp;Restart NGINX:
```
systemctl restart nginx
```
