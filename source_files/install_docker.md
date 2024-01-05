___
## Docker Installation | General
___

This project produces no-source Docker images that, provided with the application source, will run the full Diskover stack with zero or minimal configuration. 

### Quick Start

Distributions of this project can run as-is, out of the box, with default settings. Custom setup and customizations can be performed as you go. 

🔴 For a quick start:

```shell
export DISKOVER_SCAN_DIR=<host directory to scan>
tar -xf diskover_docker.tar.gz  # archive file may have a different name
cd diskover_docker
docker compose up -d
```

### Setup

#### Initial Setup

🔴 Unpack the archive file containing the dockerized application. The file will be named something like `diskover_docker.tar.gz`:

```shell
tar -xf diskover_docker.tar.gz
```
  
🔴 Change the current working directory to `diskover_docker` that was unpacked from the archive file:

```shell
cd diskover_docker
```
  
🔴 Edit the settings in `.env` to match the current environment. Pay special attention to the `DISKOVER_SCAN_DIR` setting as this is the directory that will be accessible to the container for the scan. 

```shell
vi .env
```

> *Note:* You can also use execution (shell) environment variables which override those in the `.env` file.

#### Multiple Directories Cannot be Scanned/Mounted under a Single Parent Directory

🔴 **If** you have more than one directory to scan and they cannot be mounted under a single parent directory, then you will have to add volumes directly in the 
  `./docker-compose.yml` file under the diskover-worker service:

```shell
vi docker-compose.yml
```
  
🔴 Position the application files/directories. Depending on your dockerized diskover distribution, you will need to do one of the following...
  
🔴 **If the application files are included:** No action is required.
    
🔴 **If the application is in separate archive files:** Copy application archive files into `./resources`:

```shell
cp <somewhere on your filesystem>/diskover*.tar.gz ./resources
```

🔴 **If you have an existing application:** Edit `HOST_MOUNT_*` settings in the `.env` to point to the existing directories:

```shell
vi .env  # if the HOST_MOUNT_* variables have not already been set
```

#### SSL Certificate and Private Key for Diskover 
    
🔴 **If** you have an ssl certificate and private key for diskover, place them in the resources directory alongside the application `tar` files. If not, a self-signed cert
  will be generated. 
  
```shell
cp <somewhere on your filesystem>/your-disover-web.crt ./resources
cp <somewhere on your filesystem>/your-disover-web.key ./resources
```

> *Note:* If you provide your own files they must have `.crt` and `.key` extensions or they will be ignored.

#### Certificate Authority and/or Intermediate Certs
  
🔴 **If** you have certificate authority and/or intermediate certs, place them in `./resources/cacerts`.

```shell
cp <somewhere on your filesystem>/your-root-ca.crt ./resources/cacerts
cp <somewhere on your filesystem>/your-intermediate-ca.crt ./resources/cacerts
```

> *Note:* Currently, they will only installed in the worker container.

### Run

The compose services are categorized into three profiles: 
- Web
- Worker
- Elasticsearch

This allows the same `docker-compose.yml` file to be used to run the application on different hosts or on a single host, as desired.

🔴 To run all, assuming the default setting `COMPOSE_PROFILES=web,worker,elasticsearch`

```shell
docker compose up -d
```

🔴 To run a specific set of containers, the worker for example:

```shell
docker compose --profile worker up -d
```

> *NOTE:* Docker compose commands on individual services may not work when there are dependencies across profiles and you will see an error like this example below. To work around this just don't specify the individual service and operate on the level of profile.

```shell
$ docker-compose --profile web restart diskover-web-app
no such service: elasticsearch
```

### Web Endpoints

- Diskover: http://localhost
- Kibana - indexes: http://localhost:5601/app/management/data/index_management/indices

### Configuration and Data Files

This project intends to eventually obviate direct editing of project config files, but that option is still available.

> *Note:* If you do directly edit configuration files, then set the `S6_TEMPLATE_OVERWRITES variable=false` for the corresponding container if the edited file is templated. To list template files for a given service execute the following:

```shell
docker exec <container> find /templates -type f
```

All application host (bind) mounts are in the mount directory by default. The directory structure of all containers closely follows the standard install paths as detailed in the [Diskover Installation Guide](https://docs.diskoverdata.com/diskover_installation_guide/). Here is a list of a few core configuration files:

**Core settings:**
```
./mount/web/www/src/diskover/Constants.php
```

**Worker scanner:**
```
./mount/worker/config/diskover/config.yaml
```

**Worker daemon:**
```
./mount/worker/config/diskoverd/config.yaml
```

___
## Docker Installation | Dell DataIQ Migration
___

### Diskover Community Edition for Dell DataIQ Migration

This section gives instructions to install the free Diskover Community Edition for Dell DataIQ migration using Docker.

#### Docker Installation for Windows

🔴 Go to [www.docker.com/products/docker-desktop/](www.docker.com/products/docker-desktop/) and select **Download for Windows**.

🔴 Installation instructions: [https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)

🔴 Extract this folder:

```shell
diskover-ce-dataiq_docker.zip folder
```

🔴  Copy `diskover-ce-dataiq_docker` folder to program files:

```
cd ' C:\tmp\diskover-ce-dataiq_docker'
mkdir " C:\Program Files\Docker\containers"
Xcopy C:\tmp\ diskover-ce-dataiq_docker\ " C:\Program Files\Docker\containers"
/E /H /C /I
```

🔴  Build and start the docker container:

```
cd ' C:\Program Files\Docker\containers\diskover-ce-dataiq_docker'
docker compose up -d
```

🔴  View `Containers Status` in Docker Desktop. The image below shows the resulting folder structure:

![Image: Docker Containers Status](images/image_docker_container_status.png)

#### Docker Installation for Linux

🔴 Go to [www.docker.com/products/docker-desktop/](www.docker.com/products/docker-desktop/) and select **Download for Linux**.

🔴 Installation instructions: [https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)

#### Docker Installation for Mac

🔴 Go to [www.docker.com/products/docker-desktop/](www.docker.com/products/docker-desktop/) and select **Download for Mac**.

🔴 Installation instructions: [https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)
