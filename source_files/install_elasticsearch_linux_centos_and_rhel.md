___
### Install Elasticsearch for Linux CentOS and RHEL

Install CentOS 7.x, CentOS 8.x, RHEL 7.x, or RHEL8.x

#### Disable SELinux (Optional)

🔴 &nbsp;Disabling SELinux is optional and not required to run Diskover, however, if you use SELinux you will need to adjust the SELinux policies to allow Diskover to run:
```
vi /etc/sysconfig/selinux
```

🔴 &nbsp;Change **SELINUX** to **disabled**:

![Image: Disable SELinux for Elasticsearch](images/image_elasticsearch_install_for_linux_disable_selinux.png)

🔴 &nbsp;Reboot now.

#### Update Server

🔴 &nbsp;Update server:
```
yum -y update
```

#### Install Java 8

🔴 &nbsp;Install Java 8 JDK (OpenJDK) required for Elasticsearch:
```
yum -y install java-1.8.0-openjdk.x86_64
```

#### Install Elasticsearch 7.x:

The following section describes installing Elasticsearch on Linux CentOS and RHEL.

🔴 &nbsp;Install the latest version of Elasticsearch - you also need to keep up to date with patches, security enhancements, etc. as new versions are released:
```
yum install -y
https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.x.x-x86_64.rpm
```

🔴 &nbsp;Configure Java JVM for Elasticsearch:
```
vi /etc/elasticsearch/jvm.options
```

🔴 &nbsp;Set the set the following memory heap size options to 50% of memory, up to 32g max:
```
-Xms8g
-Xmx8g
```

🔴 &nbsp;Update the Elasticsearch configuration file to define desired Elasticsearch endpoint:
```
vi /etc/elasticsearch/elasticsearch.yml
```

🔴 &nbsp;Network host configuration:
```
network.host:
```
> _Note_: Leave commented out for localhost (default) or uncomment and set to the  **ip**  you want to bind to, using  **0.0.0.0** will bind to all  **ips**.

🔴 &nbsp;Discovery seed host configuration:
```
discovery.seed_hosts:
```

>_Note_: Leave commented out for **[“127.0.0.1", "[::1]"]** (default) or uncomment and set to **["<host ip>"]**.

🔴 &nbsp;Configure the Elasticsearch storage locations to the path of desired fast storage devices (SSD or other fast disk):
```
path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
```

>_Note_: Change from default location below if desired.

🔴 &nbsp;Configure the Elasticsearch bootstrap memory variable to **true**:
```
bootstrap.memory_lock: true
```
  
🔴 &nbsp;Update Elasticsearch **systemd** service settings:
```
mkdir /etc/systemd/system/elasticsearch.service.d
```
  
🔴 &nbsp;Update the Elasticsearch service configuration file:
```
vi /etc/systemd/system/elasticsearch.service.d/elasticsearch.conf
```
  
🔴 &nbsp;Add the following text:
```
[Service]
LimitMEMLOCK=infinity
LimitNPROC=4096
LimitNOFILE=65536
```

#### Open Firewall Ports for Elasticsearch
  
🔴 &nbsp;Open firewall ports:
```
firewall-cmd --add-port=9200/tcp --permanent
firewall-cmd --reload
```

🔴 &nbsp;Start and enable Elasticsearch service:
```
systemctl enable elasticsearch.service
systemctl start elasticsearch.service
systemctl status elasticsearch.service
```

#### Check Elasticsearch Health

🔴 &nbsp;Check the health of the Elasticsearch cluster:
```
curl http://ip_address:9200/_cat/health?v
```

![Image: Elasticsearch Health Check](images/image_elasticsearch_install_for_linux_health_check.png)
