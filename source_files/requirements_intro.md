<p id="requirements"></p>

___
## Prerequisites and Requirements
___

### Prerequisites

- Python 3.8+
- Elasticsearch 8.x
- PHP 8.x + PHP-FPM
- NGINX or Apache (Apache can be used instead of NGINX but the setup is not supported or covered in this guide)

### Security

- Disabling SELinux and using a software firewall are optional although not required to run Diskover.
- Internet access is required during the installation to download packages with yum.

### Recommended Operating Systems

As per the config diagram in the previous chapter, note that Windows and Mac are only supported for indexers.

| Linux* | Windows | Mac |
| --- | --- | --- |
| <ul><li>CentOS8</li><li>CentOS Stream 9</li><li>Rocky 8</li><li>RHEL (Red Hat Enterprise Linux) 8</li></ul> | <ul><li>Windows 10 &11</li><li>Windows Server 2022</li></ul> | <ul><li>MacOS 10.11+ ElCapitan</li></ul> |

\* Diskover can technically run on all flavors of Linux, although only the ones mentioned above are fully supported.
