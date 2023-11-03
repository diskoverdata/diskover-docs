___
### Install Diskover Indexers for Windows

The following outlines installing the Diskover indexer on Windows.

#### Install Python

🔴 &nbsp;Download **Python** **3.7 or greater** from Windows Store or [python.org](https://python.org) and install.

#### Install Diskover Indexer

🔴 &nbsp;Extract diskover tar.gz or zip archive.

🔴 &nbsp;Copy **diskover** folder to **Program Files**:

```
mkdir "C:\Program Files\diskover"
Xcopy C:\tmp\diskover "C:\Program Files\diskover" /E /H /C /I
```

🔴 &nbsp;Install Python dependencies required by Diskover. Open a command prompt and run as administrator:

```
cd "C:\Program Files\diskover"
pip3 install -r requirements-win.txt
```

🔴 &nbsp;Create logs directory. Open a command prompt and run as administrator:

```
mkdir "C:\Program Files\diskover\logs"
```

🔴 &nbsp;Create config directories for Diskover, you will need to create a separate config folder for each folder in diskover\configs_sample\ folder.

For diskover config:
```
mkdir %APPDATA%\diskover\
copy "C:\Program Files\diskover\configs_sample\diskover\config.yaml" %APPDATA%\diskover\
```

For diskover auto tag:
```
mkdir %APPDATA%\diskover_autotag\
copy "C:\Program Files\diskover\configs_sample\diskover_autotag\config.yaml" %APPDATA%\diskover_autotag\
```

For diskover dupes finder:
```
mkdir %APPDATA%\diskover_dupesfinder\
copy "C:\Program Files\diskover\configs_sample\diskover_dupesfinder\config.yaml" %APPDATA%\diskover_dupesfinder\
```

Continue same steps for the other folders in diskover\configs_sample\


🔴 &nbsp;Setup Diskover configuration file. Use Notepad to open the following configuration file:

```
%APPDATA%\diskover\config.yaml
```

🔴 &nbsp;Set **log directory** path:

```
logDirectory: C:\Program Files\diskover\logs
```

🔴 &nbsp;Setup Elasticsearch **host** information:

```
host: localhost
```

🔴 &nbsp;Set Elasticsearch **port** information:

```
port: 9200
```

🔴 &nbsp;Configure **username**:

```
user: myusername
```

🔴 &nbsp;Configure **password**:

```
password: changeme
```

🔴 &nbsp;Set **replace paths** in Windows to **True**:

```
replace: True
```

🔴 &nbsp;[Generate your hardware ID](https://docs.diskoverdata.com/diskover_installation_guide/#software-activation) to obtain and install the license key.

🔴 &nbsp;[Enable long paths](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=registry) to allow for long paths. After enabling long paths, reboot Windows.

🔴 &nbsp;Generate an index/scan. Open command prompt or Windows PowerShell as administrator:

```
cd 'C:\Program Files\diskover\'
python3 diskover.py -i diskover-vols-2021011501 C:\Users\someuser
```

#### Tips for Windows Drive Mapping

Windows drive map letters and unc paths can also be scanned.

If you open a command shell or PowerShell as administrator and the mounted filesystems are not present.

🔴 &nbsp;To mount them:

```
PS C:\Windows\system32> net use p: \\172.19.19.6\SMBshare
The command completed successfully.
```

```
PS C:\Windows\system32> net use x: \\172.19.19.6\P01_S99
The command completed successfully.
```

```
PS C:\Windows\system32> net use  
New connections will be remembered.
```

```
Status	Local	Remote					Network
-------------------------------------------------------------------------------
OK		P:		\\172.19.19.6/SMBshare	Microsoft Windows Network
OK		X:		\\172.19.19.6/P01_S99	Microsoft Windows Network
OK				\\172.19.19.6\SMBshare	Microsoft Windows Network
				\\TSCLIENT\C			Microsoft Terminal Services
The command completed successfully.
```

#### Verify Index Creation

🔴 &nbsp;Open a Web browser to: [http://localhost:9200/\_cat/indices](http://localhost:9200/_cat/indices)

![Image: Verify Index Creation](images/image_indexers_install_for_windows_verify_index_creation.png)
