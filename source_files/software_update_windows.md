___
### Software Update for Windows

The update process for Diskover on Windows consists of updating two parts: 1) the Diskover indexer(s), and 2) the Diskover-Web server.

The software can be updated by extracting the latest tar.gz or zip file downloaded from the Diskover download portal and updating the Diskover source files in the proper locations.

#### Upgrading from zip File

The following explains how to update both Diskover and Diskover-Web assuming they are installed in the default locations on Windows.

🔴 &nbsp;Stop **diskoverd** (Task worker daemon) service if running:
>WARNING: check that no tasks are running in diskover-web task panel before stopping the service

🔴 &nbsp;Extract the zip from download portal to c:\windows\temp\diskover-v2\ or other temp folder

🔴 &nbsp;Run command prompt (cmd) as Administrator and sync new diskover files:

```cmd
Xcopy c:\windows\temp\diskover\ "c:\program files\diskover\" /e /d /c /y
```

🔴 &nbsp;Sync new diskover-web files:
```cmd
Xcopy c:\windows\temp\diskover-web\ "c:\program files\diskover-web\" /e /d /c /y
```

🔴 &nbsp;Start diskoverd service
