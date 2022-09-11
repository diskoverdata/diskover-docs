
By default all log files when `logToFile` is set to `True` are stored in `/var/log/diskover/` directory. This directory can be changed by setting `logDirectory` in config file.

Create diskover log directory:
```sh
mkdir /var/log/diskover
```
>Note: Check that the user running Diskover has proper permissions to read and write to the log directory.
