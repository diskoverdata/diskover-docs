___
## Terminology
___

Although the terms described in this section may have slightly different interpretations in other contexts, they are defined here within the Diskover end-user environment.

<p id="storage_volume"></p>

___
### Storage Volume

A storage location that you want to index, for example: Windows Share/drive, Linux mount/NFS Export, cloud storage, S3 bucket, etc.

Examples of other names for storage volume that might be used in your organization: storage mount, mount point, top level path, top level storage directory, volume.

Read more about [how to select a volume](#select_volume).

<p id="index"></p>

___
### Index/Indices

An index is an inventory of all the files on a storage volume; it allows the data to be searched quickly via the index instead of the operating system  find commands. Both  **indexes**  and  **indices**  have the same meaning, and are the plural of index, although indices is usually preferred in a technical context.

- You can have multiple inventories/indices of a storage volume at different times.
- Indices typically contain directory name, file name, file size, creation date, modify date, owner, etc.
- Diskover’s software populates the indices with additional metadata  and makes these attributes searchable, pushing the searches and reporting to a higher level of business and schedule awareness:
	- Adds business context.
	- Adds schedule context.
	- Allow searches on image attributes for media files (resolution, frame rate, color bits), etc.

Read more about [how to use indices](#indices).

<p id="directory"></p>

___
### Directory/Folder

There are very subtle differences between a directory and a folder, but in the context of this guide, they are interchangeable and have the same meaning: a container to store/organize other directories/folders and files.

Read more about [how to select a directory](#select_directory).

<p id="recursive"></p>

___
### Recursive and Non-Recursive

**Non-Recursive**: Will search or apply action to only the path/directory/file you are pointing to.

**Recursive**: Will search or apply action to the path/directory, as well as all sub-directories and files, inside that path.

<p id="elasticsearch_terminology"></p>

___
### Elasticsearch

Diskover uses Elasticsearch in the backend for its speed and reliability. Below is an overview of the Diskover architecture.

![Image: Diskover Architecture Overview](images/diagram_diskover_architecture_overview.png)

_[Click here for a full screen view of the Diskover Architecture Overview diagram.](images/diagram_diskover_architecture_overview.png)_

In order to better understand the terminology used by Elasticsearch and throughout the Diskover documentation, please refer to this diagram.

![Image: Diskover Architecture Overview](images/diagram_diskover_elasticsearch_architecture.png)

_[Click here for a full screen view of the Elasticsearch Architecture diagram.](images/diagram_diskover_elasticsearch_architecture.png)_

You can search across several indices with: &nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

You can search across several clusters with: &nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)
