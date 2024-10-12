<p id=“install_rabbitmq”></p>

## RabbitMQ and Amazon MQ Server Installation

### Overview

RabbitMQ or Amazon MQ serves as the messaging bus/queue system that communicates with all Celery systems on your Diskover Worker nodes. We recommend installing this service on a dedicated standalone host.

Once all components are installed, you will be able to [configure your messaging environment](#config_message_queue). We strongly recommend following the deployment order outlined in this guide.

🟨 &nbsp;Addition guidelines for RabbitMQ management:

  - [RabbitMQ RPM Installation Guide](https://www.rabbitmq.com/docs/install-rpm#cloudsmith)
  - [RabbitMQ Default Configuration Guide](https://www.rabbitmq.com/docs/configure)

### RabbitMQ for Linux

🔴 &nbsp;Configure yum repositories:
```
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | bash
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | bash
```

🔴 &nbsp;Install **rabbitmq-server** and **erlang**. Note that installing these packages may require different steps depending on the Linux distribution:
```
yum -y install rabbitmq-server erlang
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
rabbitmqctl change_password guest darkdata                  (This will password not be used - it is only to secure the guest account)
rabbitmqctl add_user diskover darkdata                      (Feel free to choose your own username/password)
rabbitmqctl set_user_tags diskover administrator            (If you changed users, set it properly here and replace 'diskover')
rabbitmqctl set_permissions -p / diskover ".*" ".*" ".*"    (If you changed users, set it properly here and replace 'diskover')
```

🔴 &nbsp;Restart the service:
```
systemctl restart rabbitmq-server
systemctl status rabbitmq-server
```

🟨 &nbsp;This completes the RabbitMQ configuration for Diskover. You should now be able to access the RabbitMQ Management Portal:
```
http://$rabbitMQHost:15672/#/
```

### RabbitMQ for Windows

🚧 We're hard at work preparing these instructions. Thanks for your patience!

### RabbitMQ for Mac

🚧 We're hard at work preparing these instructions. Thanks for your patience!

<p id=“install_amazonmq”></p>

### Amazon MQ

🚧 We're hard at work preparing these instructions. Thanks for your patience!
