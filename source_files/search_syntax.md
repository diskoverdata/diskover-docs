___
# <a id="search_syntax"></a>Manual Search Syntax

Until you get familiar with Diskover, we strongly recommend using the built-in search tools and [filters](#filters) available in the interface.

When doing a manual query, the value needs to be typed in the [search bar](#search_bar).

Unless you select a specific [storage volume](#select_volume) or [directory](#select_directory), Diskover will search all the storage volumes and their parent paths during a manual search.

> 🔆 The search queries are case insensitive.

The list of possible search queries is exhaustive therefore only the basics of manual searches will be explained in this chapter. <a id=“help_page”></a>For more search queries information, please visit  **gear icon** > **Help**:

![Image: Help with Queries and Syntax](images/image_menu_gear_icon_selection_help.png)

> 🔆 Pay attention to all the messages in the green and blue information bars, they are very helpful!

The examples used in this chapter are media related, but the logic can be applied to any type of industry.

## <a id=“naming_convention”></a>Problems Resulting from Naming Conventions

All organizations have issues with naming convention. Your search results might be limited if you try to be too restrictive when searching. For example, files associated with the movie **For Your Eyes Only** might be named:
- ForYourEyesOnly
- 4YourEyesOnly
- for_your_eyes_only
- Etc. and not mentioning all the possible misspellings. 

Trying to launch a query with too many words and/or criteria, unless you know that a strict naming convention was followed, will limit your results and you might think that some files are missing.

## <a id=“expand_results”></a>Expend Your Results with \*

When searching on a single word for example, the results might be limited if you type the word alone. Diskover uses the asterix **\*** as a wild card to replace characters (letters or digits) in order to expand your search results.

Let's take the example of trying to find the following file **ForYourEyesOnly.mov** with only using the word **eyes**:

- If you only type **eyes**, that file would not be found as the system would search for that word alone and not being mixed with other letters right before and/or after.
- If you type **\*eyes** or **eyes\***, that file would not be found either.
- You would need to type **\*eyes\*** to find this file following this example.

Now, if the file would be named **for_your_eyes_only.mov**, launching a search with only **eyes** would find that file, but again, naming conventions being what they are, it is recommended to use an **\*** to expand your results.

>🔆 If you prefer not typing the **\*** and ALWAYS want to use it by default, you can select that preference > gear icon > settings > [predictive search](#predictive_search). For the rest of this chapter, we will assume the predictive search has not been selected.

## Search Using Field Names

You can search on specific fields by using pre-defined field names. For the list of available field names, visit the [help page](#help_page).

The query needs to be typed in this exact format **fieldname:value**

Searching with field names can be effective if you search on a specific field. For example, if you type the following in the search bar:

**owner:\*joe\***

The search results will show all the files with **Joe** somewhere in that field and as the owner/creator of the file. Of course, this implies that the file at the source, before being indexed by Diskover, was properly identified as such.


## Queries with File Extensions

When searching on file extensions, it is recommended to either:
- Use the dedicated fields in the [pre-built filters](#filters). 
- Type in the search bar the pre-determine field name for file extensions, example **extension:mov**

The reason being that the file extension letters might be part of the file name and give you misleading results. For example:
- If only typing **mov** in the search bar, the results would include all files with **.mov** extension, but could also return a file with the name **all_mov_titles_2021.txt**
- If only typing **jpg** in the search bar, the results would include all files with **.jpg** extension, but could also return a file with the name **montage_jpg_png_images.gif**

## <a id=“operators”></a>Operators

You can use operators **(and, or, not)**  to narrow down a manual search. Although the operators in this section are capitalized for ease of understanding, the operators can be typed in lower case in the search bar.

>🔆 Operators can only be used in the main search bar  at the top of the user interface. They cannot be used in the [search within results](#search_within_results) bar.

Let's say you have thousands of results for the series **The Jungle Book** and that the following naming convention was respected: **thejunglebook_s01_ep05_en.mov**

Here are some examples of queries using operators to narrow your searches. If you want to find:
- All episodes within season 1, in any language: **\*jungle\* AND s01**
- Episode 5 of season 1, in any language: **\*jungle\* AND s01 AND ep05**
- All translations of season 1 except English: **\*jungle\* AND s01 NOT en**
- All Italian (assuming **ita** was respected in the naming convention) and English translations of season 1:  **\*jungle\* AND s01 AND en OR ita**

## Mixing Words, Operators and Field Names

Operators can be mixed with field names and words for precise results. Again using examples with file name: **thejunglebook_s01_ep05_en.mov**, and if you want to find:

- All seasons and episodes with .mov file extension: **\*jungle\* AND extension:mov**
- All episodes of season 1 that do not have .mov as file extension: **\*jungle\* AND s01 NOT extension:mov**
- Season 1 in English with .txt or .mov formats: **\*jungle\* AND s01 AND en AND extension:mov OR extension:txt**
