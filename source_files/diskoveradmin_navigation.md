___
## DiskoverAdmin Panel Navigation
___

🚧 **WORK IN PROGRESS**

DiskoverAdmin includes help text to guide you with customization. This section alphabetically sorts configurable features and where to find them in the DiskoverAdmin panel. Additionally, you can use the **Search** feature in the user interface itself to locate a subject.

🟨 &nbsp;Can't find what you are looking for? Select **Search** and type a simple word to find where a feature is located in the DiskoverAdmin menu, or refer to the [**DiskoverAdmin Panel Navigation**]() section.

<img src="images/diskoveradmin_search.png" width="250">

| Feature | Menu | Sub-Menu | Additional Information |

| **API** | | | |
| **AutoTag** |  | | |
| **Azure AD** | | | |
| **Cost** at time of index |  | | |
| **Cost** post-index |  | | |
| **Custom Indexer** | | | Diskover, being open-source, allows for customers to [develop their own alternate indexer/scanner](https://docs.diskoverdata.com/diskover_dev_guide/#develop-your-own-alternate-scanner) |
| **DirCache**  | Diskover | Alternate Indexers | The DirCache alternate scanner can be used to speed up subsequent crawls when indexing slower network-mounted storage. DirCache uses an SQLite database to store a local cache of directories' mtimes (modified times), directories' file lists, and file stat attributes. On subsequent crawls, when a directory mtime is the same as in the cache, the directory list and all file stat attributes can be retrieved from the cache rather than over the network mount. |
| **LDAP** | | | |
| **OAuth2** | | | |
| **Okta** | | | |
| **Path Translation** | | | |
| **Manual Tags** customization | | | |
| **Time Zone Settings** | | | |
| **Top Paths** | | | |
