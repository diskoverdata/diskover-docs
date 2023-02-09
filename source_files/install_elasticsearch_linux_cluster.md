___
### Set up Elasticsearch Linux Cluster

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

🔴 &nbsp;Uncomment and change different node name on each node:
```
node.name: esnode1
```
>Note: By default node.name is set to the hostname.

🔴 &nbsp;Uncomment and change to the ip you want ES to bind to on each es node:
```
network.host: 192.168.0.11
```
> _Note:_ To find the IP use `ip addr` or `ifconfig` commands.

🔴 &nbsp;Set discovery by specifying all Nodes IP addresses:
```
discovery.seed_hosts: ["192.168.0.11", "192.168.0.12", "192.168.0.13"]
```

🔴 &nbsp;Set cluster initial master nodes by specifying all Nodes node names (node.name):
```
cluster.initial_master_nodes: ["esnode1", "esnode2", "esnode3"]
```
> _Note:_ After the cluster starts, comment this line out on each node.

🔴 &nbsp; Open firewall ports for Elasticsearch (if using firewall):
```
firewall-cmd --add-port={9200/tcp,9300/tcp} --permanent
firewall-cmd --reload
```

Proceed with the next steps after all 3 ES nodes configurations are updated.

🔴 &nbsp; Start Elasticsearch on node 1, then 2 and 3 and enable service to start at boot if not already:
```
systemctl daemon-reload
systemctl enable elasticsearch
systemctl start elasticsearch
```

🔴 &nbsp; Check ES node and cluster status is green:
```
curl http://<es host>:9200
curl http://<es host>:9200/_cluster/health?pretty
```

#### Modify Diskover Config Files for Cluster

After setting up the ES cluster, you will want to adjust your diskover config file from the defaults.

🔴 &nbsp; Edit diskover config file:
```
vi /root/.config/diskover/config.yaml
```

🔴 &nbsp; Change Elasticsearch host setting to include all 3 ES node hostnames (optional):
```
host: ['esnode1', 'esnode2', 'esnode3']
```
> _Note:_ This is optional, you can also set this to just a single node in the cluster.

🔴 &nbsp; Set index shards and replicas:
```
shards: 1
replicas: 2
```
> _Note:_ Shards can also be increased to 3 or more depending on size of ES index (number of docs). See [Elasticsearch requirements](https://docs.diskoverdata.com/diskover_installation_guide/#elasticsearch-requirements) Indices section for more info.

🔴 &nbsp; Edit diskover-web config file:
```
vi /var/www/diskover-web/src/diskover/Constants.php
```

🔴 &nbsp; Change Elasticsearch ES_HOSTS hosts setting to include all 3 ES node hostnames (optional):
```
const ES_HOSTS = [
    [
        'hosts' => ['esnode1', 'esnode2', 'esnode3'],
        ...
```
> _Note:_ This is optional, you can also set this to just a single node in the cluster.
