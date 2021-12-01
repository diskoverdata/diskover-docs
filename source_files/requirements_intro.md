<p id="requirements"></p>

___
## Prerequisites and Requirements
___

### Main Requirements

- Python 3.5+
- Elasticsearch 7.x
- PHP 7.x + PHP-FPM
- NGINX or Apache (Apache could be used instead of NGINX but the set up is not covered in this guide)

### Other Notes

- Disabling SELinux and using a software firewall are optional although not required to run diskover.
- Internet access is required during the installation to download packages with yum.

### Diskover Resource Requirements

The following section outlines the reference architecture for resources required for the Diskover curation platform. Two of the Diskover deployment components, Elasticsearch and Web server, can be hosted on-premise or in the cloud, and the third component, Diskover indexer is typically deployed using the customer’s on-premise resources.

It is recommended to separate the Elasticsearch, web-server and indexing host(s). Indices ideally should be on SSD. NFS data stores do not usually perform well for indices.
