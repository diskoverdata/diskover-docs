### Diskover Indexer for Windows

➡️ Make a **tmp** directory for logs:
```
mkdir logDirectory: C:\tmp
```

➡️ Enable debug logging in config by setting **logLevel** to **DEBUG** and enable logging to a file by setting **logToFile** to **True**:
```
logLevel: DEBUG
logToFile: True
logDirectory: C:\tmp
```

➡️ Run and redirect all **stdout/stderr** output to a log file:
```
python3 diskover.py ... > /var/log/<logname>.log 2>&1
```
