


| TERM | DEFINITION |
| --- | --- |
| **Cluster** | |
| **DirCache** | <img src="images/button_edition_essential.png" width="90">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="90">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="90">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="90">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="90"><br><br>Directory Cache alt scanner can be used to speed up subsequent crawls when indexing slower network mounted storage. DirCache alternate scanner uses the Diskover cache module `diskover_cache` which uses Sqlite DB to store a local cache of directory mtimes (modified times), directory file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from cache rather than over the network mount.<br><br>_Note:_ When a file gets modified in a directory, the directory's mtime does not get updated. Because of this, when using DirCache, the file stat attributes for each file in the directory retrieved from cache may not be the same as on the storage.<br><br>_Note:_ The first crawl for each top path can take longer as the cache is being built. Each top path has its own cache db file stored in __dircache__/ directory.|
