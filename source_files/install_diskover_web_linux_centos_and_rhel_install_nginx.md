#### Install NGINX

🔴 &nbsp;Install epel and remi repos on CentOS/RHEL 8.x:
```
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
yum -y install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

```
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

🔴 &nbsp;Install the NGINX Web server application on CentOS/RHEL 8.x:
```
yum -y install nginx
```

```
dnf install nginx
```

🔴 &nbsp;For SELinux on CentOS/RHEL 8.x add the following to allow NGINX to start:
```
semanage permissive -a httpd_t
```

🔴 &nbsp;Enable NGINX to start at boot, start it now and check status:
```
systemctl enable nginx
systemctl start nginx
systemctl status nginx
```
