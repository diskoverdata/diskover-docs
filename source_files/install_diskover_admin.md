___
## DiskoverAdmin Installation
___

### Overview

Diskover-Web is nothing without its new Administrator! The DiskoverAdmin configuration management user interface will allow us to further configure our Diskover system once it’s up and running.

During this process, you will need the latest [Diskover 2.3x zip archive](https://download.diskoverdata.com/). Note that this is subject to change to RPMs in the near future. Once you have the zip file, you can `SCP` it to the machine that is designated for DiskoverAdmin. Note that DiskoverAdmin must be installed on the same host as Diskover-Web.

### Python Installation

Python should already be installed as instructed in the [Diskover Indexers/Workers Installation]() section. Alternatively, you could use a [PyEnv (Python Environments)]().

🟨 &nbsp;Note that some steps here, such as symlinking to the main Python3 executable, might not be advisable if this system is used for other Python-based programs.

### DiskoverAdmin Installation

🔴 &nbsp;Extract your zip archive:
```
unzip diskover-2.3.0.zip
```

🔴 &nbsp;Copy the diskover-admin folder:
```
cd diskover-2.3.0/
cp -a diskover-admin /var/www/
```

🔴 &nbsp;Adjust the file ownership:
```
chown -R nginx.nginx /var/www/diskover-admin/
```

🔴 &nbsp;PIP installs:
```
cd /var/www/diskover-admin/etc/
python3 -m pip install -r requirements.txt
```

🔴 &nbsp;NGINX configuration - Copy the location block output of this cat command:
```
cat /var/www/diskover-admin/etc/diskover-web.conf
```

🔴 &nbsp;Paste the contents here. This needs to be in its own location block:
```
vi /etc/nginx/conf.d/diskover-web.conf
```

🔴 &nbsp;Set NGINX proxy params:
```
cp /var/www/diskover-admin/etc/proxy_params /etc/nginx/
```

🔴 &nbsp;Restart and check services health:
```
systemctl restart nginx php-fpm; systemctl status nginx php-fpm
```

### Daemons 

Now that DsikoverAdmin is installed and configured, let’s daemonize this service with **systemd**.

🔴 &nbsp;Copy default service file:
```
cp /var/www/diskover-admin/etc/diskover-admin.service /etc/systemd/system/
```

🟨 &nbsp;Ensure you edit the service file to add a single tick at the end of line #11 in the ExecStartPost section.

🔴 &nbsp;Start the Diskover-Admin service:
```
systemctl daemon-reload
systemctl enable diskover-admin
systemctl start diskover-admin
systemctl status diskover-admin
```

🟨 &nbsp;A happy status looks like this:
```
      Starting Uvicorn instance to serve /diskover-admin...
      INFO:     Uvicorn running on unix socket /var/www/diskover-admin/run/diskover-admin.sock (Press CTRL+C to quit)
      INFO:     Started parent process [10559]
      Started Uvicorn instance to serve /diskover-admin. 
```
