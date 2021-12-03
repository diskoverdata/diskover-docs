___
## Indexing Shell Script Example
___

```
#!/bin/bash
###
### Example diskover shell script to build an index and after completion, 
### run a find dupes on the index using the previous days index name as a 
### file hash lookup index.
###

### Set VARS
 
# DIRS is the directory level ABOVE the top level paths that are set to be indexed. For example:
# If you have a directory structure with /storage/path1 and /storage/path2, set DIRS to /storage/*
# in order to create a single index with both path1 and path2 as separate top level directories 
# inside of it.

DIRS=$(ls -d /storage/*)

# TODAY is today's date.
TODAY=$(date +%d-%m)
 
# YDAY is yesterday's date. Used by find dupes command. On MacOS use date -v-1d +%d-%m.
YDAY=$(date -d 'yesterday' +%d-%m)

# INDEX is the name you want to give your indices. Prefix diskover- is required. TODAY will be added 
# to the end of the index name.
INDEX=diskover-storage

### Indexing

# Build Index
python3 /opt/diskover/diskover.py -i $INDEX-$TODAY $DIRS

### Find Dupes
python3 /opt/diskover/plugins_postindex/diskover_dupesfinder.py $INDEX-$TODAY -U $INDEX-$YDAY -a
```
