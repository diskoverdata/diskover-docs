___
## Changelogs - Community Edition
___

### Diskover v2 Community Edition Changelog

#### [2.1.0] - 2023-02-02
##### fixed
- python error when indexing spaceinfo doc and total disk space > max size for ES long field mapping (s3fs mount)
- trailing slashes not geting removed from paths in Windows
- catching AttributeError exceptions in alt scanner log_setup, init, close functions
- python error when scanning s3fs fuse mount and directory modified time (mtime) timestamp invalid
##### added
- Windows path examples for log directory to diskover default/sample config file
##### changed
- default log directory in diskover default/sample config from /tmp/ to /var/log/diskover/, create directory first before enabling logToFile


#### [2.0.7] - 2023-01-08
##### fixed
- exception handling for Elasticsearch exception TransportError during bulk uploads
- exception handling for close function call for plugins and alt scanners
##### added
- free_percent and available_percent to spaceinfo doc and to es index mappings


#### [2.0.6] - 2022-11-06
##### changed
- better handling of errors when importing alternate scanner modules


#### [2.0.5] - 2022-10-21
##### fixed
- log file names having 12H format instead of 24H
- issue with setting ES_HTTPS env var
##### added
- Elasticsearch SSL verification setting (sslverification) to default/sample diskover config, copy to your config and set for your env
    - ssl and certificate verification when connecting to ES
    - can be set with ES_SSLVERIFICATION env var


#### [2.0.4] - 2022-09-19
##### fixed
- issue with replace paths config setting and using / as from path
- issue with ES bulk indexing and unicode encode error caused scan to crash


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

#### [2.1.0] - 2023-02-02
##### fixed
- not staying logged in when checking keep me logged in for 7 days on login page
- Fatal error: Allowed memory size of n bytes exhausted in Diskover.php when searching for /nonexistpath
- es search query error when searching for /nonexistpath
- bug fixes searching full absolute paths
- links on dashboard not loading root path in search results
##### added
- more options to quick search nav menu dropdown
- more options to filters modal
- filter charts checkbox to nav filters button modal and settings page to apply filters to search results and dashboard charts
- css to wrap long text for extra fields on search results table
- no index selected warning message on indices page
- edit search query button to search results page
- reload button to bottom of dashboard page to reload chart data
##### changed
- removed search path from filters
- removed filters always being applied to search results charts
- charts on dashboard and search page now display size/count on mouse over tips
- top by count charts now display by doc counts rather than counts of top by size chart data
- all chart links on dashboard and search page now open in new window
- view file/directory info buttons, and search path menu items on search results page table now open in new window
- links on view file/directory info page now open in new window


#### [2.0.7] - 2023-01-08
##### fixed
- Cross-Site Scripting (XSS) vulnerability in nav.php
- php warning when reloading indices and there is a corrupt index
- delete index not working on indices page
##### added
- show multi-fields on help page fields section and filter fields, e.g. field.subfield
- user alert when trying to sort on a field not found in index or trying to sort on a text field
- index name to delete prompt when deleting index on indices page


#### [2.0.6] - 2022-11-06
##### fixed
- issue searching for full paths to hidden dot files/folders and files with double extensions (e.g. tar.gz)
- issue searching for full file path
- issue with rootpath not updating and directory searches showing no results
- es search error [ids] unknown field [type]
- occasional php fatal error when search contains parent_path field


#### [2.0.5] - 2022-10-21
##### fixed
- changing index in url params doesn't set the index or root path
- path breadcrumb not updating when searching for path
- issue when searching for a path using absolute path or parent_path index field, tree and charts not updating on search results page
- issue with using multiple browser tabs and not staying logged in
- having multiple browser tabs open and not being automatically logged out of all tabs when session timeout expires
- php ES error: Trying to create too many scroll contexts. Must be less than or equal to: [500]
- clicking on a search results page button with a large number would cause PHP to crash
- file charts being displayed on search results page when directory contains no files
- issue with setting env vars for es host, port, etc
- other minor bug fixes and improvements
##### added
- ES_SSLVERIFICATION setting to default/sample web config file src/Constants.php.sample, copy to your config and set for your env
    - ssl and certificate verification when connecting to ES
    - can be set with ES_SSLVERIFICATION env var
##### changed
- reduced diskover-web search ES scroll time from 1m to 30s and clear scroll window after done searching
- disabled search results page buttons > 1000 to prevent PHP crash


#### [2.0.4] - 2022-09-19
##### added
- all charts on search results page and dashboard are now clickable for searching results
##### changed
- removed setting sort by size when clicking charts on search results and dashboard pages


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
