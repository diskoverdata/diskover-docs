___
## Uninstall Diskover
___

The following outlines how to uninstall the Diskover's components.

### Uninstall Elasticsearch

🔴 &nbsp;Determine the Elasticsearch version installed:
```
rpm -qa | grep elastic
```

![Image: Determine Elasticsearch Version](images/image_uninstall_elasticsearch_determine_version.png)

🔴 &nbsp;In the above example, remove **elasticsearch-7.10.1-1.x86_64**:
```
rpm -e elasticsearch-7.10.1-1.x86_64
```

![Image: Remove Elasticsearch](images/image_uninstall_elasticsearch_remove.png)

### Uninstall PHP-FPM

🔴 &nbsp;Determine PHP-FPM version installed:
```
rpm -qa | grep php-fpm
```

🔴 &nbsp;In the previous example, remove **php-fpm-7.3.26-1.el7.remi.x86_64**:

```
rpm -e php-fpm-7.3.26-1.el7.remi.x86_64
```

![Image: Determine PHP-FPM  Version](images/image_uninstall_php_fpm_determine_version.png)


### Uninstall NGINX

🔴 &nbsp;Determine NGINX version installed:
```
rpm -qa | grep nginx
```

![Image: Determine NGINX  Version](images/image_uninstall_determine_nginx_version.png)

🔴 &nbsp;In the above example, remove all NGINX with the **--nodeps** argument to uninstall each package in the above list:
```
rpm -e --nodeps rpm -qa | grep nginx
```


### Uninstall Diskover-Web

🔴 &nbsp;To uninstall the Diskover-Web components simply remove the install location:
```
rm -rf /var/www/diskover-web
```

### Uninstall Task Worker Daemon

#### Uninstall Task Daemon for Linux

🔴 &nbsp;To uninstall the Task Daemon on Diskover indexer(s) perform the following:
```
systemctl stop diskoverd.service
```

```
rm /etc/systemd/system/diskoverd.service
```

#### Uninstall Task Daemon for Windows

🚧 Instructions to come.

#### Uninstall Task Daemon for Mac

🚧 Instructions to come.

### Uninstall Diskover Indexers

#### Uninstall Indexers for Linux

🔴 &nbsp;To uninstall the Diskover indexer components simply remove the install location:
```
rm -rf /opt/diskover
```

🔴 &nbsp;Remove the configuration file locations:
```
rm -rf /root/.config/diskover*
```

#### Uninstall Indexers for Windows

🚧 Instructions to come.

#### Uninstall Indexers for Mac

🚧 Instructions to come.