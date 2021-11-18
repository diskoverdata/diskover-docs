### Tags Migration - Copying from One Index to Another

The Diskover indexing process creates a new index or point in time snapshot of the volume at time of index. Tags that are applied during the indexing process via autotag rules will be automatically reapplied based on the configuration rules in the configuration file.

However, the Diskover indexer has no knowledge of tags applied outside of the indexing process, those tags that have been applied: a) manually, b) via Diskover API, or c) via plugins thru the API. Therefore, these tags must be migrated from one index to the next.

#### Tag Migration / Copy from Previous Index via Shell

The following describes how to initial a tag migration/copy from a shell.

🔴 &nbsp;Confirm existing of **tagcopier** configuration file:
```
cat /root/.config/_diskover_tagcopier/config.yaml_
```

🔴 &nbsp;If the file does not exist:
```
cd /opt/diskover/
python3 diskover_tagcopier.py diskover-<source_indexname> diskover-<dest_indexname>
```

🔴 &nbsp;Configure any tags or tags applied via autotag process to exclude from migration:

![Image: Tags Copier Configuration](images/image_tags_tagcopier_config.png)

🔴 &nbsp;Change directories and execute:
```
mkdir /root/.config/_diskover_tagcopier/_
cp /opt/diskover/_configs/diskover_tagcopier/config.yaml /root/.config/diskover_tagcopier/_
```

🔴 &nbsp;To view usage options:
```
python3 diskover_tagcopier.py -h
```

#### Tag Migration / Copy from Previous Index via Task Panel

Tags can also be migrated from one index to the next index via the Diskover-Web task panel, see [how to Configure Indexing Tasks to Migrate Tags from Previous Index](#migrate_tags_from_previous_index).
