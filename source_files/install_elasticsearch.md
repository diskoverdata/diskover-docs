<p id=“install_es”></p>

## Elasticsearch Installation 

### Overview

This section covers the basic installation of Elasticsearch v8, commonly referred to as **ES**, throughout Diskover's documentation and user interface. This section covers:

- Setting up your first Elasticsearch node and we will leave ES authentication disabled by default for now.
- If you have multiple nodes in your environment, you will need to repeat this process for each node, as [each node requires its dedicated system](#architecture_diagram).

Once all the components are installed, you will be able to refine your [Elasticsearch environment configuration](#config_es). We strongly recommend following the deployment order outlined in this guide.

Some links you might need:

- [Set up a cluster](#set_es_cluster)
- [Set up multiple clusters](#set_es_multi_cluster)
- [Configure Elasticsearch SSL and authentication for use with Diskover]()
- [Download the current release of Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
- [Download past releases of Elasticsearch](https://www.elastic.co/downloads/past-releases#elasticsearch)

<p id=“install_es_node”></p>

### Single Node Installation

#### Java Open JDK Package Installation

Let's start this process by setting up your first node:

🔴 &nbsp;Install Java v21 for Centos v8, and Rocky or RHEL v8 or v9: 
```
dnf install java-21-openjdk
```

#### Elasticsearch Installation

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

🟨 &nbsp;Elasticsearch v8 should be installed at this point.

#### Elasticsearch Initial Configuration

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

#### Elasticsearch Health Check

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

### Multiple Nodes Installation

If you have more than 1 node in your environment, redo all the [Single Node Installation](#install_es_node) steps for each node/system.

<p id=“set_es_cluster”></p>

### Cluster Setup

<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

#### Overview

While it’s not mandatory to set up a cluster, if you have 3 or more Elasticsearch nodes, setting up a cluster is highly recommended for ensuring high availability, reliability, load balancing, and fault tolerance. It’s the preferred setup for production environments.

This section will walk you through the steps to configure a cluster, enabling your nodes to work together efficiently and securely distribute data across the system.

#### Requirements

- Each ES node needs to be installed on its own system.
- All nodes must be able to communicate with each other. To test this, install Elasticsearch on the nodes, start the services, and use telnet to connect to each host.

```
telnet <es-ip> 9200
```

- If this is successful, you should see the following:

```
[root@es1 ~]# telnet 192.168.64.19 9200
Trying 192.168.64.19...
Connected to 192.168.64.19.
Escape character is '^]'.
```

- If you see **Connection Refused**, you should validate if [**SELinux** and **Firewalld** are disabled and off](#disable_selinux), respectively.

#### Cluster Environment Setup

🔴 &nbsp;Run DNF updates:
```
sudo dnf update -y
```

🔴 &nbsp;Install Java 8: 
```
sudo dnf install -y java-21-openjdk
```

🔴 &nbsp;Install Elasticsearch 7: 
```
sudo dnf install -y https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.15.2-x86_64.rpm
```

🔴 &nbsp;Configure the JVM for Elastic: 
```
vi /etc/elasticsearch/jvm.options.d/jvm.options:
```

🔴 &nbsp;Set the memory heap size - memory allocation should never exceed half of your system's total configured memory:
```
-Xms8g
-Xmx8g
```

🔴 &nbsp;Set up the Elastic config:
```
vi /etc/elasticsearch/elasticsearch.yml:
```

| Field | Description |
| --- | --- |
| cluster.name | It should include **diskover** in the name to make it easily distinguishable for the customer, example: **diskover-es** |
| node.name | It can be named anything, but should include a number to identify the node, example: **diskover-node-1** |
| path.data | Set this to the desired storage location for your data. If a large amount of data is expected, it's recommended to use an external storage location. The default location is **/var/lib/elasticsearch** |
| path.logs | This defines the path where Elasticsearch logs will be stored. The default location is **/var/log/elasticsearch** |
| bootstrap.memory_lock | This should always be set to **true**. It will prevent Elasticsearch from trying to use the swap memory. |
| network.host | This should be set to the IP address of the host where you're configuring Elasticsearch. |
| discovery.seed_hosts | **IMPORTANT!** You need to enter the IP addresses of each Elasticsearch node that will be part of the cluster, for example:<br>```discovery.seed_hosts: ["192.168.64.18", "192.168.64.19", "192.168.64.20"]``` |
| cluster.initial_master_nodes | **IMPORTANT!** You need to enter the name of each node for the node.name setting, for example:<br>```cluster.initial_master_nodes: ["diskover-node-1", "diskover-node-2", "diskover-node-3"]``` |
| xpack.ml.enabled | This should be set to **false** to disable the Machine Learning within ES. If you do not have this set to false, then Elasticsearch will fail upon startup. |


🔴 &nbsp;Make the directory for the custom ES `systemd` settings: 
```
mkdir /etc/systemd/system/elasticsearch.service.d
```


🔴 &nbsp;Create the service config file: 
```
vi /etc/systemd/system/elasticsearch.service.d/elasticsearch.conf:

[Service]
LimitMEMLOCK=infinity
LimitNPROC=4096
LimitNOFILE=65536
```

#### Start Elasticsearch Cluster

🔴 &nbsp;Reload the daemon on all ES nodes: 
```
sudo systemctl daemon-reload
```

🔴 &nbsp;Start up **Node 1** first:
```
sudo systemctl start elasticsearch
```

🟨 &nbsp;You can watch the startup logs at **/var/log/elasticsearch/<cluster-name>.log**
<br><br>
🔴 &nbsp;Once Node 1 is online, start **Node 2**, then once Node 2 is online, start **Node 3**.

<p id=“set_es_multi_cluster”></p>

### Multiple Cluster Environment Setup

<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

In a multiple-cluster setup for Elasticsearch, you can run and manage multiple independent clusters, each with its own set of nodes and indices. This setup is typically used when you need to isolate data or workloads across different environments (such as production, testing, and development) or geographically distributed locations. Each cluster operates independently, and you can configure cross-cluster search or replication to share data or search across clusters as needed.

Please [open a support ticket]((https://support.diskoverdata.com/) for assistance.
