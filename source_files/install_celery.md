___
## Celery Installation 
___

### Overview

This Celery component will need to be installed on each of your indexer/worker nodes.

### Celery for Linux

🔴 &nbsp;Install celery:
```
python3 -m pip install celery
which celery
  -- /usr/local/bin/celery
```

🔴 &nbsp;Copy in the default celery config file:
```
cp /opt/diskover/diskover_celery/etc/celery.conf /etc/
vi /etc/celery.conf
  ** Set INSTALL_DIRECTORY="/opt/diskover"
  ** Set CELERY_BIN="/usr/local/bin/celery"     (the output of 'which celery' goes here)
  ** Set the RABBIT_HOST to the IP where Rabbit is configured
  (create systemd service file)
cp /opt/diskover/diskover_celery/etc/celery.service /etc/systemd/system/
```

🔴 &nbsp;Create celery log/run directories:
```
mkdir /var/log/celery; chmod 777 /var/log/celery
mkdir /var/run/celery; chmod 777 /var/run/celery
```

🔴 &nbsp;Install PIP:
```
cd /opt/diskover/diskover_celery/etc
python3 -m pip install -r requirements.txt
```

🔴 &nbsp;Set permissions and enable the service:
```
chmod 644 /etc/systemd/system/celery.service
systemctl daemon-reload
systemctl enable celery
```

🟨 The API server must be installed before starting the Celery service.

### Celery for Windows

🚧 Instructions to follow.

### Celery for Mac

🚧 Instructions to follow.
