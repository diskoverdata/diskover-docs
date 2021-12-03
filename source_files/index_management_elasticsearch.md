___
### Elasticsearch Index Management

Indices can be managed by policy and manually with Elasticsearch.

#### Elasticsearch Index Lifecycle Management

You can create and apply Index Lifecycle Management (ILM) policies to automatically manage your Diskover indices according to your performance, resiliency, and retention requirements.

More information on index lifecycle management can be found on elastic.co here:

[https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html)

The following provides an example for managing Diskover indices on your Elasticsearch cluster, by creating a policy that deletes indices after 30 days for new Diskover indices:

🔴 &nbsp;Your Elasticsearch server is accessible at [http://elasticsearch:9200](http://elasticsearch:9200)

🔴 &nbsp;Your Elasticsearch service endpoint url is `<aws es endpoint>`

🔴 &nbsp;You want your indices to be purged after thirty days **30d**

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
            "min_age": "30d",
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

#### Elasticsearch Manual Index Management

Indexes can be manually listed and deleted in Elasticsearch via:

🔴 &nbsp;List indices:
```
curl -X GET http://elasticsearch_endpoint:9200/_cat/indices
```

🔴 &nbsp;Delete indices:
```
curl -X DELETE http:// elasticsearch_endpoint:9200/diskover-indexname
```
