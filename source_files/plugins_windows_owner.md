___
### Windows Owner Plugin

The Windows Owner plugin adds the Windows file owner of each file and directory to the Diskover index at time of indexing. It replaces all docs showing username 0 with the Windows file/directory owner name.

Requirements:
* This plugin works in Windows only
* pywin32 python module, install with pip [https://pypi.org/project/pywin32/](https://pypi.org/project/pywin32/)


🔴 &nbsp;The windows-owner runs as part of the indexing process. To enable:
```
vim /root/.config/diskover/config.yaml
```

🔴 &nbsp;enable: set to **True**

🔴 &nbsp;dirs: **[‘windows-owner’]**

🔴 &nbsp;files: **[‘windows-owner’]**

```
plugins:
    # set to True to enable all plugins or False to disable all plugins
    enable: True
    # list of plugins (by name) to use for directories
    dirs: ['windows-owner']
    # list of plugins (by name) to use for files
    files: ['windows-owner']
```
