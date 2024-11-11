<p id="install_celery"></p>

## Celery Installation 

### Overview

This Celery component will need to be installed on each of your indexer/worker nodes.

🟨 &nbsp;[Additional Celery documentation](https://docs.celeryq.dev/en/stable/getting-started/first-steps-with-celery.html)

### Celery for Linux

🔴 &nbsp;Install Celery:
```
python3 -m pip install celery
which celery
  -- /usr/local/bin/celery
```

🔴 &nbsp;Copy in the default Celery config file:
```
cp /opt/diskover/diskover_celery/etc/celery.conf /etc/
```
🔴 &nbsp;Create `systemd` service file:
```
cp /opt/diskover/diskover_celery/etc/celery.service /etc/systemd/system/
```

🔴 &nbsp;Create Celery log/run directories:
```
mkdir /var/log/celery; chmod 777 /var/log/celery
mkdir /var/run/celery; chmod 777 /var/run
```

🔴 &nbsp;Set permissions and enable the service:
```
chmod 644 /etc/systemd/system/celery.service
systemctl daemon-reload
systemctl enable celery
```

🔴 &nbsp;Run the Celery service manually to see if any errors pop up:
```
cd /opt/diskover/
celery -A diskover_celery.worker worker
```

🟨 &nbsp;When you see something like this, you know your Celery service has come online:
```
2024-10-04 15:22:55,192 - celery.worker.consumer.connection                  -       INFO -                      - Connected to amqp://diskover:**@rabbitmq-IP:5672//
2024-10-04 15:22:56,450 - celery.apps.worker                                 -       INFO -                      - celery@worker-node-hostname ready.
```

🔴 &nbsp;Start and enable the celery service:
```
systemctl start celery
systemctl enable celery
systemctl start celery
```

🔴 &nbsp;If for some reason the celery service doesn't start, check the celery logs:
```
cd /var/log/celery/
```

🟨 &nbsp;The API server must be installed before starting the Celery service.

### Celery for Windows

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.

### Celery for Mac

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.
