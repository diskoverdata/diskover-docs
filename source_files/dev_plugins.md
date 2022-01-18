___
## Develop Your Own Plugins
___

### Diskover Plugins

This section covers the basics on how to create your own plugin. For example, you can add extra metadata to an index during crawl time by adding a plugin to the Diskover crawler. Some other examples are database lookups to apply extra tags, content indexing and if keyword found tag file, copy or backup file if matches certain criteria, etc. This is all done during crawl time.

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

### Diskover-web Plugins - File Actions

This section covers the basics on how to create your own web plugins, known as File Actions. There are several examples in the `public/fileactions/` directory in diskover-web. The examples all end with the extension `.sample`. 

You will need some basic familiarity with PHP to create a File Action. A File Action can also call system processes, as shown in some of the examples to run local and remote scripts/commands.

After you have created a new File Action with an extension `.php`, you will need to add the File Action to the web config file in `src/diskover/Constants.php`. Edit the config file and look for the section titled File Actions. You will need to add the file action to the `const FILE_ACTIONS` array. There are some examples in the config file and in the `Constants.php.sample` default config file.

Here is an example of adding a File Action:

```
const FILE_ACTIONS = [
    'find file sequences' => [
        'webpage' => 'filesequence.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-images'
    ]
];
```

🔴 &nbsp;Each File Action is stored as an associative array with the key being the file action name:

- **webpage** > the filename of the File Action

- **allowed_users** > list of allowed local and/or AD/LDAP user names that can run the File Action

- **allowed_ldap_groups** > list of allowed AD/LDAP group names that can run the File Action

- **menu_icon_class** > Font Awesome css class name for icon [https://fontawesome.com/](https://fontawesome.com/)

#### File Action Logging

All file actions log in the `public/fileactions/logs` directory. If you do not have that directory, create the logs directory and chown the directory to be owned by nginx so nginx can write log files into the directory.
