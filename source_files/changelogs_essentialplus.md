___
## Changelogs - Essential +
![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)
___

### Diskover v2 Changelog

#### [2.0-rc.3-5] - 2022-01-13
##### fixed
- issue when using replace paths in diskover config would cause scanning to fail
- issues with threaddirdepth
##### added
##### changed
- maxthreads config setting when left empty/blank, now sets to cpu cores, previously was cpu cores x 2
- threaddirdepth config setting max limit is now 3, previously was unlimited
- threaddirdepth config setting when left empty/blank, now sets to a max limit of 3 directory depth, previously was unlimited


#### [2.0-rc.3] - 2021-12-27
##### fixed
- issue with using a list of ES nodes (cluster) for Elasticsearch host setting in config file
- issue with auto tags not applying to any new fields added with alt scanners or by plugins
- issue with auto tags not tagging docs that match tag patterns
- if an unhandled error occurred, diskover would not exit without keyboard interupt
##### added
- Elasticsearch compression setting in default/sample diskover config, see default/sample config and copy to your diskover config file
- indices now tokenize camel case in file names and paths
- Windows file owner indexing plugin
- optional function name "init" used by alt scanners to set up connections to api, get env vars, etc.
- optional function name "close" used by alt scanners to close dbs, etc.
- scanndir_dircache alt scanner v0.0.1
- --threads and --walkthreads cli options, overrides maxthreads and maxwalkthreads config settings
- --threaddepth cli option, overrides threaddirdepth config setting
- slowdirtime and slowdirtimestopscan to default/sample diskover config, copy to your config
    - directories that are taking more than slowtime to scan you can set to stop scanning
- threaddirdepth to default/sample diskover config, copy to your config
    - set depth level for threads to be started for each subdir at depth level N from top path
##### changed
- default/sample diskover config autotag pattern rules
    - autotag rules for cleanlist now match diskover-web dashboard "Files on Clealist"
- default/sample diskover config directory excludes
- maxwalkthreads and maxthreads diskover config settings now default to auto set based on number of cpus when leaving config settings blank, see default/sample config file
- updated scandir_s3 alt scanner to v0.0.6
    - added init and close functions
    - minor performance improvements
- updated diskoverd to v2.0-rc.2
    - added username/password auth to work with diskover-web REST API auth
    - added apiuser, apipass to config, see default/sample diskoverd config file and copy to your config
    - bug fixes
- updated Docker files to use linuxserver.io diskover docker container as base
- updated media info plugin to v0.0.10
    - changed index field mappings for better searchability
    - minor updates and improvements
- updated diskover_cache module to v0.0.5
    - added cache hits, misses, hit ratio to log output
    - minor updates and improvements
- removed merge top paths post indexing plugin: plugins_postindex/diskover-mergepaths.py
- improved crawl performance
    - improved directory scanning threading
    - a thread is started for each subdir at directory depth level N using new config setting threaddirdepth, previously was only level 1 subdirs (up to maxthreads)
    - other optimizations


#### [2.0-rc.2] - 2021-10-19
##### fixed
- issues with diskoverd (see changed)
##### added
- cli option -r --removefromindex to remove top path(s) from an index
##### changed
- set specific versions of python pip modules in requirements txt files
- added boto3 python pip module to requirements-aws.txt
- updated diskoverd to v2.0-rc.1
    - added system load average to stats output and api call
    - added workerpools config option to default/sample config, copy to your diskoverd config file
        - setting for worker pools
    - added ability for diskoverd to be able to stop tasks
    - fixed issues running in Windows
    - other minor bug fixes and improvements


#### [2.0-rc.1] - 2021-10-10
##### note
- if upgrading from version older than v2.0-b.11, please see v2.0-b.11 changelog
##### fixed
- issue where stats output for dir count would decrease if excluded empty dirs was set to True and empty dir was found
- issue with directory docs directory count when using directory excludes
##### added
##### changed
- updated autoclean plugin to v0.0.1-b.10
    - bug fixes and improvements


#### [2.0-b.11] - 2021-09-30
##### fixed
- memory leak/ high memory usage
- occasional issue with diskover.py exiting before all es bulk uploads completed
- issue with using alt config for plugins and setting env var with - (hyphen) in name
- issue with directory docs and incorrect number in dir_count field
##### added
- improved crawl performance
- new directory plugins_postindex/
- rawstrings to autotag and storagecost sections in diskover default/sample config, copy to your config
- https and httpcompress settings to elasticsearch section in diskover default/sample config, copy to your config
    - for AWS ES you will want to set these both to True, previous aws setting has been removed
- merge top paths post indexing plugin diskover-mergepaths v0.0.1
    - plugins_postindex/diskover-mergepaths.py
    - merges multiple top paths in an index into a single unified path
##### changed
- moved all post indexing plugins into plugins_postindex/ directory
- renamed configs/ directory to configs_sample/
    - contains default/sample config files
- updated all post indexing plugins to use _ (underscore) instead of - (hyphen)
    - this will affect all plugins config directories, you will need to rename your config directories to use _ instead of - and change the appName setting at top of configs to use _ instead of - (see configs_sample/ directory for sample/default configs)
- updated diskoverd to v2.0-b.11
    - improved task status update emails
    - minor updates and improvements
- minor updates to docker files
- updated diskover-autoclean plugin to v0.0.1-b.9
    - changed move functionality to support absolute paths as well as relative, see sample config in configs_sample/diskover_autoclean/config.yaml
- updated media info plugin to v0.0.9
    - added explicit es index mappings to allow for improved search
- set diskover default/sample config bulksize setting to 1000, previously was 5000
- set diskover default/sample config maxthreads setting to 20, previously was 40
- set diskover-dupesfinder default/sample config maxthreads setting to 20, previously was 40
- removed hash es index field mapping
- removed separate threads used for es bulk uploading, crawl threads now do the bulk uploads to es
- updated auto tagging and storage costs
    - see default/sample diskover config and update your config
    - uses python re.search (regex)
    - when using wildcard * at start and end of string, only the * at start of string is now removed (* at start of string causes python re.search exception)
    - when using wilcard * at start or end of string, ^ and $ are no longer used to replace *
- removed aws setting from diskover default/sample config, remove from your config


#### [2.0-b.10] - 2021-08-26
##### fixed
- number of dirs count for top directory's finishing crawling log output
- ES bulk index error would cause diskover to print Exception but continue to run and consume memory, now any bulk index error will log the error and exit
- occasionnaly ino (inode) field in ES doc would be scientific notation number for large inode numbers, set ino to be string type in python before indexing doc
##### added
- diskover-autoclean plugin
##### changed
- updated diskover-dupes-finder plugin to v2.0-b.10
    - fixed issue with path translations when using translate paths in config
- updated diskoverd to v2.0-b.8
    - fixed issue with service not starting on boot when running on same host as diskover-web (nginx) and Elasticsearch and those services starting after diskoverd service
    - fixed issue with not retrying from no valid repsonse from api due to internet/dns issue causing diskoverd to stop working correctly
    - fixed issue with task that retries and completes successfully is marked as failed
    - fixed occasional issue when tasks scheduled at same time and not setting env vars or custom index env var correctly for task
    - added random short sleep time to start of tasks so tasks scheduled for same time don't all start at once
- updated diskover-autoclean plugin to v0.0.1-b.6
    - added seperate thread for es index updates
    - fixed issue where no latest index found if trailing / on path when using -l cli option
    - fixed issue with log showing WARNING - Connection pool is full, discarding connection
    - added config setting deletedirsrecursive, copy from default config to your config
        - control whether to delete directories recursively or just files in directory without removing the whole directory tree
        - defaults to just delete files in directory wihtout recursion
    - added stats at end to log items processed, size freed up, etc
- updated diskover-tagcopier plugin to v2.0-b.7
    - added additional logging for verbose
    - added excludeautotags setting to default config, copy to your config
- requirements-aws.txt elasticsearch to elasticsearch>=7.0.0,<7.14
    - ES client 7.14 introduced check and error message when connecting to AWS ES (OpenSearch)


#### [2.0-b.9] - 2021-07-07
##### fixed
- plugin errors causing indexing to fail and skip directories
- restore times enabled in config and using altscanner would cause error
- alt scanner directory docs additional metadata/ tags not getting added to doc
- excluded directory in diskover config with trailing slash not getting excluded
- index mapping issues for spaceinfo and indexinfo docs
- crawl thread locking issues
- issue with dir item counts when using excludes
##### added
- name.text and parent_path.text text type fields
    - secondary fields for name and parent_path keyword fields
    - allows for full-text search including case-insensitive and token splitting on path characters like / - _ , etc
    - this should help to reduce heavy ES operations using wildcard * at start of queries
- enabled http gzip compression of bulk data uploads to Elasticsearch in AWS
- scripts/task-postcommands-example.sh bash script
    - example diskover-web task panel index task post command bash script
- custom exit code 64 if index completes successfully but with warnings
- directory count to crawl stats log output
- additional warnings log file when logging to file is enabled in config to log any warnings or errors
- diskover log file names now contain top dir args (directory basenames) as well as datestamp
- support for up to Elasticsearch v7.10.2, recommended to update/upgrade (now default install version)
- support for up to python client for Elasticsearch v7.13.1
    - upgrade by running "pip3 install --upgrade elasticsearch" in diskover directory
- skipped files/dirs are logged when using verbose options, as well as when running in debug logging
- --debug cli option to output in debug mode (overrides config setting)
##### changed
- stat outputs inodes/sec instead of files/sec
- indexing plugins now require two new functions named init and close
- removed --usecache and --flushcache cli options
- removed cachedir and cacheexpiretime settings from default/sample diskover config, remove from your config
- updated mediainfo plugin to v0.0.8
    - added additional video extensions
    - added 20 second timeout for ffprobe subprocess since ffprobe would hang on very large files
    - added tagging for "bad files" which can not be properly opened by ffprobe
    - fixed issue where ffprobe error/exitcode 1 could cause indexing to fail and skip directories
    - added init and close functions
    - added verbose setting at top of plugin to enable more verbose logging
    - added media info sqlite3 db caching
- updated unixperms plugin to v0.0.3
    - added init and close functions
- updated diskoverd to v2.0-b.4
    - added running time
    - fixed issue with working time, successful task count and failed task count getting set incorrect
    - fixed issues with disabling task worker
    - fixed issue with DISKOVERDDIR env var config directory not getting set when using default config and another previous task set a different custom config directory
    - fixed issue with a successful retry attempt to run task setting the task status to failed
    - added kill signal SIGTERM check to cleanly quit worker
    - allows for {indexname} var in post-crawl command args in diskover-web index task
    - improved logging including daily log rotation
    - added api connection retry
    - other minor fixes and improvements
- updated diskover-tagcopier plugin to v2.0-b.4
    - added -a --autoindexfrom cli arg which finds index_from (previous index) based on index_to's top paths
    - fixed issue causing crash when no matching inode found in target index
    - minor updates and improvements
- updated diskover-cache to v0.0.4
    - fixed issue with disabling diskover file logging
    - minor improvements
- updated diskover-dupes-finder plugin to v2.0-b.9
    - made default output less verbose, use -v or -V for more verbose output
    - added cli option --useindexauto to auto-find previous index for file hash lookups based on index arg's top paths
    - minor updates and improvements
- updated diskover-autotag plugin to v2.0-b.5
    - minor updates and improvements
- updated scandir_s3 alt scanner to v0.0.5
    - fixed issue with logging and errors/warnings not getting added to end crawl stats


#### [2.0-b.8] - 2021-05-11
##### fixed
- permission issues scanning directories over cifs/smb causing indexing to fail
- es bulk upload unicode error from bad characters in file names causing indexing to fail
- memory leak caused by scan error
- scan error causing scan to never finish when exluding empty dirs and top root dir has only excluded files in excluded file list
- extra index mappings for plugins being added to index when plugin disabled or all plugins disabled
##### added
- check if Elasticsearch is running and display error message if not
- requests python library to requirements.txt and requirements-win.txt, install using pip3 install requests
- added new config setting maxwalkthreads in default/sample diskover config file (copy to your diskover config)
- pywin32 py module added to requirements-win.txt, install with pip if crawling in Windows
- psutil py module added to requirements-win.txt, install with pip if crawling in Windows
- memory usage and scan thread info to log output
- can now stop a long crawl with keyboard interupt (ctrl+c) and have the index usable in diskover-web
- added --version to cli options to print version number for all py scripts
- added -v and -V cli options for --verbose and --vverbose to most py scripts
##### changed
- no longer hardcoded 4 for tree dir threads, can be set using diskover config setting maxwalkthreads (for multiple tree_dir args)
- updated diskover_cache to v0.0.2
    - use md5 hashed paths instead of inode numbers in sqlite db (if previously using cache, old sqlite db are not compatible)
- alternate scanners now use size_du (allocated) size instead of always assigning size_du to size
- updated diskoverd to v2.0-b.2
    - fixed issue where tasks could get enqueued and ran multiple times for same scheduled time
    - reduced number of normal info log ouput
    - added new config settings in default/sample diskoverd config file (copy to your diskoverd config)
        - diskoverpath
        - sendemail
    - changed time to look for new tasks from 60 sec to 15 sec
    - fixed issue with scheduled tasks not getting ran more than first time
    - status emails now contain timezones for printed times
    - added support for alt scanner option on diskover-web new index task
- updated diskover-autotag to v2.0-b.4
    - fixed issue with muli-match rules not adding all tags
    - added -a --addtags cli option
- updated scandir_s3 alt scanner to v0.0.4
    - added st_sizedu to be compatible with change in diskover
    - fixed issue when scanning top prefix “directory” that is empty causes scan to crash
    - fixed issue when scanning top prefix "directory" that all items are excluded causes scan to crash
    - added ability to set endpoint url using env var S3_ENDPOINT_URL
- updated diskover-dupes-finder to v2.0-b.7
    - updated to work with new version of diskover_cache
- updated diskover-tagcopier to v2.0-b.2
    - a few minor updates


#### [2.0-b.7] - 2021-03-08
##### fixed
- issue with crawling Windows drive maps or unc paths and top path directory not getting indexed correctly
- diskover-dupes-finder Exception error if file in index being hashed not longer exists
##### added
- diskoverd.py, a task daemon for running scheduled tasks on diskover-web
    - configs/diskoverd/config.yaml, copy to config directory, example on Linux ~/.config/diskoverd/config.yaml
- better error logging for restoring times when running dupes finder
- croniter py module requirement, install with pip3
- Docker files for getting running in Docker
- scanners/ directory for storing alternate python scanner modules, use with --altscanner cli option
- --altscanner cli option for using alternate scanner module, sample s3 scanner module in scanners/
- --verbose and --vverbose cli options
- diskover_cache.py, a module for sqlite3 db cacheing
- --usecache and --flushcache cli options, uses diskover_cache module for storing directory mtimes, use with --usecache previndexname
- cachedir and cacheexpiretime to diskover default/sample config, copy to your config the new changes
- scandir_s3 scanner module to scan s3 buckets, use with diskover.py --altscanner scandir_s3 s3://bucketname
    - you will need boto3 py module, install with pip3 install boto3
    - you will need to set up aws credentials for boto3
    - https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html
    - https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html
##### changed
- updated diskover-dupes-finder to v2.0-b.6
    - removed -v cli option, just --verbose and --vverbose for verbose output
    - removed usecache from diskover-dupes-finder default/sample config, just uses --usecache cli option now
    - added cacheexpiretime to diskover-dupes-finder default/sample config, copy to your config the new changes
    - changed cli option -e --emptycahe to -f --flushcache
    - cache now uses diskover_cache module for cacheing hashes to db when using --usecache cli option


#### [2.0-b.6] - 2021-02-09
- added -m --maxdepth for limiting maximum depth to descend down directory tree
- added Windows support for crawling UNC paths
- changed Windows drive map crawling to set different top/root path depending on drive being scanned, example /z_drive for Z:\
- updated diskover-dupes-finder to v2.0-b.5
    - added restoretimes (restore atime/mtime afer file checksum) config option, copy from default dupes-finder config
    - Windows support
    - added replacepaths section in config, copy from default dupes-finder config
    - added current directory output during dupes scanning when running in verbose mode -v
    - added --vverbose (more verbose output) cli option
    - set default config minsize (min file size) to 1 (prev was 0)
    - fixed issue with prev mtime not being compared to new mtime when using prev index for hashes with -U


#### [2.0-b.5] - 2021-01-25
- added ability to use plugins (python) to add extra meta data to index and plugins/ directory (location of plugins)
- added plugins section to default diskover config, copy to your config
- added new cli option -l --listplugins to list plugins
- added config path output at start of crawl for diskover, diskover-dupes-finder and diskover-autotag
- added check for config file exists for diskover, diskover-dupes-finder and diskover-autotag
- added new config section "diskover > other" to default config file, copy to your config
- added restoretimes option to default config to restore atime/ctime during crawl (if using nfs, it's ideal to use ro,noatime,nodiratime mount options instead of this), copy to your config
- fixed bug which caused Exception when trying to index a directory with no items (empty dir)
- improved Windows crawling time
- removed dependency of pywin32 for Windows crawling
- changed Windows indices to just set owner and group fields to 0 (trying to get owner/group name doubled crawl time, pywin32 is slow)
- added diskover-tagcopier v2.0-b.1
    - copies tags from one index to another, copy default config file from configs/diskover-tagcopier/
- updated diskover-dupes-finder to v2.0-b.4
- updated diskover-autotag to v2.0-b.3


#### [2.0-b.4] - 2021-01-20
- fixed bugs with crawling in Windows
- fixed bug with enabling skip empty dirs in config
- fixed bug with some directories showing incorrect stat info
- added min ctime/ max ctime and min atime/ max atime to default diskover config (copy to your config)
- set default config to exclude emptry dirs, empty files (0 byte), exclude certain folders and files to reduce index size/ crawl time (copy to your config)
- added keyboard interupt for Windows crawling
- added os warnings/error count to end crawl stats
- added better default index name when not using -i
- improved crawl performance
- diskover-dupes-finder updated to v2.0-b.3
    - many bug fixes and improvements
    - added ability to scan dupes across multiple indices
    - added export dupe results to csv
    - added ability to use existing index to get file hashes
    - improved file caching of file hashes
    - added option to update all file docs file hash instead of just found dupes


#### [2.0-b.3] - 2021-01-03
- added -a option to crawler for adding to an existing index
- fixed issue connecting to AWS ES
- improved crawl performance
- Windows indexing now indexes real file owner names instead of just 0


#### [2.0-b.2] - 2020-12-19
- added support for running crawler in Windows
- added ability to crawl multiple paths into single index


#### [2.0-b.1] - 2020-12-15
- first v2.0 beta release

___
### Diskover-web v2 Changelog

#### [2.0-rc.3] - 2021-12-27
##### fixed
- select indices table, task panel tables not saving sort order or show number of entries setting on page reload
- directory info at top of charts not displaying when hide tree enabled on search results
- extra fields field description not displaying correctly on view file/directory info page
- extra fields not showing true or false for bool values on search results and view info page
- extra fields showing Array when ES doc field is an array of associated arrays (object type) on search results and view info page
- csv export bug with additional fields and data shifting if no field value
- csv export bug when ES doc field is an array of associated arrays (object type)
- issue with view info page file and full path links when file name contains spaces returning no search results
- clicking a tag with a + character in the tag name returned no search results
- issue with manual index selection and if the selected index is deleted while logged out, when trying to log in you are redirected to error page and cannot go to indices page
- nav bar top path drop down menu when many items would be longer than browser window causing some items to be hidden
- heatmap showing "NaN undefined" in Change table column for items that have reduced in size/count
##### added
- link to Task Panel on error page if new install and there are no completed indices in ES
- AD/ldap group permission filtering settings to config file Constants.php.sample, copy to your config file
    - LDAP_FILTERING_ENABLED
    - LDAP_GROUPS_EXCLUDED
    - UNIXPERMS_FILTERING_ENABLED
- rclone file action example
- python script file action example
- Glim file action example
- python file sequence file action example
- percent on mouse over to search results and dashboard charts
- change size/count value column to heatmap table and mouse over
- documentation link to help page
- REST API HTTP Basic Auth settings to config file Constants.php.sample, copy to your config file
    - API_AUTH_ENABLED
    - API_USER
    - API_PASS
##### changed
- improved search results ui
    - file tree is now fixed when scrolling
- updated Docker files to use linuxserver.io diskover docker container as base
- chart colors for items in bar and pie charts now match on dashboard and file search
- updated rest api to v2.0-rc.2
    - added HTTP Basic Auth
- moved File Actions config to Constants.php (config file), see Constants.php.sample (default/sample config file)
    - copy your file actions from Fileactions.php to Constants.php
    - removed src/diskover/Fileactions.php


#### [2.0-rc.2] - 2021-10-19
##### fixed
- issue when clicking on new file action task would cause error
- issue with search filters being applied to analytics pages (filetree, treemap, etc)
- issue when only single item on search results chart not showing bar in chart
- white screen/ error message if bad es query string syntax for smart searches or costs analysis
- issue with copy path button on search results when copying file with single quote in filename
##### added
- redirect to edit page and warning if bad es query string syntax for smart searches or costs analysis
- stop task to task button dropdown menu (task panel)
- load average, worker pools, and versions columns on task workers page worker table (task panel)
- can assign tasks to worker pools (if any worker is assigned to a pool) (task panel)
- Windows command examples to create new task/edit task pages (task panel)
- new api endpoint "toppaths" usage to help page
- disk space bar chart next to drive icons in search results file tree
- better number formatting to smart searches and tags file counts
- find similiar button for each item in search results table
##### changed
- set specific version of elastisearch php client in composer.json
- top paths (volumes) drive icons are now in a scrollable list if there are many 
- search results no items found message now shows file tree
- updated api to v2.0-rc.1
    - added new endpoints for diskoverd task worker
    - added new endpoint "toppaths" to get a list of top paths in an index


#### [2.0-rc.1] - 2021-10-10
##### note
- if upgrading from version older than v2.0-b.11, please see v2.0-b.11 changelog
##### fixed
- clicking select all button on search results page caused all checkboxes to be selected including filters and current dir nav toggle checkbox
- issue with fileactions listdir not displaying all output
- issue with fileactions newsubdirs not displaying any output on Linux
- issue when force deleting index on select indices page
- issue with All extension button on search results page
- issue when enabling Current dir nav toggle, search query directory would not update when clicking file tree directory links
##### added
- ES connection check if status code not 200
##### changed
- all file actions example files renamed to fileactionname.php.sample
- switched google analytics to opt-in with setting on settings page


#### [2.0-b.11] - 2021-09-30
##### fixed
- issues with ES scrolling causing PHP ES client errors
- issue with indices page showing all index sizes as 0
- issue with share button and sharing search query paths are not escaped
- issue with no results showing in search results preview dropdown when current dir is active
- issue with analytics page filters (e.g. min file size) not getting set
- issue with csv exports showing "Array" for fields such as tags
- issue with csv exports and field name line not containing all possible search results field names
- issue with csv exports and empty fields showing as no value instead of null
- issue with aliases on select indices page
- issue with select indices page index table sorting
- issue with default search sort on settings page not setting sort cookies
- issue with exporting and using "current dir" nav toggle setting
- issues with exporting and files in search results don't match export files
##### added
- support for searching across indices in different Elasticsearch clusters, see Constants.php.sample (sample web config file)
    - refer to Elasticsearch cross cluster search guide to set up remote clusters https://www.elastic.co/guide/en/elasticsearch/reference/7.x/remote-clusters.html
- additional config settings LDAP_ALT_BIND and LDAP_ALT_BIND_USERS_DN in Constants.php.sample (sample web config file) for altnerate ldap/ad bind method, copy to your Constants.php
    - needed by some ldap servers like freeipa/red hat idm to auth
- folder file/sub-directory tagging is now executed in the background as a php shell process (tagfiles_process.php)
- added additional date ranges to hot/cold data bar chart on dashboard and file search page
- notice modal popup when copying paths, etc to clipboard
- current top path only toggle button to tags, smartsearches, users, costs analytics pages to only show results for the current top path
- search query stays in search input after user submits search
- better error handling to notify user if index deleted, etc
- additional config setting SIZE_FIELD in Constants.php.sample for changing size field (size, size_du (allocated size)) used in charts and file tree, copy to your Constants.php
- use size_du allocated size option to settings page
- allocated sizes to dashboard for total files and total directories panels
- task panel task list and workers tables are now sortable and searchable
- form validation for tags, smartsearch and costs edit pages
- early support for File Actions (plugins)
- predictive search option to settings page to always use wildcard when searching
- improved tasks workers page
- addtional options to show max items dropdown menu on search results page
- config file sanity check to check no settings are missing from default/sample config
##### changed
- renamed ES_HOST in config to ES_HOSTS and changed settings, see Constants.php.sample and edit your Constants.php config
- removed ES_PORT, AWS, AWS_HTTPS, ES_USER, ES_PASS settings from config, remove from your config and use new setting for ES_HOSTS
- improved settings page
- removed es stats for nerds on settings page
- updated api to v2.0-b.8
    - fixed issues with es scrolling
    - fixed issue with multiple es hosts in config
    - added support for additional config options when using multiple es hosts
    - fixed issues with tagfiles and tagdirs put actions and removing tags
- improved delay to display sub-folders in file tree and treemap analytics
- improved loading times for charts
- changed default use latest index enabled to TRUE in Constants.php.sample
- changed default login start page to filesearch in Constants.php.sample
- changed max dirs from 1000 to 100 for filetree and treemap analytics pages to improve load time
- removed hash from view filed/dir info page
- index mappings in config, see Constants.php.sample and copy to your Constants.php web config file
    - changed index_pattern key to index_patterns (list)
    - added index_patterns_exclude key
- recent searches is now only user input searches, not file tree link clicks
- tags, smartsearch and costs edit pages now open in new window


#### [2.0-b.10] - 2021-08-26
##### fixed
- issue on select indices page and form to select show indices newer than and index name contains not reloading indices and using cached indices
- issue on select indices page and deleting indices and reload indices link not clearing indices cache and reloading indices
- update links on select indices page not reloading indices and using cached indices
- issue with updated indices popup when entering in text in nav search bar
- issue with path bread crumb links on search results page when updated indices popup page reload
- issue with file search folder tree with space in folder names (appearing as + char) causing error folder size showing up on mouse over of folder icon
- issue with current dir only filter
- issue with corrupt index or index deleted (but in cache) causing php fatal http error 500
- issue with setting custom schedule on tasks using wildcard every n hours such as * */2 * * *
- issue with index task custom index name preview text showing non 0 padded date/time stamp numbers
- issue when editing tasks, existing task info for times, worker and status are not preserved
- issue with quick search not using doctype and searching both file and directory docs
- issue with dashboard links not using doctype and searching both file and directory docs
- issue with dashboard file type usage chart legend links not returning any search results
- issue with chart colors on tags page not matching tag color
- issue when file search is set as home page in config, cost data is not displayed and cost analysis does not load
- issue when using path translations on settings page and exporting copy selected paths to clipboard on search results page
- issue when setting file search as home page, costpergb does not get set and no cost data or cost analytics is displayed
- issue with index cache, indexing finishes but index info not updating even with index reload
- issue with searching for !smartsearch or #tag in search query that doesn't have matching smart search name or tag name would cause redirect to white background page
- settings browser cookies expiring after browser restart, set cookies to expire after 1 year
- issue with default hide fields in config file not being set when user logs in for first time
##### added
- last new index check update time next to reload indices button in nav gear dropdown
- index top path indexing start time to search results page
- index name and indexing start time to search results tree green top path drive icons on mouse over tooltip
- mouse over tooltips to search results file tree buttons
- shift-select to search results table item select checkboxes and row highlighting
- copy file name to clipboard to export button on search results page and view file/directory info pages
- improved path translations for copy/paste
- EXTRA_FIELDS to Constants.php.sample, copy to your Constants.php (web config file)
- PATH_TRANSLATIONS to Constants.php.sample, copy to your Constants.php (web config file)
##### changed
- select indices page now shows update time when indices were reloaded and not page refresh time
- task nav Back to Dashboard to Back to Home which takes you back to config login page
- updated api to v2.0-b.5
    - added new get call "latest" to get latest index from top path use with api.php/latest?toppath=/dirpath
    - fixed issues with task json files getting emptied occasionally
- removed popup box when new indices have been added (when always use latest indices set)
- removed popup box when copying paths, etc to clipboard
- set default session timeout to 8 hours before having to login again
- improved login page
- removed reload paths from nav paths dropdown menu
- removed extra fields from settings page and moved to Constants.php web config (see Constants.php.sample)
- path translations for copy/paste are now stored in Constants.php (see Constants.php.sample)
- removed extrafields.txt.sample
- extrafields.txt is no longer used and can be removed (moved to Constants.php, see Constants.php.sample)
- set default show indices newer than age to all on indices page


#### [2.0-b.9] - 2021-07-07
##### fixed
- bug with heatmap page setting index 1's indexname to same as index 2
- current path only search filter not working
- bug with Task Panel and new index task and setting an alternate config file path, needs to be directory containing config.yaml file
- issues with disabling task worker in Task panel
- dashboard's percent removable more info link, largest file/directory show more links and chart search links not using top active path in search
- bug where admin user could delete active in-use indices on select index page when more than one index 1
- remember me login checkbox not keeping user logged in
- issue where folders with more than 1000 subfolders did not show all subfolders in search results file tree (changed max dirs from 1000 to 5000)
- tree/chart data caching issues
- issue where paths were not getting reset when logging out
- elasticsearch host not showing at bottom of settings page
- slow page loading times when many indices
- adding ctime field as extrafield and setting show times in localtime did not show ctime field in local time
##### added
- support for new diskover indices built with beta 9 indexer that have name.text and parent_path.text text type fields for full-text searching including case-insensitive searches using those field names
    - this should help to reduce heavy ES operations using wildcard * at start of queries
- new AD/LDAP settings in Constants.php.sample (default/sample web config file), copy to your web config file Constants.php
- search by file extension buttons to search results page
- running time to Task panel workers page
- reset sort link to no items found message on search results page
    - sorting by addtional field where no docs contain the additional field causes no items to be found when searching
- any extra fields added to hide fields on settings page
- more search examples on help page
- default login page setting LOGINPAGE to Constants.php.sample (default/sample web config file), copy to your web config file Constants.php
- default search results table hidden fields setting HIDE_FIELDS to Constants.php.sample (default/sample web config file), copy to your web config file Constants.php
- default display file/dir times in local timezone default setting LOCAL_TIMES to Constants.php.sample (default/sample web config file), copy to your web config file Constants.php
- new user/group index name/path mappings/filtering settings to Constants.php.sample (default/sample web config file), copy to your web config file Constants.php
    - settings to control what indices/paths each user/group (local or ldap) is allowed to view
- resizable search results table columns
    - reset table column widths button on settings page
- task panel task list show tasks with warning status for indices that complete but have warnings
- run now to task panel task button dropdown
- active top path to search path filters to filter only to the current top path
- exclude folders checkbox to search filters
- copy selected paths to export button menu on search results page
- improved search
    - improved results for wildcard * searching
    - keyword search only uses file name, parent path, and extension for finding items
    - can use lowercase "and", "or" instead of uppercase "AND", "OR" (default is OR when not using any and space between keywords)
    - improved full path searching of folders and files
- folder sizes to search results file tree
- support for up to PHP v7.4.20, recommended to update/upgrade (now default install version)
- nav current directory only toggle to only search within the current directory
- elasticsearch response time to bottom of settings page
- elasticsearch stats for nerds to bottom of settings page (admin users only)
- reload indices menu item to nav gear dropdown menu and button on select indices page to reload index data
- path breadcrumb links to search results page
##### changed
- new indices are refreshed every 10 min, unless reload indices pressed
- select indices page index table files/sec to inodes/sec
- removed LDAP_USERSDN, OWN_FILES_ONLY and GROUP_FILES_ONLY from Constants.php.sample (default/sample web config file), remove from your web config file Constants.php
- removed current path only checkbox from quick search menu, moved to search filters
- task panel's new index task's alternate config from file to directory path
- updated api to v2.0-b.3
    - fixed issue with diskoverd updating task could cause tasks.json to be cleared
    - fixed issue with worker tasks not being updated
    - fixed issue with working time, successful task count and failed task count getting set incorrect
- Extension buttons on search results page now include any current search query
- Clicking tag icons on search results page now include any current search query
- Admin user is now required to change smart searches, editing or adding new custom tags, editing additional fields for search results on settings page
- improved search results page
- quick search uses "current dir only" toggle in nav
- share button to search results page to share current page or search query
- multiple top paths in search results file tree are now sorted by name in asc order, previously was by latest indexed
- search results file tree is now sorted by name in a more "natural ordering"
- updated PHP Client for Elasticsearch from v7.9.1 to v7.13.1 in vendor/ (composer package updates)
- search results page charts are no longer pre-loaded if set to hide
- search results tree directory is changed when path is searched using full path name
- when submitting search or changing folders in search tree, nav search input is unset
- set default show indices newer than to 2 weeks time on select indices page, previously was all


#### [2.0-b.8] - 2021-05-11
##### fixed
- reload button on search results page did not flush cache and reload tree data
- indexing top root path / would not show correctly in path dropdown or on file search tree
- select indices page where multiple top paths and their corresponding crawl times, file counts, etc are not matched correctly
- select indices page where not all start times show for indices with multiple top paths
- cost analysis and tags analytics pages clicking show files only then clicking one of the items for search doesn’t show just files, same for show directories only
- clicking on chart links on dashboard was not path aware when multiple top root paths
- path analytics button on search results and view info pages not loading analytics using all analytics filters
##### added
- indices can now be selected and loaded even if not all paths in index are done indexing (for multi top path indices)
- check if Elasticsearch is running and display error message if not
- remove button on select index page to delete indices (for admin users only)
- filters button to nav bar to filter search results
- top extensions andcharts to search results page when clicking a path in tree
- Type colunm to search results page to allow sorting by file or directory
- different colors (blue/green) for sort and sort2 arrow buttons in search results table header
- default search sort to settings page
- charts for directories on search results page
- default index field names to help page
- support for index aliases and alias creation to select indices page
- alt scanner option to new index task
##### changed
- improved search
- improved search results page
- improved sorting buttons on search results page
- improved select indices page
- improved settings page
- on search results pages the tagging button is disabled by default until a checkbox for a file/dir item is checked
- removed admin page
- removed advanced search page
- renamed simple.php to search.php
- moved notify of newer index to settings page
- when changing indices, you are not automatically redirected to dashboard
- removed recommended cleanup buttons from search drop down
- removed mouse right-click action from treemap and heatmap


#### [2.0-b.7] - 2021-03-08
##### fixed
- issue on select indices page for indexes with multiple top paths the "start time" was not showing the earliest start time of first path that was indexed
- quick search when searching for tags
- issue when going to select index page and then clicking file search button would cause path to not be found
- nginx config issue for api, see updated nginx diskover-web config on github wiki https://github.com/shirosaidev/diskover/wiki/Diskover-v2-Install-Guide and update your nginx diskover-web config
- elasticsearch regular expressions not working in search
- issue with clicking path links on file/dir view info page and path getting set incorrectly
##### added
- Task Panel to schedule tasks for diskover daemon (diskoverd)
- public/tasks/ folder for all task related files
    - four .json.sample files, copy to .json file (remove .sample)
- file type usage chart to dashboard, file types can be changed in diskover-web config
- "Right Click" mouse button functionality to File tree, Tree map, Heat map analytics pages to open new window and search for path of mouse over item
- "current path only" checkbox to quick search menu to only search the active path/directory for quick search menu items
- TASK_PANEL_USERS to src/diskover/Constants.php.sample (diskover-web config) for controlling who has access to Task Panel, add to your Contants.php file
- improved search
##### changed
- updated api to v2.0-b.2
    - added endpoints for scheduling tasks and work with diskover daemon (diskoverd)
    - changed tagfile to tagfiles, can now use multiple tags
    - changed tagdir to tagdirs, can now use multiple dirs and multiple tags
    - "list" endpoint now returns info for multiple paths in index
    - better handling of http and json responses/errors
- available space chart on dashboard, improved design
- select indices page to show more granular details for indexes with multiple top paths
- docker nginx config in nginx/conf.d/diskover-web.conf


#### [2.0-b.6] - 2021-02-09
- changed "Mtime filter" to "Time filter" on analytics pages (time field to use can be set in Constants.php)
- added TIME and TIME_FIELD to Constants.php.sample, copy to your Constants.php
- removed MTIME from Constants.php.sample, remove from your config
- fixed issues with filter path button on search results and file view pages
- added "reset view" link to filetree/ treemap/ heatmap analytics pages "Sorry, no files found..." info box
- improved cost analysis page
- search buttons/ chart click search on filetree/ treemap analytics pages now use set min filesize/ time filters
- added "date changed" (ctime) to quick search and more date/ size options
- added "file type" to quick search (types set in diskover-web config Constants.php)
- added size and time filter buttons to search results page
- added extension search buttons to search results page
- fixed issue with exports when exported from advanced search
- added filetree to search results page
- added links for paths on file view info pages
- fixed issue with exporting large (many search results) csv/json files
- fixed issue with directories containing spaces
- fixed issue with filetree/treemap search buttons for directories in /
- fixed full path link on file view info page


#### [2.0-b.5] - 2021-01-25
- added "Apply tags to" to tag drop down menu to allowing for tagging items recursively and non-recursively in directories
- improved formatting for extra fields (array or string) on view info and search results pages (extra fields added by crawler plugins)
- fixed issue with inode link on view file/directory info page
- improved tags analytics page
- improved smart searches analytics page
- improved top nav bar
- improved Quick search menu on nav bar
- improved select indices page
- fixed advanced search when searching for number of hardlinks (nlink) or 0 byte (empty) files or directories
- added cost to sort options on advanced search page
- fixed issue in file tree and tree map pages when switching between size and count and data not updating without having to click Reload button


#### [2.0-b.4] - 2021-01-17
- fixed issue with dashboard and indexing / (root)
- fixed issue with tags not working on search results page
- fixed issue where not redirected to select index page when index being re-indexed and currently active
- added selected index1/ index2 to nav settings button tooltip on mouseover
- added "Notify when newer index" option to select indices page


#### [2.0-b.3] - 2021-01-03
- fixed minor issues on select index page
- fixed bug where changing filters on filetree/ treemap page could cause page to not load
- fixed issue connecting to AWS ES
- improved ES query performance for time-based quick searches on nav


#### [2.0-b.2] - 2020-12-19
- improved web ui nav bar
- added ability to search by current path only or any path in nav search
- added support to select multiple indices and search across more than one index in web ui
- fixed some minor issues with dashboard charts
- added path translation on settings page for copy path buttons
- added support for indices that have multiple top paths
- changed Last Modified chart on dashboard to Hot/Cold Data
- fixed issues with Heat map page
- improved Heat map page


#### [2.0-b.1] - 2020-12-15
- first v2.0 beta release
