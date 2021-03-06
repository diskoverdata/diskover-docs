___
## Changelogs - Community Edition
___

### Diskover v2 Community Edition Changelog

#### [2.0.3] - 2022-07-20
##### fixed
- Windows scanning issue causing directories not to be found (long path fix)


#### [2.0.2] - 2022-05-31
##### fixed
- logging issues in Windows
- scanning issues in Windows
- issue with restore times
##### changed
- improved crawl performance
- improved log naming


#### [2.0.1] - 2022-04-04
##### fixed
- issue with Windows scanning and long paths or paths with trailing space
- issue with Windows scanning and using unc path as top path with a trailing slash
##### added
##### changed
- improved index analyzer word filter


#### [2.0] - 2022-03-26
##### fixed
- minor bug fixes and improvements


#### [2.0-rc.5-1] - 2022-03-20
##### fixed
- Windows scanning issue
##### changed
- updated windows-owner plugin to v0.0.4
	- set INC_DOMAIN to False as default


#### [2.0-rc.5] - 2022-03-15
##### fixed
- issue with enabling diskover logging in Windows causes exception
- issue when scanning using just drive letter in Windows (example C:), would scan current directory
##### added
- defaults for config
##### changed
- if any missing config items are not in diskover config file, a default config value gets set and a warning message gets printed
- log file names
- updated Windows file owner plugin to v0.0.3
    - added sid cache to improve performance
    - primary group is also now indexed
    - INC_DOMAIN variable at top of script to control if domain name is included in owner/group name


#### [2.0-rc.4-1] - 2022-02-28
##### fixed
- issue with slow indexing from hardlink checking, updated diskover.py to v2.0-rc.4-1
##### added
##### changed


#### [2.0-rc.4] - 2022-02-18
##### fixed
- issue with scanning in Windows
- issue with setting domain to True in ownersgroups section in diskover config would case the scan to fail
- UnicodeEncodeError exception when logging Unicode utf-8 file path warnings
##### added
- dir_depth, size_norecurs, size_du_norecurs, file_count_norecurs, dir_count_norecurs to ES index field mappings
    - additional fields added to directory docs
##### changed
- hardlink files size_du (allocated size) set to 0 when same inode already in scan
- set number of scan maxthreads when empty/blank (default) in config to number of cpu cores
- indexing unrecognized Unicode utf-8 characters in file name or parent path, the characters are replaced with a ? character and file gets indexed with a warning log message
    - previously the file/directory was not indexed and just skipped with a warning message


#### [2.0-rc.3] - 2021-12-26
##### fixed
- bug https://github.com/diskoverdata/diskover-community/issues/97
    - Exception ValueError: too many values to unpack (expected 4)
- if an unhandled error occurred, diskover would not exit without keyboard interupt
- exception when using alt scanners
##### added
- indices now tokenize camel case in file names and paths
- optional function name "init" used by alt scanners to set up connections to api, get env vars, etc.
- optional function name "close" used by alt scanners to close dbs, etc.
- --threads cli option, overrides maxthreads config setting
##### changed
- maxthreads diskover config settings now default to auto set based on number of cpus when leaving config setting blank, see default/sample config file
- improved crawl performance


#### [2.0-rc.2] - 2021-12-01
##### fixed
##### added
- Windows file owner indexing plugin
- optional function name "init" used by alt scanners to set up connections to api, get env vars, etc.
##### changed
- set specific versions of python pip modules in requirements txt files
- removed Docker files, use linuxserver.io diskover docker container on docker hub


#### [2.0-rc.1] - 2021-10-08
- first community edition v2.0 rc release

___
### Diskover-web v2 Community Edition Changelog

#### [2.0.3] - 2022-07-20
##### fixed
- view file info page file and full path links not finding any search results when file name has double quote " in name


#### [2.0.2] - 2022-05-31
##### added
- sqlite db checks


#### [2.0.1] - 2022-04-04
##### fixed
- directories with trailing whitespace not returning any search results


#### [2.0] - 2022-03-26
##### fixed
- minor bug fixes and improvements


#### [2.0-rc.5] - 2022-03-15
##### fixed
- multiple ES queries delay when typing text into search bar
- index fields getting added multiple times to filters and help page
- increasing MAX_INDEX setting in config not updating maxindex user browser cookie if set lower
- issue with select indices page and php warning message if new index not in cache
##### added
- defaults for config
- DATABASE to default/sample config (Constants.php.sample), can be used to change sqlite database file path
##### changed
- improved table text wrapping on search results page
- if any missing config items are not in Constants.php (web config file), a default config value gets set and a message gets printed in web server error log
- MAX_INDEX setting in default/sample config to 250
- increasing MAX_INDEX in config also increases it for all users who may have it set lower in browser cookie


#### [2.0-rc.4] - 2022-02-18
##### BREAKING CHANGES
- added MAX_INDEX, INDEXINFO_CACHETIME, NEWINDEX_CHECKTIME settings to default/sample web config file, copy to your config file
- password for diskover user required to be hashed and stored in separate sqlite db, you will be prompted to change password at next login, config passwords are just used for defaults
##### fixed
- charts displaying more data than selected index
- reduced login time when many indices
- issue with not staying logged in and getting logged out before login time limit expires
- issue with extra field value text on file view info page not wrapping when text string is very long
- issue with extra field and object type not displaying correctly
- changing chart/tree filter settings such as SIZE_FIELD in config did not change until browser cookies were cleared
##### added
- MAX_INDEX, INDEXINFO_CACHETIME, NEWINDEX_CHECKTIME to default/sample web config file, copy to your config file
- change password to settings page
- after deleting indices on select indices page, index list will reload automatically after 3 seconds
##### changed
- user login password required to be hashed and stored in separate sqlite db
- reduced api calls to ES to check for new index info
- improved file/directory view info page for extra fields


#### [2.0-rc.3] - 2021-12-26
##### fixed
- select indices table not saving sort order or show number of entries setting on page reload
- issue when only single item on search results chart not showing bar in chart
##### added
##### changed
- chart colors for items in bar and pie charts now match on dashboard and file search


#### [2.0-rc.2] - 2021-12-01
##### fixed
- issue with setting ES_HTTPS to TRUE in config file or env var
- directory info at top of charts not displaying when hide tree enabled on search results
- extra fields field description not displaying correctly on view file/directory info page
- extra fields not showing true or false for bool values on search results and view info page
- extra fields showing Array when ES doc field is an array of associated arrays (object type) on search results and view info page
- issue with view info page file and full path links when file name contains spaces returning no search results
##### added
- disk space bar chart next to drive icon in search results file tree
- percent on mouse over to search results and dashboard charts
- documentation link to help page
##### changed
- set specific version of elastisearch php client in composer.json
- improved search results ui
    - file tree is now fixed when scrolling
- removed Docker files, use linuxserver.io diskover docker container on docker hub


#### [2.0-rc.1] - 2021-10-08
- first community edition v2.0 rc release
