___
### Elasticsearch Requirements

For more detailed Elasticsearch guidelines, refer to AWS sizing guidelines:

[https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html)

#### Elasticsearch Version

Diskover is currently tested and deployed with Elasticsearch v7.x. Note that Elasticsearch v8.x testing is underway, therefore, it is not recommended to use Elasticsearch v8.x until further notice.

#### Architecture Overview and Terminology

Below is an overview of the Diskover architecture.

![Image: Diskover Architecture Overview](images/diagram_diskover_architecture_overview.png)

_[Click here for a full screen view of the Diskover Architecture Overview diagram.](images/diagram_diskover_architecture_overview.png)_

In order to better understand the terminology used by Elasticsearch and throughout the Diskover documentation, please refer to this diagram.

![Image: Diskover Architecture Overview](images/diagram_diskover_elasticsearch_architecture.png)

_[Click here for a full screen view of the Elasticsearch Architecture diagram.](images/diagram_diskover_elasticsearch_architecture.png)_

#### Elasticsearch Cluster

An important configuration for Elasticsearch is that you will want to [set Java heap mem size](https://www.elastic.co/guide/en/elasticsearch/reference/7.16/advanced-configuration.html#set-jvm-heap-size) - it should be half your Elasticsearch host ram up to 32 GB.

For more information on [resilience in small clusters](https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability-cluster-small-clusters.html).

##### Production Deployment

>- Minimum 3 nodes for performance and redundancy
>- 16 CPU cores per node
>- 32 GB RAM per node (16 GB reserved to Elasticsearch memory heap)
>- 1 TB of SSD storage per node (see Elasticsearch Storage Requirements below)

##### Proof of Concept Minimum Deployment

>- Minimum of 1 node for testing
>- 8 CPU cores
>- 16 GB RAM per node (8 GB reserved to Elasticsearch memory heap)
>- 500 GB of SSD storage per node (see Elasticsearch Storage Requirements below)

#### Indices

##### Rule of Thumb Shard Size

>- Try to keep shard size between 10 – 50 GB
>- Ideal shard size approximately 20 – 40 GB

Once you have a reference for your index size, you can decide to shard if applicable. From the user inferface > gear icon > Indices:

![Image: Index Sizing](images/image_indices_index_size.png)

##### Examples

>- Index that is 60 GB in size: you will want to set shards to 3 and replicas* to 1 or 2 and spread across 3 ES nodes.
>- Index that is 5 GB in size: you will want to set shards to 1 and replicas* to 1 or 2 and be on 1 ES node or spread across 3 ES nodes (recommended).

\*_Replicas help with search performance, redundancy and provide fault tolerance. When you change shard/replica numbers, you have to delete the index and re-index._

#### Estimating Elasticsearch Storage Requirements

##### Individual Index Size

>- 1 GB for every 5 million files / folders
>- 20 GB for every 100 million files / folders

>_Note:_ The size of the files is not relevant.

##### Replicas/Shard Sizes

Replicas increase the size requirements by the number of replicas, example a 20GB index with 2 replicas will require a total storage capacity of 60GB, since a copy of the index (all docs) are on other ES nodes. Multiple shards do not increase the index size, as the index's docs are spread across the ES cluster nodes.

##### Maximum Doc Count

There are limits to the number of docs per shard of 2 billion, which is a hard lucene limit.

##### Rolling Indices

>- Each Diskover scan results in the creation of a new Elasticsearch index.
>- Multiple indexes can be maintained to keep the history of storage indices.
>- Elasticsearch overall storage requirements will depend on history index requirements.
>- For rolling indices, you can multiply the amount of data generated for a storage index by the number of indices desired for retention period. For example, if you generate 2 GB for a day for a given storage index, and you want to keep 30 days of indices, 60 GB of storage is required to maintain a total of 30 indices.
