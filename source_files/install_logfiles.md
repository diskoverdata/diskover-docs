
___
### Create Diskover Logs Directory

By default all log files when `logToFile` is set to `True` are stored in `/var/log/diskover/` directory. This directory can be changed by setting `logDirectory` in config file. For Windows you will want to change this directory to for example `C:\\Windows\\Temp`.

🔴 &nbsp;Create Diskover logs directory:
```
mkdir /var/log/diskover
```
>Note: Check that the user running Diskover has proper permissions to read and write to the log directory.
