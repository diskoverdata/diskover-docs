___
### Elasticsearch Index Management

Indices can be managed by policy and manually with Elasticsearch using curl from the command line. Indices can also be managed using [Kibana index management](https://www.elastic.co/guide/en/elasticsearch/reference/7.16/index-mgmt.html) which is not covered in this guide.

>Note: For AWS ES/OpenSearch see Index State Management on AWS ES/OpenSearch below. 

#### Elasticsearch Index Lifecycle Management

You can create and apply Index Lifecycle Management (ILM) policies to automatically manage your Diskover indices according to your performance, resiliency, and retention requirements.

More information on index lifecycle management can be found on elastic.co here:

[https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html)

The following provides an example for managing Diskover indices on your Elasticsearch cluster, by creating a policy that deletes indices after 30 days for new Diskover indices:

🔴 &nbsp;Your Elasticsearch server is accessible at [http://elasticsearch:9200](http://elasticsearch:9200)

🔴 &nbsp;Your Elasticsearch service endpoint url is `<aws es endpoint>`

🔴 &nbsp;You want your indices to be purged after seven days **7d**

🔴 &nbsp;Your policy name will be created as  **cleanup_policy_diskover**
```
curl -X PUT "http://elasticsearch:9200/_ilm/policy/cleanup_policy_diskover?pretty" \
     -H 'Content-Type: application/json' \
     -d '{
      "policy": {
        "phases": {
          "hot": {
            "actions": {}
          },
          "delete": {
            "min_age": "7d",
            "actions": { "delete": {} }
          }
        }
      }
    }' 
```

🔴 &nbsp;Apply this policy to all existing Diskover indices based on index name pattern:
```
curl -X PUT "http://elasticsearch:9200/diskover-*/_settings?pretty" \
     -H 'Content-Type: application/json' \
     -d '{ "lifecycle.name": "cleanup_policy_diskover" }'
```

🔴 &nbsp;Create a template to apply this policy to new Diskover indices based on index name pattern:
```  
    curl -X PUT "http://elasticsearch:9200/_template/logging_policy_template?pretty" \
     -H 'Content-Type: application/json' \
     -d '{
      "index_patterns": ["diskover-*"],                 
      "settings": { "index.lifecycle.name": "cleanup_policy_diskover" }
    }' 
```

#### Index State Management on AWS ES/OpenSearch

More information about [Index State Management in Amazon ES](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/ism.html) can be found on aws docs.

Example:
* Your AWS Elasticsearch Service endpoint url is `<aws es endpoint>`
* You want your indices to be purged after seven days **7d**
* Your policy name will be created as cleanup_policy_diskover

🔴 &nbsp;Create a policy that deletes indices after one month for new diskover indices

```sh
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
	          "min_index_age": "7d"
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
🔴 &nbsp;Apply this policy to all existing diskover indices

```sh
curl -u username:password -X POST "https://<aws es endpoint>:443/_opendistro/_ism/add/diskover-*" \
     -H 'Content-Type: application/json' \
     -d '{ "policy_id": "cleanup_policy_diskover" }'
```


#### Elasticsearch Manual Index Management

Indexes can be manually listed and deleted in Elasticsearch via:

🔴 &nbsp;List indices:
```
curl -X GET http://elasticsearch_endpoint:9200/_cat/indices
```
* See Elasticsearch [cat index api](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html) for more info.

🔴 &nbsp;Delete indices:
```
curl -X DELETE http:// elasticsearch_endpoint:9200/diskover-indexname
```
* See Elasticsearch [delete index api](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-delete-index.html) for more info.
