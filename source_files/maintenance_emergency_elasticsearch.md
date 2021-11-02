## Elasticsearch Domain

To identify and solve common Elasticsearch issues, refer to both Elastic.co and Amazon as both provide good information on troubleshooting Elasticsearch clusters.

### Helpful Commands

Here are some helpful Elasticsearch commands to get started.

Your Elasticsearch server is accessible at [http://elasticsearch:9200](http://elasticsearch:9200/)

➡️ Check cluster health:
```
curl  [http://elasticsearch:9200/_cat/health?v](http://elasticsearch:9200/_cat/health?v)
```

![Image: Cluster Health Check](images/image_elasticsearch_cluster_health_check.png)

➡️ List indices:
```
curl -X GET http://elasticsearch:9200/_cat/indices
```

➡️ Delete indices:
```
curl -X DELETE http://elasticsearch:9200/diskover-indexname
```

➡️ Username/Password - To query the Elasticsearch cluster with login credentials:
```
curl -u login:password https://elasticsearch:9200/_cat/indices
```

### Elastic.co Troubleshooting

The elastic.co Elasticsearch troubleshooting information can be found here:

[https://www.elastic.co/guide/en/elasticsearch/reference/7.14/cat.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.14/cat.html)
