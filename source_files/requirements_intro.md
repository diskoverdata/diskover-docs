<br><br>

<p id="requirements"></p>

## Prerequisites and Requirements

___
### Prerequisites

Visit the [System Readiness]() section for further information on preparing your system for Diskover.

| Packages | Usage |
| --- | --- |
| Python 3.8+ | Required for Diskover indexers/workers and Diskover-Web, [go to installation instructions]() |
| Elasticsearch 8.x | Is the heart of Diskover, [go to installation instructions]() |
| PHP 8.x and PHP-FPM | Required for Diskover-Web, [go to installation instructions]() |
| NGINX or Apache | Required for Diskover-Web,  [go to installation instructions]()<br> _Note that Apache can be used instead of NGINX but the setup is not supported or covered in this guide._ |

___
### Security

- [Disabling SELinux]() and using a software firewall are optional although not required to run Diskover.
- Internet access is required during the installation to download packages with yum.

___
### Recommended Operating Systems

As per the config diagram in the previous chapter, note that Windows and Mac are only supported for indexers.

| Linux* | Windows | Mac |
| --- | --- | --- |
| <ul><li>CentOS8</li><li>CentOS Stream 9</li><li>Rocky 8</li><li>RHEL (Red Hat Enterprise Linux) 8</li></ul> | <ul><li>Windows 10 &11</li><li>Windows Server 2022</li></ul> | <ul><li>MacOS 10.11+ ElCapitan</li></ul> |

\* _Diskover can technically run on all flavors of Linux, although only the ones mentioned above are fully supported._
