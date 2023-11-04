___
### Software Update for Windows

1) stop diskoverd service if no tasks running
2) extract the zip from download portal to c:\windows\temp\diskover\ or other temp folder
3) run command prompt (cmd) as administrator and sync new files with: Xcopy c:\windows\temp\diskover\ "c:\program files\diskover\" /e /d /c /y
4) start diskoverd service
