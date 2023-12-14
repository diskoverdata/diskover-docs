___
## OVA Installation
___

This section contains instructions to quickly get up and running with Diskover using OVA (Open Virtual Appliance) on VMware.

### Features
- Diskover and dependencies already installed.
- Diskover is configured to start at boot.
- Hostname set to ```diskover```
- DHCP enabled
- CentOS fully patched at creation

### Understand the Network

Understand the networking architecture of the site you will be deploying into. If the site has DHCP already configured,
the virtual machine will acquire an IP address from the offered range. Ensure the offered IP address will route to the
clients who will use the service. The file systems to be scanned must also be reachable from offered DHCP range.

For clients to access the service, they will need to route to the hostname provided in the license file. The hostname
in the license file must match the hostname on the Linux host. It is recommended that DNS be used to resolve the
service.

### How to Install OVA

🔴  To obtain the Diskover OVA, download the software using this link:

[https://drive.google.com/file/d/1EIFz0EvP61RN0LkrCb9mRJY-DXRtWKtu/view?usp=drive_link](https://drive.google.com/file/d/1EIFz0EvP61RN0LkrCb9mRJY-DXRtWKtu/view?usp=drive_link).

🔴  Linux Login:
User: **diskover**
Password: **darkdata**

🔴  You can elevate yourself via:
```
sudo -s
```

🔴  Diskover Login:
User: **admin**
Password: **darkdata**

🔴 Request a license by sending us your [hardware ID](https://docs.diskoverdata.com/diskover_installation_guide/#generating-a-hardware-id) so we can generate a license. You can click on the **diskover tools** icon on the desktop to get your hardware ID.

🔴  Install your license files as explained in the [software activation chapter](https://docs.diskoverdata.com/diskover_installation_guide/#software_activation).

🔴  You will need to mount the file system(s) of interest to the virtual machine then start indexing. You can create a [scheduled index task by following these instructions](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#managing-diskover-tasks-via-the-task-panel)

🔴  Or you can manually initiate an index:

1. To run the Diskover indexing process from a shell prompt:
```
cd /opt/diskover
```
2. Start your first crawl:
```
python3 diskover.py -i diskover-<indexname> <storage_top_dir>
```
