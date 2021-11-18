### Install NGINX

🔴 &nbsp;The following will install the NGINX Web server application:
```
amazon-linux-extras install epel -y
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum -y install nginx
systemctl enable nginx
systemctl start nginx
systemctl status nginx
```
