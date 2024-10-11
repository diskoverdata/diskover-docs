<p id="requirements"></p>

## Prerequisites and Requirements

### Prerequisites

Visit the [System Readiness](#system_readiness) section for further information on preparing your system for Diskover.

| Packages | Usage |
| --- | --- |
| Python 3.8+ | Required for Diskover indexers/workers and Diskover-Web → [go to installation instructions](#install_indexers) |
| Elasticsearch 8.x | Is the heart of Diskover → [go to installation instructions](#install_es) |
| PHP 8.x and PHP-FPM | Required for Diskover-Web → [go to installation instructions](#install_diskover_web) |
| NGINX or Apache | Required for Diskover-Web → [go to installation instructions](#install_diskover_web)<br> _Note that Apache can be used instead of NGINX but the setup is not supported or covered in this guide._ |

### Security

- [Disabling SELinux](disable_selinux) and using a software firewall is optional, and not required to run Diskover.
- Internet access is required during the installation to download packages with yum.

### Recommended Operating Systems

As per the config diagram in the previous chapter, note that Windows and Mac are only supported for indexers.

| Linux* | Windows | Mac |
| --- | --- | --- |
| <ul><li>CentOS8</li><li>CentOS Stream 9</li><li>Rocky 8</li><li>RHEL (Red Hat Enterprise Linux) 8</li></ul> | <ul><li>Windows 10 &11</li><li>Windows Server 2022</li></ul> | <ul><li>MacOS 10.11+ ElCapitan</li></ul> |

\* _Diskover can technically run on all flavors of Linux, although only the ones mentioned above are fully supported._
