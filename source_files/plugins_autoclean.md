___
### Autoclean Plugin

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

The autoclean plugin is designed to move, delete, rename or run custom commands on files and/or directories based on a set of highly configurable criteria. Any Elasticsearch query (tags, age, size, path, filename, etc.) can be used for the criteria providing very granular actions.

With the use of tags, the autoclean plugin can be used to implement a RACI model or approval process for archive and deletion (approved_archive, approved_delete, etc.) tag application. The plugin criteria can then be set to meet desired set of tags (times, etc.) to invoke action.

🔴 &nbsp;Check that you have the config file in `~/.config/diskover_autoclean/config.yaml`, if not, copy from default config folder in `configs_sample/diskover_autoclean/config.yaml`.

🔴 &nbsp;The autoclean plugin runs post as scheduled job operating on completed indices, to enable:
```
vim /root/.config/diskover_autoclean/config.yaml
```

![Image: Enabling Autoclean Plugin](images/image_plugins_autoclean_plugin_enabling_in_terminal.png)

🔴 &nbsp;Configure desired rules:
- Query can be any valid Elasticsearch query using [query string query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html).
- Action can be: delete, rename, move or custom. Custom can be used to run a command or script.

🔴 &nbsp;Create custom task in Task Panel to run on scheduled basis.

🔴 &nbsp;Set the following:
- Run Command Args: **python3**
- Post Command: **/opt/diskover/diskover-autoclean.py -V -l /mnt/snfs2**

🔴 &nbsp;Change **/mnt/snfs2** to the desired **top_level_path**, for example, if the desired volume to index is **isilon**, then the path would be **/mnt/isilon**

![Image: Autoclean Plugin Scheduling](images/image_plugins_autoclean_scheduling_in_task_panel.png)
