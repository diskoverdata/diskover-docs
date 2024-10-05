___
## Elasticsearch Installation 
___

### Overview

This section covers the basic installation of Elasticsearch v8 (commonly referred to as **ES**). We will walk through the steps for setting up a single-node cluster, and we will leave ES authentication disabled by default.

Some helpful links you will or might need:

- [Set up a multi-node cluster]()
- [Configure Elasticsearch SSL and authentication for use with Diskover]()
- [Configure your Elasticsearch environment]() once all the main components are installed, we highly recommend following the deployment order outlined in this guide.
- [Download the current release of Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
- [Download past releases of Elasticsearch](https://www.elastic.co/downloads/past-releases#elasticsearch)


### Java Open JDK Package Installation

🔴 &nbsp;Install Java v21 for Centos v8, and Rocky or RHEL v8 or v9: 
```
dnf install java-21-openjdk
```

### Elasticsearch Installation

🔴 &nbsp;To install Elasticsearch via RPM directly:
```
dnf install https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.15.2-x86_64.rpm
```

🔴 &nbsp;**Alternatively**, if the above doesn't work, configure `yum` repository for ES v8:
```
vi /etc/yum.repos.d/elasticsearch.repo
```

🔴 &nbsp;Add the following to the file and save:
```
[elasticsearch]
name=Elasticsearch repository for 8.x packages
baseurl=https://artifacts.elastic.co/packages/8.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=0
autorefresh=1
type=rpm-md
```

🔴 &nbsp;Install the latest ES v8 package:
```
yum -y install --enablerepo=elasticsearch elasticsearch
```

🟨 &nbsp;Elasticsearch v8 should be installed at this point. Stop here and go to [Set up a multi-node cluster]() if applicable.

### Elasticsearch Initial Configuration

Let's perform some basic configurations to ensure our single-node ES cluster is up and running, and ready for integration with Diskover.

🔴 &nbsp;ES setting modifications:
```
vi /etc/elasticsearch/elasticsearch.yml
```

🟨 &nbsp;Ensure the following properties are set and uncommented:
```
cluster.name: <name of your cluster>        (Should be a distinctive name)
node.name: node-1                           (Can be named anything, but should be distinctive)
path.data: /var/lib/elasticsearch           (or some other custom ES data directory)
path.logs: /var/log/elasticsearch           (or some other custom ES logging directory)
bootstrap.memory_lock: true                 (lock RAM on startup)
network.host: 0.0.0.0                       (binds ES to all available IP addresses)
discovery.seed_hosts: ["ES-IP"]             (If you have other ES IPs part of the cluster, they need to be comma separated like so: ["ES IP 1", "ES IP 2", "ES IP 3"])
cluster.initial_master_nodes: ["node-1"]    (Names need to be what you have named the nodes above)
xpack.security.enabled: false               (disable security)
xpack.security.enrollment.enabled: false    (disable security enrollment on first boot)
xpack.ml.enabled: false                     (disable machine learning functionality - not needed)
```

🔴 &nbsp;Configure Java JVM and memory lock for ES:
```
vi /etc/elasticsearch/jvm.options.d/jvm.options
```

🔴 &nbsp;Ensure the `JVM args` are uncommented and set to half of your available RAM:
```
-Xms8g
-Xmx8g
```

🔴 &nbsp;ES systemd service memory settings:
```
mkdir /etc/systemd/system/elasticsearch.service.d
vi /etc/systemd/system/elasticsearch.service.d/elasticsearch.conf
```

🔴 &nbsp;Add the following to the file and save:
```
[Service]
LimitMEMLOCK=infinity
LimitNPROC=4096
LimitNOFILE=65536
```

🔴 &nbsp;Start and enable the ES service:
```
systemctl enable elasticsearch
systemctl start elasticsearch
systemctl status elasticsearch
```

🟨 &nbsp;If ES fails to lock the memory upon startup, then add the following to `/etc/security/limits.conf`:
```
elasticsearch soft memlock unlimited
elasticsearch hard memlock unlimited
```

### Elasticsearch Health Check

With the ES cluster installed and running, you can now run a simple curl command to check the health of your cluster.

🔴 &nbsp;Check the health of your Elasticsearch cluster. 

🟨 &nbsp;Replace the **${ESHOST}** below with your **ES node(s) IP address or hostname**

If SSL is enabled on the cluster: 
```
curl -XGET -u elastic:password https://${ESHOST}:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
[root@twothree ~]# curl http://${ESHOST}:9200/_cluster/health?pretty
{
  "cluster_name" : "elasticsearch",
  "status" : "green",
  "timed_out" : false,e
  "number_of_nodes" : 1,
  "number_of_data_nodes" : 1,
  "active_primary_shards" : 0,
  "active_shards" : 0,
  "relocating_shards" : 0,
  "initializing_shards" : 0,
  "unassigned_shards" : 0,
  "delayed_unassigned_shards" : 0,
  "number_of_pending_tasks" : 0,
  "number_of_in_flight_fetch" : 0,
  "task_max_waiting_in_queue_millis" : 0,
  "active_shards_percent_as_number" : 100.0
}
```


