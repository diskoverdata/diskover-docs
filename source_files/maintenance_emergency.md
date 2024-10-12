## Emergency Maintenance

The following section describes how to troubleshoot and perform emergency maintenance on the components that comprise the Diskover curation platform.

___
### Diskover-Web

This topic describes how to identify and solve Diskover-Web issues.

#### Can’t Access Diskover-Web from Browsers:

🔴 &nbsp;Ensure the Web server components are running:
```
systemctl status nginx
```

```
systemctl status php-fpm
```

🔴 &nbsp;Check the NGINX Web server error logs:
```
tail -f /var/log/nginx/error.log
```

🔴 &nbsp;Trace access from Web session by reviewing NGINX access logs. Open a Web browser and attempt to access Diskover-Web, the access attempt should be evident in the access log:
```
tail -f /var/log/nginx/access.log
```

___
### Elasticsearch Domain

To identify and solve common Elasticsearch issues, refer to both Elastic.co and Amazon as both provide good information on troubleshooting Elasticsearch clusters.

#### Helpful Commands

Here are some helpful Elasticsearch commands to get started.

Your Elasticsearch server is accessible at [http://elasticsearch:9200](http://elasticsearch:9200/)

🔴 &nbsp;Check cluster health:
```
curl  [http://elasticsearch:9200/_cat/health?v](http://elasticsearch:9200/_cat/health?v)
```

![Image: Cluster Health Check](images/image_elasticsearch_cluster_health_check.png)

🔴 &nbsp;List indices:
```
curl -X GET http://elasticsearch:9200/_cat/indices
```

🔴 &nbsp;Delete indices:
```
curl -X DELETE http://elasticsearch:9200/diskover-indexname
```

🔴 &nbsp;Username/Password - To query the Elasticsearch cluster with login credentials:
```
curl -u login:password https://elasticsearch:9200/_cat/indices
```

#### Elastic.co Troubleshooting

The elastic.co Elasticsearch troubleshooting information can be found here:

[https://www.elastic.co/guide/en/elasticsearch/reference/7.14/cat.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.14/cat.html)

___
### AWS Elasticsearch Domain

To identify and solve common Amazon Elasticsearch Service (Amazon ES) issues, refer to the AWS guide on how to troubleshoot the AWS Elasticsearch environment here:

[https://docs.aws.amazon.com/opensearch-service/latest/developerguide/handling-errors.html](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/handling-errors.html)
