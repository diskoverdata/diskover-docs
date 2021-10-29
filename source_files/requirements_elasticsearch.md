### Elasticsearch Domain Requirements

The foundation of the Diskover platform consists of a series of Elasticsearch  indexes. These indexes are created and stored within the Elasticsearch endpoint. Elasticsearch is a scale out architecture using 1 to N nodes.

>**LINUX**:
>- 64-bit Red Hat Enterprise Linux Server v7.x, v8.x
>- 64-bit CentOS v7.x, v8.x
>
>**WINDOWS**:
>- 64-bit Windows v8, v10, v11
>- 64-bit Windows Server
>
>**MAC**:
>- 64-bit MacOS v10.x, v11
>
>**Recommended:**
>- 16 CPU cores
>- 32 GB RAM
>
>**Minimum:**
>- 8 CPU cores
>- 8 GB RAM
>
>**Production Deployments**:
>- Minimum 3 nodes for load-balancing and redundancy
>- 16 CPU cores
>- 32 GB RAM per node (16 GB reserved to Elasticsearch memory heap)
>
>**Proof of Concept Minimum Deployment**:
>- Minimum deployment is 1 node for testing
>- 8 CPU cores
>- 16 GB RAM per node (8 GB reserved to Elasticsearch memory heap)

#### Estimating Elasticsearch storage requirements

>**Individual Index Size**:
>- 1 GB for every 5 million files / folders
>- 20 GB for every 100 million files / folders

#### Rolling Indices:
- Each Diskover scan results in the creation of a new Elasticsearch index.
- Multiple indexes can be maintained to keep the history of storage indices.
- Elasticsearch overall storage requirements will depend on history index requirements.
- For rolling indices, you can multiply the amount of data generated for a storage index by the number of indices desired for retention period. For example, if you generate 2 GB for a day for a given storage index, and you want to keep 30 days of indices, 60 GB of storage is required to maintain a total of 30 indices.

For more detailed Elasticsearch guidelines refer to AWS sizing guidelines:

<a href=“https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html”>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sizing-domains.html</a>
