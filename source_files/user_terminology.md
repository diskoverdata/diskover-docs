<p id="terminology"></p>


## Terminology

While the terms in this section may have different meanings in other contexts, they are defined here specifically for the Diskover end-user environment.

<p id="data_curation"></p>

### Data Curation

Data curation is the practice of managing data collected from various sources as a valuable asset to unlock its potential and organization. Managing data effectively requires having a data strategy and reliable methods to access, integrate, cleanse, govern, store, and prepare data for analytics. The value of the data is maintained over time and remains available for reuse and preservation.


<p id="storage_volume"></p>

### Volume

A storage location that you want to index, for example, Windows Share/drive, Linux mount/NFS Export, cloud storage/S3 bucket, Dell PowerScale.

Examples of other names for volume that might be used in your organization are storage volume, storage mount, mount point, top-level path, and top-level storage directory.

Read more about [how to select a volume](#select_volume).


<p id="index"></p>

### Index/Indexes/Indices

An index is an inventory of all the metadata, aka attributes, about a file on a volume; it allows the metadata to be searched quickly via the index instead of the operating system's "find command". Note tha both **indexes** and **indices** have the same meaning and are the plural of index, although indices are usually preferred in a technical context.

- You can have multiple [inventories/indices](#indices) of a storage volume at different times.
- Indices typically contain directory name, file name, file size, file type, creation date, modify date, owner, etc.
- Diskover can populate the indices with additional metadata adding business context. For example:
	- Storage environment attributes like [Dell PowerScale](https://diskoverdata.com/products/dataiq-migration/).
  	- [Xytech](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-plugins), [ShotGrid](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#shotgrid-production-status-plugin), etc. (job status, client #, project manager, project dates, etc.)
	- Adds [media info](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#media-info-attributes) attributes for media files (resolution, codec, framerate, etc.)
 	- Adds metadata for [life science purposes](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/) (genome sequencing file attributes, research grant project attributes, etc.)

Read more about [how to use indices](#indices).

<p id="directory"></p>

___
### Directory/Folder

There are very subtle differences between a directory and a folder, but in the context of this guide, they are interchangeable and have the same meaning: a container to store/organize other directories/folders and files.

Read more about [how to select a directory](#select_directory).

<p id="path"></p>

___
### Path

The complete location/name where a directory or a file is located, for example:

`/mnt/lucidlink/projects/Pistachio/WonderfulPistachios_GangnamStyle.mov`

<p id="recursive"></p>

___
### Recursive and Non-Recursive

**Non-Recursive**: Will search or apply action exclusively to the path/directory you are pointing to.

**Recursive**: Will search or apply action to the path/directory, as well as all sub-directories and files, inside that path.

<p id="hardlinks"></p>

___
### Hard links

A hard link is a pointer/link that acts like a folder/directory. A hard link is a link that directly associates a name with a given file in an operating system. Unlike a soft link, which changes the pointer when the file is renamed, a hard link still points to the underlying file even if the file name changes.

Think of hard links like copies but they don't use up any more disk space. Hard links are different than symbolic or soft links, those are more just pointers or links to the actual file.

#### Soft links
- Can cross the file system.
- Allows you to link between directories.
- Has different inode number and file permissions than the original file.
- Permissions will not be updated.
- Has only the path of the original file, not the contents.

#### Hard links
- A hard link is a directory that associates a name with a file, thus, each file must have at least one hard link.
- You can only hard link files and not directories.
- Hard links can only refer to files within the same volume/file system, they can't cross the file system boundaries.
- Has the same inode number and permissions of the original file.
- Permissions will be updated if the permissions of the source file is changed.
- It has the actual contents of the original file so that you can still view the contents, even if the original file was moved or removed.
- You can't free up disk space until all the hard links and original files are deleted, as they all reference the same inode.

>🔆 &nbsp;Hard links are used a lot in media and entertainment so that digital assets can be referenced in different shot folders without using additional space.

<p id="elasticsearch_terminology"></p>

___
### Elasticsearch

Diskover uses Elasticsearch in the backend for its speed and reliability. Below is an overview of the Diskover architecture.

> 🔆 &nbsp;You can search across several indices with: &nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

> 🔆 &nbsp;You can search across several clusters with: &nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

![Image: Diskover Architecture Overview](images/diagram_diskover_architecture_overview.png)

_[Click here for a full-screen view of the Diskover Architecture Overview diagram.](images/diagram_diskover_architecture_overview.png)_

In order to better understand the terminology used by Elasticsearch and throughout the Diskover documentation, please refer to this diagram.

![Image: Diskover Architecture Overview](images/diagram_diskover_elasticsearch_architecture.png)

_[Click here for a full-screen view of the Elasticsearch Architecture diagram.](images/diagram_diskover_elasticsearch_architecture.png)_
