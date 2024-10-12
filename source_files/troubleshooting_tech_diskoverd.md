
## Diskoverd Task Workers

- You will need to start at least one Diskover worker daemon `diskoverd` to work on tasks. 
- `diskoverd` can run on the diskover host or on any host. 
- `diskoverd` requires access to the Diskover-Web REST API which is located at `http://<diskover-web-host>:<port>/api.php`


### Verbose Output

🔴 &nbsp;Enable verbose output:
```
python3 diskoverd.py -v -n <worker name>
```
> _Note:_ -n is optional, use -h for all cli options

### Log Debug

🔴 &nbsp;Enable debug logging in config:
```
vi /root/.config/diskoverd/config.yaml
```

🔴 &nbsp;Set **logLevel** to `DEBUG` and enable logging to a file by setting **logToFile** to `True`:
```
logLevel: DEBUG
logToFile: True
logDirectory: /tmp/
```

🔴 &nbsp;Alternatively you can run diskoverd manually and redirect all stdout/stderr output to a log file:
```
python3 diskoverd.py ... > /var/log/diskoverd.log 2>&1
```

### Service Control

🔴 &nbsp; Stop diskoverd:
```
systemctl stop diskoverd
```

🔴 &nbsp; Start diskoverd:
```
systemctl start diskoverd
```

🔴 &nbsp; Restart diskoverd:
```
systemctl restart diskoverd
```

🔴 &nbsp; Check diskoverd status:
```
systemctl status diskoverd
```

### Stopping/Restarting Diskoverd

🔴 &nbsp; Before stopping or restarting diskoverd, check that any child processes, such as `diskover.py` indexing tasks are not running.
```
ps -ef | grep diskover
```

🔴 &nbsp; Kill any child process:
```
kill <pid>
```
> _Note:_ after killing a diskover.py indexing process, the index will be in a corrupt state and should be deleted.
