<p id="software_upgrade"></p>

## Upgrade to Diskover v2.3

### Upgrade from Community Edition to a Subscription

This section outlines the process of upgrading from the Diskover Community Edition to v2.3.x of an annual [subscription Edition](https://diskoverdata.com/solutions/).

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.


### Upgrade from v2.2 Subscription to v2.3

#### Overview

This section breaks down the manual process for upgrading from a 2.2.x Diskover system up to 2.3 leveraging the Celery, RabbitMQ, and Diskover Admin services.

🚧 &nbsp;We highly recommend [you open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with your upgrade endeavor.


⚠️ &nbsp;Now that we have [DiskoverAdmin](#config_diskoveradmin) for configuration management, the only `config_sample` folders that are needed are for `Diskoverd`.

#### Upgrade Python 3

Before conducting this upgrade, you must ensure that both the Diskover-Web host and all of our Task Worker/Scanner hosts have Python 3.8+ installed, preferably Python3.12. This can be done by changing the system-level Python build or [generating a global PyEnv](#pyenv) that the system can use for Diskover.

  - [PyEnv GitHub repository](https://github.com/pyenv/pyenv)
  - [Diskover PyEnv configuration](#pyenv)

#### Upgrade Elasticsearch

There are no required changes for ElasticSearch in Diskover 2.3. Ideally, your environment is running Elasticsearch 8 already. If you are not running v8, an upgrade to Elasticsearch 8 needs to be carried out. 

⚠️ &nbsp;Note that conducting this upgrade of Elasticsearch might mean that the previous indexes from Elasticsearch 7 no longer work in Diskover-Web, and all storage has to be scanned again. This needs to be planned ahead as it will translate into downtime for your indexed storage during the reindexing process into Elasticsearch 8.

  - [General Elasticsearch upgrade documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html)
  - [Upgrade from Elasticsearch v7 to v8](https://www.elastic.co/guide/en/elastic-stack/8.14/upgrading-elastic-stack.html#prepare-to-upgrade)

⚠️ &nbsp;Note that with the upgrade of Elasticsearch, Diskover-Web, and the Diskover scanners/workers, your v2.2 license keys will no longer work. Once you reach this point, send us a [license request](#hd_id).

#### Upgrade Diskover-Web

🔴 &nbsp;Stop the necessary services and create a [backup](#backup):
```
systemctl stop nginx php-fpm
mv /var/www/diskover-web/ /var/www/diskover-web-old
cp /etc/nginx/conf.d/diskover-web.conf /etc/nginx/conf.d/diskover-web.conf.bak
```

🔴 &nbsp;Now that we have some [backups](#backup) of the system configurations for 2.2.3, we’re going to want to fetch the latest production of the 2.3 build from Artifactory and get it onto the host. The artifact should contain **Diskover-Web 2.3**:
```
unzip diskover-web-2.3.0.zip
cd diskover-web-2.3.0/
```

🔴 &nbsp;Copy contents in place:
```
cp -a diskover-web /var/www/
```

🔴 &nbsp;Adjust file ownership:
```
chown -R nginx.nginx /var/www/diskover-web/
```

🔴 &nbsp;At this point for the Diskover-Web configuration, we need to copy some of your specific configurations from the `/diskover-web-old/` folder. Copy in the `constants.php` file:
```
cp /var/www/diskover-web-old/src/diskover/Constants.php /var/www/diskover-web/src/diskover/
```

🔴 &nbsp;If there were any changes to the ES host or Diskover sub-systems during the upgrade, make sure this file is updated to reflect those changes - `rsync` in the task panel objects and analytic lists:
```
rsync -av /var/www/diskover-web-old/public/tasks/*.json /var/www/diskover-web/public/tasks/
rsync -av /var/www/diskover-web-old/public/*.txt /var/www/diskover-web/public/
```

🔴 &nbsp;Now that you have completed your Diskover-Web re-configuration, copy the license file back in place:
```
cp /var/www/diskover-web-old/src/diskover/diskover-web.lic /var/www/diskover-web/src/diskover/
chown nginx.nginx /var/www/diskover-web/src/diskover/diskover-web.lic
```

🔴 &nbsp;Copy the SQLite database containing user data back into place:
```
cp /var/www/diskover-web-old/diskoverdb.sqlite3 /var/www/diskover-web/diskoverdb.sqlite3
chown nginx.nginx /var/www/diskover-web/diskoverdb.sqlite3
```
#### DiskoverAdmin Installation

⚠️ &nbsp;The DiskoverAdmin administration panel is a new service to the 2.3 branch of Diskover. This service **should ALWAYS be installed on the Diskover-Web host(s)**.

##### DiskoverAdmin

🔴 &nbsp;The artifact should contain **DiskoverAdmin 2.3**:
```
unzip diskover-admin-2.3.0.zip
cd diskover-admin-2.3.0/
```

🔴 &nbsp;Copy contents in place:
```
cp -a diskover-admin /var/www/
```

🔴 &nbsp;Adjust the file ownership:
```
chown -R nginx.nginx /var/www/diskover-admin/
```

🔴 &nbsp;Now that we have the DiskoverAdmin 2.3 artifacts in place, there is a little bit of configuration that we need to carry out: 
```
vi /var/www/diskover-admin/instance/config.py
  - COMPONENTS        : Uncomment the necessary file actions that are used by the client
```

🔴 &nbsp;Copy the `~/diskover-<version>/diskover/` to `/opt/diskover`, otherwise you will get Python errors stating `ModuleNotFoundError: No module named 'models'` at the next step:
```
cd ~/diskover-<version>/
cp -a diskover/ /opt/diskover
```

##### Uvicorn

🔴 &nbsp;Validate that Uvicorn works in the next steps - start with PIP installs
```
cd /var/www/diskover-admin/etc/
python3 -m pip install -r requirements.txt
```

🔴 &nbsp;Validate Uvicorn install:
```
cd /var/www/diskover-admin/
uvicorn --interface wsgi --loop uvloop --workers 5 --log-level debug --uds /var/www/diskover-admin/run/diskover-admin.sock wsgi:app
```

🔴 &nbsp;This startup will likely take a few moments to fully cycle. You should end up with the logs stating:
```
2024-10-04 14:58:23,860 - uvicorn.error - INFO - Started server process [49543]
2024-10-04 14:58:23,861 - uvicorn.error - INFO - Waiting for application startup.
2024-10-04 14:58:23,863 - uvicorn.error - INFO - ASGI 'lifespan' protocol appears unsupported.
2024-10-04 14:58:23,863 - uvicorn.error - INFO - Application startup complete.
```

🔴 &nbsp;Once you reach this point and you do not see the logs rolling anymore, you know your DiskoverAdmin service has fully started up. **Ctrl +c** to exit out of this and go back to your shell.

##### Nginx

🔴 &nbsp;Nginx configuration:
```
cat /var/www/diskover-admin/etc/diskover-web.conf
```

🔴 &nbsp;Copy this entire `location` block:
```
  location /diskover_admin {
    include proxy_params;
    proxy_pass http://unix:/var/www/diskover-admin/run/diskover-admin.sock;
  }

vi /etc/nginx/conf.d/diskover-web.conf
```

🔴 &nbsp;Paste the contents here, this needs to be in its own `location` block:
```
cp /var/www/diskover-admin/etc/proxy_params /etc/nginx/

systemctl restart nginx php-fpm
systemctl status nginx php-fpm
```

##### Daemon

🔴 &nbsp;Now that we have our DiskoverAdmin service installed and configured, let’s daemonize this thing. Copy default service file:
```
cp /var/www/diskover-admin/etc/diskover-admin.service /etc/systemd/system/
```

🔴 &nbsp;Adjust service file to ensure proper sock permimssions/ownership:
```
vi /etc/systemd/system/diskover-admin.service
```

🔴 &nbsp;Start the DiskoverAdmin service:
```
systemctl daemon-reload
systemctl enable diskover-admin
systemctl start diskover-admin
systemctl status diskover-admin
```

⚠️ &nbsp;A happy status looks like this:
```
    Started Uvicorn instance to serve /diskover-admin.
    INFO:     Uvicorn running on unix socket /var/www/diskover-admin/run/diskover-admin.sock (Press CTRL+C to quit)
    INFO:     Started parent process [2390]
```

⚠️ &nbsp;If you have any issues with the DiskoverAdmin configuration, please ensure to review your log files:
```
tail -fn 100 /var/log/diskover/diskover-admin.log
```

#### Upgrade Diskover Scanners/Task Workers

🔴 &nbsp;Stop the necessary services and take some [backups](#backup):
```
systemctl stop diskoverd
mv /opt/diskover/ /opt/diskover-old
```

🔴 &nbsp;Now that we have some backups of the system configurations for 2.2.3, let's fetch the latest production 2.3 build from Artifactory and get it onto the host. The artifact should contain **Diskover Worker 2.3**:
```
unzip diskover-worker-2.3.0.zip
cd diskover-worker-2.3.0/
```

🔴 &nbsp;Copy contents in place:
```
cp -a diskover /opt/
```

🔴 &nbsp;Adjust file ownership:
```
chown -R root.root /opt/diskover/
```

🔴 &nbsp;At this point, for the scanners/workers configuration, we need to copy some of your specific configurations from the `/opt/diskover-old/` folder and ensure other new Worker configurations exist. Check for custom artifacts:
```
cd /opt/diskover-old/
find * ./scripts/ ./scanners/ ./plugins/ ./plugins_postindex/ ./ type f -name '*.py' -or -name '*.sh*' -or -name '*.bat*' | sed 's|^\./||' | sort | uniq
```

🔴 &nbsp;The previous step should show all scripts in the `/diskover-old/ directory`. We can't tell the file contents and if they are custom, but if there are any custom-named scripts that we should move over, maybe we can see them here:

- Move the `__dircache__` folder:

```
mv /opt/diskover-old/__dircache__ /opt/diskover/
```

- Move the `__mediainfo__` folder:

```
mv /opt/diskover-old/__mediainfo__ /opt/diskover/
```

- Move the worker license:

```
mv /opt/diskover-old/diskover.lic /opt/diskover/
```

- rsync in new `config_samples` to the config directory:

```
rsync -av --ignore-existing /opt/diskover/configs_sample/ /root/.config/
```

🔴 &nbsp;Once the Worker re-configuration is completed, PIP needs to be installed:
```
cd /opt/diskover/
python3 -m pip install -r requirements.txt
```

⚠️ &nbsp;Note that with the upgrade of Elasticsearch, Diskover-Web, and the Diskover scanners/workers, your v2.2 license keys will no longer work. Once you reach this point, send us a [license request](#hd_id).

#### Install RabbitMQ or Amazon MQ

##### Overview

RabbitMQ or Amazon MQ serves as the messaging bus/queue system that communicates with all Celery systems on your Diskover Worker nodes. We recommend installing this service on a dedicated standalone host.

Once all components are installed, you will be able to [configure your messaging environment](#config_system). We strongly recommend following the upgrade process order outlined in this guide.

⚠️ &nbsp;Additional guidelines for RabbitMQ management:

  - [RabbitMQ RPM Installation Guide](https://www.rabbitmq.com/docs/install-rpm#cloudsmith)
  - [RabbitMQ Default Configuration Guide](https://www.rabbitmq.com/docs/configure)

##### RabbitMQ for Linux

🔴 &nbsp;Configure yum repositories:
```
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | bash
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | bash
```

🔴 &nbsp;Install **rabbitmq-server** and **erlang**. Note that installing these packages may require different steps depending on the Linux distribution:
```
sudo dnf install rabbitmq-server erlang
```

🔴 &nbsp;Ensure the service starts and enable it:
```
systemctl start rabbitmq-server.service
```

🔴 &nbsp;If the above step failed, make sure the hosts hostame is pingable:
```
systemctl status rabbitmq-server.service
systemctl enable rabbitmq-server.service
```

🔴 &nbsp;Configure RabbitMQ for use with Diskover:
```
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl change_password guest <guest_password>          (This will password not be used - it is only to secure the guest account)
rabbitmqctl add_user <user> <password>                      (Feel free to choose your own username/password)
rabbitmqctl set_user_tags <user> administrator              (If you changed users, set it properly here and replace 'diskover')
rabbitmqctl set_permissions -p / <user> ".*" ".*" ".*"      (If you changed users, set it properly here and replace 'diskover')
```

🔴 &nbsp;Restart the service:
```
systemctl restart rabbitmq-server
systemctl status rabbitmq-server
```

⚠️ &nbsp;This completes the RabbitMQ configuration for Diskover. You should now be able to access the RabbitMQ Management Portal:
```
http://$rabbitMQHost:15672/#/
```

##### RabbitMQ for Windows

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.

##### Amazon MQ

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.

#### Celery Installation

##### Overview

This Celery component will need to be installed on each of your scanner/worker nodes.

⚠️ &nbsp;[Additional Celery documentation](https://docs.celeryq.dev/en/stable/getting-started/first-steps-with-celery.html)


##### Celery for Linux

🔴 &nbsp;Install celery:
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

🔴 &nbsp;Let's start up and enable the service. Run the Celery service manually to see if any errors pop up:
```
cd /opt/diskover/
celery -A diskover_celery.worker worker
```

⚠️ &nbsp;When you see something like this, you know your Celery service has come online:
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

🔴 &nbsp;If for some reason the Celery service will not start, check the Celery logs:
```
cd /var/log/celery/
```

⚠️ The API server must be installed before starting the Celery service.

##### Celery for Windows

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.

#### DiskoverAdmin Wizard

🔴 &nbsp;[Navigate to the **Initial Configuration** chapter to complete your v2.3 initial setup](#config_initial).

