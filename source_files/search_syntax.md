<p id="search_syntax"></p>

___
## Manual Search Syntax
___

Until you get familiar with Diskover, we strongly recommend using the built-in search tools and [filters](#filters) available in the interface when trying to achieve complex queries. Depending on what you are looking for, [quick searches](#quick_search) can also be an easy way to search.

The examples used in this chapter are media and entertainment related, but the same logic can be applied to any type of industry.

The list of possible search queries and syntax is exhaustive therefore only the basics of manual searches will be explained in this chapter.

___
### Search Syntax Based on Elasticsearch

As Diskover uses Elasticsearch in the backend, all search syntax within Diskover are based on Elasticsearch's rules and algorithms. We will discuss many of these rules in this chapter, but for more details and more examples, please visit: 

[https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)

<p id="naming_convention"></p>

___
### Search Problems Resulting from Naming Conventions

A majority of organizations have issues with naming convention. Your search results might be limited if you try to be too restrictive when searching. For example, files associated with the movie **For Your Eyes Only** might be named:

- ForYourEyesOnly
- 4YourEyesOnly
- foryoureyesonly
- for_your_eyes_only
- for your eyes
- Not mentioning all the possible misspellings. 

Other examples of naming convention issues:

- Show season: s01, s1, s_01, season1
- Episodes: ep5, eps5, e5, e05, ep_05, ep_5, 05

Unless you know that a strict naming convention was followed, trying to launch a query with very specific criteria may limit your results and you might think that some files are missing.

Ways to either pinpoint or expand your results will be explained in this chapter in order to go around the naming convention issues, and make sure you are not missing any files in your results.

___
### Basic Search and Query Rules

- When typing a manual query, the criteria need to be typed in the [search bar](#search_bar).
- There are several ways to achieve the same search results and different methods will be explained in this chapter; from built-in tools to manual searches, as well as a combination of both, it all depends on your personal preferences and comfort level.
- We highly recommend using all the built-in tools at first (ex: [filters](#filters), [quick search](#quick_search)), especially when searching on [time](#search_time) or [file size](#search_size), and until you get more comfortable with queries and their structures.

>???? &nbsp;Pay attention to all the messages in the green and blue information bars in the user interface, they are very helpful!


#### Range of Search

- Unless you select a specific [storage volume and/or directory](#limiting_searches), Diskover will search all the storage volumes and their parent paths during a manual search.

#### Case Sensitivity

Search queries are case insensitive, even if upper or lowercases are used in the file name or path. Nonetheless, there are the few exceptions where queries are case sensitive:
- When [searching on time](#search_time).
- When searching on [field names](#search_field_names).

<p id="search_single_word"></p>

#### The Logic Behind Searching on a Single Word

When typing a single word in the search bar, Diskover will look for that **isolated word**. In order to "split" and find isolated words, Diskover/Elasticsearch uses **tokenizers** like **space, underscore, hyphen, forward slash, period, other punctuation, as well as upper cases** (aka CamelCase) to make sense of how a file name is construed. 

For example, if you launch a query with the word **eyes** and the following are your file names:

- **for_your_eyes_only.mov** > Diskover will find that file because that word is isolated between underscores.

- **ForYourEyesOnly.mov** > Diskover will find that file because the first letters of each words being capitalized are recognized as separate words (aka CamelCase).

- **foryoureyesonly.mov** > Diskover would NOT find that file because the whole string of characters looks like a single word.

- **foryoureyes.mov** > Diskover would NOT find that file because the word **eyes** is only isolated at the end.

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
### ? Wild Card

**?** > is used to replace a single character. For example:

- **eye?** > would find **eye** and **eyes**
- **678??4** > would find **678344**

___
### * Wild Card

The * wild card is used to expand search results mostly due to [naming convention](#naming_convention) issues.

>???? &nbsp;A search might be a tad slower when using wild cards, especially when it is placed in front of your query, because it is searching a much larger amount of data.

**\*** > is used to replace zero, one or many characters, is the most popular and used wild card.

#### How to use the * with Long Strings of Characters or Numbers

When searching on a single word for example, the results might be limited if you type the word alone. Let's take the example of trying to find the following file **foryoureyesonly.mov**:

- If you only type **eyes**, that file would not be found as Diskover would search for that [isolated word](#search_single_word) and not being mixed with other characters right before and/or after.

- If you type **\*eyes** or **eyes\***, that file would not be found either as the beginning or the end would still be mixed with other characters.

- You would need to type **\*eyes\*** to find that file as it is preceded and succeeded by other characters, therefore you need the * on each side.

The same rule applies with numbers. For example:

- If the file name would be **SomethingGood_20161031.mp4**, you would need to either:
	- Type the all the numbers **20161031** to find that file with that specific date.
	- Or typing **201610\*** would find that file and all the files that have the year 2016 and the month of October, assuming that all those files were identified the same way with the same date format.

#### How to use the * with Season or Episode Number

Let's do another example with a season's number for a show. For example, if you want to search for **season 1**, the file name could have different spelling like **S1**, **season 1**, **s01**, **s_1**, etc. 

In order to expand your results to include all possibilities, without expending too much either, a logical search syntax would be **s\*1** because the **\*** would catch everything in between the **s** and the **1**. Now, this would also find season 11 for example, but it's better to widen your results at first and then narrow them down once you have an idea of what you are dealing with.

>???? &nbsp;The same logic applies to episode numbers.

#### How to use the * to Find all Files in a Sequence

You can use the **\*** to find all files in a sequence, but depending on which subscription you purchase, you may also have access to an easier way via [File Action](#file_action).

To find all files in a sequence using the **\***, if you type for example **img\*.dpx**, Diskover would find all files with the following similar names: img001.dpx, img002.dpx, etc.

#### Using both * and ? in the Same Query
Both **?** and **\*** wild cards can be used in the same query, for example searching for Johnny Smith: **John\* Sm?th**

>???? &nbsp;If you prefer not typing the **\*** and ALWAYS want to use it by default, you can select that preference **> gear icon > settings > [predictive search](#predictive_search)**. Please be aware that using predictive search might expand your results way too much. Throughout this chapter, we will assume the predictive search has not been selected.

<p id="fuzziness"></p>

___
### ~ Fuzziness Wild Card

**~** > is mostly used to catch human misspellings, and will return vast results if not used with any other restrictions.

The query uses the  [Damerau-Levenshtein distance](https://en.wikipedia.org/wiki/Damerau-Levenshtein_distance)  to find all terms with a maximum of two changes, where a change is the insertion, deletion or substitution of a single character, or transposition of two adjacent characters.

If used alone, by default the **~** will look for the maximum of 2 changes, but it is best practice to use **~1** in order to limit the changes to 1, which should be sufficient to catch 80% of all human misspellings. 

A few examples of words that would be found with and without limiting the changes to 1:

- **jungle~1** would find: jungle, juggle, jingly, jingle, jingles, etc.
- **jungle~** would find: jungle, juggle, jingly, jingle, jingles, june, judge, single, bundle, uncle, etc.

>???? &nbsp;Do NOT mix fuzziness with other wild cards as it is not supported, and only one of the operators would be applied, example of what NOT to do: **jungle\*~1**

Be aware that launching a query with the fuzziness operator can use an enormous amount of memory and perform badly, ending in a "timed out" situation.

>???? &nbsp;Wild cards can only be used in the main search bar at the top of the user interface. They cannot be used in the [Search within results](#search_within_results) field.

<p id="operators"></p>

___
### Operators

You can use operators **and or not** to narrow down a manual search. 

>???? &nbsp;IMPORTANT! When searching with more than one criteria, you don't need to put **and** if that is the operator you would otherwise type, as Diskover uses the **and** operator by default when no others are used. See examples below.

Let's take the series **The Jungle Book** and that a similar naming convention was respected: **thejunglebook_s01_ep05_en.mov** (series The Jungle Book, season 1, episode 5, English sub)

Here are some examples of queries using operators to pinpoint your searches.

- **\*jungle\* and s01** would find all episodes within season 1, in any language or you could just type **\*jungle\* s01** as the **and** is used by default as previously explained.

- **\*jungle\* and s01 not e\*5** would find season 1 in any languages and all episodes except the ones with 5 in them.

When using more than one, but especially a mix of different operators in a query, it is highly recommended to use parentheses, example **(s\*1 or s\*2)**, to group criteria as described in the [next section](#complex_queries), in order to help Diskover make sense of the query.

>???? &nbsp;Operators can only be used in the main search bar at the top of the user interface. They cannot be used in the [Search within results](#search_within_results) field.
 
 <p id="complex_queries"></p>
 
___
### The Need of Grouping Criteria for Complex Queries

When using more than one operator, it is recommended to use parentheses **( )** in order to group some elements and help Diskover make sense of the query. Think of this as the same premise as building formulas in Excel where you need to group criteria in order for Excel to understand what you are trying to accomplish.

>???? &nbsp;You always need to group criteria when using the operator **or**.

A few examples while still using the file name structure **thejunglebook_s01_ep05_en.mov**:

#### Examples with Single Grouping

- **\*jungle\* AND (s\*1 OR s\*2)** > would find all files related to season 1 and season 2 for The Jungle Book series.

- **\*jungle\* AND e\*5 AND (en OR it)** > would find all Italian (assuming **it** was respected in the naming convention) and English translations of episode 5.

- **\*jungle\* AND s\*1 (AND extension:(mov OR mp4))** > would find all files of season 1 with .mov and .mp4 extension, a less precise query could be **\*jungle\* AND s\*1 AND (mov OR mp4)**

Another type of example with words only, and let's use **New York City**. If you only want to find files that have all those 3 words in them, you can type **(new york city)** assuming that all the words are isolated of course.

#### Examples with Multiple Groupings

- **\*jungle\* AND (s\*1 OR s\*2) (NOT (en OR it))** > still using the same file name example as above, would find all files for season 1 and season 2, but in all other languages than English or Italian.

- Let say that you have files with "quick brown fox", "quick fox", "brown fox", "Fox News", etc. this would be the query to use **((quick AND fox) OR (brown AND fox) OR fox) AND NOT news** to respect the following conditions:
	- **fox** must be present
	-  **news** must be excluded
	-  **quick** and **brown** are optional?????????their presence increases the relevance

<p id="search_field_names"></p>

___
### Queries with Field Names

Searching with field names can be effective if you search on a specific and/or hidden field and are looking for precise results. You can compare searching on field names as searching on a specific column in a massive Excel spreadsheet.

The query needs to be typed in this exact format **fieldname:value**

>???? &nbsp;Searching on field names is case sensitive:
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

>???? &nbsp;When unsure how to translate size from MB, GB, etc. to bytes, you can use any free *byte converter* available online.

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

>???? &nbsp;Searching on time is case sensitive when it comes to formatting as detailed above, as well as writing the field name in lower case only.

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

<p id="limiting_searches"></p>

___
### Limiting your Searches to a Specific Path

When wanting to limit your searches to a specific storage volume or directory, there are a many ways to achieve that, here are the easiest ones:
1. You can use **current dir** toggle button at the top of the user interface once you've selected the particular path (volumes and/or directory) which you want to use to narrow your searches. Be aware that this selection will remain active until you go back and move that toggle button.
1. You can use the [filters](#filters), top right corner **search path** and select your option from the drop-down list. Remember that filters remain active until you go back and clear them.
1.  To search on a specific volume, select the desired index following the instructions in the [indices section](#indices) of this guide. Be aware that this selection will remain active until you go back and reselect **Always use latest indices**.
