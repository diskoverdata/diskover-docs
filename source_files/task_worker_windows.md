___
### Install Task Worker for Windows

If you want to run diskoverd task worker as a Windows service you can use [NSSM](https://nssm.cc/) to create the service. This application allows you to easily create a service using python and diskoverd.py that gets treated as a proper Windows service that you can manage Windows services by running `services.msc` or by going to the Services tab from the Task Manager.

🔴 &nbsp;Copy diskoverd sample config file to config directory:
```
mkdir %APPDATA%\diskoverd
copy "C:\Program Files\diskover\configs_sample\diskoverd\config.yaml" %APPDATA%\diskoverd\
notepad %APPDATA%\diskoverd\config.yaml
```

🔴 &nbsp;Set in config:
```
logDirectory: C:\Windows\Temp
pythoncmd: python
diskoverpath: C:\Program Files\diskover
```

🔴 &nbsp;Download nssm:

Download nssm and extract nssm.exe. NSSM is a single file nssm.exe that does not need any special installation.

For convenience, you may want to place the file inside a directory in your %PATH% environment variable, otherwise you will need to execute it using the full path.

🔴 &nbsp;Create and edit .bat file for service:
```
notepad c:\Program Files\diskover\diskoverd-win-service.bat
```

🔴 &nbsp;In the .bat file add:
```
python diskoverd.py -n <worker_name>
```
>Note: <worker_name> replace with a unique worker name to identify the worker in diskover-web.

🔴 &nbsp;Run nssm to install service:
```
nssm.exe install diskoverdService "C:\Program Files\diskover\diskoverd-win-service.bat"
```
>IMPORTANT: When running nssm commands, tou need to run the Command Prompt as an Adminstrator. Right click on Command Prompt and choose Run as Administrator.

You should see a message that says something like:

`Service "diskoverdService" installed successfully!`

It will default to have Startup type: Automatic. This means it will start automatically when the computer restarts.

🔴 &nbsp;Set Windows user account with Administrator access for service:
```
nssm set diskoverdService ObjectName <username> <password>
```

🔴 &nbsp;Start and stop your custom service
You can use the normal Services manager `services.msc` or you can use NSSM from the Command Prompt. You can start and stop the service like this:
```
nssm.exe start diskoverdService
nssm.exe stop diskoverdService
nssm.exe restart diskoverdService
```

🔴 &nbsp;Delete the service
If you no longer want the service you can remove it with the following command:
```
nssm.exe remove diskoverdService
```

🔴 &nbsp;Edit more service settings:
If you no longer want the service you can remove it with the following command:
```
nssm.exe edit diskoverdService
```
