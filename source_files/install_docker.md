___
## Install Diskover in Docker
___

🔴 &nbsp;Dockerfile:
```sh
FROM python:3.7-alpine
LABEL maintainer "Diskover Data <info@diskoverdata.com>"

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

# Start diskoverd
CMD ["python3", "diskoverd.py", "-v"]
```

🔴 &nbsp;docker-compose.yml:
```sh
FROM python:3.7-alpine
LABEL maintainer "Diskover Data <info@diskoverdata.com>"

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

# Start diskoverd
CMD ["python3", "diskoverd.py", "-v"]
cp@Shirosai-MBP15 v2.0 % cat docker-compose.yml 
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
      -  DISKOVERD_WORKERNAME=docker_worker
    volumes:
      - .:/app/diskover
      # diskover config files
      - ./configs:/root/.config
      # mount points for crawling
      - /mnt/stor1:/data
```
