<p id="search_syntax"></p>

___
## Manual Queries | Syntax and Rules
___

Until you get familiar with Diskover and when trying to achieve complex queries, we strongly recommend using the built-in search tools like the [filters](#filters), [quick searches](#quick_search), or [search within results](#search_within_results) that are available directly in the interface. Those built-in tools can be combined with manual queries for extremely precise results.

The examples used in this chapter are mostly media and entertainment related, but the same logic can be applied to any type of industry.

>🔆 &nbsp;Pay attention to all the messages in the green and blue information bars in the user interface, they are very helpful!

#### Many Ways to Search and Get the Same Results
There are many ways to search with Diskover and get to the same results; you can use the built-in tools, manual queries, or a combination of both. It all depends on your personal preferences and comfort level.

This chapter covers the rules around manual queries. You can navigate directly to the built-in tools sections via these links:
- [Filters](#filters)
- [Quick searches](#quick_search)
- [Search within results](#search_within_results)

#### Golden Rules of Searching

1. Expand your results using, by using [wildcards](#wildcards) for example.
1. Only add a criterion or a few criteria at a time and continuously validate your results.
1. Readjust your query as needed.

The list of possible search queries and syntax is exhaustive, therefore only the basics of manual searches will be explained in this chapter.

<p id="es_rules"></p>

___
### Search Rules Based on Elasticsearch

As Diskover uses Elasticsearch in the backend, all search syntax within Diskover are based on Elasticsearch's rules and algorithms. We will discuss many of these rules in this chapter, but for more details and more examples, please visit: 

[https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)

<p id="naming_convention"></p>

___
### Search Issues Resulting from Naming Conventions

Many organizations have issues with naming conventions. Your search results might be limited if you try to be too restrictive when searching. For example, files associated with the movie **For Your Eyes Only** might be named:

- ForYourEyesOnly
- 4YourEyesOnly
- foryoureyesonly
- for_your_eyes_only
- for your eyes only
- Not mentioning all the possible misspellings. 

Other examples of naming convention issues:

- Show season: s01, s1, s01, s_01, season1
- Episodes: ep5, eps5, e5, e05, ep_05, ep_5, 05

Unless you know that a strict naming convention was followed, trying to launch a query with very specific criteria may limit your results and you might think that some files are missing.

Ways to either pinpoint or expand your results will be explained in this chapter in order to go around the naming convention issues and make sure you are not missing files in your results.

<p id="search_basics"></p>

___
### Understanding the Basics of Manual Queries

<p id="case_sensitivity"></p>

#### Case Sensitivity

Search queries are case insensitive in general, so you can type upper or lower cases in the search bar when launching a query. There are very few exceptions where queries are case-sensitive:
- When [searching on time](#search_time).
- When searching on [field names](#search_field_names).

<p id="isolated_characters"></p>

#### Isolated Characters

#### [🍿 Watch Quick Tips | Understanding the Basics of Manual Queries](https://vimeo.com/770024733)

When typing a word, a number, or a combination of both in the search bar, Diskover will look for those **isolated characters**. In order to find isolated characters, Diskover uses **isolators** like **spaces, underscores, hyphens, forward slashes, periods, other punctuation, as well as upper cases** (aka CamelCase).

Of course, there are ways to find characters that are not isolated by using [wild cards](#wildcards), which is explained in the next section.

##### Isolated Characters | Examples with Letters

🔎 For example, if you launch a query with the word **eyes**:

| File name | File would be found | File would not be found |
| --- | --- | --- |
| for_your_eyes_only.mov | **eyes** is isolated with underscores |  |
| ForYourEyesOnly.mov | the first letters of each words is capitalized, aka CamelCase |  |
| foryoureyesonly.mov |  | the whole string of characters is read as a single word |
| 4youreyes.mov |  | the word **eyes** is only isolated at the end |

##### Isolated Characters | Examples with Numbers

🔎 For example, if you launch a query with the number **12**:

| File name | File would be found | File would not be found |
| --- | --- | --- |
| shot_12_20221110.mov | **12** is isolated with underscores |  |
| Shot 12 20221110.mov | **12** is isolated with spaces |  |
| shot12.mov |  | **12** is only isolated at the end |
| draft_V12.pdf |  | **12** is only isolated at the end AND CamelCase doesn't work with numbers |
| draft_123.pdf |  | **12** is not isolated at the end |

<p id="math_symbols"></p>

#### Syntax for Mathematical Symbols in Queries

You can only use **:** with letters, but you can use any of the following with numbers.

| Syntax | Equation |
| --- | --- |
| **:** | equal to |
| **:>** | greater than |
| **:>=** | equal to or greater than |
| **:<** | lesser than |
| **:<=** | equal to or lesser than |
| **:<>** | is not equal to |

<p id="parentheses_brackets"></p>

#### Parentheses and Brackets

At times you will need to group criteria, so Diskover can make sense of the queries; think of this as grouping criteria when building formulas in Excel.

##### (Parentheses)

When writing complex queries, you will need to group some elements with parentheses **( )** as further described in [The Need of Grouping Criteria for Complex Queries](#complex_queries) section.

##### [Square] or {Curly} Brackets

The square brackets `[ ]` or curly brackets `{ }` need to be used to contain ranges for **time**, **dates**, **numeric** or **string fields**. They can even be mixed `[ }`. You can find examples in the [Searching on time](#search_time) section. Below is how/when to apply them:

	- **Inclusive** ranges need to be specified with square brackets, ex: **[min TO max]**, 
	- **Exclusive** ranges need to be specified with curly brackets, ex: **{min TO max}**

<p id="wildcards"></p>

<p id="asterisk_wildcard"></p>

___
### * Wild Card

#### [🍿 Watch Quick Tips | Manual Search Tool: Wild Cards](https://vimeo.com/772196768)

The **\*** wild card is used to replace zero to many characters. It is the most popular and used wild card.

The * wild card is used to expand search results and is great to go around [naming convention](#naming_convention) issues.

> 🔆 &nbsp;A search might be slower when using the * wild card, especially when it is placed in front of your query because it is searching a much larger amount of data.

>🔆 &nbsp;If you prefer not typing the **\*** and ALWAYS want to use it by default, you can select that preference **> gear icon > Settings > [Use predictive search](#predictive_search)**. Please be aware that using predictive search might expand your results way too much at all times. Throughout this user guide, we assume the predictive search has not been selected.

#### How to Use the * | Examples with Letters

🔎 If you would launch a search with **\*eyes***, the following files would be found:
- foryoureyesonly
- theseeyes_song
- eyes18367

#### How to Use the * | Examples with Numbers

🔎 If you would launch a search with **\*12***, the following files would be found:
- draft12
- draft_v12
- draft123

#### How to Use the * | Mix of Letters and Numbers

For example, if you want to search for **season 1**, the file name could have different spellings like **S1**, **season 1**, **s01**, **s_1**, etc. 

In order to expand your results to include all possibilities, a logical search syntax could be **s\*1** because the **\*** would catch everything in between the **s** and the **1**. Now, this would also find season 11 for example, but it's better to widen your results at first and then narrow them down once you have an idea of what you are dealing with.

<p id="question_mark_wildcard"></p>

___
### ? Wild Card

#### [🍿 Watch Quick Tips | Manual Search Tool: Wild Cards](https://vimeo.com/772196768)

The **?** wild card is used to replace a single character. I can be used several times in a row to replace a specific number of variables.

🔎 A few examples of what would be found when launching the following queries:

- **scene?** > would find **scenes**, **scene1**...
- **e?2** > would find **ep2**, **e02**, **e12**, **e22**...
- **shot??1** > would find **shot001**, **shot101**, **shot991**...
- **frame???** > would find **frame000** to **frame999**

>🔆 &nbsp;Technically, the **\*** could be used instead of typing several **?** but then it would open results outside the specific range of characters you are aiming for because the * replaces 0 to many characters. Therefore, the ? is sometimes better suited for preciseness.

<p id="tilda_wildcard"></p>

___
### ~ Wild Card

#### [🍿 Watch Quick Tips | Manual Search Tool: Wild Cards](https://vimeo.com/772196768)

The **~** wild card is also called the **fuzziness** wild card. It is used to find similar words, and is mostly used to catch human misspellings.

>🔆 &nbsp;Be aware that launching a query with the **~** can use an enormous amount of memory and perform badly, ending in a "timed out" situation.

The query uses the [Damerau-Levenshtein distance](https://en.wikipedia.org/wiki/Damerau-Levenshtein_distance) to find all terms with a maximum of two changes, where a change is the insertion, deletion or substitution of a single character, or transposition of two adjacent characters.

If used alone, by default the **~** will look for the maximum of 2 changes, but it is best practice to use **~1** in order to limit the changes to 1, which should be sufficient to catch 80% of all human misspellings. 

🔎 A few examples of words that would be found with and without limiting the changes to 1:

- **jungle~1** > would find: jungle, juggle, jingly, jingle, jingles, etc.
- **jungle~** > would find: jungle, juggle, jingly, jingle, jingles, june, judge, single, bundle, uncle, etc.

___
### Mixing Wild Cards

#### [🍿 Watch Quick Tips | Manual Search Tool: Wild Cards](https://vimeo.com/772196768)

#### Mixing Wild Cards in the same QUERY

>🔆 &nbsp;Mixing wild cards can be tricky, but below are the basic rules.

🔎 You can mix any wild cards in the same query. For example:

- **jungle~1 and e*2**
- **project? not 2022\***

#### Mixing wild cards in the same CRITERIA

You can mix the * and ? but not the ~

🔎 What you can do: **scene0?\_frame\*** > would find scene01_frame0023

🔎 What you CAN’T do: **\*jungle~1**

<p id="operators"></p>

___
### Operators When Using Multiple Criteria

There are 3 operators: **and**, **not**, **or**, and they are not case sensitive. Operators are needed when using multiple criteria in a single query. 

#### AND Operator

🔎 Example:

**jurassic and s\*1** > would find **jurassic** isolated anywhere in the path/file name and **seasons ending with 1**.

>🔆 &nbsp;IMPORTANT TIME SAVER! Note that **and** is assumed if no operators are typed in between criteria, so you would get the same results as described above when searching with **jurassic s\*1**

#### NOT Operator

🔎 Example:

**jurassic and s\*1 not e\*5** > would find **jurassic** isolated anywhere in the path/file name and **seasons ending with 1** but would exclude **episodes ending with 5**.

#### OR Operator

When using the **or** operator, you will need to group the criteria around that operator in order for Diskover to make sense of the query. Think of this as building formulas in Excel, Excel will want you to group criteria in order to understand what you want to accomplish; Diskover works on the same premise.

🔎 Example:

**jurassic (s\*1 or s\*2)** > would find **jurassic** isolated anywhere in the path/file name and **seasons ending with 1 or 2**.

 <p id="complex_queries"></p>
 
___
### Complex Queries and Grouping Criteria

When using several criteria and more than one [operator](#operators), it is recommended to use parentheses **( )** in order to group some elements and help Diskover make sense of the query. Think of this as building formulas in Excel, Excel will want you to group criteria in order to understand what you want to accomplish; Diskover works on the same premise.

>🔆 &nbsp;You always need to group criteria when using the **or** operator.

#### Examples with Single Grouping

🔎 A few examples using the file name structure **thejunglebook_s01_ep05_en.mov**:

**\*jungle\* AND (s\*1 OR s\*2)** > would find all files/paths related to season 1 and season 2 for The Jungle Book series.

**\*jungle\* AND e\*5 AND (en OR it)** > would find all Italian (assuming **it** was respected in the naming convention) and English (**en**) translations of episode 5 for The Jungle Book series.

**\*jungle\* AND s\*1 (AND extension:(mov OR mp4))** > would find all files of season 1 with .mov and .mp4 extension, a less precise query could be **\*jungle\* AND s\*1 AND (mov OR mp4)**

Another type of example with words only, and let's use **New York City**. If you only want to find files/paths that have all those 3 words in them, you can type **(new york city)** assuming that all the words are isolated of course.

#### Examples with Multiple Groupings

🔎 A few examples using the file name structure **thejunglebook_s01_ep05_en.mov**:

**\*jungle\* AND (s\*1 OR s\*2) (NOT (en OR it))** > still using the same file name example as above, would find all files for season 1 and season 2, but in all other languages than English or Italian.

Let's say that you have files with "quick brown fox", "quick fox", "brown fox", "Fox News", etc. This would be the query to use **((quick AND fox) OR (brown AND fox) OR fox) AND NOT news** to respect the following conditions:
- **fox** must be present.
- **news** must be excluded.
- **quick** and **brown** are optional — their presence increases the relevance.

<p id="search_field_names"></p>

___
### Queries with Field Names

Searching with field names can be effective if you search on a specific and/or hidden field and are looking for precise results. You can compare searching on field names as searching on a specific column in a massive Excel spreadsheet.

🔎 The query needs to be typed in this exact format **fieldname:value**

🔎 Make sure you are using the proper [syntax for mathematical symbols](#math_symbols) when searching with numbers.

>🔆 &nbsp;Searching on field names is case sensitive:
>- The **fieldname** needs to be lowercase.
>- The variable after the colon needs to be typed in upper and/or lower case to match exactly what you are searching for. 

### Field Names | Basic Metadata

These fields are harvested during indexing, without any plugins needed.

| Field name | What it means | How to search |
| --- | --- | --- |
| **atime** | last accessed | refer to [Queries with Time](#search_time) for syntax examples |
| **ctime** | last changed  | refer to [Queries with Time](#search_time) for syntax examples |
| **dir_count** | number of sub-directories in a directory [recursive](#recursive) | `dir_count:2` > would list directories with exactly 2 sub-directories _or_ 1 file and 1 directory _or_ 2 files |
| **dir_count_norecurs** | number of items (files and folders) in a directory [non-recursive](#recursive) | `dir_count_norecurs:1` > would list directories with at least 1 sub-directory in them |
| **dir_depth** | directory depth in a path | `dir_depth:2` > would search directories at level 2 in the file tree | 
| **extension** | file extension | `extension:mov` |
| **file_count** | number of files inside a directory | `file_count:85` `file_count:500*` `file_count:10?` > to find directories with a specific or approximate number of files |
| **file_count_norecurs** | number of files inside a directory [non-recursive](#recursive) | `file_count_norecurs:*` > to find directories with a specific or approximate number of files |
| **file_size** | file size | in bytes > see [Queries with File Size](#search_size) for examples |
| **file_size_du** | disk usage size aka allocated size for files only | in bytes > see [Queries with File Size](#search_size) for examples |
| **group** | user group name | `group:colorists` > can vary depending on how Diskover was configured, see [User Analysis Report](#user_analysis) section for more details and/or ask your System Administrator |
| **ino** | file inode number | `ino:8838389885` or `ino:8838*` > is usually used by System Administrators |
| **mtime** | last modified | refer to [Queries with Time](#search_time) for syntax examples |
| **name** | file name | is case sensitive, ex: `name:*Jungle*` if the file name is TheJungleBook.mov |
| **name.text** | same as **name** but is not case sensitive | `name.text:*jungle*` even if the file name is TheJungleBook.mov |
| **nlink** | number of [hard links](#hardlinks) | `nlink:3` |
| **owner** | owner name | `owner:*Joe*` > can vary depending on how Diskover was configured, see [User Analysis Report](#user_analysis) section for more details and/or ask your System Administrator |
| **parent_path** | path name | `parent_path:\/Some\/Folder*` > is case sensitive, will search the specified folder and all its sub-folders ([recursive](#recursive)) |
| **parent_path.text** | same as **parent_path** but is not case sensitive | `parent_path:\/some\/folder*` |
| **size** | file and/or directory size | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on size |
| **size_norecurs** | file and/or directory size [non-recursive](#recursive) | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on size |
| **size_du** | disk usage size aka allocated size for files and/or directories | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on sizes |
| **size_du_norecurs** | disk usage size [non-recursive](#recursive) | in bytes > see [Queries with Data Size](#search_size) for syntax examples on how to search on size |
| **type** | file or directory | `type:file` or `type:directory` > is case sensitive, all lowercase needed |

<p id="extra_metadata"></p>

### Field Names | Extra Metadata

These extra metadata fields are harvested using index and post-index plugins.

| Tool | What it means | Field names |
| --- | --- | --- |
| **BAM** | extra metadata for [sam and bam files when using the BAM plugin](https://diskoverdata.com/products/life-science-edition/#bam-plugin) | refer to the [Diskover Life Science User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_life_science_edition/#bam-harvest-plugin) for the list of fields |
| **Cost** | storage space cost when [Cost Analysis feature is configured in Diskover](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#storage-cost-reporting) | `costpergb` > search example `costpergb:[10 TO 500]` |
| **Dupes Finder** | field populated when using the [Dupes Finder plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#duplicates-finder-plugin) | `is_dupe`
| **Dell PowerScale** | multiple [Dell PowerScale attributes](https://diskoverdata.com/products/dataiq-migration/#platform-overview) can be harvested when using the alternate indexer | please refer to the [indexer diagram for all fields harvested](https://diskoverdata.com/products/dataiq-migration/#platform-overview) |
| **Grant** | extra metadata for [research grant info when using the Grant plugin](https://diskoverdata.com/products/life-science-edition/#grant-plugin) | `assigned_grant`, `SG-group`, `ProjectId` |
| **Hash Values** | harvested when using the [hash value plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#duplicates-plugin) for checksums | `hash.xxhash`, `hash.md5`, `hash.sha256`, `hash.sha1` |
| **Media Info** | attributes harvested using the [Media Info plugin](https://diskoverdata.com/products/products-aja-media-edition/#mediainfo) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#media-info-attributes) for the list of fields and how to use them |
| **Microsoft Azure Blob** | fields collected when using the Microsoft Azure Blob indexer | `azure_etag`, `azure_tier` |
| **S3** | attributes collected when using the [S3 alternate indexer](https://docs.diskoverdata.com/diskover_installation_guide/#create-an-index-of-an-s3-bucket) | `s3_etag`, `s3_storageclass` |
| **ShotGrid** | fields harvested when using the [Autodesk Flow Production Tracking (formerly ShotGrid) plugin](https://diskoverdata.com/products/products-aja-media-edition/#flowprodtracking) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#flow-production-tracking-plugin) for the list of fields |
| **Tags** | manual or auto tags attributed for [items tagged within Diskover](https://docs.diskoverdata.com/diskover_user_guide/#tags) | `tags`, search example `tags:delete` > any tag name associated with a file or directory, tag name is case sensitive |
| **Unix Permissions** | field harvested when using the [Unix Permission plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#unix-permissions-plugin) | `unix_perms` > search example `unix_perms:777` |
| **Windows Owner** | fields harvested when using the [Windows Owner plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#windows-owner-plugin) | `windows_owner`, `windows_group` |
| **Xytech Asset Creation** | fields harvested when using the [Xytech Asset Creation plugin](https://diskoverdata.com/products/products-aja-media-edition/#xytech-asset-creation) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-asset-creation-plugin-overview) for the list of fields and how to use them |
| **Xytech Order Status** | fields harvested when using the [Xytech Order Status plugin](https://diskoverdata.com/products/products-aja-media-edition/#xytech-order-status) | refer to the [AJA Diskover Media Edition User Guide](https://docs.diskoverdata.com/diskover_user_guide_companion_aja_media_edition/#xytech-order-status-plugin-overview) for the list of fields and how to use them |


#### Examples of Searching with Field Names

Searching on field names is very effective for achieving specific results and they are often combined with other criteria. 

🔎  You will find examples throughout this chapter, but here are a few more:

- **name.text:\*jungle\* and (size:>=5242880 AND size:<=10485760)** > would find files with the word **jungle** that are between 5MB and 10MB, would exclude directories.

- **\*jungle*\ and (ctime:[now-1h TO now] OR mtime:[now-1h TO now])** would find files or directories with the word **jungle** and that have been modified or changed in the last hour.

- **\*jungle\* and nlink:2** > would find files with the word **jungle** that have 2 hard links.

- **tags:delete** > would find all files and directories with the tag **delete** applied to them, it would not find a tag spelled **Delete** for example because of the capital D.

- **tags:(manual_delete AND approve_delete)** > same logic as above and please refer to the section [grouping for complex queries](#complex_queries) regarding the use of the parentheses.

You can find more examples with field names in the [Searching on Time](#search_time) and [Searching on Size](#search_size) sections.

 <p id="search_size"></p>

___
### Queries with Data Size

Diskover shows file size (size) and allocated size (size_du) in bytes. We recommend using the [filters](#filters), as well as [quick search](#quick_search) when searching on size, but these fields can also be searched manually. Make sure you are using the proper [syntax for mathematical symbols](#math_symbols) when searching with numbers.

>🔆 &nbsp;When unsure how to translate size from MB, GB, etc. to bytes, you can use any free *byte converter* available online.

🔎 Some examples when searching on data size:

- **size:>1048576**  > would find all files and directories larger than 1 MB

- **size:>10485760 AND type:file** > would find all files larger than 10 MB

- **size:>5242880 AND (type:file OR type:directory)**  > would find all files and folders larger than 5 MB

- **size:>=5242880 AND size:<=10485760**  > would find all files equal or larger than 5 MB but equal or smaller than 10 MB

- **extension:mov AND size:>32212254720** > would find all files with .mov extension and larger than 30 GB


<p id="search_time"></p>

___
### Queries with Time

Although it is strongly advised to use [filters](#filters) or [quick search](#quick_search) to query time, below are a few examples on how to do so with a manual query.

#### Definitions
- **atime**: last accessed > The file may have been opened by you, or may have been accessed by some other program or a remote machine. Anytime a file has been accessed, its access time changes.
- **ctime**: last changed > The modification can be in terms of its content or in terms of its attributes. Whenever anything about a file changes (except its access time), its ctime changes.
- **mtime**: last modified > Indicates the time the contents of the file has been changed. Mind you, only the contents, not the attributes. For instance, if you open a file and change some (or all) of its content, its mtime gets updated. If you change a file's attribute (like read-write permissions, metadata), its mtime doesn't change, but ctime will.

#### Formatting
Format to use when searching for date and time.

- Date: **d** = day, **M** = month, **y** = year
- Time: **h** = hour, **m** = minute, **s** = second
- These [two types of brackets `[ ]` or `{ }`](#parentheses_brackets) can be used to contain a range of time, they can even be mixed `[ }`

>🔆 &nbsp;Searching on time is case-sensitive when it comes to formatting as detailed above, as well as writing the field name in lowercase only.

#### Examples to Find Recent Files
🔎 A few helpful queries for looking for the **latest indexed files** for example. Variables can easily be adjusted to your needs:

- **ctime:[now-30m TO now] OR mtime:[now-30m TO now]** > files that have been modified or changed within the last 30 minutes.
- **ctime:[now-1h TO now] OR mtime:[now-1h TO now]** > files that have been modified or changed in the last hour.
- **ctime:[now-1d TO now]  OR mtime:[now-1d TO now]** > files that have been modified or changed in the past day.

#### Examples to Find Old Files
🔎 Some helpful queries when looking for old files where you can easily change the variables to adjust the queries to your needs:

- **mtime:[now-5y TO now-3M]** > files that haven't been modified in over 3 months but less than 5 years.
- **mtime:[\* TO now-1y] AND atime:[\* TO now-1y]** > files that haven't been modified or accessed in over 1 year (**\*** in this case is used to represent "any time in the past").

___
### Queries with File Extensions

When searching on file extensions, it is recommended to either:
- Use the dedicated fields in the [filters](#filters).
- Use [quick search](#quick_search) which you can combine with a manual query for max efficiency.
- Type in the search bar the pre-determined field name for file extensions, for example **extension:mov**

>🔆 &nbsp;Note that the file extension letters might be part of the file name and give you misleading results. By searching using the field name **extension** you focus your searches on that field exclusively.

🔎  A few example:

- If only typing **mov** in the search bar, the results would include all files with **.mov** extension, but could also return a file with the name **all_mov_titles_2021.txt**

- If only typing **jpg** in the search bar, the results would include all files with **.jpg** extension, but could also return a file with the name **montage_jpg_png_images.gif**

