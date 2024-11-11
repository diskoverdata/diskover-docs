<p id="install_diskover_web"></p>

## Diskover-Web Installation

### Overview

This section covers all the necessary steps to set up your Diskover-Web user interface, including the new **Diskover**Admin panel available with Diskover v2.3x.

Once all components are installed, you will be able to [configure your Diskover-Web environment](#config_diskover_web). We strongly recommend following the deployment order outlined in this guide.

<p id="install_nginx_php"></p>

### NGINX and PHP Installation

Let's install NGINX and all the necessary PHP packages.

🔴 &nbsp;Install NGINX:
```
yum -y install nginx
```

🔴 &nbsp;Enable and start the NGINX service:
```
systemctl enable nginx
systemctl start nginx
systemctl status nginx
```

🔴 &nbsp;Enable `epel` and `remi` repositories. Change the **8**s to **9**s if using you're using RHEL/Rocky Linux 9:
```
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
yum -y install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

🔴 &nbsp;Install PHP 8 packages:
```
yum -y install php84 php84-php-common php84-php-fpm php84-php-opcache \
php84-php-cli php84-php-gd php84-php-mysqlnd php84-php-ldap php84-php-pecl-zip \
php84-php-xml php84-php-mbstring php84-php-json php84-php-sqlite3
```

🔴 &nbsp;Copy in `php.ini`:
```
find / -mount -name php.ini-production
  -- /opt/remi/php84/root/usr/share/dovi /et  c/php84-php-common/php.ini-productio
find / -mount -name php.ini
  -- /etc/opt/remi/php84/php.ini
cp /opt/remi/php84/root/usr/share/doc/php84-php-common/php.ini-production /etc/opt/remi/php84/php.ini
```

🟨 &nbsp;This command may differ depending on your PHP8 install directory. To find your PHP8 install directory: 
```
php -i | grep 'Configuration File'
```

🔴 &nbsp;Edit `php-fpm` configuration:
```
vi /etc/opt/remi/php84/php-fpm.d/www.conf
```

🟨 &nbsp;This command may differ depending on your PHP8 install directory. Please ensure the following properties are set and uncommented:
```
user = nginx
group = nginx
listen = /var/opt/remi/php84/run/php-fpm/www.sock   (take note of this .sock location, you will need it later)
listen.owner = nginx
listen.group = nginx

;listen.acl_users = apache                          (ensure this is commented out with the ;)
```

🔴 &nbsp;PHP directories ownership:
```
chown -R root:nginx /var/opt/remi/php84/lib/php     (this command may differ depending on your PHP8 install directory)
mkdir /var/run/php-fpm
chown -R nginx:nginx /var/run/php-fpm
```

🔴 &nbsp;Create `systemd` service file and save:
```
vi /etc/systemd/system/php-fpm.service
```

🔴 &nbsp;Add the following to the file and note that this `ExecStart` command may differ depending on your PHP8 install directory:
```
[Unit]
Description=PHP FastCGI process manager
After=local-fs.target network.target nginx.service

[Service]
PIDFile=/opt/php/php-fpm.pid
ExecStart=/opt/remi/php84/root/usr/sbin/php-fpm --fpm-config /etc/opt/remi/php84/php-fpm.conf --nodaemonize
Type=simple

[Install]
WantedBy=multi-user.target
```

🔴 &nbsp;Set permissions, enable, and start the service:
```
chmod 644 /etc/systemd/system/php-fpm.service
systemctl daemon-reload
systemctl enable php-fpm
systemctl start php-fpm
systemctl status php-fpm
```

🔴 &nbsp;Build the NGINX configuration file:
```
vi /etc/nginx/conf.d/diskover-web.conf
```

🔴 &nbsp;Add the following to the file - replacing the value in `fastcgi_pass` with the `location of your www.sock from the php configuration file` a few steps up, and then save:               
```
server {
        listen   8000;
        server_name  diskover-web;
        root   /var/www/diskover-web/public;
        index  index.php index.html index.htm;
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
            fastcgi_pass unix:/var/opt/remi/php84/run/php-fpm/www.sock;
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
```

### Diskover-Web Installation

Let's install Diskover-Web now that we have our NGINX and PHP packages installed and configured. You need to ensure that you have the latest [Diskover 2.3 zip archive](https://download.diskoverdata.com/). Once you have the zip file, you can `SCP` it to the machine that is designated for Diskover-Web.

🔴 &nbsp;**On-prem** | Will scp the file to the root user's home directory:
```
scp <path to diskover.zip> root@ipAddress:~/
```

🔴 &nbsp;**AWS** | Will scp the file to the user's home directory. Example using Rocky:
```
scp -i <path to PEM file> <path to diskover.zip> rocky@bastion-IP:~/
```

🟨 &nbsp;Note that the user will differ depending on your OS. It is best to consult your AWS EC2 Console to get the exact user to connect to the bastion. Generally, these are the users for the following OS:

| OS | User |
| --- | --- |
| Rocky Linux | rocky |
| Centos 7 or 8 | centos |
| RHEL or Amazon Linux | ec2-user |

🔴 &nbsp;Extract your zip archive:
```
unzip diskover-2.3.0.zip
```

🔴 &nbsp;Copy the diskover-web folder:
```
cd diskover-2.3.0/
cp -a diskover-web /var/www/
```

🔴 &nbsp;Copy the default sample reports:
```
cd /var/www/diskover-web/public
for f in *.txt.sample; do cp $f "${f%.*}"; done
chmod 660 *.txt
```

🔴 &nbsp;Copy the task panel defaults:
```
cd /var/www/diskover-web/public/tasks/
for f in *.json.sample; do cp $f "${f%.*}"; done
chmod 660 *.json
```

🔴 &nbsp;Set permissions for diskover-web:
```
chown -R nginx:nginx /var/www/diskover-web
```

🔴 &nbsp;Restart and check services health:
```
systemctl restart nginx php-fpm; systemctl status nginx php-fpm
```

🟨 &nbsp;Occasionally you will see this error **Another FPM instance seems to already listen on /var/opt/remi/php84/run/php-fpm/www.sock**, if you do:
```
rm /var/opt/remi/php84/run/php-fpm/www.sock
systemctl restart php-fpm; systemctl status php-fpm
```
