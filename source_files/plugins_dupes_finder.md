___
### Duplicates Plugin

The Diskover duplicate plugin (dupes-finder) leverages post processing of index to check for duplicates, across all file systems, or subset thereof. The plugin supports **xxhash** or **MD5 checksums**. The plugin is designed for two use cases:

1. To check for duplicates across a single or all file systems.
1. To check for duplicates among a selected set of directories.

Calculating file **hash checksums** is an expensive CPU/disk operation. The dupes-finder provides configuration options to control what files in the index get a hash calculated. In addition, the dupes-finder provides additional optimization mechanisms:

- The diskover-cache **sqlite3 db** is used to store file hashes.
- An existing index can be used to lookup file hashes.

The dupes-finder can also be used to add file hashes to all the files in the index, not just the duplicates found.

![Image: Duplicate Plugin Results](images/image_plugins_dupes_finder_diskover_ui_results_pane.png)

The duplicates plugin will store hash values that can be stored only for duplicates or for all files.

![Image: Hash Values](images/image_plugins_dupes_finder_hash_values_in_file_attributes.png)

🔴 &nbsp;The dupes-finder plugin runs post index and  operates on completed indices as a scheduled job or on  demand job to provide  duplicates analysis on completed indices, to enable:
```
vim /root/.config/diskover_dupesfinder/config.yaml
```

🔴 &nbsp;At minimum configure the following:
- mode: desired checksum **xxhash** or **md5**
- extensions: desired file extensions to check, for all files use `[ ]`

![Image: Dupes-Finder Configuration](images/image_plugins_dupes_finder_config.png)

🔴 &nbsp;To run the duplicates check via command line:
```
cd /opt/diskover
python3 diskover_dupesfinder.py –useindex=indexname
```
