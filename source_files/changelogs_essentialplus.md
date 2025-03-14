
## Changelogs - Annual Subscription Editions

<img src="images/button_edition_essential.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_eda.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_energy.png" width="105">

### Diskover v2 Annual Subscription Editions Changelog

#### [2.2.3] - 2023-12-26
##### added
- tag copier runtime plugin v0.0.1
- index gets deleted if diskover.py exits with critical error
##### changed
- added mtime and atime to fileages field in diskover.py
- updated diskoverd to v2.1.11
    - reduced tasks get api calls when task queue full
- updated diskoverd to v2.1.14
    - send "last_worker" instead of "worker" to updatetask endpoint for the new api changes
    - send worker and workerpools to tasks endpoint for the new api changes
    - fixed issue with tasks getting queued even if task queue is full
- updated diskover_cache.py module to v0.0.10
    - increased sqlite db timeout to 20 sec
    - fixed issues with database locked python error
- updated offline_media_scanner.py to v0.0.2
    - override diskover_helpers.replace_path so runtime plugins work with offline_media_scanner
##### fixed
- re-arranged CLI options so remove_from_tree can happen when files don't exist
- moved plugin init call below create_index() so we can access the current index


#### [2.2.2] - 2023-11-03
##### added
- file kind crawl plugin v0.0.1
- costs post-index plugin v0.0.1
##### changed
- updated diskoverd to v2.1.10
    - fixes for multiple workers picking up same task
    - run now fixes
- updated s3 alt scanner to v0.0.14
    - fix for bucket does not exist when using s3://bucket/folder for scan path
- update index-diff plugin to v2.0.7
    - can now find differences in the number of hard links of files between indexes


#### [2.2.1] - 2023-10-18
##### changed
- version change only


#### [2.2.0] - 2023-10-07
##### fixed
- ctrl-c interupt handling log error in Windows
- Fix for filesystems that don't show a size
##### added
- first index time crawl plugin v0.0.1
- more detailed logging for directory/file exclusions
- checkfiletimes to default/sample diskover config file excludes section
- added hostname to crawlend indexinfo
- --nofiles cli option to not index file docs
- fileagegroups config setting to diskover default/sample config
    - add file age range groups into directory docs fileages field
- rolluptimes to diskover default/sample config
    - roll up sub-directory times (atime, mtime, ctime) into directory docs timerollup field
##### changed
- updated diskoverd to v2.1.9
    - fixed issue where starting multiple workers at same time could cause same task to be ran by different workers
    - changed task queue size to be same as worker threads (workthreads config setting), previously was infinite queue size. This way tasks will not get queued by the task worker if the task queue is full
	- allows better task sharing/load balancing for multiple workers since an individual worker will not queue up (and run) all tasks scheduled at same time
    - changed frequency to look for new tasks to 10-15 sec
    - fixed issue with tasks retrying when worker shutting down
    - fixed issue where tasks could be missed if scheduled to run every minute
    - fixed issue with not exiting if api returns no tasks data
- updated diskover cache (diskover_cache.py) to v0.0.9
    - fixed issue sqlite3.OperationalError: database is locked sleep error
    - minor improvements
- updated autoclean plugin to v0.0.10
    - fixed issue with files not deleting due to permission error on Windows
    - added ctrl-c handling
    - fixes for custom action commands
- updated mediainfo plugin to v0.0.20
    - fixed issue with directory excludes
- updated checksums plugin to v0.0.3
    - fixed issue with directory excludes
- updated requests version in pip requirements txt files
    - security update
- updated autotag plugin to v2.0.3
    - added ctrl-c handling
- updated autotag checksums to v0.0.4
    - added windows ctrl-c handling
- updated dupesfinder plugin to v2.0.11
    - added windows ctrl-c handling
- updated esfieldcopier plugin to v0.1.4
    - added ctrl-c handling
- updated esqueryreport plugin to v0.1.6
    - added ctrl-c handling
    - added check for es query
- updated illegalfilename plugin to v0.1.6
    - added ctrl-c handling
- updated indexdiff plugin to v2.0.6
    - added ctrl-c handling
- updated tagcopier plugin to v2.0.4
    - added ctrl-c handling
- updated winattrib plugin to v0.0.4
    - added ctrl-c handling
- updated checksums plugin to v0.0.5
    - fixed issue with stats log output ValueError
- updated s3 alt scanner to v0.0.13
    - added check to see if bucket exists


#### [2.1.1] - 2023-04-18
##### fixed
- diskover.py SIGTERM handling
- diskover.py bad file/directory timestamp handling
##### added
- Elasticsearch 8.x support
- checksums crawl plugin v0.0.2
- checksums post index plugin v0.0.3
- checksums s3 post index plugin v0.0.4
- offline media scanner v0.0.1
- Windows attributes post index plugin v0.0.3 (Pro +)
    - gets and indexes Windows owner, group, dacl
##### changed
- updated diskoverd to v2.1.1
    - bug fixes
- updated dupes finder plugin to v2.0.10
    - SIGTERM handling
    - added csvdir config setting to default/sample config
    - added handling of ES BulkIndexError/TransportError Exception to exit
- updated indexdiff plugin to v1.0.5
    - added csvdir config setting to default/sample config
- updated es query report plugin to v0.1.4
    - bug fixes
- updated tag copier to v2.0.3
    - added handling of ES BulkIndexError/TransportError Exception to exit
    - minor improvements
- updated es field copier to v0.1.3
    - added handling of ES BulkIndexError/TransportError Exception to exit
    - minor improvements
- updated illegal file name plugin to v0.1.5
    - minor improvements
- updated autoclean plugin to v0.0.7
    - added Windows long path support


#### [2.1.0] - 2023-02-06
##### fixed
- python error when indexing spaceinfo doc and disk space > max size for ES long field mapping (s3fs mount)
- diskover_cache not getting logged to file
- trailing slashes not geting removed from paths in Windows
- catching AttributeError exceptions in alt scanner log_setup, init, close functions
- python error finding threaddirdepth for directory tree with only 1 subfolder
- python error when scanning s3fs fuse mount and directory modified time (mtime) timestamp invalid
- bugs using alt scanners in Windows
##### added
- free_percent and available_percent to spaceinfo doc and to es index mappings
- Windows path examples for log directory, etc. to all default/sample config files
- Azure Storage Blob alt scanner v0.0.4 (scandir_azure.py) in scanners directory and default/sample config in configs_sample/diskover_scandir_azure/ (Pro +)
- Windows pre and post diskover-web task panel script examples in scripts directory
##### changed
- when not specifiying index name with -i cli option and using alt scanner, index name now contains alt scanner name in the index name, example diskover-s3_bucketname-datetime
- updated es field copier post-index plugin to v0.1.2
    - added copying field mappings from source to dst index if any missing
- updated media info plugin to v0.0.19
    - changed resolution, codec, codeclong, pixfmt, duration, bitrate field mappings to multi-field (keyword and text)
    - added codec_tag_string (FourCC codes) from ffprobe output as new es index field named codectag (keyword/text field)
    - fixed ffprobe errors getting cached in media info sqlite db
    - added "excludedirs" config setting (excluded directories) to default/sample config, copy to your config
    - fixed logs not getting output to file when logging to file enabled in diskover config
- updated illegal file name post-index plugin to v0.1.4
    - added -f --fixnames cli option to fix file names
    - added --fixnamesdryrun cli option to fix file names dry-run
    - added new config settings to default/sample config: normalizeunicode, encodeascii, filenamecharlimit, replacespaces
- updated dupes finder post-index plugin to v2.0.8
    - fixed issue with using -a, --alldocs cli option and not all files hashes getting indexed
    - fixed issue with using -c, --csv cli option and if no dupes found csv file still gets created
    - added -m --hashmode to cli options to set hash mode (overrides mode config setting)
    - changed hash index field from keyword to object and added hash.xxhash, hash.md5, hash.sha1, or hash.sha256, hash gets stored in one of these sub-fields of hash field depending on what mode is used
    - hash cache sqlite db now gets/sets separate hash keys (xxhash, md5, etc) for each hash type when retrieving/storing hashes instead of just single hash key
    - added hash mode to Hash column title and filename when saving csv
    - added datetime to filename when saving csv
    - set encoding to utf-8 when saving csv file
    - added file Size, Mtime columns when saving csv file
    - added usediskmtime to default/sample config file
- updated index diff post-index plugin to v2.0.4
    - added -c --hashdiff to cli options to compare checksum/hash of files when doing diff as well as file names
    - added --addtags to cli options to add diff tags to index for any file diffs
    - added datetime to filename when saving csv using filelistonly cli option
    - added hash column when saving csv using filelistonly cli option
    - fixed issues when using comparecsvs cli option
    - added "hashskipempty" and "hashskipmissing" settings to default/sample config, copy to your config
- updated dircache alt scanner to v0.0.10
    - fixed Windows path issues
- updated diskoverd to v2.1.0
    - added new config setting "sendemaillongruntask" to default/sample config for sending email when task taking more than n minutes to run, copy to your config
    - fixed exception handling issue running subprocess
    - fixed issue with task finishing but not getting removed from current tasks
    - fixed issue with shutting down diskoverd service in Windows did not send shutdown to diskover-web api
    - fixed issue with stopping diskoverd with kill command or ctrl+c and not stopping all running tasks causing diskoverd to not exit until subprocess tasks finish
    - removed support for Task Panel File Action tasks
    - added log warning if email config settings not set and task has email address set, causing python smtp email exception run connect() first and diskoverd not sending worker update to api
- updated s3 alt scanner to v0.0.12
    - added env vars S3_USE_SSL, and S3_VERIFY to set boto3 client use_ssl and verify params
    - fixed botocore not logging to screen when logging to file enabled
- slow directory scan warning time in diskover default/sample config to 10 minutes


#### [2.0.7] - 2022-12-04
##### fixed
- exception handling for Elasticsearch exception TransportError during bulk uploads
- fixed occasional directory scanning hanging at start of scan when searching for subdirs to start threads for calculating thread directory depth
##### added
- es field copier post-index plugin v0.1
- log directry paths at start of scan when searching for subdirs to start threads for calculating thread directory depth when using -V or debug logging
- utf-8 encoding to all logging file handlers for diskover.py, diskoverd, and all post-index plugins
##### changed
- reduced time to search for sub dirs at start of scan when calculating thread directory depth
- updated dircache alt scanner to v0.0.9
    - improved handling of errors for directory stat FileNotFoundError no such file or directory
- updated dupes finder plugin to v2.0.6
    - added index mappings for hash (keyword) and is_dupe (boolean) fields to index, allows for sorting by hash in diskover-web, Kibana, etc.
    - stopped logging stats when hashing complete
- updated diskoverd task worker daemon to v2.0.5
    - added check for additional cli options/tags for index tasks


#### [2.0.6] - 2022-11-06
##### changed
- better handling of errors when importing alternate scanner modules


#### [2.0.5] - 2022-10-21
##### fixed
- log file names using 12H timestamp instead of 24H
##### added
- Elasticsearch SSL verification setting (sslverification) to default/sample diskover config, copy to your config and set for your env
    - ssl and certificate verification when connecting to ES
##### changed
- updates dupes finder post index plugin to v2.0.4
    - log file name now uses 24H timestamp
- updates auto clean post index plugin to v0.0.5
    - log file name now uses 24H timestamp
- updated auto tag post index plugin to v2.0.1
    - log file name now uses 24H timestamp
- updated es query report post index plugin to v0.1.2
    - log file name now uses 24H timestamp
- updated illegal file name post index plugin to v0.1.2
    - log file name now uses 24H timestamp
- updated index diff post index plugin to v2.0.2
    - log file name now uses 24H timestamp
- updated tag copier post index plugin to v2.0.1
    - log file name now uses 24H timestamp


#### [2.0.4-1] - 2022-10-11
##### UPDATE 1
##### changed
- updated media info plugin to v0.0.15
    - fixed UnboundLocalError: local variable 'cachedir' referenced before assignment causing scan to crash
    - log absolute path for cache directory
- updated scandir dircache alt scanner to v0.0.8
    - log absolute path for cache directory


#### [2.0.4] - 2022-10-05
##### fixed
- removed any colon from diskover linux log file names when log to file is enabled in config
##### changed
- updated diskoverd to v2.0.3
    - fixed issue with post task exiting with status exit code > 0 and task not finishing
    - fixed issue with task retries set to 1 and task not retrying
    - fixed issue with sending stop command and command continues to retry if retries set to > 0
    - fixed UnboundLocalError: local variable 'indx' referenced before assignment when running custom task and contains post command args
- updated s3 alt scanner to v0.0.9
    - can now scan all buckets using s3:// as top path arg for diskover.py
    - owner is looked up in s3 instead of only using root (uid 0) and set for file and directory docs
    - added boto s3 client InvalidObjectState error exception handling if an object is on Glacier and only logs if debug logging set
- updated media info plugin to v0.0.14
    - added cachedir and cacheexpiretime to default/sample mediainfo plugin config, copy to your mediainfo plugin config
- updated scandir dircache alt scanner to v0.0.7
    - add cachedir setting to default/sample config file, copy to your config file
- updated illegal file name post index plugin to v0.1.1
    - fixed issue with docs not getting tagged with both illegal and long tags
- updated es query report post index plugin to v0.1.1
    - bug fixes
    - changed any index field that is an array (example tags) each item in array to be separated with semicolon in csv


#### [2.0.3-1] - 2022-09-26
##### UPDATE 1
##### changed
- updated scandir dircache alt scanner to v0.0.6
    - fixed config read error exception when loading default config file


#### [2.0.3] - 2022-09-19
##### BREAKING CHANGES
- licensing changes
    - contact Diskover Data support@diskoverdata.com to get new license key file as existing diskover.lic file will no longer work
    - you will need to generate a new hardware id after updating before requesting new license keys https://docs.diskoverdata.com/diskover_installation_guide/#generating-a-hardware-id
- dir cache alt scanner critical bug fix (see changed below)
##### fixed
- issue with replace paths config setting and using / as from path
- issue with dircache alt scanner scan would crash if sqlite error occured when adding data to db
- issue with dircache alt scanner scan indexing incorrect atime and mtime (see below changed)
- issue with ES bulk indexing and unicode encode error caused scan to crash
##### changed
- changed license hardware id generation
- all log locations in default/sample config files to /var/log/diskover/ directory, this directory must exist first before using and have read/write permissions for the user
- updated autoclean to v0.0.4
    - bug fixes
    - added file size to log output
    - removed extra duration log output lines
    - added separate warnings/errors log file
    - removed extra error log line when warning printed for file not found
- updated media info plugin to v0.0.13
    - changed default framerate decimal points to 2 (rounded float)
    - added framerateDecimals to default/sample mediainfo plugin config, copy to your mediainfo plugin config
- updated diskoverd to v2.0.2
    - fixed issue when running multiple diskoverd on different hosts and task workers starting same task if assigned to any worker and diskoverd started at same time
    - added default config fallback values if any settings from config are missing
    - added support for task timeout
- updated diskover cache module to v0.0.7
    - added sqlite error exception handling to not cause fatal crash when errors occur adding data to db
- updated scandir dircache alt scanner to v0.0.5
    - fixed issue with stat atime (access time) and mtime (modified time) being indexed incorrectly
        - remove existing dir cache alt scanner cache directory /opt/diskover/__dircache__ when no scans running that use it
    - fixed issue with directory containing symlink that wasn't found would cause whole parent path directory to be skipped
    - added default config fallback values if any settings from config are missing
    - added warning if load_db_mem set to True in config
- updates dupes finder post index plugin to v2.0.3
    - improved dupes finding algorithm by skipping any files that have unique size and skipping any files with unique first chunksize bytes before doing full content hash (for single index arg only)
    - added stats and performance log ouput
    - added better stat info at end
    - added -e --excludehashes cli option to exclude searching for any files that already have hash in index doc
    - added excludeextensions, excludefiles, excludedirs to default/sample config file, copy to your config file
    - changed minsize setting in default/sample config to 1024 bytes, previously was 1 bytes


#### [2.0.2] - 2022-07-20
##### fixed
- Windows scanning issue causing directories not to be found (long path fix)
- python zero division error at end of crawl stats if crawl finished in 0 sec or 0 docs indexed
- when scanning multiple top paths, crawl stats for the top path still printing out after crawl finishes
##### added
- Illegal file name post index plugin v0.1 (PRO +)
    - plugins_postindex/diskover-illegalfilename.py
    - configs_sample/diskover_illegalfilename/config.yaml
- ES query csv/email report post index plugin v0.1 (PRO +)
    - plugins_postindex/diskover-esqueryreport.py
    - configs_sample/diskover_esqueryreport/config.yaml
##### changed
- updated dupes finder post index plugin to v2.0.2
    - added -l, --latestindex cli arg
- moved dircache alt scanner default/sample config directory to configs_sample directory and renamed to diskover_scandir_dircache


#### [2.0.1] - 2022-05-31
##### fixed
- generating hardware id with multiple ES nodes in diskover config
- life science edition (LSE) license not working
- logging issues in Windows
- scanning issues in Windows
- issue with restore times
##### added
##### changed
- improved crawl performance
- improved log naming
- updated diskover-dupesfinder to v2.0.1
    - fixed issue with setting restoretimes config setting to True and traceback error if times can not be set
- updated diskover-indexdiff to v2.0.1
    - bug fixes
    - fixed Windows issues
    - added headers to csv
    - added -q, --esquery add ES query string cli option
    - reduced memory usage
- default/sample diskover config autotag set to disabled


#### [2.0] - 2022-04-04
##### fixed
- issue with diskoverd where if task was disabled, task could not be sent stop from task panel
- issue with Windows scanning and long paths or paths with trailing space
- issue with Windows scanning and using unc path as top path with a trailing slash
##### added
- option to set diskoverd worker name with env var DISKOVERD_WORKERNAME
##### changed
- improved index analyzer word filter
- updated diskoverd to v2.0
- updated diskover-autotag to v2.0
- updated diskover-dupesfinder to v2.0
    - added sha1 and sha256 hash modes options in config
    - fixed issue with using replace path
    - fixed issue with restore times
    - fixed Windows bugs
- updated diskover-indexdiff to v2.0
- updated diskover-tagcopier to v2.0
- updated diskover autoclean to v0.0.3
    - fixed Windows bugs
    - other minor bug fixes and improvements
- updated windows-owner plugin to v0.0.5
	- added GET_GROUP, USE_SID settings at top of script
- update dircache alt scanner to v0.0.4
    - fixed os stat blocks error running in Windows


#### [2.0-rc.5-2] - 2022-03-20
##### fixed
- Windows scanning issue
##### changed
- updated windows-owner plugin to v0.0.4
	- set INC_DOMAIN to False as default


#### [2.0-rc.5-1] - 2022-03-18
##### fixed
- license issues causing "this feature is unlicensed" with using valid license key
##### changed
- updated diskoverd to v2.0-rc.5
    - fixed issue with diskoverd import module error


#### [2.0-rc.5] - 2022-03-16
##### BREAKING CHANGES
- new licensing
    - contact Diskover Data support@diskoverdata.com to get new license key file as existing diskover.lic file will no longer work
    - you will need to generate a hardware id before requesting new license keys https://docs.diskoverdata.com/diskover_installation_guide/#generating-a-hardware-id
    - features which were previously unlocked, will now require a valid edition license (Essential, Pro, etc)
- media info plugin now uses and requires config file, see changed
##### fixed
- issue with enabling diskover logging in Windows causes exception
- issue when scanning using just drive letter in Windows (example C:), would scan current directory
- issue with default/sample autoclean config causing ConfigReadError exception
##### added
- new licensing
- diskover_lic.py license helper module, use -h cli option for help
- defaults for configs
##### changed
- if any missing config items are not in config files, a default config value gets set and a warning message gets printed
- updated dupesfinder post index plugin to v2.0-rc.1
- updated tagcopier post index plugin to v2.0-rc.1
- updated autoclean post index plugin to v0.0.2
    - Windows support
- updated autotag post index plugin to v2.0-rc.1
- updated indexdiff post index plugin to v2.0-rc.1
- updated diskoverd to v2.0-rc.4
    - added checks for Python command and diskover directory config settings
    - fixed issue with setting alternate config directory not getting used if use default config is checked in index task
    - fixed issue with task starting when already running and hasn't finished
    - fixed thread lock issues
- updated s3 alt scanner to v0.0.7
- updated media info plugin to v0.0.11
    - added config.yaml file to configs_sample/diskover_mediainfo_plugin/ directory, see top of file where to copy
    - options in config for "human friendly" formating for bitrate and duration
- updated dir cache alt scanner to v0.0.3
- log file names
- updated Windows file owner plugin to v0.0.3
    - added sid cache to improve performance
    - primary group is also now indexed
    - INC_DOMAIN variable at top of script to control if domain name is included in owner/group name


#### [2.0-rc.4-1] - 2022-02-28
##### fixed
- issue with slow indexing from hardlink checking, updated diskover.py to v2.0-rc.4-5
- issue with tag copier post-index plugin, updated diskover_helpers.py
##### added
##### changed


#### [2.0-rc.4] - 2022-02-18
##### BREAKING CHANGES
- autoclean config new settings movePreservePath, copyPreservePath, see default/sample config and copy to your config
- if using diskoverd api auth, auth will fail until api password changed on diskover-web settings page after logging in as admin, password now required to be hashed and stored in sqlite db
##### fixed
- issue with scanning multiple top paths and multiple top directory docs getting indexed for each toppath
- issue with scanning multiple top paths and log output showing incorrect paths still being scanned for each top path
- issue where at the start of scanning, if one of the subdir threads started has permission denied, would cause the scan to fail
- issue with setting domain to True in ownersgroups section in diskover config would case the scan to fail
- UnicodeEncodeError exception when logging Unicode utf-8 file path warnings
- issue when using cache db and diskover crashes from an unhandled Exception causing a corrupt sqlite cache db file
- issue with finding latest index from toppath and indices with multiple top paths
- issue where scanning a toppath with only few files and no subdirs hangs at start of scan when threaddirdepth set to empty/blank
- optimized thread dir depth to not include any empty directories when threaddirdepth set to empty/blank and determining thread depth
##### added
- dir_depth, size_norecurs, size_du_norecurs, file_count_norecurs, dir_count_norecurs to ES index field mappings
    - additional fields added to directory docs
##### changed
- hardlink files size_du (allocated size) set to 0 when same inode already in scan
- indexing unrecognized Unicode utf-8 characters in file name or parent path, the characters are replaced with a ? character and file gets indexed with a warning log message
    - previously the file/directory was not indexed and just skipped with a warning message
- updated diskoverd to v2.0-rc.3-2
    - fixed issue with stop task could cause diskoverd to stop working on new tasks
    - fixed issue if diskoverd crashes, task list doesn't get set to empty list when diskoverd starts up next
    - fixed issue when network connection timeout would cause diskoverd to stop working
- updated diskover_cache to v0.0.6
    - fixed issue causing fatal error when config set to load db cache into memory when running on python 3.6
    - fixed issue with cache hit ratio not always logging
- updated scandir_dircache alt scanner to v0.0.2
    - bug fix causing scan to fail with UnicodeEncodeError
- updated autoclean to v0.0.1-b.14
    - added copy action, see default/sample config
    - added movePreservePath and copyPreservePath settings to default/sample autoclean config - preserve source's full path when moving or copying a directory or file when using move or copy action, copy from sample config to your config file
    - improved custom action to display realtime output of command in log
    - added more logging info including delete/copy/move speed when running in verbose


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





### Diskover-Web v2 Annual Subscription Editions Changelog

#### [2.2.3] - 2023-12-26
##### fixed
- issues with csv/json exports
- issue with search page occasionally not loading results
- group names with spaces not being quoted when using ldap/ad/oauth2 search filtering
- dashboard freezing when large index selected
- changing FILE_TYPES config setting not updating dashboard file type usage chart
- issues with User Analysis page
- issue with Okta and Azure OAUTH2 groups in OAUTH2_TASK_PANEL_GROUPS config setting
- issue with task panel edit task and assigned worker showing as any and not the assigned worker/pool (worker/pool that no longer exists)
##### added
- loading spinner to dashboard
- clickable bars on dashboard File Type Usage chart
- File Age by Size Accessed chart to dashboard
- File Age Accessed chart to search results page chart dropdown menu
- new config settings to default/sample config:
    - GROUPNAME_FILTERING_LOWERCASE
    - UNIXPERMS_FILTERING_STRING
- collapsible file tree on search page
##### changed
- updated api to v2.0.22
    - allow setting "assigned_worker" from updatetask api endpoint
    - updated diskoverd to send "last_worker" in updatetask request so it can distinguish between the two
    - updatetask and updateworker endpoints - made all args passed in optional, so setting an individual one doesn't blow out the others that were not passed
    - tasks endpoint
        - optimized to only send tasks that worker can work on (no disabled, running, starting or assigned to different worker/pools)
        - added "alltasks" param to get a list of all tasks
        - added "id" and "name" params to get specific task by id or name
    - updatetask endpoint - send error if task id not found in tasks.json


#### [2.2.2] - 2023-11-03
##### fixed
- indices page showing some indices as indexing even though they are complete
##### changed
- hide php notices, warnings, deprecated messages from nginx error log


#### [2.2.1] - 2023-10-18
##### fixed
- json file locking issues in task panel
- Windows issues
##### changed
- updated api to v2.0.18
    - fixed json file locking issues


#### [2.2.0] - 2023-10-07
##### BREAKING CHANGES
- removed all OKTA config setting, changed to OAUTH2 config settings, see default/sample config file Constants.php.sample and copy to your config Constants.php
##### fixed
- slow logins when indexing
- select indices page taking long time to load when indexing
- issue with breadcrumbs when top path is / on Windows
- issue with setting LATEST_INDEX_ENABLED = FALSE in config; unable to select an index when set to FALSE, web error message shows "selected indices are no longer available, select a different index"
- duplicate worker pool names in task panel assigned worker dropdown list
- issue with exporting search queries with double quotes
- xss vulnerabilities
- indices with more than 100 top paths caused web ui issues, now up to 500 are supported
- run command/args missing from view task info page
- issue with exporting large number 100k + csv/json would cause other diskover-web browser tabs to freeze until download finished
- issue with trailing slashes being removed from Windows drive letters and s3://, etc in edit index task page when saving task
- issue with force stopping task in task panel and alert that task not running
- file locking issues in task panel
- http 500 error on login page when Elasticsearch host not alive
##### added
- Oauth2 OIDC SSO logins for Okta and Azure AD (Pro +)
    - new OAUTH2 config settings in default/sample config Constants.php.sample, copy to your Constants.php config file
    - SSO signin link to login page
    - Oauth2 SSO groups file/directory permission filtering
    - Oauth2 OIDC groups check for file action auth
- faster log in and initial search page load time
- last worker column to task panel task list table
- crawl host column in indices page
- max export item limit and alert when exporting csv/json file
- MAX_EXPORT to default/sample config Constants.php.sample, copy to your Constants.php config file
    - sets the maximum number of export items when exporting csv/json file
- HIDE_SEARCH_CHARTS_DIRCHANGE to default/sample config Constants.php.sample, copy to your Constants.php config file
    - setting to hide search charts by default when changing directories
- directory size percent and item count percent bar charts to search file tree
- option to sort search file tree by size to settings page
- directory chart select dropdown to search results page
- DIRDOC_CHARTDATA to default/sample config Constants.php.sample, copy to your Constants.php config file
    - setting to try to load chart data from directory docs
##### changed
- removed OKTA config settings from default/sample Constants.php.sample, changed to OAUTH config settings
- when using Oauth2 SSO logins, must click SSO signin link on login page to login with Oauth2 SSO, no longer auto-redirect to SSO login page
- changed allowed_ldap_groups to allowed_groups for FILE_ACTIONS in Constants.php.sample
    - allowed_ldap_groups can still be used for backwards compatiblity
- updated Live View file action to v0.1.9
    - fixed issues with handling special characters including spaces in paths
- updated api to v2.0.17
    - api endpoint updatetask to accept "disabled" attribute to toggle the state
    - api endpoints deletetask, addtask, workers, worker4index
    - fixed issues with multiple json response when index not found
    - fixed file locking issues
- search directory charts are not all displayed at same time, added a select option dropdown to change the chart
- hide Task Panel link in nav gear menu for non-task panel users
- indices that are indexing are hidden from select indices page for non-admin users


#### [2.1.1] - 2023-04-18
##### fixed
- issue with tagging and Elasticsearch 8.x
- export to csv/json not working when large number of search results being exported
- issue with ES_SSLVERIFICATION config setting
- tagging issues in Windows
- issue with always use latest indices (auto select indices) and some indices with similar names not loading
- setting crawl directory to / in task panel not working
##### added
- Elasticsearch 8.x support
- PHP 8.x support
- Okta logins/auth (Pro +)
    - new OKTA config settings in default/sample config Constants.php.sample
- option to use json file for index mappings
    - new INDEX_MAPPINGS_USE_FILE config setting in default/sample config Constants.php.sample
- edit index mappings to settings page (admin)
- Top Paths collapsible tree/menu on search results and nav menu
    - "TOPPATH_TREE" config setting to Constants.php.sample and config defaults, copy to your Constants.php config
- API ldap/ad auth
    - "API_AUTH_LDAP_ENABLED" config setting to Constants.php.sample and config defaults, copy to your Constants.php config 
- index mappings can now use ldap usernames
- index mappings group/user names now support wildcards
##### changed
- updated Hash Diffs file action web plugin to v0.0.2 (in fileaction_samples directory)
    - bug fixes
- updated api to v2.0.8
    - added ldap/ad auth
 

#### [2.1.0] - 2023-02-06
##### fixed
- not staying logged in when checking keep me logged in for 7 days on login page
- Cross-Site Scripting (XSS) vulnerability in nav.php
- license issue
- issue with smartsearches, tags, costs analytics pages and checking show directories only and no results causes page to load with "Sorry, no smart search results found in the index(s)" and unable to set back and see charts
- issue with tags analytics page showing "Sorry, no tags found in the index(s)" and unable to see charts
- issue with showing charts by count
- INDEX_MAPPINGS excluded_dirs config setting not being recursive for the directory path
- Fatal error: Allowed memory size of n bytes exhausted in Diskover.php when searching for /nonexistpath
- es search query error when searching for /nonexistpath
- bug fixes searching full absolute paths
- php timeout when exporting large csv/json files
- double quotes not displaying in task panel form input fields in tasks
- links on dashboard not loading root path in search results
- filters for hardlinks not using nlink field
- searching "NOT parent_path:\/somepath" changing the directory in file tree
##### added
- Reports page (Pro +) - custom reporting analytics page
- more options to quick search nav menu dropdown
- more options to filters modal
- filter charts checkbox to nav filters button modal and settings page to apply filters to search results and dashboard charts
- reports link to nav analytics drop down menu and path drop down menus
- ldap groups/index mapping paths filtering to smart searches, user analysis, and cost analysis
- show error link on edit smart searches, edit cost analysis pages
- show multi-fields on help page fields section and filter fields, e.g. media_info.framerate
- diskspace api example to help page
- additional file action samples: cat.php, md5.php
- path url param check to fileactions.php include file
- reload button to bottom of dashboard page to reload chart data
- Hash Diffs file action to fileaction_samples directory
- New Files file action to fileaction_samples directory
- css to wrap long text for extra fields on search results table
- waiting (run now) and stopping (stop task) last status icons/text to task panel task list page table
- no index selected warning message on indices page
- excluded_query key to INDEX_MAPPINGS config setting
    - added example usage in default/sample config file Constants.php.sample
- edit search query button to search results page
- fileactions_pagetitle var to fileactions_header.php include file to set html page title for file action
- fileactions_header_inc var to fileactions_header.php include file to add addtional header html for file action
- fileactions_footer_inc var to fileactions_footer.php include file to add addtional footer html for file action
- "LDAP_GROUPSDN" config settings to Constants.php.sample and config defaults, copy to your Constants.php config
##### changed
- removed search path from filters
- removed filters always being applied to search results charts
- charts on dashboard and search page
    - now use analytics size and time filters set in Constants.php and analytics pages
    - display size/count on mouse over tips
- top by count charts now display by doc counts rather than counts of top by size chart data
- all links on analytics pages open in new browser tab
- removed need for escaped path separators, spaces, unc paths when creating new task in task panel
- updated api to v2.0.5
    - added diskspace endpoint to get disk space info from spaceinfo docs in index
- updated Live View File Action to v0.1.8 (in fileaction_samples directory)
    - fixed issue with using url for scandir.php
    - added file actions menu example for files (commented out in liveview.js)
    - added liveview.css and text wrapping for long file names/paths
    - added scandirremote.php for web server to web server communication of directory lists
    - improved timeout handling
    - set directory item limit to 10,000 items in scandir.php, items are sorted by newest modified time (mtime)
    - added setting at top of scandir.php for uid/gid name lookups
    - moved php-posix extension check into scandir.php from liveview.php
- removed checkurlparams from fileactions.php include file (no longer used by file actions)
- improved file tree on File Tree and Treemap analytics pages
    - arrow icon next to folder is no longer shown if folder has no sub dirs and show files is disabled
- all chart links on dashboard and search page now open in new window
- find similiar, view file/directory info buttons, and search path menu items on search results page table now open in new window
- links on view file/directory info page now open in new window
- exporting csv/json files now opens new browser window, changed php timeout to 10 min
- removed File Action Task from task panel


#### [2.0.7] - 2022-12-04
##### fixed
- searches using multiple parent_path fields does not return results from multiple indices
- toggling current top path only in tags or cost analysis pages shows no tags/no cost data found in the index and unable to toggle current top path only
- tables not display correctly on user analysis page when no cost data in index
- issue showing no items found in search results when sort order set on a field that not all selected indices have
- exception handling for close function call for plugins and alt scanners
- issue with UNIXPERMS_FILTERING_ENABLED set to TRUE in config
- php warning when reloading indices and there is a corrupt index
- added check in smart searches edit page for exclamation ! at start of smart search name
##### added
- current directory only toggle button to smart searches, user analysis, tags, cost analysis pages
- load path in smart searches, user analysis, tags, cost analysis pages to path dropdown button on search results and view info pages
- user alert when trying to sort on a field not found in index or trying to sort on a text field
- cli options/flags input field to index task form in Task Panel
- date/time to export file name
- indication of how many indices selected on select indices page
- number and name of indices to delete confirmation on select indices page
- example indexing tasks to tasks.json.sample and templates.json.sample
##### changed
- when exporting to csv file, any array fields (e.g. media_info, tags) now have separate columns for each sub-field (e.g. media_info.resolution, tags.0)
- updated api to v2.0.4
    - added totalhits to return json for search and tags endpoints
- made show files only toggle checkbox the default on smart searches, tags, cost analysis pages


#### [2.0.6] - 2022-11-06
##### fixed
- issue searching for full paths to hidden dot files/folders and files with double extensions (e.g. tar.gz)
- issue searching for full file path
- issue with rootpath not updating and directory searches showing no results
- ldap debug output
- es search error [ids] unknown field [type]
- show all not being toggled/checked on by default on tags, smart searches, cost analysis pages
- issue with smart searches, tags, cost analysis pages links not searching across all indices and search results not matching values on analytics pages
- issue with cost analysis and current top path only toggle not being used when clicking links for search query results
- issue with cost analysis and clicking links not url encoding search query
- occasional php fatal error when search contains parent_path field
##### added
- reduced search time when searching for paths
- checkurlparams to fileactions.php include file
    - can be used in file actions to not enforce url params (docid, docindex) check
- diskover.js javascript to file actions include file fileactions_footer.php
- comma separated $ values to cost analysis page
- Live View v0.1.3 file action (enhanced listdir) in fileaction_samples directory
- help text to cost analysis, smart searches, tags edit pages
##### changed
- set LDAP_USERSDN in default/sample config Constants.php.sample to empty string to search across whole domain for user


#### [2.0.5] - 2022-10-21
##### fixed
- rootpath not getting set correct for multi-toppath indices
- changing index in url params doesn't set the index or root path
- other minor bug fixes and improvements
##### added
- ES_SSLVERIFICATION setting to default/sample web config file src/Constants.php.sample, copy to your config and set for your env
    - ssl and certificate verification when connecting to ES
- HIDE_SHAREDATA setting to default/sample web config file src/Constants.php.sample, copy to your config and set for your env 
##### changed
- updated api to v2.0.3
    - set es search scroll context to 30s instead of 1m


#### [2.0.4-1] - 2022-10-11
##### UPDATE 1
##### fixed
- slow logins from searching across all indices and es query type:(file OR directory)
- issue with ldap logins
##### changed
- when logging in only the active top path index is searched rather than across all indices and search query is set to the active top path rather than type:(file OR directory)


#### [2.0.4] - 2022-10-05
##### BREAKING CHANGES
- LDAP_USERSDN config setting is required for ldap logins, see default/sample config file src/diskover/Constants.php.sample, update your config with these changes and set to your ldap users dn
- removed LDAP_ALT_BIND_USERS_DN from config, replaced with new config setting LDAP_USERSDN, see default/sample config file src/diskover/Constants.php.sample, update your config with these changes
##### fixed
- issue when searching for a path using absolute path or parent_path index field, tree and charts not updating on search results page
- issue with using multiple browser tabs and not staying logged in
- having multiple browser tabs open and not being automatically logged out of all tabs when session timeout expires
- php ES error: Trying to create too many scroll contexts. Must be less than or equal to: [500]
- searching smart search containing quotes returning no results from quotes getting removed in query
- share search query containing spaces, etc characters not getting escaped when copying to clipboard
- searching a directory that is different than active top path doesn't switch the top path if the directory is in a different top path
- clicking on a search results page button with a large number would cause PHP to crash
- file charts being displayed on search results page when directory contains no files
##### added
- saved queries menu item to Quick search nav button dropdown
- buttons to add and remove (next to search query) your favorite queries to saved queries menu list
- number of users drop down button to user analysis page to change numbers of users shown
- support for nested ldap groups
    - LDAP_NESTED_GROUPS setting to default/sample config file src/diskover/Constants.php.sample, copy to your config
    - LDAP_USERSDN setting to default/sample config file src/diskover/Constants.php.sample, copy to your config
- new config setting HIDE_SEARCH_CHARTS to hide search page charts by default to default/sample config file src/diskover/Constants.php.sample, copy to your config
- new config setting TOPPATH_LABELS to set a different label name for top path in search page file tree and top nav top path drop down to default/sample config file src/diskover/Constants.php.sample, copy to your config
##### changed
- improved search page load times when searching directories, browsing using search file tree, and when using current directory only toggle
- reduced diskover-web search ES scroll time from 1m to 30s and clear scroll window after done searching
- improved user analysis page
- removed LDAP_ALT_BIND_USERS_DN from config, replaced with new config setting LDAP_USERSDN, see default/sample config file src/diskover/Constants.php.sample, update your config with these changes
- disabled search results page buttons > 1000 to prevent PHP crash


#### [2.0.3] - 2022-09-19
##### BREAKING CHANGES
- licensing changes
    - contact Diskover Data support@diskoverdata.com to get new license key file as existing diskover-web.lic file will no longer work
    - you will need to generate a new hardware id after updating before requesting new license keys https://docs.diskoverdata.com/diskover_installation_guide/#generating-a-hardware-id
##### fixed
- bug with file actions using post form submit and multiple selected files
- select indices page selects multiple indices with similiar names even though not checked
- bug showing uuid change in nginx error log and web ui to not display latest index correctly when using always use latest index (auto-index)
- bug where path breadcrumbs in web ui disappears when index changes when using always use latest index (auto-index)
- bug with selecting different index with manual index selection with different top path doesn't change the top path
- bug with setting day of week in task to Sunday
- issue with customtags.txt file being opened multiple times on search results page
- bug with exports not exporting all search results when using a search query with OR
##### added
- refer url redirection to login.php
- info messages on cost analysis, smart searches, and tags analytics pages when there are no ES search query results or .txt data files are empty
- fix permissions file action (fixperms.php) to fileaction samples directory
- make hardlinks file action (makehardlink.php) to fileaction samples directory
- error output to license check if license verify issue
- timeout setting for tasks
- ldap group info to fileactions debug output when file action not authorized to run by user
- extra Elasticsearch info to settings page
- all charts on search results page and dashboard are now clickable for searching results
##### changed
- improved page load time on search results page when there are many tags
- updated api to v2.0.2
    - fixed get latest index endpoint returning es error if corrupt index
- separated version and license info on settings page
- removed change api password link on settings page for non-admin users
- removed elasticsearch and license info from settings page for non-admin users
- removed setting sort by size when clicking charts on search results and dashboard pages


#### [2.0.2] - 2022-07-20
##### fixed
- view file info page file and full path links not finding any search results when file name has double quote " in name
- api file read/write locking issue causing task json files to become empty
- file read/write locking issue with tasks json files
##### changed
- updated api to v2.0.1
    - fixed file read/write locking issue with task json files
- updated file sequence file action plugin to v0.0.5 in fileaction_samples directory
    - reduced time assembling file sequences


#### [2.0.1] - 2022-05-31
##### fixed
- issue with fileaction containing form POST submit and multiple selected search results
- issue with active index top root path changing to current path directory when indices reload and always use latest indices is enabled
- issue with ldap logins and user being in both admin and regular user group and not being an admin after logging in
##### added
- sqlite db checks
- LDAP_ALT_BIND2 config setting to Constants.php.sample to work with redhat idm/ipa


#### [2.0] - 2022-04-04
##### fixed
- php UTC timezone issue with task worker showing as offline and unknown state when diskoverd task worker first started
- php warning cannot sent header info on some task panel pages 
- not being redirected to login page when session expires and on task panel pages
- bool fields (like is_dupe) not showing as true or false on search results and view info page
- fixed adding new tag on search results page tag dropdown menu caused page to return no search results rather than refreshing page
- no docs showing for s3 indices when ldap/unix perms filtering enabled
- directories with trailing whitespace not returning any search results
- file file read/write locking issue on Windows for task panel/api
- can't find license file message occasionally on fileactions pages
- fileaction containing post form and after submission no selected file or directory message
##### added
- longrunningscript.php to file action samples in public/fileactions/fileaction_samples/
##### changed
- license for api to Essential +
- removed nginx directory


#### [2.0-rc.5-1] - 2022-03-18
##### fixed
- api issue with diskoverd and license bug


#### [2.0-rc.5] - 2022-03-16
##### BREAKING CHANGES
- new licensing
    - contact Diskover Data support@diskoverdata.com to get new license key file as existing diskover-web.lic file will no longer work
    - you will need to generate a hardware id before requesting new license keys https://docs.diskoverdata.com/diskover_installation_guide/#generating-a-hardware-id
    - features which were previously unlocked, will now require a valid edition license (Essential, Pro, etc)
##### fixed
- issues with analytics pages filter settings like size, maxdepth not getting set
- viewing tags page when nothing tagged didn't show info message that nothing was tagged
- multiple ES queries delay when typing text into search bar
- index fields getting added multiple times to filters and help page
- increasing MAX_INDEX setting in config not updating maxindex user browser cookie if set lower
- when setting use alternate config in index task, use default config does not get set to false after saving
- issue with select indices page and php warning message if new index not in cache
- mouse tooltip on nav bar path dropdown not showing top path
- issue with file action button next to file name not always using correct index/path if different search result items were previously selected
- heatmap change size column not sorting correctly
##### added
- new licensing
- additional license info on settings page
- defaults for config
- filetree, treemap, and heatmap analytics pages auto-reload to redraw d3 charts on browser window resize
- DATABASE to default/sample config (Constants.php.sample), can be used to change sqlite database file path
- public/fileactions/fileaction_samples/ directory
##### changed
- improved always use latest indices auto index selection
- improved table text wrapping on search results page
- improved UX and reduced queries to ES for file tree and tree map analytics pages
- removed public/lic.php, this file is no longer used
- if any missing config items are not in Constants.php (web config file), a default config value gets set and a message gets printed in web server error log
- updated api to v2.0-rc.4
- MAX_INDEX setting in default/sample config to 250
- increasing MAX_INDEX in config also increases it for all users who may have it set lower in browser cookie
- all sample file actions are now in public/fileactions/fileaction_samples/ directory


#### [2.0-rc.4] - 2022-02-18
##### BREAKING CHANGES
- added MAX_INDEX, INDEXINFO_CACHETIME, NEWINDEX_CHECKTIME settings to default/sample web config file, copy to your config file
- password for diskover and admin users required to be hashed and stored in separate sqlite db, you will be prompted to change password at next login, config passwords are just used for defaults
- api password now required to be hashed, change api password on settings page after logging in as admin to store in sqlite db, API_PASS in config is used as default password only and has to be changed before using api auth
##### fixed
- reduced login time when many indices
- spinner loading icon not displaying on search results page for directory charts
- file action logs not wring to public/fileactions/ (missing logs directory)
- issue with not staying logged in and getting logged out before login time limit expires
- issue with always use latest indices and indices with multiple same top paths getting selected
- issue with user analysis page and clicking users or groups with domain names does not return search results
- issue with search results exports not using all set filters and sort order
- issue with extra field value text on file view info page not wrapping when text string is very long
- issue with extra field and object type not displaying correctly
- displaying error message when always use latest indices selected and an index gets deleted that is one of the latest indices
- heatmap displaying Nan value for reduced size on mouse tooltip
- issues with index aliases
- tags, smart searches, cost analytics pages not using size_du (allocated size) when set on settings page
##### added
- MAX_INDEX, INDEXINFO_CACHETIME, NEWINDEX_CHECKTIME settings to default/sample web config file, copy to your config file
- password_hash.php - login password hash generator form
- maxindex config setting to default/sample config, copy to your config
- tag all search results on all pages to tag drop down menu
- empty logs directory to public/fileactions/
- after deleting indices on select indices page, index list will reload automatically after 3 seconds
- optimized load time of user analysis page when cost data not stored in index
- Kibana file action sample web plugin
- primary/replica shard table columns to indices page
- Jquery ajax ajax.php.sample helper script for file actions (used by new file sequence file action)
- dir size no recurs toggle to tags, smart searches, cost analytics pages
    - show directory sizes not recursive for new indices that have size_norecurs and size_du_norecurs fields
##### changed
- password for diskover and admin users required to be hashed and stored in separate sqlite db, you will be prompted to change password at next login
- api password setting API_PASS in config file now required to be hashed, create hash with password_hash.php and update your config file
- reduced api calls to ES to check for new index info
- improved file/directory view info page for extra fields
- improved indices page
- updated api to v2.0-rc.3
    - fixed issue with latest endpoint and finding the latest index for indices with multiple top paths
    - api password now required to be hashed, change api password on settings page after logging in as admin to store in sqlite db, API_PASS in config is used as default password only and has to be changed before using api auth
- updated file sequence file action to v0.0.3
    - bug fixes
    - improved performance for large sequences
    - changed to using Jquery ajax ajax.php helper script
    - removed option to scan disk, only scan es index
    - updated default/sample settings file


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
