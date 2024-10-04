___
## System Readiness
___

### Linux System Readiness

This section breaks down the recommended hardening of a Linux system prior to the deployment of the Diskover software.

#### Disable Firewalld & Security Enhanced Linux (SELinux)

Be default, SELinux should be disabled. If you have a corporate firewall in place or VPC security groups that restrict access to Diskover machines, you can safely disable the local Linux firewall.

🔴 &nbsp;Quick command to change the SELinux config: 
```
'sed -i 's/^SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config'
```

🔴 &nbsp;Disable **firewalld**, doing the **--now** will also stop the service:
```
systemctl disable firewalld --now
```
  
🔴 &nbsp;Disabling SELinux requires a reboot of the system in order to take affect, lets do that now! 
```
reboot now
```

🔴 &nbsp;Validate SELinux is disabled, that command should return **Disabled**:
```
getenforce
```

#### DNF Package Upgrade

Before installing custom packages or any of the Diskover software, upgrade all base-level system packages installed with your Linux system. There might be cases where specific package management repositories have to be enabled on your Linux machine prior to running this installation block.

🔴 &nbsp;DNF upgrade:
```
dnf upgrade -y \
&& \
dnf install epel-release -y \
&& \
dnf install -y \
vim vim-enhanced tar htop nmap yum-utils tmux /usr/bin/sqlite3 mlocate postfix jq gcc \
net-tools bind-utils traceroute pigz screen dstat \
iotop strace tree pv atop lsof git zip unzip wget \
hdparm telnet glances sudo nss-util iftop tldr make
```

#### Enable NTP for S3 Indexing

Enabling NTP is optional but recommended if your system is not already synchronized. Without NTP enabled, attempting to index S3 buckets may result in crawler failures due to a significant mismatch between the request time and the current system time.

🔴 &nbsp;Verify if NTP is set up or not: 
```
timedatectl
```

In the return, you should see **System Clock Synchronized**. 
- If set to **yes**, then NTP is synchronized.
- If set to **no**, then continue with the next step.


🔴 &nbsp;Enable NTP:
```
timedatectl set-ntp true
```

🔴 &nbsp;**timedatectl** leverages **chronyd** when you run the command above. To verify that the **chronyd** service came online: 
```
systemctl status chronyd
```

### Windows System Readiness

Instructions coming soon. Meanwhile, please note that Diskover currently only [supports Windows for indexers/workers]().

### Mac System Readiness

Instructions coming soon. Meanwhile, please note that Diskover currently only [supports Mac for indexers/workers]().
