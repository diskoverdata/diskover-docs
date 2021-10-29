## Uninstall Elasticsearch

### Uninstall Elasticsearch for Linux

➡️ Determine Elasticsearch version installed:
```
rpm -qa | grep elastic
```

![Image: Determine Elasticsearch Version](images/image_uninstall_elasticsearch_determine_version.png)

➡️ In the above example, remove **elasticsearch-7.10.1-1.x86_64**:
```
rpm -e elasticsearch-7.10.1-1.x86_64
```

![Image: Remove Elasticsearch](images/image_uninstall_elasticsearch_remove.png)
