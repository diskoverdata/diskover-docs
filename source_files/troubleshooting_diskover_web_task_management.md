#### Diskover-Web Task Management

🔴 &nbsp;To get started with the task panel, check that you have the json files in diskover-web `public/tasks/` directory.
```
cd /var/www/diskover-web/public/tasks
ls *.json
tasklog.json	tasks.json	templates.json	workers.json
```

You should see the above `.json` files which are used by the Task Panel for storing task and worker related data. 

🔴 &nbsp;If you only see `.json.sample` files, copy the sample/default files:
```
for f in *.json.sample; do cp $f "${f%.*}"; done
chmod 660 *.json
chown nginx:nginx *.json
```

- You will need to start at least one Diskover worker daemon `diskoverd` to work on tasks. 
- `diskoverd` can run on the diskover host or on any host. 
- `diskoverd` requires access to the Diskover-Web REST API which is located at `http://<diskover-web-host>:<port>/api.php`
