<p id="install_es"></p>

## Elasticsearch Installation 

### Overview

This section covers the basic installation of Elasticsearch v8, commonly referred to as **ES**, throughout Diskover's documentation and user interface. This section covers:

- Setting up your first Elasticsearch node and we will leave ES authentication disabled by default for now.
- If you have multiple nodes in your environment, you will need to repeat this process for each node, as [each node requires its dedicated system](#architecture_diagram).

Once all the components are installed, you will be able to refine your [Elasticsearch environment configuration](#config_es). We strongly recommend following the deployment order outlined in this guide.

Here are some quick links you might need:

- [Set up a cluster](#set_es_single_cluster)
- [Set up multiple clusters](#set_es_multi_cluster)
- [Download the current release of Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
- [Download past releases of Elasticsearch](https://www.elastic.co/downloads/past-releases#elasticsearch)

<p id="set_single_node_without_ssl"></p>

### Single Node Setup without SSL

#### Java Open JDK Package Installation

Let's start this process by setting up your first node:

🔴 &nbsp;Install Java v21: 
```
dnf install java-21-openjdk
```

🔴 &nbsp;Install Elasticsearch v8: 
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

⚠️ &nbsp;Elasticsearch v8 should be installed at this point.

#### Elasticsearch Initial Configuration

Let's perform some basic configurations to ensure our single-node ES cluster is up and running, and ready for integration with Diskover.

🔴 &nbsp;ES setting modifications:
```
vi /etc/elasticsearch/elasticsearch.yml
```

⚠️ &nbsp;Ensure the following properties are set and uncommented:
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

⚠️ &nbsp;If ES fails to lock the memory upon startup, then add the following to `/etc/security/limits.conf`:
```
elasticsearch soft memlock unlimited
elasticsearch hard memlock unlimited
```

<p id="set_multiple_node_without_ssl"></p>

### Multiple Nodes Setup without SSL

If you have more than 1 node in your environment, redo all the [Single Node Setup without SSL](#set_single_node_without_ssl) steps for each node/system.

<p id="set_single_node_with_ssl"></p>

### Single Node Setup with SSL

This section will guide you through setting up an Elasticsearch cluster with a single node ensuring that SSL is enabled for secure communication.

🔴 &nbsp;Install Java v21: 
```
dnf install java-21-openjdk
```

🔴 &nbsp;Install Elasticsearch v8: 
```
dnf install https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.15.2-x86_64.rpm
```


🔴 &nbsp;When ES v8 finishes installing, you will need to grab the output password for the elastic user. The output will look like the following:

```
--------------------------- Security autoconfiguration information ------------------------------

Authentication and authorization are enabled.
TLS for the transport and HTTP layers is enabled and configured.

The generated password for the elastic built-in superuser is : y1DGG*eQFdnYPXJiPu6w
....
```

⚠️ &nbsp;If you need to reset the password, [more info can be found here on that subject](https://www.elastic.co/guide/en/elasticsearch/reference/current/reset-password.html):
```
bin/elasticsearch-reset-password -u elastic
```

⚠️ &nbsp;Ensure the following is set inside the `/etc/elasticsearch/elasticsearch.yml`. By default, ES v8 should configure these settings automatically, but in case it doesn’t, you may need to set them manually:

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

⚠️ &nbsp;Be sure to comment `cluster.initial_master_nodes` after you have bootstrapped ES for the first time.

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

<p id="set_multiple_node_with_ssl"></p>

### Multiple Nodes Setup with SSL

This section will guide you through setting up an Elasticsearch cluster with multiple nodes ensuring that SSL is enabled for secure communication.

#### Prerequisites

🔴 &nbsp;A minimum of 3 systems, one for each ES node.

🔴 &nbsp;All nodes must be able to communicate with each other. The best way to test this is to install ES on the nodes, start the services, and try to telnet to each of the host:
```
telnet <es-ip> 9200 
```

🔴 &nbsp;If this is successful, you should see the following:
```
[root@es1 ~]# telnet 192.168.64.19 9200
Trying 192.168.64.19...
Connected to 192.168.64.19.
Escape character is '^]'.
```

⚠️ &nbsp;If you see **Connection Refused**, you should check to see if `SELinux` and `Firewalld` are respectively disabled and off.

⚠️ &nbsp;The instructions below are for new clusters, go to [Onboarding New Nodes Containing Existing Data](#es_onboard_nodes_with_data) if you are onboarding new nodes to an existing cluster.

#### Set up Node 1

🔴 &nbsp;Install Java v21: 
```
sudo dnf install -y java-21-openjdk
```

🔴 &nbsp;Install Elasticsearch v8: 
```
sudo dnf install -y https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.15.2-x86_64.rpm
```

🔴 &nbsp;Configure the JVM for Elastic `vi /etc/elasticsearch/jvm.options.d/jvm.options`:
```
-Xms8g
-Xmx8g
```

⚠️ &nbsp;You should never set the memory to more than half of what is configured for your system!

🔴 &nbsp;Make the directory for the custom ES `systemd` settings:
```
mkdir /etc/systemd/system/elasticsearch.service.d
```

🔴 &nbsp;Create the service config file `vi /etc/systemd/system/elasticsearch.service.d/elasticsearch.conf`:
```
[Service]
LimitMEMLOCK=infinity
LimitNPROC=4096
LimitNOFILE=65536
```

🔴 &nbsp;Change the Elastic configs to set the node and cluster name, network configs, etc.:
```
vi /etc/elasticsearch/elasticsearch.yml:
```

| Field | Description |
| --- | --- |
| **cluster.name** | It should include **diskover** in the name to make it easily distinguishable for the customer, for example: **diskover-es** |
| **node.name** | It can be named anything, but should include a number to identify the node, for example: **node-1** |
| **path.data** | Set this to the desired storage location for your data. If a large amount of data is expected, it's recommended to use an external storage location. The default location is `/var/lib/elasticsearch` |
| **path.logs** | This defines the path where Elasticsearch logs will be stored. The default location is `/var/log/elasticsearch` |
| **bootstrap.memory_lock** | This should always be set to **true**. It will prevent Elasticsearch from trying to use the swap memory. |
| **network.host** | Set this to **0.0.0.0** |
| **cluster.initial_master_nodes** | **IMPORTANT!** This property will bootstrap your cluster. Without it, the service will not start up. You need to input the name of the node that you have for **`node.name`**, for example: <br> ```cluster.initial_master_nodes: ["node-1"]``` |
| **xpack.ml.enabled** | This should be set to **false** to disable Machine Learning within ES. If you do not have this set to false, then Elasticsearch will fail upon startup |

🔴 &nbsp;Start the Elasticsearch service: 
```
systemctl start elasticsearch
```

🔴 &nbsp;Create an enrollment token for the nodes you want to onboard to your cluster: 
```
/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s node. 
```

⚠️ &nbsp;This last step will output a very long token, keep this token in a safe space as we’re going to need it soon. Note that you will need the **=** that is included in the value.

#### Set up Node 2 and 3

🔴 &nbsp;Run through the same pre-steps to **set up Node 1**, but don’t worry about the password that is generated.

🔴 &nbsp;Change the Elastic configs to set the node and cluster name, network configs, etc.:
```
vi /etc/elasticsearch/elasticsearch.yml:
```

| Field | Description |
| --- | --- |
| **cluster.name** | This name **must** match the Node 1 cluster name, otherwise, these nodes will not join the correct cluster, for example: **diskover-es** |
| **node.name** | Should be incremented from the last node name, for example: Node 1: **node-1**, Node 2: **node-2**, Node 3: **node-3** |
| **path.data** | Set this to the desired storage location for your data. If a large amount of data is expected, it's recommended to use an external storage location. The default location is `/var/lib/elasticsearch`. <br> **IMPORTANT!** This should match the other nodes' location for parity. |
| **path.logs** | This defines the path where Elasticsearch logs will be stored. The default location is `/var/log/elasticsearch` |
| **bootstrap.memory_lock** | This should always be set to **true**. It will prevent Elasticsearch from trying to use the swap memory. |
| **network.host** | Set this to **0.0.0.0** |
| **cluster.initial_master_nodes** | Don’t worry about this property for now as we’re going to be joining a bootstrapped cluster |
| **xpack.ml.enabled** | This should be set to **false** to disable Machine Learning within ES. If you do not have this set to false, then Elasticsearch will fail upon startup |

⚠️ &nbsp;Do **not** start Elasticsearch yet!

🔴 &nbsp;Let's join Nodes 2 and 3 to the Node 1 cluster:
```
/usr/share/elasticsearch/bin/elasticsearch-reconfigure-node --enrollment-token "your token here"
```

🔴 &nbsp;Press **Y** to continue with the reconfiguration. This will remove the self-signed certs that ES generated when you installed it, remove all the previous settings from the keystore, etc. and place in the certs and password from Node 1, ensuring all nodes are using the same password as Node 1.

🔴 &nbsp;Start the Elasticsearch service: 
```
systemctl start elasticsearch
```

<p id="set_es_single_cluster"></p>

### Single Cluster Setup

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
| **cluster.name** | It should include **diskover** in the name to make it easily distinguishable for the customer, for example: **diskover-es** |
| **node.name** | It can be named anything, but should include a number to identify the node, for example: **diskover-node-1** |
| **path.data** | Set this to the desired storage location for your data. If a large amount of data is expected, it's recommended to use an external storage location. The default location is **/var/lib/elasticsearch** |
| **path.logs** | This defines the path where Elasticsearch logs will be stored. The default location is **/var/log/elasticsearch** |
| **bootstrap.memory_lock** | This should always be set to **true**. It will prevent Elasticsearch from trying to use the swap memory. |
| **network.host** | This should be set to the IP address of the host where you're configuring Elasticsearch. |
| **discovery.seed_hosts** | **IMPORTANT!** You need to enter the IP addresses of each Elasticsearch node that will be part of the cluster, for example:<br>```discovery.seed_hosts: ["192.168.64.18", "192.168.64.19", "192.168.64.20"]``` |
| **cluster.initial_master_nodes** | **IMPORTANT!** You need to enter the name of each node for the node.name setting, for example:<br>```cluster.initial_master_nodes: ["diskover-node-1", "diskover-node-2", "diskover-node-3"]``` |
| **xpack.ml.enabled** | This should be set to **false** to disable the Machine Learning within ES. If you do not have this set to false, then Elasticsearch will fail upon startup. |


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

⚠️ &nbsp;You can watch the startup logs at **/var/log/elasticsearch/<cluster-name>.log**
<br><br>
🔴 &nbsp;Once Node 1 is online, start **Node 2**, then once Node 2 is online, start **Node 3**.

<p id="set_es_multi_cluster"></p>

### Multiple Clusters Setup

In a multiple-cluster setup for Elasticsearch, you can run and manage multiple independent clusters, each with its own set of nodes and indices. This setup is typically used when you need to isolate data or workloads across different environments (such as production, testing, and development) or geographically distributed locations. Each cluster operates independently, and you can configure cross-cluster search or replication to share data or search across clusters as needed.

Please [open a support ticket](https://support.diskoverdata.com/) for assistance.

<p id="es_health_check_without_ssl"></p>

### Elasticsearch Health Check without SSL

With the ES cluster installed and running, you can now run a simple curl command to check the health of your cluster.

🔴 &nbsp;Check the health of your Elasticsearch cluster. 

⚠️ &nbsp;Replace the **${ESHOST}** below with your **ES node(s) IP address or hostname**

Curl command **if SSL is enabled** on the cluster - the result will differ, of course, based on your own environment:
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

<p id="es_health_check_with_ssl"></p>

### Elasticsearch Health Check with SSL

🔴 &nbsp;From now 1, curl node 2 or 3:
```
[root@ip-10-0-3-121 bin]# curl -XGET -u "elastic:redacted" https://10.0.4.84:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
{
  "cluster_name" : "diskover-soldev",
  "status" : "green",
  "timed_out" : false,
  "number_of_nodes" : 3,
  "number_of_data_nodes" : 3,
  "active_primary_shards" : 32,
  "active_shards" : 34,
  "relocating_shards" : 0,
  "initializing_shards" : 0,
  "unassigned_shards" : 0,
  "unassigned_primary_shards" : 0,
  "delayed_unassigned_shards" : 0,
  "number_of_pending_tasks" : 0,
  "number_of_in_flight_fetch" : 0,
  "task_max_waiting_in_queue_millis" : 0,
  "active_shards_percent_as_number" : 100.0
}
```

🔴 &nbsp;From now 2, curl node 2 or 3:
```
[root@ip-10-0-4-84 bin]# curl -XGET -u "elastic:redacted" https://10.0.3.121:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
{
  "cluster_name" : "diskover-soldev",
  "status" : "green",
  "timed_out" : false,
  "number_of_nodes" : 3,
  "number_of_data_nodes" : 3,
  "active_primary_shards" : 32,
  "active_shards" : 34,
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

<p id="es_downsize"></p>

### Downsizing from 3 Nodes to 1 Node

🔴 &nbsp;Stop all 3 nodes.

🔴 &nbsp;On the node you want to preserve:
```
vi /etc/elasticsearch/elasticsearch.yml
```

🔴 &nbsp;Then add this:
```
discovery.type: single-node
```

🔴 &nbsp;Delete the **`nodes`** file and **`_state`** directory that contain local metadata from the previous distributed cluster setup:
```
rm -rf /path/to/dataDir/{nodes,_state}
```

🔴 &nbsp;Reset the Elasticsearch password, then press **`y`** to continue:
```
/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic
```

🔴 &nbsp;Trt curling the health:
```
[root@ip-10-0-3-121 bin]# curl -XGET -u "elastic:redacted" https://10.0.3.121:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
{
  "cluster_name" : "diskover-soldev",
  "status" : "green",
  "timed_out" : false,
  "number_of_nodes" : 1,
  "number_of_data_nodes" : 1,
  "active_primary_shards" : 13,
  "active_shards" : 13,
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

<p id="es_onboard_nodes_with_data"></p>

### Onboarding New Nodes Containing Existing Data

🔴 &nbsp;Node 1:
```
vi elasticsearch.yml
```

```
discovery.seed_hosts: ["Node 1 IP","Node 2 IP","Node 3 IP"]
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
```

🔴 &nbsp;Restart node 1.

🔴 &nbsp;Add the following to node 2 and 3:
```
discovery.seed_hosts: ["Node 1 IP","Node 2 IP","Node 3 IP"]
```

🔴 &nbsp;Restart ES on these nodes one at a time.

🔴 &nbsp;Test curling the cluster health:
```
[root@ip-10-0-3-121 bin]# curl -XGET -u "elastic:redacted" https://10.0.4.84:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
{
  "cluster_name" : "diskover-soldev",
  "status" : "green",
  "timed_out" : false,
  "number_of_nodes" : 3,
  "number_of_data_nodes" : 3,
  "active_primary_shards" : 32,
  "active_shards" : 34,
  "relocating_shards" : 0,
  "initializing_shards" : 0,
  "unassigned_shards" : 0,
  "unassigned_primary_shards" : 0,
  "delayed_unassigned_shards" : 0,
  "number_of_pending_tasks" : 0,
  "number_of_in_flight_fetch" : 0,
  "task_max_waiting_in_queue_millis" : 0,
  "active_shards_percent_as_number" : 100.0
}
```

🔴 &nbsp;From node 2, curl node 1 or 3:
```
[root@ip-10-0-4-84 bin]# curl -XGET -u "elastic:redacted" https://10.0.3.121:9200/_cluster/health?pretty --cacert /etc/elasticsearch/certs/http_ca.crt
{
  "cluster_name" : "diskover-soldev",
  "status" : "green",
  "timed_out" : false,
  "number_of_nodes" : 3,
  "number_of_data_nodes" : 3,
  "active_primary_shards" : 32,
  "active_shards" : 34,
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

