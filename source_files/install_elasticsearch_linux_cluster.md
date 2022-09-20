#### Set up Elasticsearch Linux Cluster

The below steps are to set up a 3-node ES cluster on Linux. These instructions assume you have already installed the same version of Elasticsearch on 3 nodes. You will need to run the below on all 3 ES nodes.

🔴 &nbsp; Stop Elasticsearch if it's running alreaady and not in-use on **ALL** ES nodes:
```
systemctl status elasticsearch
systemctl stop elasticsearch
```

🔴 &nbsp;Change settings on all nodes editing Elasticsearch config:
```
vi /etc/elasticsearch/elasticsearch.yml
```

🔴 &nbsp;Uncomment and change (any name you like) same cluster name on all nodes:
```
cluster.name: es-cluster-diskover
```

🔴 &nbsp;Uncomment and change (to hostname) different node name on each node:
```
node.name: server1
```
>Note: You can also set node.name to env var `${HOSTNAME}` to use the hostname or enter in the full hostname.

🔴 &nbsp;Uncomment and change to the ip you want ES to bind to on each es node:
```
network.host: 192.168.0.11
```
>Note: to find the IP use `ip addr` or `ifconfig` commands.

🔴 &nbsp;Set discovery by specifying all Nodes IP addresses:
```
discovery.seed_hosts: ["192.168.0.11", "192.168.0.12", "192.168.0.13"]
```

🔴 &nbsp;Set cluster initial master nodes by specifying all Nodes ip addresses:
```
cluster.initial_master_nodes: ["192.168.0.11", "192.168.0.12", "192.168.0.13"]
```

🔴 &nbsp; Start Elasticsearch and enable service to start at boot if not already:
```
systemctl daemon-reload
systemctl enable elasticsearch
systemctl start elasticsearch
```

🔴 &nbsp; Open firewall ports for Elasticsearch (if using firewall):
```
firewall-cmd --add-port={9200/tcp,9300/tcp} --permanent
firewall-cmd --reload
```

🔴 &nbsp; Check ES node and cluster status is green:
```
curl http://<es host>:9200
curl http://<es host>:9200/_cluster/health?pretty
```
