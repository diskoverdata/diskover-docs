## AWS Elasticsearch Domain

Routine maintenance of the AWS Elasticsearch environment consists of two components: 1) managing indices, and 2) upgrading Elasticsearch versions as they become available.

### Managing Indices

You can create and apply Index Lifecycle Management (ILM) policies to automatically manage your indices according to your performance, resiliency, and retention requirements. More information can be found here:

[https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ism.html](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ism.html)

The following provides an example for managing Diskover indices on your Elasticsearch cluster, by creating a policy that deletes indices after 30 days for new Diskover indices:

➡️ Your Elasticsearch service endpoint url is `<aws es endpoint>`

➡️ You want your indices to be purged after thirty days **30d**

➡️ Your policy name will be created as **cleanup_policy_diskover**

➡️ Create a policy that deletes indices after one month for new Diskover indices:
```
curl -u username:password -X PUT "https://<aws es endpoint>:443/_opendistro/_ism/policies/cleanup_policy_diskover" \
     -H 'Content-Type: application/json' \
     -d '{
         "policy": {
           "description": "Cleanup policy for diskover indices on AWS ES.",
           "schema_version": 1,
           "default_state": "current",
           "states": [{
             "name": "current",
             "actions": [],
             "transitions": [{
               "state_name": "delete",
               "conditions": {
                 "min_index_age": "30d"
               }
             }]
             },
             {
               "name": "delete",
               "actions": [{
                 "delete": {}
               }],
               "transitions": []
             }
           ],
           "ism_template": {
             "index_patterns": ["diskover-*"],
             "priority": 100
           }
         }
        }'
``` 

➡️ Apply this policy to all existing Diskover indices:
```
curl -u username:password -X POST "https://<aws es endpoint>:443/_opendistro/_ism/add/diskover-*" \
     -H 'Content-Type: application/json' \
     -d '{ "policy_id": "cleanup_policy_diskover" }'
```

### Upgrading Elasticsearch Versions

AWS recommends upgrading to the latest Elasticsearch versions as they become available on Amazon Elasticsearch Service. Information on upgrading your AWS Elasticsearch cluster can be found here:

[https://docs.aws.amazon.com/opensearch-service/latest/developerguide/version-migration.html](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/version-migration.html)
