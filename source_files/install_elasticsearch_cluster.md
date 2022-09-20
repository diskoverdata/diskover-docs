#### Set up Elasticsearch Cluster

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

🔴 &nbsp;Uncomment and change (any name you like):
```
cluster.name: elastic-cluster
```

🔴 &nbsp;Uncomment and change (set Hostname for node name):
```
node.name: ${HOSTNAME}
```
>Note: You can set node name to any name you want or use env var HOSTNAME to use the hostname.

🔴 &nbsp;Uncomment and change (listen all):
```
network.host: 0.0.0.0
```
>Note: You can also set this to a specific IP to only have Elasticsearch listen on that ip.

🔴 &nbsp;Add (specify all Nodes - the Node name should be the same with `[node.name]`:
```
cluster.initial_master_nodes:
  - node01.srv.world
  - node02.srv.world
  - node03.srv.world
```

🔴 &nbsp; Start Elasticsearch and enable service to start at boot if not already:
```
systemctl start elasticsearch
systemctl enable elasticsearch
```

🔴 &nbsp; Open firewall ports for Elasticsearch (if using firewall):
```
firewall-cmd --add-port={9200/tcp,9300/tcp} --permanent
firewall-cmd --reload
```

🔴 &nbsp; Check cluster status is green:
```
curl http://<es host>:9200/_cluster/health?pretty
```
