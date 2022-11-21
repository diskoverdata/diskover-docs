<p id="search_syntax"></p>

___
## Syntax Rules for Manual Queries
___

Until you get familiar with Diskover and when trying to achieve complex queries, we strongly recommend using the built-in search tools like the [filters](#filters), [quick searches](#quick_search), or [search within results](#search_within_results) that are available directly in the interface. Those built-in tools can be combined with manual queries for extremly precise results.

The examples used in this chapter are mostly media and entertainment related, but the same logic can be applied to any type of industry.

>🔆 &nbsp;Pay attention to all the messages in the green and blue information bars in the user interface, they are very helpful!

#### Many Ways to Search and Get to the Same Results
There are many ways to search with Diskover and get to the same results; you can use the built-in tools, manual queries, or a combination of both. It all depends on your personal preferences and comfort level.

This chapter covers the rules around manual queries. You can navigate directly to the built-in tools sections via these links:
- [Filters](#filters)
- [Quick searches](#quick_search)
- [Search within results](#search_within_results)

#### Golden Rules of Searching

1. Expand your results.
1. Validate your results as you go and make sure that you are not missing any files.
1. Readjust your querie if needed.

The list of possible search queries and syntax is exhaustive therefore only the basics of manual searches will be explained in this chapter.

___
### Search Syntax Based on Elasticsearch

As Diskover uses Elasticsearch in the backend, all search syntax within Diskover are based on Elasticsearch's rules and algorithms. We will discuss many of these rules in this chapter, but for more details and more examples, please visit: 

[https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)

<p id="limiting_searches"></p>

___
### Limiting Your Searches to a Specific Path

Diskover searches all your [volumes](#storage_volume) at all time, either your data is in the cloud or on-premise. 

If needed, you can limit your searches to a specific path:

1. You can use **[Current Dir]**(#current_dir) toggle button located at the right of the search bar once you've selected the particular path (volumes and/or directory) which you want to use to narrow your searches. Be aware that this selection will remain active until you go back and deactivate that toggle button.
1. You can use the **[filters]**(#filters), top right corner **search path** and select your option from the drop-down list. Remember that filters remain active until you go back and clear them.
1.  You can **select a specific index** following the instructions in the [indices section](#indices) of this guide. Be aware that this selection will remain active until you go back and reselect **Always use latest indices**.

<p id="naming_convention"></p>

___
### Search Problems Resulting from Naming Conventions

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

Ways to either pinpoint or expand your results will be explained in this chapter in order to go around the naming convention issues, and make sure you are not missing files in your results.

<p id="search_single_word"></p>

___
### Understanding the Basics of Manual Queries

#### Case Sensitivity

Search queries are case insensitive, even if upper or lowercases are used in the file name or path. Nonetheless, there are few exceptions where queries are case sensitive:
- When [searching on time](#search_time).
- When searching on [field names](#search_field_names).

#### Isolated Characters

When typing a word, a number, or a combination of both in the search bar, Diskover will look for those **isolated characters**. In order to "split" and find isolated characters, Diskover/Elasticsearch uses **isolators** like **spaces, underscores, hyphens, forward slashes, period, other punctuation, as well as upper cases** (aka CamelCase).

Of course, there are ways to find characters that are not isolated using [wild cards](#wildcards).

##### Isolated Characters | Examples with Letters

For example, if you launch a query with the word **eyes**:

- **for_your_eyes_only.mov** > this file would be found because **eyes** is isolated with underscores.

- **ForYourEyesOnly.mov** > this file would be found because the first letters of each words being capitalized are recognized as separate words (aka CamelCase).

- **foryoureyesonly.mov** > this file would NOT be found because the whole string of characters is read as a single word.

- **4youreyes.mov** > this file would NOT be found because the word **eyes** is only isolated at the end.

##### Isolated Characters | Examples with Numbers

For example, if you launch a query with the number **12**:

- **shot_12_20221110.mov** > this file would be found because **12** is isolated with underscores.

- **Shot 12 20221110.mov** > this file would be found because **12** is isolated with spaces.

- **shot12.mov** > this file would NOT be found because **12** is only isolated at the end.

- **draft_V12.pdf** > this file would NOT be found because **12** is only isolated at the end AND CamelCase doesn't work with numbers.

- **draft_123.pdf** > this file would NOT be found because **12** is not isolated at the end.

<p id="parentheses_brackets"></p>

#### When to Use Parentheses and Brackets

At times you will need to group criteria, so Diskover can make sense of the queries; think of this as grouping criteria when building formulas in Excel.

##### (Parentheses)

When writing complex queries, you will need to group some elements with parentheses **( )** as further described in [The Need of Grouping Criteria for Complex Queries](#complex_queries) section.

##### [Square] or {Curly} Brackets

The square brackets `[ ]` or curly brackets `{ }` need be used to contain ranges for **time**, **dates**, **numeric** or **string fields**. They can even be mixed `[ }`. You can find examples in the [Searching on time](#search_time) section. Below is how/when to apply them:

	- **Inclusive** ranges need to be specified with square brackets, ex: **[min TO max]**, 
	- **Exclusive** ranges need to be specified with curly brackets, ex: **{min TO max}**

<p id="wildcards"></p>

___
### * Wild Card

The **\*** wild card is used to replace zero to many characters. It is the most popular and used wild card.

The * wild card is used to expand search results and is great to go around [naming convention](#naming_convention) issues.

>🔆 &nbsp;A search might be a tad slower when using the * wild card, especially when it is placed in front of your query, because it is searching a much larger amount of data.

>🔆 &nbsp;If you prefer not typing the **\*** and ALWAYS want to use it by default, you can select that preference **> gear icon > Settings > [Use predictive search](#predictive_search)**. Please be aware that using predictive search might expand your results way too much at all time. Throughout this user guide, we assume the predictive search has not been selected.

#### How to Use the * | Examples with Letters

If you would launch a search with **\*eyes***, the following files would be found:
- foryoureyesonly
- theseeyes_song
- eyes18367

#### How to Use the * | Examples with Numbers

If you would launch a search with **\*12***, the following files would be found:
- draft12
- draft_v12
- draft123

#### How to Use the * | Mix of Letters and Numbers

For example, if you want to search for **season 1**, the file name could have different spelling like **S1**, **season 1**, **s01**, **s_1**, etc. 

In order to expand your results to include all possibilities, a logical search syntax could be **s\*1** because the **\*** would catch everything in between the **s** and the **1**. Now, this would also find season 11 for example, but it's better to widen your results at first and then narrow them down once you have an idea of what you are dealing with.

___
### ? Wild Card

The **?** wild card is used to replace a single character. I can be used several times in a row to replace a specific number of variables.

A few examples of names that would be found when launching those queries:

- **scene?** > would find **scenes**, **scene1**...
- **e?2** > would find **ep2**, **e02**, **e12**, **e22**...
- **shot??1** > would find **shot001**, **shot101**, **shot991**...
- **frame???** > would find **frame000** to **frame999**

>🔆 &nbsp;Technically, the * could be used instead of typing several ? but then it would open results outside the specific range of characters you are aiming for, because the * replaces 0 to many characters. Therefore, the ? is sometimes better suited for preciseness.

<p id="fuzziness"></p>

___
### ~ Wild Card

The **~** wild card is also called the **fuzziness** wild card. If is used to find similar words, and is mostly used to catch human misspellings.

>🔆 &nbsp;Be aware that launching a query with the **~** can use an enormous amount of memory and perform badly, ending in a "timed out" situation.

The query uses the  [Damerau-Levenshtein distance](https://en.wikipedia.org/wiki/Damerau-Levenshtein_distance) to find all terms with a maximum of two changes, where a change is the insertion, deletion or substitution of a single character, or transposition of two adjacent characters.

If used alone, by default the **~** will look for the maximum of 2 changes, but it is best practice to use **~1** in order to limit the changes to 1, which should be sufficient to catch 80% of all human misspellings. 

A few examples of words that would be found with and without limiting the changes to 1:

- **jungle~1** > would find: jungle, juggle, jingly, jingle, jingles, etc.
- **jungle~** > would find: jungle, juggle, jingly, jingle, jingles, june, judge, single, bundle, uncle, etc.

___
### Mixing Wild Cards

#### Mixing the ? and the *

Both **?** and **\*** wild cards can be used in the same criteria. 

For example, assuming the naming convention used would be **scene01_frame000023**:

**scene0?\_frame*** > would find **scene** between **0 and 9** with **any frame number**

#### Can't Mix the ~ with Other Wild Cards

Mixing the ~ wild card with the * or the ? wild cards in the same criteria is not supported. 

Example of what NOT to do: **jungle\*~1**

But you can mix the **~** with other criteria and [operators](#operators), ex: **jungle~1 and e\*2**

<p id="operators"></p>

___
### Operators for Multiple Criteria

There are 3 operators: **and**, **not**, **or**, and they are not case sensitive. Operators are needed when using multiple criteria in a single query. 

#### AND Operator

Example:

**jurassic and s\*1** > would find **jurassic** isolated anywhere in the path/file name and **seasons ending with 1**.

>🔆 &nbsp;IMPORTANT TIME SAVER!Note that **and** is assumed if no operators are typed in between criteria, so you would get the same results as described above when searching with **jurassic s\*1**

#### NOT Operator

Example:

**jurassic and s\*1 not e\*5** > would find **jurassic** isolated anywhere in the path/file name and **seasons ending with 1** but would exclude **episodes ending with 5**.

#### OR Operator

When using the **or** operator, you will need to group the criteria around the that operator in order for Diskover to make sense of the query. Think of this as building formulas in Excel, Excel will want you to group criteria in order to understand what you want to accomplish; Diskover works on the same premise.

Example:

**jurassic and (s\*1 or s\*2)** > would find **jurassic** isolated anywhere in the path/file name and **seasons ending with 1 or 2**.

 <p id="complex_queries"></p>
 
___
### Complex Queries | Multiple Criteria and Operators

When using several criteria and more than one [operator](#operators), it is recommended to use parentheses **( )** in order to group some elements and help Diskover make sense of the query. Think of this as building formulas in Excel, Excel will want you to group criteria in order to understand what you want to accomplish; Diskover works on the same premise.

>🔆 &nbsp;You always need to group criteria when using the **or** operator.

A few examples with using the file name structure **thejunglebook_s01_ep05_en.mov**:

#### Examples with Single Grouping

**\*jungle\* AND (s\*1 OR s\*2)** > would find all files related to season 1 and season 2 for The Jungle Book series.

**\*jungle\* AND e\*5 AND (en OR it)** > would find all Italian (assuming **it** was respected in the naming convention) and English translations of episode 5.

**\*jungle\* AND s\*1 (AND extension:(mov OR mp4))** > would find all files of season 1 with .mov and .mp4 extension, a less precise query could be **\*jungle\* AND s\*1 AND (mov OR mp4)**

Another type of example with words only, and let's use **New York City**. If you only want to find files that have all those 3 words in them, you can type **(new york city)** assuming that all the words are isolated of course.

#### Examples with Multiple Groupings

**\*jungle\* AND (s\*1 OR s\*2) (NOT (en OR it))** > still using the same file name example as above, would find all files for season 1 and season 2, but in all other languages than English or Italian.

Let say that you have files with "quick brown fox", "quick fox", "brown fox", "Fox News", etc. this would be the query to use **((quick AND fox) OR (brown AND fox) OR fox) AND NOT news** to respect the following conditions:
	- **fox** must be present
	-  **news** must be excluded
	-  **quick** and **brown** are optional — their presence increases the relevance

<p id="search_field_names"></p>

___
### Queries with Field Names

Searching with field names can be effective if you search on a specific and/or hidden field and are looking for precise results. You can compare searching on field names as searching on a specific column in a massive Excel spreadsheet.

The query needs to be typed in this exact format **fieldname:value**

>🔆 &nbsp;Searching on field names is case sensitive:
>- The **fieldname** needs to be in lower case.
>- The variable after the colon needs to be typed in upper and/or lower case to match exactly what you are searching for. 

#### Default Field Names

- **atime** - access time > refer to [Queries with Time](#search_time) for examples
- **costpergb** - storage space cost > `costpergb:[10 TO 500]`
- **ctime** - changed time  > refer to [Queries with Time](#search_time) for examples
- **extension** - file extension > `extension:mov`
- **group** - can vary depending on how Diskover was configured > `group:colorists` > see [User Analysis Report](#user_analysis) section for more details and/or ask your System Administrator
- **hash** - hash value for duplicate files, feature needs to be enabled and is usually used by System Administrators
- **ino** - file inode number > is usually used by System Administrators
- **mtime** - modified time > refer to [Queries with Time](#search_time) for examples
- **name** - file name > is case sensitive, ex: `name:*Jungle*` if the file name is TheJungleBook.mov
- **name.text** - same as **name** but is not case sensitive, ex: `name.text:*jungle*` if the file name is TheJungleBook.mov
- **nlink** - number of [hardlinks](#hardlinks) > `nlink:3`
- **owner** - can vary depending on how Diskover was configured > `owner:*Joe*` > see [User Analysis Report](#user_analysis) section for more details and/or ask your System Administrator
- **parent_path** - will search that folder and all sub-folders ([recursive](#recursive)) > `parent_path:\/some\/folder*`
- **parent_path.text** - same as **parent_path** but is not case sensitive
- **size** - file size, in bytes > see [Queries with File Size](#search_size) for examples
- **size_du** - disk usage size, aka allocated size, in bytes > see [Queries with File Size](#search_size) for examples
- **tags** - any tag(s) associated with a file or directory > `tags:delete`
- **type** - file or directory > `type:file` or `type:directory`
- **s3_etag** - default field that gets added when performing an S3 scan (AWS cloud storage) > entity tag
- **s3_storageclass** - default field that gets added when performing an S3 scan (AWS cloud storage) > storage class, ex: Standard or Glacier

#### Examples of Searching with Field Names

Searching on field names is very effective for achieving specific results and they are often combined with other criteria. You will find examples throughout this chapter, but here are a few more:

- **name.text:\*jungle\* and (size:>=5242880 AND size:<=10485760)** > would find files with the word **jungle** that are between 5MB and 10MB, would exclude directories.

- **\*jungle*\ and (ctime:[now-1h TO now] OR mtime:[now-1h TO now])** would find files or directories with the word **jungle** and that have been modified or changed in the last hour.

- **\*jungle\* and nlink:2** > would find files with the word **jungle** that have 2 hardlinks.

- **tags:delete** > would find all files and directories with the tag **delete** applied to them, it would not find a tag spelled **Delete** for example because of the capital D.

- **tags:(manual_delete AND approve_delete)** > same logic as above and please refer to the section [grouping for complex queries](#complex_queries) regarding the use of the parentheses.

You can find mome examples with field names in the [Searching on Time](#search_time) and [Searching on Size](#search_size) sections.

 <p id="search_size"></p>

___
### Queries with File Size

Diskover shows file size (size) and allocated size (size_du) in bytes. We recommend using the [filters](#filters), as well as [quick search](#quick_search) when searching on size, but these fields can also be searched manually. Some examples:

- **size:>1048576**  > would find all files and directories larger than 1 MB

- **size:>10485760 AND type:file** > would find all files larger than 10 MB

- **size:>5242880 AND (type:file OR type:directory)**  > would find all files and folders larger than 5 MB

- **size:>=5242880 AND size:<=10485760**  > would find all files equal or larger than 5 MB but equal or smaller than 10 MB

- **extension:mov AND size:>32212254720** > would find all files with .mov extension and larger than 30 GB

>🔆 &nbsp;When unsure how to translate size from MB, GB, etc. to bytes, you can use any free *byte converter* available online.

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

>🔆 &nbsp;Searching on time is case sensitive when it comes to formatting as detailed above, as well as writing the field name in lower case only.

#### Examples to Find Recent Files
A few helpful queries for looking for the **latest indexed files** for example. Variables can easily be adjusted to your needs:

- **ctime:[now-30m TO now] OR mtime:[now-30m TO now]** > files that have been modified or changed within the last 30 minutes.
- **ctime:[now-1h TO now] OR mtime:[now-1h TO now]** > files that have been modified or changed in the last hour.
- **ctime:[now-1d TO now]  OR mtime:[now-1d TO now]** > files that have been modified or changed in the past day.

#### Examples to Find Old Files
Some helpful queries when looking for old files where you can easily change the variables to adjust the queries to your needs:

- **mtime:[now-5y TO now-3M]** > files that haven't been modified in over 3 months but less than 5 years.
- **mtime:[\* TO now-1y] AND atime:[\* TO now-1y]** > files that haven't been modified or accessed in over 1 year (* in this case is used to represent "any time in the past").

___
### Queries with File Extensions

When searching on file extensions, it is recommended to either:
- Use the dedicated fields in the [filters](#filters).
- Use [quick search](#quick_search) which is a best to find all video or audio file types for examples.
- Type in the search bar the pre-determined field name for file extensions, example **extension:mov**

The reason being that the file extension letters might be part of the file name and give you misleading results. For example:
- If only typing **mov** in the search bar, the results would include all files with **.mov** extension, but could also return a file with the name **all_mov_titles_2021.txt**

- If only typing **jpg** in the search bar, the results would include all files with **.jpg** extension, but could also return a file with the name **montage_jpg_png_images.gif**

