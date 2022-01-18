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

At the top of every file action php file you will need:

```
// override debug output in fileactions include file
$fileactions_debug = FALSE;

include 'includes/fileactions.php';
include 'includes/fileactions_header.php';
```

and at the bottom:

```
include 'includes/fileactions_footer.php';
```

In the example file actions you will see a foreach loop that itterates over the selected files/directories:

```
foreach ($fileinfo as $file) {
    ...
}
```

$fileinfo is an associative array of each selected file/directory info which contains the ES index doc info (includes/fileactions.php):

```
$fileinfo[] = array(
        'docid' => $queryResponse['hits']['hits'][0]['_id'],
        'index' => $queryResponse['hits']['hits'][0]['_index'],
        'index_nocluster' => $mnclient->getIndexNoCluster($docindices_arr[$key]),
        'fullpath' => $queryResponse['hits']['hits'][0]['_source']['parent_path'] . '/' . $queryResponse['hits']['hits'][0]['_source']['name'],
        'source' => $queryResponse['hits']['hits'][0]['_source'],
        'type' => $queryResponse['hits']['hits'][0]['_source']['type']
    );
```

So for example, to get the fullpath of the file, you would use `$file['fullpath']`, or to get the index name `$file['index']`, or to get the type (file or directory) `$file['type']`.

If you need to translate paths, you can do so with the built in `translate_path` function which accepts two args.

```
$fullpath = $file['fullpath'];
$path_translations = array(
    '/^\//' => '/mnt/'
);
$fullpath = translate_path($fullpath, $path_translations);
```

To learn more about using and configuring web plugins, see File Actions in the [config and admin guide](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#diskover-web-plugins-file-actions).
