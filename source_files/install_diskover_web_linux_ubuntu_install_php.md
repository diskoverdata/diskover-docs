#### Install PHP 7 and PHP-FPM (fastcgi)

🔴 &nbsp;Configure a repository on your system to add PHP PPA. Run the following command to add **ondrej** PHP repository to your Ubuntu system:
```
apt install software-properties-common
add-apt-repository ppa:ondrej/php
```

🔴 &nbsp;Install PHP:
```
apt update
apt install -y php7.4
```

🔴 &nbsp;Check the current active PHP version by running the following command:
```
php -v
```

🔴 &nbsp;Install PHP modules required for Diskover-Web
```
apt-get install -y php-common
apt-get install -y php-fpm
apt-get install -y php-mysql
apt-get install -y php-cli
apt-get install -y php-gd
apt-get install -y php-mysql
apt-get install -y php-ldap
apt-get install -y php-pecl-zip
apt-get install -y php-xml
apt-get install -y php-xmlrpc
apt-get install -y php-mbstring
apt-get install -y php-json
apt install php7.4-curl
```

🔴 &nbsp;Set PHP configuration settings for NGINX:
```
vim /etc/php/7.4/fpm/pool.d/www.conf
```

🔴 &nbsp;Change the NGINX listen socket:
```
listen = /var/run/php-fpm/php-fpm.sock
```

🔴 &nbsp;Change file system ownership, enable and start PHP-FPM service:
```
chown -R www-data:www-data /var/www/diskover-web
systemctl enable php-fpm
systemctl start php-fpm
systemctl status php-fpm
```
