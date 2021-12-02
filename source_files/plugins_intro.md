<p id="plugins"></p>

___
## Plugins
___

Diskover is designed for extensibility. The open-source architecture is designed to promote extensibility via plugins.

### Plugins Installation and Config Files Location

There are two invocation methods for plugins; 1) plugin executed at time of index, 2) plugin executed post index as CRON like tasks.

Diskover config file are located in:

- Linux: `~/.config/diskover/config.yaml`
- Windows: `%APPDATA%\diskover\config.yaml`
- MacOS: `~/Library/Application Support/diskover/config.yaml`

The default configs are located in `configs_sample/`. There are separate configs for diskover autotag, dupes-finder, etc. They are default/sample configs and need to be copied to the appropriate directory based on the OS.

For example, in Linux the config files are in `~/.config/<appName>/config.yaml`. Each config file has a setting `appName` that matches the directory name where the config file is located. For Diskover dupes-finder for example, this would be `~/.config/diskover_dupesfinder/config.yaml`.
