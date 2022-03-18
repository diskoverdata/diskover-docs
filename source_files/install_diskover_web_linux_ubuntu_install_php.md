#### Install PHP 7 and PHP-FPM (FastCGI)

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
apt-get install -y php-common php-fpm php-mysql php-cli php-gd php-ldap php-pecl-zip php-xml php-xmlrpc php-mbstring php-json php7.4-curl php7.4-sqlite
```

🔴 &nbsp;Set PHP configuration settings for NGINX:
```
vim /etc/php/7.4/fpm/pool.d/www.conf
```

🔴 &nbsp;Change the NGINX listen socket:
```
listen = /var/run/php-fpm/php-fpm.sock
```

🔴 &nbsp;Set timezone to UTC in php.ini:
```
vim /etc/php/7.4/fpm/php.ini
date.timezone = "UTC"
```

🔴 &nbsp;Enable and start PHP-FPM service:
```
systemctl enable php-fpm
systemctl start php-fpm
systemctl status php-fpm
```
