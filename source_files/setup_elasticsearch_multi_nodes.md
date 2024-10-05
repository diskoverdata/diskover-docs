___
## Multi-Node Elasticsearch Setup
___

This section will guide you through setting up an Elasticsearch cluster with multiple nodes.

### Requirements

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

- If you see **Connection Refused**, you should validate if [**SELinux** and **Firewalld** are disabled and off](), respectively.

### Multi-Node Setup

🔴 &nbsp;Run DNF updates:
```
sudo dnf update -y
```

🔴 &nbsp;Install Java 8: 
```
sudo dnf install -y java-1.8.0-openjdk.x86_64
```

🔴 &nbsp;Install Elasticsearch 7: 
```
sudo dnf install -y https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.4-x86_64.rpm
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
<br>
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

### Start lasticsearch Cluster

🔴 &nbsp;Reload the daemon on all ES nodes: 
```
sudo systemctl daemon-reload
```

🔴 &nbsp;Start up **Node 1** first:
```
sudo systemctl start elasticsearch
```

🟨 &nbsp;You can watch the startup logs at **/var/log/elasticsearch/<cluster-name>.log**
<br>
🔴 &nbsp;Once Node 1 is online, start **Node 2**, then once Node 2 is online, start **Node 3**.
