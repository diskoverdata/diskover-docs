<p id="manual_queries"></p>

## Manual Queries | Rules and Syntax

### Overview

The examples in this chapter may not be specific to your industry, but the logic of searching is universal. Understanding these concepts will help you apply them effectively in any context. The list of possible search queries and syntax is extensive; therefore, this chapter will cover only the basics of manual searches.  

✏️ Be sure to read the messages in the green and blue information bars in the user interface—they provide helpful guidance! 


#### Many Ways to Search

There are multiple ways to search with Diskover and achieve the same results. You can use the [built-in tools](#builtin_search_tools), manual queries, or a combination of both, depending on your personal preferences and comfort level. 


#### Golden Rules of Searching

Whether you're building simple or complex queries:  

1. **Expand your results**, using [wildcards](#wildcards) for example, and make sure you are not missing any files or directories in your results—[naming convention](#naming_convention) being one of the biggest problems when it comes to searching.
1. **Only add one criterion at a time** and validate your results between each addition. 
1. **Readjust your query** as needed.


<p id="es_rules"></p>

#### Search Rules Based on Elasticsearch

Since Diskover uses Elasticsearch to store the harvested metadata and as its search engine, all search syntax in Diskover follows Elasticsearch's rules and algorithms. This chapter will cover many of these rules, but for more details and examples, please [visit the Elasticsearch website](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html).


<p id="naming_convention"></p>

#### Naming Conventions

Many organizations struggle with inconsistent naming conventions, including misspellings. Here are a few examples:

| PROJECT NAME | PROJECT NAME | VERSION | EPISODE |
| --- | --- | --- | --- |
| **North Sea Simulation**<ul><li>northseasimulation</li><li>north_sea_simulation</li><li>NorthSeaSimulation</li><li>NORTH sea sim</li><li>NSea-simulation</li></ul> | **Four Your Eyes Only**<ul><li>ForYourEyesOnly</li><li>foryoureyesonly</li><li>4YourEyesOnly</li><li>for_your_eyes_only</li><li>for your eyes only</li></ul> | **Version 8** <ul><li>v08</li><li>v8</li><li>v_08</li><li>ver8</li><li>ver_008</li></ul> | **Episode 5** <ul><li>ep5</li><li>eps5</li><li>e05</li><li>ep_05</li><li>ep-005</li></ul> | 

To ensure comprehensive results, consider using broader or more flexible search terms. Diskover provides tools to refine or expand your search, allowing you to pinpoint the exact data you need or cast a wider net when necessary.  



<p id="search_basics"></p>

### Understanding the Basics of Manual Queries

#### [🍿 Watch Quick Tips | Understanding the Basics of Manual Queries](https://vimeo.com/770024733)

<p id="case_sensitivity"></p>

#### Case Sensitivity

Search queries are generally case-insensitive, meaning you can use uppercase or lowercase letters in the search bar without affecting the results. However, there are a few exceptions where queries are case-sensitive:  

- When [searching on time](#search_time).
- When searching on [field names](#search_field_names).


<p id="isolated_characters"></p>

#### Isolated Characters

When you enter a word, number, or a combination of both in the search bar, Diskover searches for those **isolated characters**. To identify isolated characters, Diskover uses **isolators** such as spaces, underscores, hyphens, periods, other punctuation marks, and uppercase letters (also known as 🐫 CamelCase).  

Of course, there are ways to find characters that are not isolated by using [wildcards](#wildcards), which is explained in the next section.

##### Isolated Characters | Examples with Letters

🔎 If you launch a query with the word **albert**:

| FILE NAME | FILE WOULD BE FOUND | FILE WOULD _NOT_ BE FOUND |
| --- | --- | --- |
| project_albert_overview.pdf | **albert** is isolated by underscores |  |
| AlbertSimulationTest_log_v001.txt | **albert** is isolated by CamelCase |  |
| albertSIMULATION_test_log_v003.log | **albert** is isolated by CamelCase | |
| projectalbert.pdf |  | **albert** is only isolated on one side with the . |
| projectalbertoverview.pptx | | project**albert**overview is read as one word |
| ProjectALBERTOverview.pptx | | reads **ALBERTO** |

##### Isolated Characters | Examples with Numbers

🔎 If you launch a query with the number **2025**:

| FILE NAME | FILE WOULD BE FOUND | FILE WOULD _NOT_ BE FOUND |
| --- | --- | --- |
| project-albert-2025-draft.pdf | **2025** is isolated by hyphens |  |
| mapping log 2025 final.log | **2025** is isolated by spaces |  |
| projectalbert2025.pdf  |  | **2025** is only isolated on one side with the . |
| MappingLog2025Final.log |  | CamelCase doesn't work with numbers |
| QA_testing_20250220.pptx |  | 2025 is only isolated on one side with the _ |



<p id="wildcards"></p>

### Wildcards Overview

#### [🍿 Watch Quick Tips | Manual Search Tool: Wildcards](https://vimeo.com/772196768)

This guide will cover the *, ? and ~ wildcards—they are useful to:

- Expand your results and make sure you are not missing files.
- Go around naming convention issues.
- Search on a specific number of variables.
- Find possible misspellings.


<p id="asterisk_wildcard"></p>

### * Wildcard

#### [🍿 Watch Quick Tips | Manual Search Tool: Wildcards](https://vimeo.com/772196768)

The `*` wildcard **replaces zero or more characters** and is the most commonly used wildcard. It’s a powerful tool for overcoming [naming convention](#naming_convention) inconsistencies.  

✏️ Using the `*` wildcard in a search may slow down performance, especially when placed at the beginning of a query, as it requires scanning a much larger dataset.  

#### Search Examples Using the *

| SEARCH QUERY | POSSIBLE RESULTS|
| --- | --- |



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

>🔆 &nbsp;If you prefer not typing the **\*** and ALWAYS want to use it by default, you can select that preference **> gear icon > Settings > [Use predictive search](#predictive_search)**. Please be aware that using predictive search might expand your results way too much at all times. Throughout this user guide, we assume the predictive search has not been selected.



<p id="question_mark_wildcard"></p>

### ? Wild Card

#### [🍿 Watch Quick Tips | Manual Search Tool: Wildcards](https://vimeo.com/772196768)

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

#### [🍿 Watch Quick Tips | Manual Search Tool: Wildcards](https://vimeo.com/772196768)

The **~** wild card is also called the **fuzziness** wild card. It is used to find similar words, and is mostly used to catch human misspellings.

>🔆 &nbsp;Be aware that launching a query with the **~** can use an enormous amount of memory and perform badly, ending in a "timed out" situation.

The query uses the [Damerau-Levenshtein distance](https://en.wikipedia.org/wiki/Damerau-Levenshtein_distance) to find all terms with a maximum of two changes, where a change is the insertion, deletion or substitution of a single character, or transposition of two adjacent characters.

If used alone, by default the **~** will look for the maximum of 2 changes, but it is best practice to use **~1** in order to limit the changes to 1, which should be sufficient to catch 80% of all human misspellings. 

🔎 A few examples of words that would be found with and without limiting the changes to 1:

- **jungle~1** > would find: jungle, juggle, jingly, jingle, jingles, etc.
- **jungle~** > would find: jungle, juggle, jingly, jingle, jingles, june, judge, single, bundle, uncle, etc.

___
### Mixing Wild Cards

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

<p id="math_symbols"></p>

#### Syntax for Mathematical Symbols in Queries

You can only use **:** with letters, but you can use any other with numbers.

| SYNTAX | EQUATION |
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





### Field Names | Extra Metadata




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

