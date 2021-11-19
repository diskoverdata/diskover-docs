___
### Uninstall NGINX

#### Uninstall NGINX for Linux

🔴 &nbsp;Determine NGINX version installed:
```
rpm -qa | grep nginx
```

![Image: Determine NGINX  Version](images/image_uninstall_determine_nginx_version.png)

🔴 &nbsp;In the above example, remove all NGINX with the **--nodeps** argument to uninstall each package in the above list:
```
rpm -e --nodeps rpm -qa | grep nginx
```
