___
## Install Diskover in Docker
___

If you want to run Diskover Community Edition in Docker, there is a Docker Hub container built by [LinuxServer.io](https://www.linuxserver.io/) at [Diskover Docker Hub](https://hub.docker.com/r/linuxserver/diskover) and [Diskover LinuxServer.io GitHub](https://github.com/linuxserver/docker-diskover).

Below is a few example Docker files that could be used to help set up Diskover in Docker if you are using Essential + versions and/or want to build your own container.

>Note: The Diskover Docker files below assume that you have downloaded Diskover archive file and extracted the source files into a directory and are in the diskover or diskover-web directory (depending on what container is getting built).

### Elasticsearch container

🔴 &nbsp;docker-compose.yml:
```
version: '3'
services:
  elasticsearch:
    container_name: elasticsearch
    image: docker.elastic.co/elasticsearch/elasticsearch:7.16.1
    environment:
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1g -Xmx1g"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      # local ES data directory
      - ./esdata:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
      - 9300:9300
    #depends_on:
    #  - elasticsearch-helper
  #elasticsearch-helper:
  #  image: alpine
  #  command: sh -c "sysctl -w vm.max_map_count=262144"
  #  privileged: true
  #kibana:
  #  image: docker.elastic.co/kibana/kibana:7.16.1
  #  container_name: kibana
  #  ports:
  #    - 5601:5601
  #  depends_on:
  #    - elasticsearch
  #  environment:
  #    ELASTICSEARCH_URL: http://elasticsearch:9200
  #    ELASTICSEARCH_HOSTS: http://elasticsearch:9200
```

See [Elasticsearch Docker docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/docker.html) for more info.


### Diskover container

🔴 &nbsp;Dockerfile:
```
FROM python:3.7-alpine

# Install additional packages
RUN apk update \
  && apk add --no-cache --virtual build-dependencies \
  build-base \
  gcc \
  python3-dev \
  && apk add --no-cache bash \
  ncurses

# Copy existing application directory contents
COPY . /app/diskover

WORKDIR /app/diskover

# Install required python3 pip modules
RUN pip3 install --no-cache-dir -r requirements.txt

# Start diskoverd task woker (Essential + versions only)
CMD ["python3", "diskoverd.py", "-v"]
```

🔴 &nbsp;docker-compose.yml:
```
version: '3'
services:
  #diskover python app
  diskover:
    image: python:3.7-buster
    container_name: diskover
    build:
      context: .
      dockerfile: Dockerfile
    working_dir: /app/diskover
    environment:
      # diskoverd task worker (Essential + versions only)
      -  DISKOVERD_WORKERNAME=docker-worker
    volumes:
      - .:/app/diskover
      # diskover config files
      - ./configs:/root/.config
      # mount points for crawling
      - /mnt/stor1:/data
```

#### Diskover configs

🔴 &nbsp;Copy default/sample config files:
```
cd <diskover dir>
cp -R configs_sample configs
```

🔴 &nbsp;Edit diskover config file and set Elasticsearch `host`:
```
cd configs/diskover
vi config.yaml

host: elasticsearch
```

🔴 &nbsp;Edit diskoverd config file and set `timezone`, `apiurl` and `diskoverpath` (Essential + only):
```
cd configs/diskoverd
vi config.yaml

apiurl: http://diskover-web-nginx:8000/api.php
diskoverpath: /app/diskover
```

### Diskover-web container

🔴 &nbsp;Dockerfile:
```
FROM php:7.4-fpm

# Install php ldap extension (Essential + versions only)
RUN apt-get update && \
    apt-get install -y libldap2-dev
RUN docker-php-ext-configure ldap
RUN docker-php-ext-install ldap

# Copy existing application directory contents
COPY . /var/www

EXPOSE 8000
```

🔴 &nbsp;docker-compose.yml:
```
version: '3'
services:
  # diskover-web php app
  diskover-web:
    image: php:7.4-fpm
    container_name: diskover-web-app
    build:
      context: .
      dockerfile: Dockerfile
    working_dir: /var/www
    volumes:
      - .:/var/www
  # Nginx web server
  nginx:
    image: nginx:1.21
    container_name: diskover-web-nginx
    working_dir: /var/www
    volumes:
      - ./diskover-web.conf:/etc/nginx/conf.d/diskover-web.conf
      - .:/var/www
    ports:
      - 8000:8000
```

🔴 &nbsp;diskover-web.conf nginx config:
```
server {
        listen   8000;
        server_name  diskover-web-nginx;
        root   /var/www/public;
        index  index.php index.html index.htm;
        error_log  /var/log/nginx/error.log;
        access_log /var/log/nginx/access.log;
        location / {
            try_files $uri $uri/ /index.php?$args =404;
        }
        location ~ \.php(/|$) {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            set $path_info $fastcgi_path_info;
            fastcgi_param PATH_INFO $path_info;
            try_files $fastcgi_script_name =404; 
            #fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;
            fastcgi_pass diskover-web-app:9000;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
            fastcgi_read_timeout 900;
            fastcgi_buffers 16 16k;
            fastcgi_buffer_size 32k;
        }
}
```

#### Diskover-Web config

🔴  Copy default/sample diskover-web config file:
```
cd <diskover-web dir>/src/diskover
cp Constants.php.sample Constants.php
```

🔴  Set Elasticsearch host, timezone, etc in diskover-web config file:
```
vi Constants.php
```


### Install licenses (Essential + only)

🔴  Generate your hardware id as explained in the [software activation](https://docs.diskoverdata.com/diskover_installation_guide/#software_activation) chapter.

🔴  Copy diskover.lic file to:
```
/app/diskover/diskover.lic
```

🔴  Copy diskover-web.lic file:
```
/var/www/src/diskover/diskover-web.lic
```

### Docker Nginx logs

🔴  View nginx error log:

```
docker logs -f diskover-web-nginx 1>/dev/null
```

🔴  View nginx access log:

```
docker logs -f diskover-web-nginx 2>/dev/null
```
