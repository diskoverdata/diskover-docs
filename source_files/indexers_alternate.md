___
## Diskover Alternate Indexers

This section outlines information needed outside the guidelines included in the user interface **System Configuration** Panel.

___
### Alternate Indexer | Directory Cache (DirCache)

<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

The Directory Cache alternate scanner can be used to speed up subsequent crawls when indexing slower network mounted storage.

DirCache alternate scanner uses the Diskover cache module **diskover_cache**, which uses [SQLite](https://www.sqlite.org/) database to store a local cache of directory mtimes (modified times), directory file lists, and file stat attributes.

On subsequent crawls, when a directory mtime is the same as in cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount.

>_Note:_ When a file gets modified in a directory, the directory's mtime does not get updated. Because of this, when using **dircache**, the file stat attributes for each file in the directory retrieved from cache may not be the same as on the storage.

>_Note:_ The first crawl for each top path can take longer as the cache is being built. Each top path has its own cache db file stored in **\_\_dircache\_\_/** directory.

#### Corrupt SQLite Database

If you see this traceback error when starting a scan, the SQLite database has become corrupt. This can happen if previous scans got interrupted abruptly, did not close, and write out the database successfully to disk.

```
sqlite3.DatabaseError: file is encrypted or is not a database
```

If you see this error message, you need to delete the SQLite database file. Refer to the scan log lines (example below) to find the DB file to delete.

```
2022-03-29 10:28:55,397 - diskover_cache - INFO - Using cache DB __dircache__/eac817f78756a24821316430009bb0c2/cache_database.db (160.73 MB)
2022-03-29 10:28:55,397 - diskover_cache - INFO - Loading cache DB __dircache__/eac817f78756a24821316430009bb0c2/cache_database.db into memory...
```

Delete the database directory and file:
```
cd /opt/diskover/__dircache__
rm -rf eac817f78756a24821316430009bb0c2
```

___
### Alternate Indexer | Atempo Miria

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Dell PowerScale

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Dropbox

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | FTP Scanner


___
### Alternate Indexer | Generic JSON/CSV Text

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Microsoft Azure Storage Blob

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Microsoft OneDrive and SharePoint

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Offline Media

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | S3 Bucket with or without AWS Endpoints

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Spectra Logic RioBroker/BlackPearl

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

___
### Alternate Indexer | Develop Your Own Scanner