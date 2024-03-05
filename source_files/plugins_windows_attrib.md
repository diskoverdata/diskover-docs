___
### Windows Attributes Plugin

The Windows Attributes plugin adds the Windows file owner, primary group and ACE's of each file and directory to the Diskover index after indexing is complete. It replaces all docs showing owner 0 and group 0 with the Windows file/directory owner name and primary group. 
It updates owner, group and windacls fields meta data of each file or directory to diskover index after indexing with the Windows owner, primary group and acl info.

> _Note:_ The plugin can take a long time to run due to name/sid lookups.

🔴 &nbsp;Requirements:
* This plugin works in Windows only
* pywin32 python module, install with pip [https://pypi.org/project/pywin32/](https://pypi.org/project/pywin32/)
* enable long path support in Windows if long paths being scanned [https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=cmd](https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=cmd)

🔴 &nbsp;Check that you have the config file in %APPDATA%\diskover_winattrib\config.yaml, if not, copy from default config folder in configs_sample\diskover_winattrib\config.yaml.

🔴 &nbsp;Edit win-attrib plugin config and modify as needed:
```
notepad %APPDATA%\diskover_winattrib\config.yaml
```

🔴 &nbsp;Run windows-attrib plugin and get help to see cli options:
```
cd "C:\Program Files\diskover\plugins_postindex"
python diskover-winattrib.py -h
```
