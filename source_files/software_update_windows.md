___
### Software Update for Windows

1) stop diskoverd service if no diskover tasks running
2) extract the zip from download portal to c:\windows\temp\diskover\ or other temp folder
3) run command prompt (cmd) as administrator and sync new diskover files:
`Xcopy c:\windows\temp\diskover\ "c:\program files\diskover\" /e /d /c /y`
4) sync new diskover-web files:
`Xcopy c:\windows\temp\diskover-web\ "c:\program files\diskover-web\" /e /d /c /y`
5) start diskoverd service
