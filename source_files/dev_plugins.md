___
## Develop Your Own Plugins

This section covers the basics on how to create your own plugin.

Plugins are stored in the `plugins/` folder in the root directory of Diskover. There are a few examples in the plugins folder to get you started. Plugins are run during a crawl.

🔴 &nbsp;Make a directory in plugins with the name of the plugin, example `myplugin`

🔴 &nbsp;Create a file in the `myplugin` directory named `__init__.py`

🔴 &nbsp;Copy the code from one of the example plugins and edit to create the plugin. There are six required function names but they can be edited however you want as long as the return value type is the same. The six required function names for plugins are:

- add_mappings
- add_meta
- add_tags
- for_type
- init
- close

🔴 &nbsp;To enable or disable a plugin, edit the Diskover config file in the plugins section. For example, to enable the [media info harvest plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#media-info-harvest-plugin) add **mediainfo** to the files list in the plugins section.

🔴 &nbsp;To list all plugins that will be used during crawls:
```
python3 diskover.py -l
```
