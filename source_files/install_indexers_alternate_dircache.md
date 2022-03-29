___
### Directory Cache Alt Scanner

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

Directory Cache alt scanner can be used to speed up subsequent crawls when indexing slower network mounted storage.

Dir Cache Alt Scanner uses the Diskover cache module **diskover_cache** which uses [Sqlite](https://www.sqlite.org/) DB to store a local cache of directory mtimes (modified times), directory file lists and file stat attributes.

On subsequent crawls, when a directory mtime is the same as in cache, the directory list and all file stat attributes can be retrieved from cache rather than over the network mount.

>_Note:_ When a file gets modified in a directory, the directory's mtime does not get updated. Because of this, when using **dircache**, the file stat attributes for each file in the directory retrieved from cache may not be the same as on the storage.

>_Note:_ The first crawl for each top path can take longer as the cache is being built. Each top path has it's own cache db file stored in **\_\_dircache\_\_/** directory.

🔴 &nbsp;To use the **dircache** alternate scanner, first copy the default/sample config:

```
cd /opt/diskover/scanners
mkdir ~/.config/diskover_scandir_dircache
cp scandir_dircache_config_sample/config.yaml ~/.config/diskover_scandir_dircache/config.yaml
```

🔴 &nbsp;`load_db_mem` setting can be set to **True** to load the Sqlite db into memory when crawl starts. This can help to improve db performance. 

>_Warning!_ Check db file size before loading into memory to ensure you don't run out of memory on the indexing host.


🔴 &nbsp;Scan and index using **dircache** using an auto-index name:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_dircache /toppath
```

#### Corrupt sqlite db

If you see this Traceback error when starting a scan, the sqlite db has become corrupt. This can happen if previous scans did not close and write out the in-memory database (when using sqlite in memory).

```
sqlite3.DatabaseError: file is encrypted or is not a database
```

If you see this error message, you will need to delete the sqlite db file, refer to the scan log lines (example below) to find what db file to delete.

```
2022-03-29 10:28:55,397 - diskover_cache - INFO - Using cache DB __dircache__/eac817f78756a24821316430009bb0c2/cache_database.db (160.73 MB)
2022-03-29 10:28:55,397 - diskover_cache - INFO - Loading cache DB __dircache__/eac817f78756a24821316430009bb0c2/cache_database.db into memory...
```

Delete the db directory and file:
```
cd /opt/diskover/__dircache__
rm -rf eac817f78756a24821316430009bb0c2
```
