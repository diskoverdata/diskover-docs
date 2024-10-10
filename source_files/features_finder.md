___
## Configuration | Where to Find What
___

🚧 **WORK IN PROGRESS**

This section alphabetically sorts configurable features, whether they are in the DiskoverAdmin panel or still manually configurable, and where to find them.

Additionally, if you are using the DiskoverAdmin panel, you can select **Search** in the menu on the left and type a simple word to find where a feature is located in the DiskoverAdmin menu.

<img src="images/diskoveradmin_search.png" width="200">

| FEATURE | LOCATION | DESCRIPTION |
| --- | --- | --- |
| **Alternate Indexers** | DiskoverAdmin<br>Configuration → Diskover → Alternate Indexers | Refer to: xxx <br>Diskover, being open-source, allows for customers to [develop their own alternate indexer/scanner](https://docs.diskoverdata.com/diskover_dev_guide/#develop-your-own-alternate-scanner) |
| **Analytics Filters** | DiskoverAdmin<br>Configuration → Web → Analytics Filters | |
| **API** | | |
| **AutoClean** | DiskoverAdmin<br>Configuration → Plugins → Post Index → AutoClean
| **AutoTag** | DiskoverAdmin<br>Configuration → Plugins → Post Index → AutoTag | |
| **Azure** indexer | DiskoverAdmin<br>Configuration → Diskover → Alternate Indexers → Azure
| **Azure AD** | DiskoverAdmin<br>Configuration → Web → OAUTH | |
| **BAM Plugin** | [chapter]() | The BAM plugin enables additional metadata collection for BAM (Binary Alignment Map) and SAM (Sequence Alignment Map) file formats. These extra fields become searchable, reportable for analysis, and actionable, allowing for potential upstream file management, manually or via automated scheduled tasks. |
| **Breadcrumb** | DiskoverAdmin<br>Configuration → Plugins → Post Index → Breadcrumb | |
| **Checksums** at index time | DiskoverAdmin<br>Configuration → Plugins → Index → Checksums | |
| **Checksums** post index | DiskoverAdmin<br>Configuration → Plugins → Post Index → Checksums | |
| **Chesksums S3** post index | DiskoverAdmin<br>Configuration → Plugins → Post Index → Checksums S3 | |
| **Cost** at time of index |  | |
| **Cost** post-index | DiskoverAdmin<br>Configuration → Plugins → Post Index → Costs | |
| **DirCache** | DiskoverAdmin<br>Configuration → Diskover → Alternate Indexers → DirCache | The DirCache alternate scanner can be used to speed up subsequent crawls when indexing slower network-mounted storage. DirCache uses an SQLite database to store a local cache of directories' mtimes (modified times), directories' file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount. |
| **Diskover** Indexer | DiskoverAdmin<br>Configuration → Diskover → Configurations → Default | AKA Worker, scanner, crawler |
| **DiskoverD** | DiskoverAdmin<br>Configuration → DiskoverD → Default | |
| **Diskover-Web** | DiskoverAdmin<br>Configuration → Web → General | |
| **Dupes Finder** | DiskoverAdmin<br>Configuration → Plugins → Post Index → Dupes Finder | |
| **Elasticsearch for Diskover-Web** | DiskoverAdmin<br>Configuration → Web → Elasticsearch | |
| **Elasticsearch for Indexers** | DiskoverAdmin<br>Configuration → Diskover → Elasticsearch | | 
| **Elasticsearch Field Copier** | DiskoverAdmin<br>Configuration → Plugins → Post Index → ES Field Copier | |
| **Elasticsearch Query Report** | DiskoverAdmin<br>Configuration → Plugins → Post Index → ES Query Report | |
| **File Kind** | DiskoverAdmin<br>Configuration → Plugins → Index → File Kind | |
| **File Types** | DiskoverAdmin<br>Configuration → Web → File Types | |
| **First Index time** | DiskoverAdmin<br>Configuration → Plugins → Index → First Index Time | |
| **Grafana** | DiskoverAdmin<br>Configuration → Plugins → Index → Grafana | |
| **Grafana Cloud** | Configuration → Plugins → Index → Grafana Cloud | |
| **Grant Plugin** | [chapter]() | |
| **Illegal Filename** | DiskoverAdmin<br>Configuration → Plugins → Post Index → Illegal Filename | |
| **IMF Change Report** | DiskoverAdmin<br>Configuration → Plugins → File Actions → IMF Change Report
| **Index Access** | DiskoverAdmin<br>Configuration → Web → Index Access | |
| **Index Differential** | DiskoverAdmin<br>Configuration → Plugins → Post Index → Index Diff | |
| **LDAP** | DiskoverAdmin<br>Configuration → Web → LDAP | |
| **License** | DiskoverAdmin<br>Configuration → License | |
| **Live View** | DiskoverAdmin<br>Configuration → Plugins → File Actions → Live View | |
| **Make Links** | DiskoverAdmin<br>Configuration → Plugins → File Actions → Make Links | |
| **Media Info** | DiskoverAdmin<br>Configuration → Plugins → Index → Media Info | |
| **OAuth2** | DiskoverAdmin<br>Configuration → Web → OAUTH | |
| **Offline Media** Indexer | DiskoverAdmin<br>Configuration → Diskover → Alternate Indexers → Offline Media | |
| **Okta** | DiskoverAdmin<br>Configuration → Web → OAUTH | |
| **Path Tokens** | Configuration → Plugins → Index → Path Tokens | |
| **Path Translation** | DiskoverAdmin<br>Configuration → Web → Path Translations | |
| **PDF** | DiskoverAdmin<br>Configuration → Plugins → File Actions → PDF | |
| **Rclone** | DiskoverAdmin<br>Configuration → Plugins → File Actions → Rclone | |
| **S3** AWS and non-AWS Indexer | DiskoverAdmin<br>Configuration → Diskover → Alternate Indexers → S3 | |
| **Tag Copier** at time of index | DiskoverAdmin<br>Configuration → Plugins → Index → Tag Copier | |
| **Tag Copier** post-index | DiskoverAdmin<br>Configuration → Plugins → Post Index → Tag Copier | |
| **Tags Customization** | DiskoverAdmin<br>Configuration → Web → Custom Tags | Manual tags customization |
| **Time Zone Settings** | | |
| **Top Paths** | DiskoverAdmin<br>Configuration → Web → Top Path Display | |
| **Unix Permissions** | DiskoverAdmin<br>Configuration → Plugins → Index → Unix Perms | |
| **Vantage** | DiskoverAdmin<br>Configuration → Plugins → File Actions → Vantage | |
| **Windows Attributes** | DiskoverAdmin<br>Configuration → Plugins → Post Index → Windows Attributes | |
| **Windows Owner** | DiskoverAdmin<br>Configuration → Plugins → Index → Windows Owner | |




