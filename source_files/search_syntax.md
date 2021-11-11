___
<a id="search_syntax"></a>
# Manual Search Syntax

Until you get familiar with Diskover, we strongly recommend using the built-in search tools and [filters](#filters) available in the interface when trying to achieve complex queries. Depending on what you are looking for, [quick searches](#quick_search) can also be an easy way to search.

The examples used in this chapter are media and entertainment related, but the logic can be applied to any type of industry.

The list of possible search queries and syntax is exhaustive therefore only the basics of manual searches will be explained in this chapter. For more search queries information, please visit  **gear icon** > **Help** at the top right corner of the user interface:

![Image: Help with Queries and Syntax](images/image_menu_gear_icon_selection_help.png)

## Syntax Based on Elasticsearch Rules

As Diskover uses Elasticsearch in the backend, all search syntax within Diskover are based on Elasticsearch rules. We will discuss many of these rules in this chapter, but for more details and more examples, please visit: 

<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html" target="_blank">https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html</a>

<h2 id="naming_convention">Search Problems Resulting from Naming Conventions</h2>

All organizations have issues with naming convention. Your search results might be limited if you try to be too restrictive when searching. For example, files associated with the movie **For Your Eyes Only** might be named:
- ForYourEyesOnly
- 4YourEyesOnly
- for_your_eyes_only
- for your eyes
- Not mentioning all the possible misspellings. 

Trying to launch a query with too many words and/or criteria, unless you know that a strict naming convention was followed, will limit your results and you might think that some files are missing.

Ways to either pinpoint or expand your results will be explained in this chapter.

## Basic Search and Query Rules

> 🔆 Pay attention to all the messages in the green and blue information bars, they are very helpful!

### Range of Search

When typing a manual query, the value needs to be typed in the [search bar](#search_bar).

Unless you select a specific [storage volume](#select_volume) or [directory](#select_directory), Diskover will search all the storage volumes and their parent paths during a manual search.

### Queries are Case Insensitive

The search queries are case insensitive, even if upper or lowercases are used in the file name or path.

The only exception is for searching on time as we will cover later in this chapter.

### Search with a Single Word

When typing a single word in the search bar, Diskover will look for that **isolated word**. For example:

- If your file name is **for_your_eyes_only.mov** and you launch a search with the word **eyes**, Diskover will find that file because that word is isolated.

- If your file name is **ForYourEyesOnly.mov** and you launch a search with the word **eyes**, Diskover will not find that file because the word **eyes** is not isolated and is in between other characters. In order to find that file with the word **eyes** alone you will need to use a wild card as described below.

>🔆 Underscores **_** and hyphens **-** are considered the same as spaces.

<h2 id="wildcards">Wild Cards</h2>

**? *is used to replace a single character*** 

**\* *is used to replace zero, one or many characters*** (the most used wild card)

Wild cards are used to expand search results mostly due to naming convention, but also to go around possible misspellings, although the [fuzziness](#fuzziness) operator, covered later in this chapter, is a much better choice for misspellings.

### Example with grouped words
When searching on a single word for example, the results might be limited if you type the word alone. Let's take the example of trying to find the following file **ForYourEyesOnly.mov** with only using the word **eyes**:

- If you only type **eyes**, that file would not be found as the system would search for that word isolated, either by spaces, underscores or phypens, and not being mixed with other characters right before and/or after.

- If you type **\*eyes** or **eyes\***, that file would not be found either.

- You would need to type **\*eyes\*** to find this file following this example as it is preceded and succeeded by other characters.

### Example with isolated words
Now, if the file name would be **for_your_eyes_only.mov**:

- Launching a search with only **eyes** would find that file, but again, naming conventions being what they are, it is recommended to use an **\*** to expand your results at first to make sure you are not missing any files named differently.

- Also, if you are not sure if **eyes** is plural or singular in the file name, you could use **eye?** to replace a single character.

### Example with sequence number
Let's do another example with a season's number for a show. For example, if you want to search for **season 1**, the file name could have different spelling like **S1**, **season 1**, **s01**, **s_1**, etc. 

In order to expand your results to include all possibilities, without at the same time expending too much, the best search syntax would be **s*1** because the **\*** would catch everything in between the **s** and the **1**. Now, this would also find season 11 for example, but it's better to widen your results at first and then narrow them down once you have an idea of the possible results.

### Example using both * and ?
Both **?** and **\*** wild cards can be used in the same query, for example searching for Johnny Smith: **John\* Sm?th**

>🔆 If you prefer not typing the **\*** and ALWAYS want to use it by default, you can select that preference **> gear icon > settings > [predictive search](#predictive_search)**. Please be aware that using predictive search might expand your results way too much. Throughout this chapter, we will assume the predictive search has not been selected.

## Search Using Field Names

You can search on specific fields by using pre-defined field names. For the list of available field names, go to **gear icon** > **Help** at the top right corner of the user interface.

The query needs to be typed in this exact format **fieldname:value**

Searching with field names can be effective if you search on a specific and/or hidden field. For example, if you type the following in the search bar:

**owner:\*joe\***

The search results will show all the files with **Joe** somewhere in that field and as the owner/creator of the file. Of course, this implies that the file at the source, before being indexed by Diskover, was properly identified as such.


## Queries with File Extensions

When searching on file extensions, it is recommended to either:
- Use the dedicated fields in the [pre-built filters](#filters). 
- Type in the search bar the pre-determine field name for file extensions, example **extension:mov**

The reason being that the file extension letters might be part of the file name and give you misleading results. For example:
- If only typing **mov** in the search bar, the results would include all files with **.mov** extension, but could also return a file with the name **all_mov_titles_2021.txt**

- If only typing **jpg** in the search bar, the results would include all files with **.jpg** extension, but could also return a file with the name **montage_jpg_png_images.gif**

<h2 id="operators">Operators</h2>

You can use operators **AND OR NOT**  to narrow down a manual search. Although the operators in this section are capitalized for ease of understanding, the operators can be typed in lower case in the search bar.

>🔆 Operators can only be used in the main search bar  at the top of the user interface. They cannot be used in the **search within results** field.

Let's say you have thousands of results for the series **The Jungle Book** and that a similar naming convention was respected: **thejunglebook_s01_ep05_en.mov** (series The Jungle Book, season 1, episode 5, English sub)

Here are some examples of queries using operators to narrow your searches. If you want to find:
- All episodes within season 1, in any language: **\*jungle\* AND s01**
- Episode 5, season 1 in any languages: **\*jungle\* AND s01 AND e*5**
- All episodes in English: **\*jungle\* AND en**

>🔆 When using more than one, but especially a mix of different operators in a query, it is highly recommended to use parentheses **( )** to group some elements as described in the next section, in order to help Diskover make sense of the query and return the desired results.
 
## The Need of Grouping with for Complex Queries

When using more than one operator, it is recommended to use parentheses **( )** in order to group some elements and help Diskover make sense of the query. A few examples while still using the file name structure **thejunglebook_s01_ep05_en.mov**:

### Examples with single grouping

- If you are looking for all files related to season 1 and season 2 for The Jungle Book series:  **\*jungle\* AND (s\*1 OR s\*2)**

- All Italian (assuming **it** was respected in the naming convention) and English translations of episode 5:  **\*jungle\* AND e*5 AND (en OR it)**

- If you are looking for all files of season 1 with .mov and .mp4 extension, there are a few ways to achieve that: **\*jungle\* AND s*1 AND extension:(mov OR mp4)** a less precise query could be **\*jungle\* AND s*1 AND (mov OR mp4)**

### Examples with multiple groupings

- If you are looking for files which could have the name "New York City" or "Big Apple", it is recommended to use the following query **(new york city) OR (big apple)** so that Diskover will not try to find all those isolated words, but instead grouped together in the same file name.

- Let say that you have files with "quick brown fox", "quick fox", "brown fox", "Fox News", etc. this would be the query to use **((quick AND fox) OR (brown AND fox) OR fox) AND NOT news** to respect the following conditions:
	- **fox** must be present
	-  **news** must be excluded
	-  **quick** and **brown** are optional — their presence increases the relevance

<h2 id="fuzziness">Fuzziness</h2>

You can run fuzzy queries with the **tilde ~** operator. 

Fuzziness is mostly used to catch human misspellings, and will return vast results if not used with any other restrictions.

The query uses the  [Damerau-Levenshtein distance](https://en.wikipedia.org/wiki/Damerau-Levenshtein_distance)  to find all terms with a maximum of two changes, where a change is the insertion, deletion or substitution of a single character, or transposition of two adjacent characters.

If used alone, by default the **~** will look for the maximum of 2 changes, but it is best practice to use **~1** in order to limit the changes to 1, which should be sufficient to catch 80% of all human misspellings. 

A few examples of words that would be found with and without limiting the changes to 1:

- **jungle~1** would find: jungle, jingly, jingle, jingles.
- **jungle~** would find: jungle, jingly, jingle, jingles, june, judge, single, bundle, uncle.

>🔆 Do NOT mix fuzziness and wild cards as it is not supported, and only one of the operators would be applied, example of what NOT to do: **jungle\*~1**

Be aware that launching a query with the fuzziness operator can use an enormous amount of memory and perform badly, ending in a "timed out" situation.

## Searching on Time

Although it is strongly advised to use [filters](#filters) or [quick search](#quick_search) to query time, below are a few examples on how to do so with a manual query.

### Definitions
- **atime**: last accessed
	- The file may have been opened by you, or may have been accessed by some other program or a remote machine. Anytime a file has been accessed, its access time changes.
- **ctime**: last changed 
	- The modification can be in terms of its content or in terms of its attributes. Whenever anything about a file changes (except its access time), its ctime changes.
- **mtime**: last modified 
	- Indicates the time the contents of the file has been changed. Mind you, only the contents, not the attributes. For instance, if you open a file and change some (or all) of its content, its mtime gets updated. If you change a file's attribute (like read-write permissions, metadata), its mtime doesn't change, but ctime will.

### Formating
Format to use when searching for date and time. Some characters are case sensitive:

- Date: **d** = day, **M** = month, **Y** = year
- Time: **h** = hour, **m** = minute, **s** = second
- Brackets **[ ]** are used to contain a range of time.

### Examples to find recent files
A few helpful queries for looking for the **latest indexed files** for example. Variables can easily be adjusted to your needs:

- Files that have been modified or changed within the last 30 minutes:
	-  **ctime:[now-30m TO now]  OR mtime:[now-30m TO now]**
- Files that have been modified or changed in the last hour:
	- **ctime:[now-1h TO now]  OR mtime:[now-1h TO now]**
- Files that have been modified or changed in the past day: 
	- **ctime:[now-1d TO now]  OR mtime:[now-1d TO now]**

### Examples to find old files
Some helpful queries when looking for old files where you can easily change the variables to adjust the queries to your needs:

- Files that haven't been modified in over 3 months but less than 5 years:
	- **mtime:[now-5Y TO now-3M]**
- Files that haven't been modified or accessed in over 1 year (* in this case is used to represent "any time in the past"):  
	- **mtime:[\* TO now-1Y] AND atime:[\* TO now-1Y]**

## Limiting your Searches to a Specific Volume and/or Directory

When wanting to limit your searches to a specific storage volume or directory, there are a many ways to achieve that, here are the easiest ones:
1. You can use **current dir** toggle button at the top of the user interface once you've selected the particular path (volumes and/or directory) which you want to use to narrow your searches. Be aware that this selection will remain active until you go back and move that toggle button.
1. You can use the [filters](#filters), top right corner **search path** and select your option from the drop-down list. Remember that filters remain active until you go back and clear them.
1.  To search on a specific volume, select the desired index following the instructions in the [indices section](#indices) of this guide. Be aware that this selection will remain active until you go back and reselect **Always use latest indices**.
