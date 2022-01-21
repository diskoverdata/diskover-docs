___
### Directory Cache Alt Scanner

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

Directory Cache alt scanner can be used to speed up subsequent crawls when indexing slower network mounted storage.

Dir Cache Alt Scanner uses the Diskover cache module **diskover_cache** which uses [Sqlite](https://www.sqlite.org/) DB to store a local cache of directory mtimes, directory file lists and file stat attributes.

On subsequent crawls, when a directory mtime is the same as in cache, the directory list can be retrieved from cache rather than over the network mount.

>_Note:_ The first crawl for each top path can take longer as the cache is being built. Each top path has it's own cache db file stored in **\_\_dircache\_\_/** directory.

🔴 &nbsp;To use the **dircache** alternate scanner, first copy the default/sample config:

```
cd /opt/diskover/scanners
mkdir ~/.config/diskover_scandir_dircache
cp scandir_dircache_config_sample/config.yaml ~/.config/diskover_scandir_dircache/config.yaml
```

* `load_db_mem` setting can be set to `True` to load the Sqlite db into memory when crawl starts. This can help to improve db performance. Warning: check db file size before loading into memory to ensure you don't run out of memory on the indexing host.


🔴 &nbsp;Scan and index using **dircache** using an auto-index name:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_dircache /toppath
```
