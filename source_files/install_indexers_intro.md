<p id="install_indexers_on_prem"></p>

___
## Diskover On-Premise Indexers Installation
___

The Diskover indexers are often distributed to index on premise storage systems. The following outlines installing the Diskover indexer component ([components 1 in the architecture diagram](#architecture_diagram)).

Diskover can run on all flavors of Linux, although only CentOS, RHEL, and Ubuntu are covered in this guide.

At time of installation, the config file is located in:
-  Linux:  `~/.config/diskover/config.yaml`
-  Windows:  `%APPDATA%\diskover\config.yaml`
-  MacOS:  `~/Library/Application Support/diskover/config.yaml`

By default all log files when `logToFile` is set to `True` are stored in `/var/log/diskover/` directory. This directory can be changed by setting `logDirectory` in config file.

Create diskover log directory:
```sh
mkdir /var/log/diskover
```
>Note: Check that the user running Diskover has proper permissions to read and write to the log directory.
