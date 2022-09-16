___
## Elasticsearch
___

### AWS Elasticsearch Domain

The following reference page describes how to identify and solve common Amazon Elasticsearch Service (Amazon ES) issues. Consult the information in this section before contacting AWS Support. 

[https://docs.aws.amazon.com/opensearch-service/latest/developerguide/handling-errors.html](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/handling-errors.html)

___
### Useful Commands

#### See all diskover indices in Elasticsearch:

```
curl -X GET "http://<eshost>:9200/_cat/indices/diskover-*?v=true&s=index&pretty"
```

on AWS ES/OpenSearch:

```
curl -X GET -u user:pass "https://<aws es endpoint>/_cat/indices/diskover-*?v=true&s=index&pretty"
```

#### Check Cluster Health
```
curl http://elasticsearch:9200/_cat/health?v
```

#### Delete Indices
```
curl -X DELETE http://elasticsearch:9200/diskover-indexname
```
>Note: Wildcards can be used to delete multiple indices.

If using wildcards causes an ES api error, see here:

[https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices-delete-index.html#delete-index-api-path-params](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices-delete-index.html#delete-index-api-path-params)
[https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index-management-settings.html#action-destructive-requires-name](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index-management-settings.html#action-destructive-requires-name)


#### To Query the Elasticsearch Cluster with Login Credentials
```
curl -X GET -u login:password https://elasticsearch:9200/
```

More info for the above commands can be found here: [https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html)

___
### Possible issues with Log4j and Elasticsearch

12/20/2021 - In the past week or so, a security vulnerability related to Java and affecting Elasticsearch was exposed called Log4j. Although Diskover software does not use Java, Elasticsearch does. This issue has been patched in Elasticsearch latest version 7.16.1. Diskover has tested Elasticsearch version 7.16.1 and have found no compatibility issues.

[https://www.elastic.co/guide/en/elasticsearch/reference/current/release-notes-7.16.1.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/release-notes-7.16.1.html)

Regarding AWS OpenSearch implementation of Elasticsearch: AWS is aware of the recently disclosed security issue affecting the open source Apache “Log4j2” utility. This utility is used by Amazon OpenSearch Service. AWS have released a service software update R20211203-P2 that contains the updated “Log4j2” utility that addresses the issue. AWS strongly recommend that you apply this software update immediately to mitigate this issue for your OpenSearch domains.

[Click here to be redirected to the AWS website for more information.](https://aws.amazon.com/security/security-bulletins/AWS-2021-006/)
