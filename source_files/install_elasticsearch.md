<p id="install_es"></p>

## Elasticsearch Installation 

### Overview

This section covers the basic installation of Elasticsearch v8, commonly referred to as **ES**, throughout Diskover's documentation and user interface. This section covers:

- Setting up your first Elasticsearch node and we will leave ES authentication disabled by default for now.
- If you have multiple nodes in your environment, you will need to repeat this process for each node, as [each node requires its dedicated system](#architecture_diagram).

Once all the components are installed, you will be able to refine your [Elasticsearch environment configuration](#config_es). We strongly recommend following the deployment order outlined in this guide.

Some quick links you might need:

- [Set up a cluster](#set_es_cluster)
- [Set up multiple clusters](#set_es_multi_cluster)
- [Download the current release of Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
- [Download past releases of Elasticsearch](https://www.elastic.co/downloads/past-releases#elasticsearch)

<p id="install_es_node"></p>

### Single Node Installation

#### Java Open JDK Package Installation

Let's start this process by setting up your first node:

🔴 &nbsp;Install Java v21: 
```
dnf install java-21-openjdk
```

```
dnf install https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.15.2-x86_64.rpm
```

#### Elasticsearch Installation

🔴 &nbsp;Configure `yum` repository for ES v8:
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

### Multiple Nodes Installation

If you have more than 1 node in your environment, redo all the [Single Node Installation](#install_es_node) steps for each node/system.

<p id="set_es_cluster"></p>

### Single Cluster Setup

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

#### Setup

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

<p id="set_es_multi_cluster"></p>

### Multiple Clusters Setup

<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

In a multiple-cluster setup for Elasticsearch, you can run and manage multiple independent clusters, each with its own set of nodes and indices. This setup is typically used when you need to isolate data or workloads across different environments (such as production, testing, and development) or geographically distributed locations. Each cluster operates independently, and you can configure cross-cluster search or replication to share data or search across clusters as needed.

Please [open a support ticket](https://support.diskoverdata.com/) for assistance.

### Elasticsearch Health Check

With the ES cluster installed and running, you can now run a simple curl command to check the health of your cluster.

🔴 &nbsp;Check the health of your Elasticsearch cluster. 

🟨 &nbsp;Replace the **${ESHOST}** below with your **ES node(s) IP address or hostname**

Curl command **if SSL is enabled** on the cluster - the result will differ, of course, based on your own environment - [navigate here for more information on SSL enablement](#ssl_enable_es):
```
curl -XGET -u elastic:password https://${ESHOST}:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
{
  "cluster_name" : "elasticsearch",
  "status" : "yellow",
  "timed_out" : false,
  "number_of_nodes" : 1,
  "number_of_data_nodes" : 1,
  "active_primary_shards" : 78,
  "active_shards" : 78,
  "relocating_shards" : 0,
  "initializing_shards" : 0,
  "unassigned_shards" : 1,
  "delayed_unassigned_shards" : 0,
  "number_of_pending_tasks" : 0,
  "number_of_in_flight_fetch" : 0,
  "task_max_waiting_in_queue_millis" : 0,
  "active_shards_percent_as_number" : 98.73417721518987
}
```

Curl command **if SSL is not enabled** on the cluster - the result will differ, of course, based on your own environment:
```
curl http://${ESHOST}:9200/_cluster/health?pretty
{
  "cluster_name" : "elasticsearch",
  "status" : "green",
  "timed_out" : false,
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

### Enable SSL

#### Enable SSL for Single-Node Cluster

🔴 &nbsp;When ES v8 finishes installing, you will need to grab the output password for the elastic user. The output will look like the following:

```
--------------------------- Security autoconfiguration information ------------------------------

Authentication and authorization are enabled.
TLS for the transport and HTTP layers is enabled and configured.

The generated password for the elastic built-in superuser is : y1DGG*eQFdnYPXJiPu6w
....
```

🟨 &nbsp;If you need to reset the password - [more info can be found here on that subject](https://www.elastic.co/guide/en/elasticsearch/reference/current/reset-password.html):
```
bin/elasticsearch-reset-password -u elastic
```

🟨 &nbsp;Ensure the following is set inside the `/etc/elasticsearch/elasticsearch.yml`. By default, ES v8 should configure these settings automatically, but in case it doesn’t, you may need to set them manually:

🔴 &nbsp;Enable security features:
```
xpack.security.enabled: true
xpack.ml.enabled: false
```
```
xpack.security.enrollment.enabled: true
```

🔴 &nbsp;Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents:
```
xpack.security.http.ssl:
  enabled: true
  keystore.path: certs/http.p12
```

🔴 &nbsp;Enable encryption and mutual authentication between cluster nodes:
```
xpack.security.transport.ssl:
  enabled: true
  verification_mode: certificate
  keystore.path: certs/transport.p12
  truststore.path: certs/transport.p12
```

🔴 &nbsp;[Create a new cluster](#set_es_cluster) with only the current node. Additional nodes can still join the cluster later:
```
cluster.initial_master_nodes: ["diskover-1"]
```

🔴 &nbsp;Allow HTTP API connections from anywhere. Connections are encrypted and require user authentication:
```
http.host: 0.0.0.0
```

🔴 &nbsp;Allow other nodes to join the cluster from anywhere. Connections are encrypted and mutually authenticated:
```
transport.host: 0.0.0.0
```

🟨 &nbsp;Be sure to comment `cluster.initial_master_nodes` after you have bootstrapped ES for the first time.

🔴 &nbsp;Verify your certs live in `/etc/elasticsearch/certs/`, you should have the following:
```
-rw-r----- 1 elasticsearch elasticsearch  1915 Oct 10 18:10 http_ca.crt
-rw-r----- 1 elasticsearch elasticsearch 10061 Oct 10 18:10 http.p12
-rw-r----- 1 elasticsearch elasticsearch  5822 Oct 10 18:10 transport.p12
```

🔴 &nbsp;Chown the `/etc/elasticsearch/` directory recursively if not already done: 
```
chown -R elasticsearch.elasticsearch /etc/elasticsearch/
```

🔴 &nbsp;Start Elasticsearch

🔴 &nbsp;Curl the cluster: 
```
curl -u elastic:password https://IP or hostname:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
```

#### Enable SSL for Multi-Node Cluster

🔴 &nbsp;When ES v8 finishes installing, you will need to grab the output password for the elastic user. The output will look like the following:

```
--------------------------- Security autoconfiguration information ------------------------------

Authentication and authorization are enabled.
TLS for the transport and HTTP layers is enabled and configured.

The generated password for the elastic built-in superuser is : y1DGG*eQFdnYPXJiPu6w
....
```

🟨 &nbsp;If you need to reset the password - [more info can be found here on that subject](https://www.elastic.co/guide/en/elasticsearch/reference/current/reset-password.html):
```
/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic
```

##### Enable SSL on Node 1 | If setting up a multi-node cluster for the first time

🔴 &nbsp;Be sure you have the following set inside `/etc/elasticsearch/elasticsearch.yml`:
```
discovery.seed_hosts: ["Node 1 IP","Node 2 IP","Node 3 IP"]
```

🔴 &nbsp;Determine which node will be your master, then be sure to put the node name on `cluster.initial_master_nodes` exactly as you have it for `node.name` above.

🔴 &nbsp;Restart ES.

🔴 &nbsp;Comment the same line, then restart ES again.

🔴 &nbsp;This will state that you want this particular node to be your master.

##### Enable SSL on Node 1 | If adding nodes to an existing single-node cluster

🔴 &nbsp;Be sure you have the following set inside `/etc/elasticsearch/elasticsearch.yml`:
```
discovery.seed_hosts: ["Node 1 IP","Node 2 IP","Node 3 IP"]
```

🔴 &nbsp;Be sure that `cluster.initial_master_nodes` is commented since you’ve already elected this as the master.

🔴 &nbsp;Add this prop as ES will fail upon startup because it will try to use Machine Learning:
```
xpack.ml.enabled: false
```

🔴 &nbsp;Grab the **keystore** & **truststore** passwords for the transport and http certs. You can run this command to see all the keystores for your ES:
```
/usr/share/elasticsearch/bin/elasticsearch-keystore list
```

🔴 &nbsp;Grab the `xpack.security` passwords:
```
http: /usr/share/elasticsearch/bin/elasticsearch-keystore show xpack.security.http.ssl.keystore.secure_password
```
🔴 &nbsp;Transport: 
```
/usr/share/elasticsearch/bin/elasticsearch-keystore show xpack.security.transport.ssl.keystore.secure_password
/usr/share/elasticsearch/bin/elasticsearch-keystore show xpack.security.transport.ssl.truststore.secure_password (both of these passwords should be the same)
```

🔴 &nbsp;Copy the `.p12` and `http-ca.crt` certs over the Node 2 inside `/etc/elasticsearch/certs/`

##### Enable SSL on Node 2

🔴 &nbsp;Be sure you have the following set inside `/etc/elasticsearch/elasticsearch.yml`:
```
discovery.seed_hosts: ["Node 1 IP","Node 2 IP","Node 3 IP"]
```

🔴 &nbsp;Make sure to comment the `cluster.initial_master_nodes` because you already have a master.

🔴 &nbsp;Set:
```
xpack.ml.enabled: false
```

🔴 &nbsp;It's probably best to delete the old `/etc/elasticsearch/elasticsearch.keystore`, then re-create it:
```
/usr/share/elasticsearch/bin/elasticsearch-keystore create
```

🔴 &nbsp;Now we need to add the passwords for the `keystore` that we got from Node 1:
```
http: /usr/share/elasticsearch/bin/elasticsearch-keystore add xpack.security.http.ssl.keystore.secure_password
```

🔴 &nbsp;Transport:
```
/usr/share/elasticsearch/bin/elasticsearch-keystore add xpack.security.transport.ssl.keystore.secure_password
/usr/share/elasticsearch/bin/elasticsearch-keystore add xpack.security.transport.ssl.truststore.secure_password
```

🔴 &nbsp;Be sure to check your keystore to ensure you have them set:
```
/usr/share/elasticsearch/bin/elasticsearch-keystore list
```

🔴 &nbsp;Restart Elasticsearch: 
```
systemctl restart elasticsearch
```

##### Enable SSL on Node 3 +

Provided Elasticsearch on Node 2 comes online, repeat the same **Enable SSL on Node 2** steps for Node 3 and subsequent nodes, if applicable.

#### Testing SSL

🔴 &nbsp;Once all ES nodes are online, you should be able to curl to see which node is the master, it should be Node 1, if you have still elected it to be the master:
```
curl -u elastic:password https://IP or hostname:9200/_cat/master?v --cacert /etc/elasticsearch/certs/http_ca.crt
```

🔴 &nbsp;You can also curl to grab the health of the cluster:
```
curl -u elastic:password https://IP or hostname:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
```
