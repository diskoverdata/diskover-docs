___
### Clone Existing RHEL/CentOS Task Worker

The following outlines how to clone an existing task worker to a new machine.

🔴 &nbsp;Login to the existing task worker.

🔴 &nbsp;Copy the program files and license:

```
rsync -avz /opt/diskover/ root@ip_address:/opt/diskover/
```

🔴 &nbsp;Copy the Diskover config files:

```
rsync -avz /root/.config/diskover* root@ip_address:/root/.config/
```

🔴 &nbsp;Copy the Diskover task worker:

```
rsync -avz /etc/systemd/system/diskoverd.service
root@ip_address:/etc/systemd/system/
```

🔴 &nbsp;Login to the new task worker.

🔴 &nbsp;Create the error log directory for the diskover task worker:

```
mkdir /var/log/diskover
```

🔴 &nbsp;Install python:

```
yum -y install python3 python3-devel gcc
```

🔴 &nbsp;Install the python modules required by Diskover:

```
cd /opt/diskover
pip3 install -r requirements-aws.txt
```

🔴 &nbsp;Set permission on task worker service:
```
sudo chmod 644 /etc/systemd/system/diskoverd.service

sudo systemctl daemon-reload
sudo systemctl enable diskoverd.service
sudo systemctl start diskoverd.service
sudo systemctl status diskoverd.service
```
