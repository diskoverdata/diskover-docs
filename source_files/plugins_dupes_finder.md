___
### Duplicates Plugin

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

The Diskover duplicate plugin (dupes-finder) leverages post processing of index to check for duplicates, across all file systems, or subset thereof. The plugin supports **xxhash**, **md5**, **sha1**, and **sha256** checksums. The plugin is designed for two use cases:

1. To check for duplicates across a single or all file systems.
1. To check for duplicates among a selected set of directories.

Calculating file **hash checksums** is an expensive CPU/disk operation. The dupes-finder provides configuration options to control what files in the index get a hash calculated and marked as a dupe (`is_dupe` set to `True`). In addition, the dupes-finder provides additional optimization mechanisms:

- The diskover-cache **sqlite3 db** is used to store file hashes.
- An existing index can be used to lookup file hashes.
- The Elasticsearch fields for file type that get updated are `hash` and `is_dupe`.

🔴 &nbsp;To use the default hashing mode **xxhash**, you will first need to install the **xxhash Python module**. Post indexing plugins are located in `plugins_postindex/` directory.
```
pip3 install xxhash
```

The dupes-finder can also be used to add file hashes to all the files in the index, not just the duplicates found.

![Image: Duplicate Plugin Results](images/image_plugins_dupes_finder_diskover_ui_results_pane.png)

The duplicates plugin will store hash values that can be stored only for duplicates or for all files.

![Image: Hash Values](images/image_plugins_dupes_finder_hash_values_in_file_attributes.png)

🔴 &nbsp;Check that you have the config file in `~/.config/diskover_dupesfinder/config.yaml`, if not, copy from the default config folder in `configs_sample/diskover_dupesfinder/config.yaml`.

🔴 &nbsp;The dupes-finder plugin runs post index and  operates on completed indices as a scheduled job or on  demand job to provide  duplicates analysis on completed indices, to enable:
```
vim /root/.config/diskover_dupesfinder/config.yaml
```

🔴 &nbsp;At minimum configure the following:
- mode: desired checksum **xxhash**, **md5**, **sha1**, or **sha256**
- extensions: desired file extensions to check, for all files use `[]`

🔴 &nbsp;Additional settings:
- maxthreads: maximum number of threads to use for file hashing, leave empty/blank to auto-set based on number of cpu cores
- minsize and maxsize: minimum and maximum size (in bytes) of files to hash
- otherquery: additional Elasticsearch query when searching an index for which files to hash
- replacepaths: for translating paths from index path to real path, example translating `/` to `/mnt/` . This is required if path translations were done in index or needing to convert to a Windows path.

![Image: Dupes-Finder Configuration](images/image_plugins_dupes_finder_config.png)

🔴 &nbsp;To run the duplicates check via command line:
```
cd /opt/diskover
python3 diskover_dupesfinder.py diskover-<indexname>
```

🔴 &nbsp;To run the dupes finder for multiple completed indices:
```
python3 diskover-dupesfinder.py diskover-<indexname1> diskover-<indexname2>
```

🔴 &nbsp;See all cli options:
```
python3 diskover-dupesfinder.py -h
```
