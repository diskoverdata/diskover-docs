#### Tag Application via Autotag

Tags can be applied automatically via a series of rules applied to directories or file. The rules can be very powerful based on a combination of file name, extension, path, age, size, etc.

- Auto-tagging rules can be found in the `diskover_autotag` config file for tagging files and directories.
- Auto-tagging can also be done during a crawl by enabling autotag in diskover config and setting rules in the diskover config file.
- All tags are stored in the `tags` field in the index - there is no limit to the number of tags.


##### Autotag During Indexing

To enable tags to be applied during the index process, autotagging must be enabled and a series of rules configured to determine what tags to apply and under what conditions.

🔴 &nbsp;Set autotag to **True** and define tagging rules.
```
vim /root/.config/diskover/config.yaml
```

![Image: YALM Autotags Configuration](images/image_tags_autotags_config_rules.png)

In the following example, the rules will:

- Apply the **expired** tag to files in the **netflix** folder with a ctime (change time) **60** days or older
- Apply the **autoclean** tag to files in **$RECYCLE.BIN folder**

```
files: [
        {
        # autotag retention for /mnt/isilon2/sources/platforms/netflix
        'name': [],
        'name_exclude': [],
        'ext': [],
        'path': ['^/isilon2/sources/platforms/netflix'],
        'path_exclude': [],
        'ctime': 60,
        'mtime': 0,
        'atime': 0,
        'tags': ['expired']
        },
        # autotag daily deletions for $RECYCLE.BIN
        {
        'name': [],
        'name_exclude': ['desktop.ini'],
        'ext': [],
        'path': ['^/*/$RECYCLE.BIN'],
        'path_exclude': [],
        'ctime': 0,
        'mtime': 0,
        'atime': 0,
        'tags': ['autoclean']
        }
    ]
```

Autotag Keys:

- `name`: a list of file/directory names (case-sensitive)
- `name_exclude`: a list of file/directory names to exclude (case-sensitive)
- `ext`: a list of file extensions (without the .) (use lowercase - all file extension are stored as lowercase in the index)
- `path`: a list of paths (parent_path field, case-sensitive)
- `path_exclude`: a list of paths to exclude (parent_path field, case-sensitive)
- `ctime`: change time at least this number or older (days)
- `mtime`: modified time at least this number or older (days)
- `atime`: access time at least this number or older (days)
- `tags`: a list of tags to apply if item matches

> Note: name, name_exclude, path, path_exclude, and ext all use [Python re.search](https://docs.python.org/3.7/library/re.html) (regular expression).
> All list items should be in quotes and separated by comma


##### Autotag an Existing Index (Post Index Process)

Tag application can be executed via a shell to an existing index (post actual index process).

🔴 &nbsp;Check that you have the config file in `~/.config/diskover_autotag/config.yaml`, if not, copy from the default config folder in `configs_sample/diskover_autotag/config.yaml`.

🔴 &nbsp;To configure post index autotag rules:
```
vi /root/.config/diskover_autotag/config.yaml
```

![Image: YALM Autotags Post-Index Configuration](images/image_tags_autotags_post_index_rules.png)

🔴 &nbsp;Run manually from shell:
```
cd /opt/diskover
```

🔴 &nbsp;Post indexing plugins are located in `plugins_postindex/` directory.
```
python3 diskover-autotag.py diskover-<indexname>
```

🔴 &nbsp;Usage:
```
python3 diskover_autotag.py -h
```
<img src="images/image_tags_autotags_post_index_usage.png" width="750">
