___
### Set up Elasticsearch Cluster for Linux

This section describes the steps to set up a 3-node Elasticsearch cluster on Linux. These instructions assume you have already installed the same version of Elasticsearch on 3 nodes. You will need to run the steps below on all 3 ES nodes.

🔴 &nbsp; Stop Elasticsearch if it's already running and not in use on **ALL** ES nodes:
```
systemctl status elasticsearch
systemctl stop elasticsearch
```

🔴 &nbsp;Change the settings on all nodes by editing the Elasticsearch config:
```
vi /etc/elasticsearch/elasticsearch.yml
```

🔴 &nbsp;Uncomment and change (any name you like) using the same cluster name on all nodes:
```
cluster.name: es-cluster-diskover
```

🔴 &nbsp;Uncomment and change to a different node name on each node:
```
node.name: esnode1
node.name: esnode2
node.name: esnode3
```
>_Note:_ By default `node.name` is set to the hostname.

🔴 &nbsp;Uncomment and change to the IP address you want your Elasticsearch to bind to on each ES node, for example:
```
network.host: 192.168.0.11
```
> _Note:_ To find the IP use `ip addr` or `ifconfig` commands.

🔴 &nbsp;Set discovery by specifying all nodes IP addresses:
```
discovery.seed_hosts: ["192.168.0.11", "192.168.0.12", "192.168.0.13"]
```

🔴 &nbsp;Set the cluster initial master nodes by specifying all Nodes node names (node.name):
```
cluster.initial_master_nodes: ["esnode1", "esnode2", "esnode3"]
```
> _Note:_ After the cluster starts, comment this line out on each node.

🔴 &nbsp;If using a firewall, open the firewall ports for Elasticsearch:
```
firewall-cmd --add-port={9200/tcp,9300/tcp} --permanent
firewall-cmd --reload
```

🟨 &nbsp;Proceed with the next steps ONLY after all 3 ES nodes configurations are updated.

🔴 &nbsp; Start Elasticsearch on node 1, then 2 and 3 and enable service to start at boot if not already done:
```
systemctl daemon-reload
systemctl enable elasticsearch
systemctl start elasticsearch
```

🔴 &nbsp;Make sure ES node and cluster status is green:
```
curl http://<es host>:9200
curl http://<es host>:9200/_cluster/health?pretty
```

#### Modify Diskover Config Files for Cluster

After setting up the ES cluster, you will want to adjust your diskover `config.yaml` file from the default values.

🔴 &nbsp; Edit the diskover config file:
```
vi /root/.config/diskover/config.yaml
```

🔴 &nbsp; Change Elasticsearch host setting to include all 3 ES node hostnames (optional):
```
host: ['esnode1', 'esnode2', 'esnode3']
```
> _Note:_ This is optional. You can also set this to just a single node in the cluster.

🔴 &nbsp; Set index shards and replicas:
```
shards: 1
replicas: 2
```
> _Note:_ Shards can also be increased to 3 or more depending on the size of the ES index (number of docs). See [Elasticsearch Requirements](https://docs.diskoverdata.com/diskover_installation_guide/#elasticsearch-requirements), **Indices** section for more info.

🔴 &nbsp; Edit diskover-web config file:
```
vi /var/www/diskover-web/src/diskover/Constants.php
```

🔴 &nbsp; Change Elasticsearch **ES_HOSTS** hosts setting to include all 3 ES node hostnames (optional):
```
const ES_HOSTS = [
    [
        'hosts' => ['esnode1', 'esnode2', 'esnode3'],
        ...
```
> _Note:_ This is optional. You can also set this to just a single node in the cluster.
