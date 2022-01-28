___
## Diskover Indexers
___

### Diskover Indexer for Linux

#### Log Debug

🔴 &nbsp;Enable debug logging in config:
```
vi /root/.config/diskover/config.yaml
```

🔴 &nbsp;Set **logLevel** to `DEBUG` and enable logging to a file by setting **logToFile** to `True`:
```
logLevel: DEBUG logToFile: True logDirectory: /tmp/
```

🔴 &nbsp;Change the following:
```
logLevel: DEBUG
logToFile: True
logDirectory: /tmp/
```

#### Log Warnings

`urllib3.connectionpool - WARNING - Connection pool is full, discarding connection: localhost`

If you are seeing this Elasticsearch warning, there are two things you can try. 

- In your diskover config, lower the `maxthreads` to be something like 16 or 20.
- Set your `maxsize` setting to be higher for Elasticsearch connections to 40 or more.

___
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
