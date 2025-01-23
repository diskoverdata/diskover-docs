<p id="install_scanners"></p>

## Diskover Scanners/Workers Installation

### Overview

Diskover has a [distributed task system](#architecture_diagram) where scanners/workers can be distributed among many resources. For each resource providing a task worker, services need to have a [DiskoverD](#install_diskoverd) installed. The [Task Panel](#task_panel) will be covered after the installation and initial configuration of the main components. 

___

<img src="images/diagram_scanners_daemon_task_panel.png" width="">

_[Click here for the full screen view of this diagram.](images/diagram_scanners_daemon_task_panel.png)_

- This section will walk you through installing node workers for your Diskover v2.3+ environment.

- During this process, you will need the latest [Diskover 2.3x software](#software_download).

- Once all components are installed, you will be able to [configure your scanning environment](#config_scanners). We strongly recommend following the deployment order outlined in this guide.

### Multiple Scanners/Workers Environment

If your environment includes multiple scanners, repeat the process in this chapter for each one of your workers. Once you have the zip file, you can `SCP` it to all machines that are designated to be a Diskover Worker. 

🔴 &nbsp;**On-prem** | Will scp the file to the root user's home directory:
```
scp <path to diskover.zip> root@ipAddress:~/
```

🔴 &nbsp;**AWS** | Will scp the file to the user's home directory. Example using Rocky:
```
scp -i <path to PEM file> <path to diskover.zip> rocky@bastion-IP:~/
```

⚠️ &nbsp;Note that the user will differ depending on your OS. It is best to consult your AWS EC2 Console to get the exact user to connect to the bastion. Generally, these are the users for the following OS:

| OS | User |
| --- | --- |
| Rocky Linux | rocky |
| Centos 7 or 8 | centos |
| RHEL or Amazon Linux | ec2-user |

### Linux Scanners/Workers

#### Python Installation

This section covers installing Python v3.12 and configuring it as the main Python 3 executable. Alternatively, use a [PyEnv](#pyenv) Python Environments. Additionally, some steps here, such as symlinking to the main Python 3 executable, might not be advisable if this system is used for other Python-based programs.

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

#### Diskover Scanner Installation

🔴 &nbsp;Extract your [zip archive](#software_download):
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

<p id="install_diskoverd"></p>

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

⚠️ &nbsp;Please proceed to the next sections, as you will be unable to start the diskoverd worker service until your API server and [license](#software_activation) are installed.

### Enable SSL for Task Workers

🔴 &nbsp;Copy the `http_ca.crt` to the Worker(s) server(s) and place into `/etc/pki/ca-trust/source/anchors/http_ca.crt`


🔴 &nbsp;Run the following command: 
```
sudo update-ca-trust ; mkdir /opt/diskover/elasticsearch-certs/ ; cp http_ca.crt /opt/diskover/elasticsearch-certs/
```

🔴 &nbsp;Navigate to **DiskoverAdmin → Web → Elasticsearch**:

    - Input your Elasticsearch IPs, and Elastic user + password.
    - For the SSL certificate path, you need to put the full path of where the certificate is held on the Web, including the name of the cert: `/opt/diskover/elasticsearch-certs/http_ca.cr`
    - Hitting **Test** on this page will result in a failure as the call for this test is coming from the [Web server](#install_diskover_web), so long as you can start your Worker up, you’re good to go!

### Mounting NFS Filesystems

In the example below, we will be mounting a volume called **vol1** from the server **nas01** into the directory called **/nfs/vol1**

🔴 &nbsp;Ensure the NFS client tools are installed:
```
dnf install -y rpcbind nfs-utils nfs4-acls-tools
```

🔴 &nbsp;Start the required NFS client services:
```
systemctl start rpcbind nfs-idmap
systemctl enable rpcbind nfs-idmap
```

🔴 &nbsp;Create the directory where we will mount the filesystem:
```
mkdir -p /nfs/vol1
```

🔴 &nbsp;Add an entry in the `/etc/fstab` configuration file to ensure the volume gets mounted on reboot:
```
nas01:/vol1 /nfs/vol1 nfs defaults 0 0
```

🔴 &nbsp;Mount the filesystem and display its capacity:
```
mount /nfs/vol1
df -h /nfs/vol1
```

⚠️ &nbsp;For detailed information about configuring NFS clients, consult the [RedHat NFS client documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/storage_administration_guide/nfs-clientconfig).

### Mounting CIFS Filesystems

In the example below, we will be mounting a volume called **vol1** from the server **nas01** into the directory called **/cifs/vol1**

🔴 &nbsp;Ensure the CIFS packages are installed:
```
dnf install -y samba-client samba-common cifs-utils
```

🔴 &nbsp;Create the directory where we will mount the filesystem:
```
mkdir -p /cifs/vol1
```

🔴 &nbsp;Add an entry in the `/etc/fstab` configuration file to ensure the volume gets mounted on reboot. In the example below, change the `username`, `password`, and `domain` to match your environment.
```
systemctl start rpcbind nfs-idmap
systemctl enable rpcbind nfs-idmap
```

```
mount /nfs/vol1
df -h /nfs/vol1
```

```
\\nas01\vol1 /cifs/vol1 cifs username=winuser,password=winpassword, ˓→domain=windomain,vers=2.0 0 0
```

🔴 &nbsp;Mount the filesystem and display its capacity:
```
mount /cifs/vol1
df -h /cifs/vol1
```

⚠️ &nbsp;For additional information about configuring CIFS clients, visit [CentOS tips for mounting Windows shares](https://wiki.centos.org/TipsAndTricks(2f)WindowsShares.html#:~:text=Mounting%20Windows%20(or%20other%20samba,are%20used%20in%20our%20examples.&text=Word%20of%20warning:%20the%20default%20behaviour%20for%20mount.).


### Windows Scanners/Workers

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.

### Mac Scanners/Workers

🚧 &nbsp;We're hard at work preparing these instructions. Meanwhile, [click here to open a support ticket](https://support.diskoverdata.com/), and we'll gladly assist you with this step of your deployment.
