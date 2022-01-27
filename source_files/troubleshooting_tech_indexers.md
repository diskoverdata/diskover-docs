___
## Diskover Indexers
___

### Diskover Indexer for Linux

🔴 &nbsp;Enable debug logging in config:
```
vi /root/.config/diskover/config.yaml
```

🔴 &nbsp;Set **logLevel** to `DEBUG` and enable logging to a file by setting **logToFile** to `True`:
```
logLevel: DEBUG logToFile: True logDirectory: /tmp/
```

### Diskover Indexer for Windows

🔴 &nbsp;Make a tmp directory for logs:
```
mkdir logDirectory: C:tmp
```

🔴 &nbsp;Enable debug logging in config by setting **logLevel** to `DEBUG` and enable logging to a file by setting **logToFile** to `True`:
```
logLevel: DEBUG
logToFile: True
logDirectory: C:tmp
```

🔴 &nbsp;Run and redirect all stdout/stderr output to a log file:
```
python3 diskover.py ... > /var/log/.log 2>&1
```
