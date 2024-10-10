___
## Where to Find What
___

🚧 **WORK IN PROGRESS**

This section alphabetically sorts configurable features, whether they are in the DiskoverAdmin panel or manual config files, and where to find them.

If you are using the DiskoverAdmin panel, you can select **Search** and type a simple word to find where a feature is located in the DiskoverAdmin menu, or refer to the [**DiskoverAdmin Panel Navigation**]() section.

<img src="images/diskoveradmin_search.png" width="200">

| FEATURE | LOCATION | DESCRIPTION |
| --- | --- | --- |
| **Alternate Indexers** | | |
| **API** | | |
| **AutoTag** |  | |
| **Azure AD** | | |
| **Cost** at time of index |  | |
| **Cost** post-index |  | |
| **Indexers** | | Diskover, being open-source, allows for customers to [develop their own alternate indexer/scanner](https://docs.diskoverdata.com/diskover_dev_guide/#develop-your-own-alternate-scanner) |
| **DirCache**  | Diskover | Alternate Indexers | The DirCache alternate scanner can be used to speed up subsequent crawls when indexing slower network-mounted storage. DirCache uses an SQLite database to store a local cache of directories' mtimes (modified times), directories' file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount. |
| **LDAP** | | |
| **OAuth2** | | |
| **Okta** | | |
| **Path Translation** | | |
| **Manual Tags** customization | | |
| **Time Zone Settings** | | |
| **Top Paths** | | |
