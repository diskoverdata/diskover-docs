#### Install NGINX

🔴 &nbsp;Install the epel repo on CentOS/RHEL:
```
yum -y install epel-release yum-utils
```

🔴 &nbsp;Install the remi repo on CentOS/RHEL 7.X (not needed on 8.X):
```
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

🔴 &nbsp;Install the NGINX Web server application on CentOS/RHEL:
```
yum -y install nginx
```

🔴 &nbsp;Enable NGINX to start at boot and start it and check status:
```
systemctl enable nginx
systemctl start nginx
systemctl status nginx
```

#### NGINX Changes Required for CentOS/RHEL 8.X for SELinux

🔴 &nbsp;For SELinux add the following to allow NGINX to start as well:
```
semanage permissive -a httpd_t
```
