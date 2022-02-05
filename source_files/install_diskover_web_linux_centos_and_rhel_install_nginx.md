#### Install NGINX

🔴 &nbsp;The following will install the NGINX Web server application:
```
yum -y install epel-release yum-utils
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum -y install nginx
systemctl enable nginx
systemctl start nginx
systemctl status nginx
```

#### NGINX Changes Required for CentOS/RHEL 8.X

🔴 &nbsp;For SELinux add the following to allow NGINX to start as well:
```
semanage permissive -a httpd_t
```
