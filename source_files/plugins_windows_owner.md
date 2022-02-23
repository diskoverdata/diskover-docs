___
### Windows Owner Plugin

The Windows Owner plugin adds the Windows file owner and primary group of each file and directory to the Diskover index at time of indexing. It replaces all docs showing username 0 with the Windows file/directory owner name.

>Note: Using this plugin increases scanning time due to name/sid lookups.

🔴 &nbsp;Requirements:
* This plugin works in Windows only
* pywin32 python module, install with pip [https://pypi.org/project/pywin32/](https://pypi.org/project/pywin32/)


🔴 &nbsp;The windows-owner runs as part of the indexing process. To enable edit diskover config:
```
notepad %APPDATA%\diskover\config.yaml
```

🔴 &nbsp;enable: set plugins enable to **True**

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
