#### Install NGINX

🔴 &nbsp;Install epel and remi repos on CentOS/RHEL 7.X:
```
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

🔴 &nbsp;Install the NGINX Web server application on CentOS/RHEL 7.x:
```
yum -y install nginx
```

🔴 &nbsp;Install epel and remi repos on CentOS/RHEL 8.X:
```
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

🔴 &nbsp;Install the NGINX Web server application on CentOS/RHEL 8.x:
```
dnf install nginx
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
