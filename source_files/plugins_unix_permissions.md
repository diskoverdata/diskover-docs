### Unix Permissions Plugin

The Unix permissions plugin adds the Unix permissions of each file and directory to the Diskover index at time of indexing. The field is populated with **ugo+rwx**  if a file or directory is found with fully open permissions.

![Image: Unix Permissions Plugin](images/image_plugins_unix_permission_diskover_ui_column_in_results_pane.png)

🔴 &nbsp;The unixperms runs as part of the indexing process. To enable:
```
vim /root/.config/diskover/config.yaml
```

🔴 &nbsp;enable: set to **True**

🔴 &nbsp;dirs: **[‘unixperms’]**

🔴 &nbsp;files: **[‘unixperms’]**

![Image: Unix Permission Plugin Configuration](images/image_plugins_unix_permission_config.png)
