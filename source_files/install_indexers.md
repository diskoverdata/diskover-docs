___
## Diskover Indexers/Workers Installation
___

### Overview

This process will walk you through installing node workers for your Diskover v2.3+ environment. Please note that throughout this guide, the terms **indexers** and **workers** are used interchangeably.

During this process, you will need the latest [Diskover 2.3x zip archive](https://download.diskoverdata.com/). Note that this is subject to change to RPMs in the near future.

Once all components are installed, you will be able to [configure your indexing environment](). We strongly recommend following the deployment order outlined in this guide.

### Multiple Indexers/Workers Environment

If your environment includes multiple indexers, repeat the process in this chapter for each one of your workers. Once you have the zip file, you can `SCP` it to all machines that are designated to be a Diskover Worker. 

🔴 &nbsp;**On-prem** | Will scp the file to the root user's home directory:
```
scp <path to diskover.zip> root@ipAddress:~/
```

🔴 &nbsp;**AWS** | Will scp the file to the user's home directory. Example using Rocky:
```
scp -i <path to PEM file> <path to diskover.zip> rocky@bastion-IP:~/
```

🟨 &nbsp;Note that the user will differ depending on your OS. It is best to consult your AWS EC2 Console to get the exact user to connect to the bastion. Generally, these are the users for the following OS:

| OS | User |
| --- | --- |
| Rocky Linux | rocky |
| Centos 7 or 8 | centos |
| RHEL or Amazon Linux | ec2-user |

### Linux Indexers/Workers

#### Python Installation

🔴 &nbsp;Install Python:
```
yum -y install python3.12 python3.12-devel gcc
unlink /usr/bin/python3
ln -s /usr/bin/python3.12 /usr/bin/python3
which python3
  -- /usr/bin/python3
python3 -V
  -- Python 3.12.3
```

🔴 &nbsp;Install PIP:
```
python3 -m ensurepip
python3 -m pip install --upgrade pip
```

#### Diskover Indexer Installation

🔴 &nbsp;Extract your [zip archive](https://download.diskoverdata.com/):
```
unzip diskover-2.3.0.zip
```

🔴 &nbsp;Copy the Diskover folder:
```
cd diskover-2.3.0/
cp -a diskover /opt/
```

🔴 &nbsp;Install Python packages:
```
cd /opt/diskover
python3 -m pip install -r requirements.txt; python3 -m pip install -r requirements-aws.txt
```

🔴 &nbsp;Create **diskoverd** (Diskover Daemons) log directory:
```
mkdir -p /var/log/diskover
```

🔴 &nbsp;Create a diskoverd configuration file, allowing us to connect the worker to the Diskover-Web API Server:
```
mkdir -p /root/.config/diskoverd
cp /opt/diskover/configs_sample/diskoverd/config.yaml /root/.config/diskoverd/
```

🔴 &nbsp;Set the API URL for Diskover-Web:
```
vi /root/.config/diskoverd/config.yaml
```

🔴 &nbsp;Edit the **apiurl** property. You will need to replace the **${WEBHOST}** below with your **web nodes IP address or hostname**:
```
apiurl: http://${WEBHOST}:8000/api.php
```

#### DiskoverD Task Worker Daemon

Now that your first worker node is installed and configured, let’s daemonize this service with **systemd**.

🔴 &nbsp;Create **systemd** service file:
```
vi /etc/systemd/system/diskoverd.service
```

🔴 &nbsp;Add the following to the file and don't forget to save:
```
[Unit]
Description=diskoverd task worker daemon
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/diskover/
ExecStart=/usr/bin/python3 /opt/diskover/diskoverd.py -n worker-%H
Restart=always

[Install]
WantedBy=multi-user.target
```

🔴 &nbsp;Set permissions and enable the service:
```
chmod 644 /etc/systemd/system/diskoverd.service
systemctl daemon-reload
systemctl enable diskoverd
```

🟨 &nbsp;Please proceed to the next sections, as you will be unable to start the diskoverd worker service until your API server and [license]() are installed.

### Windows Indexers/Workers

🚧 We're hard at work preparing these instructions. Thanks for your patience!

### Mac Indexers/Workers

🚧 We're hard at work preparing these instructions. Thanks for your patience!
