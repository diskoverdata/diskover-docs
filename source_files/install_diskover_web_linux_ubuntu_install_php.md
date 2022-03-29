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
apt install -y php7.4-common php7.4-fpm php7.4-mysql php7.4-cli php7.4-gd php7.4-ldap php7.4-zip php7.4-xml php7.4-xmlrpc php7.4-mbstring php7.4-json php7.4-curl php7.4-sqlite3
```

🔴 &nbsp;Set PHP configuration settings for NGINX:
```
vim /etc/php/7.4/fpm/pool.d/www.conf
```

🔴 &nbsp;Change the NGINX listen socket:
```
listen = /var/run/php/php-fpm.sock
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
