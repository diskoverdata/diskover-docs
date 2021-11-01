___
# Path Translation

The path translation feature is designed to support heterogenous client environments like Windows, MacOS, and Linux. The path for each client to access or locate a file or directory will vary depending on client operation system. For example, Windows operating systems use the forward slash `/` and Linux operating systems use a backslash `\`. Path translation provides the capability to translate paths within Diskover to appropriate the client’s operating system. The following describes two mechanisms for translating paths within Diskover.

## Translating Paths Stored in Elasticsearch Index

To translate paths that get stored within the Elasticsearch document, for example removing **/mnt** from a path like **/mnt/isilon1**

➡️ Open a terminal session:
```
vi /root/.config/diskover/config.yaml
```

➡️ Set **replace:** to **True**

➡️ Configure desired **from:** and **to:**

![Image: Enabling Paths Translation](images/image_paths_translation_config_from_and_to.png)

Which results in the following path displayed within the Diskover-Web user interface:

![Image: Path Translation Displayed in User Interface](images/image_paths_translation_search_results_pane_path_column.png)

## Path Translation in Diskover-Web for Copy/Paste

To set client profiles that get translated when a user copies a path within the Diskover-Web user interface. 

➡️ For example, to translate from `/isilon1/data/dm/tools/staging files.xls` to `\\isilon1\data\dm\tools\staging files.xls`
```
vi /var/www/diskover-web/src/diskover/Constants.php
```

![Image: Paths Translation Settings](images/image_paths_translation_settings_in_terminal.png)

➡️ Configure client profile within the Diskover-Web user interface under the **Settings** page:

![Image: Paths Translation Selection in Settings](images/image_paths_translation_settings_in_diskover_ui.png)

➡️ Copy a path within the Diskover-Web user interface for testing:

![Image: Copy Path from User Interface](images/image_paths_translation_copy_path_from_diskover_ui.png)

➡️ Resulting path within clipboard:

![Image: Pasted Path Within Clipboard](images/image_paths_translation_paste_path_in_clipboard.png)
