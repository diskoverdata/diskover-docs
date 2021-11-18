### AWS Elasticsearch Requirements

For more detailed Elasticsearch guidelines refer to AWS sizing guidelines:

<a href=“https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html”>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html</a>

#### Elasticsearch Cluster

##### Production Deployments

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

##### Examples

>- Index that is 60 GB in size: you will want to set shards to 3 and replicas* to 1 or 2 and spread across 3 ES nodes.
>- Index that is 5 GB in size: you will want to set shards to 1 and replicas* to 1 or 2 and be on 1 ES node or spread across 3 ES nodes (recommended).
>
>\* _Replicas help with search performance and provide fault tolerance._

#### Estimating Elasticsearch Storage Requirements

##### Individual Index Size

>- 1 GB for every 5 million files / folders
>- 20 GB for every 100 million files / folders

##### Rolling Indices:

>- Each Diskover scan results in the creation of a new Elasticsearch index.
>- Multiple indexes can be maintained to keep the history of storage indices.
>- Elasticsearch overall storage requirements will depend on history index requirements.
>- For rolling indices, you can multiply the amount of data generated for a storage index by the number of indices desired for retention period. For example, if you generate 2 GB for a day for a given storage index, and you want to keep 30 days of indices, 60 GB of storage is required to maintain a total of 30 indices.
