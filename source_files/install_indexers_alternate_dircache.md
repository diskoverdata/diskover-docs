___
### Directory Cache Alt Scanner

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

Directory Cache alt scanner can be used to cache directory mtimes and file stat attributes. It can help to speed up subsequent crawls when indexing network mounted storage.

Dir Cache Alt Scanner uses the Diskover cache module which uses Sqlite3 db to store local cache of directory mtimes, directory file lists and file stat attributes.

On subsequent crawls, when a directory mtime is the same as in cache, the directory list can be retrieved from cache rather than over the network link.

>_Note:_ The first crawl for each top path can take longer as the cache is being built. Each top path has it's own cache db file stored in **__dircache__/ directory**.

🔴 &nbsp;To use the **dircache** alternate scanner, first copy the default/sample config:

```
cd /opt/diskover/scanners
mkdir ~/.config/diskover_scandir_dircache
cp scandir_dircache_config_sample/config.yaml ~/.config/diskover_scandir_dircache/config.yaml
```

🔴 &nbsp;Scan and index using **dircache** using an auto-index name:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_dircache /toppath
```
