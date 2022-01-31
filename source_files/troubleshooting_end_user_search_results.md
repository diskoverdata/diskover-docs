___
## Search Results
___

> Please refer to the [Manual Search Syntax chapter in the Diskover User Guide](https://docs.diskoverdata.com/diskover_user_guide/#manual-search-syntax) and/or the [Quick Reference Card](https://docs.diskoverdata.com/images/quick_reference_card_diskover_generic.png) for detailed information on searches. 

#### Directories and/or files seems to be missing in search results

- Expand your search with [* which acts as a wild card](https://docs.diskoverdata.com/diskover_user_guide/#wild-card_1).
- If using [operators (and, not, or)](https://docs.diskoverdata.com/diskover_user_guide/#operators), make sure you are using them correctly and [grouping](https://docs.diskoverdata.com/diskover_user_guide/#the-need-of-grouping-criteria-for-complex-queries) them if needed.
- If searching on a specific [field name](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-field-names), make sure that both field name and variable are used and typed correclty.
- Make sure you don't have saved [Filters](https://docs.diskoverdata.com/diskover_user_guide/#search-filters) limiting your results.
- Make sure [Current Dir](https://docs.diskoverdata.com/diskover_user_guide/#current_dir) is deselected in order for Diskover to search all your storage volumes and directories.
- Make sure you don't have specific [index/indices](https://docs.diskoverdata.com/diskover_user_guide/#indices) selected.
- Try to refresh your volumes with **Reload Indices** > click the **gear icon** in the top right corner of the user interface > Select **Reload Indices**.

#### There are too many items found in the search results

- An overuse of the [* wild card](https://docs.diskoverdata.com/diskover_user_guide/#wild-card_1) could be the cause.
- [Use Predictive Search](https://docs.diskoverdata.com/diskover_user_guide/#use-predictive-search) in your Settings may be selected, therefore always applying the * for any searches and expanding your results.
- If using [operators (and, not, or)](https://docs.diskoverdata.com/diskover_user_guide/#operators), revisit them to make sure they are used and [grouped](https://docs.diskoverdata.com/diskover_user_guide/#the-need-of-grouping-criteria-for-complex-queries) appropriately.
- Try searching on specific [field name(s)](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-field-names).
- Using [Filters](https://docs.diskoverdata.com/diskover_user_guide/#search-filters) might help pinpoint your results.
- Using [Current Dir](https://docs.diskoverdata.com/diskover_user_guide/#current_dir) might help focus your results to a specific path.

#### Empty directory(ies) in the search results

- To avoid having empty directories in your search results, open the search [Filters](https://docs.diskoverdata.com/diskover_user_guide/#search-filters) and type **1** in the **File size (min)** field, click **Save filters** and resume your search.

#### How to only have files or directories in your search results

- Open the search [Filters](https://docs.diskoverdata.com/diskover_user_guide/#search-filters) and select **file** or **directory** from the **Doc type** drop-down list.
- Use a [field name](https://docs.diskoverdata.com/diskover_user_guide/#queries-with-field-names) in the search bar:
  - type:file
  - type:directory

#### Green info bar shows thousands of results, but they are not all showing in the results pane

- The default view is 10 results per page, but you can change that number to up to 1,000 via the [Show items selector](https://docs.diskoverdata.com/diskover_user_guide/#items_per_page). If you have more than 1,000 results, you will see more than one page of results, and that indicator is located at the top right of the search results pane.

#### Search results are on several pages instead of just one

- There are 3 reasons why Diskover’s search results were set-up that way: 1) for speed, 2) for speed and 3) to break up possible several thousands of lines of results, making it easier to manage.

#### Lost my location and/or path

- You can always see the path that you're in via the [path bar](https://docs.diskoverdata.com/diskover_user_guide/#path_navigation_bar) located below the green info bar. You can also select a directory directly from that bar to change location.
- You can also see which path you're in via the [green info bar](https://docs.diskoverdata.com/diskover_user_guide/#green_info_bar).

#### How to export results

- Via the [Export button](https://docs.diskoverdata.com/diskover_user_guide/#export-search-results) in the search page: 

  - Offers several options to export the paths, as well as many other metadata (size, ctime, mtime, atime, type, etc.), to your download folder.
  - Offers several options to Copy the paths or just the file names, and paste wherever you need.

#### How to share search results

- You can use the [Export options](https://docs.diskoverdata.com/diskover_user_guide/#export-search-results) or use the [Share button](https://docs.diskoverdata.com/diskover_user_guide/#share-search-queries-and-results)
  - Share the URL link of your search results with your co-workers.
  - Share/copy the search query for repeatable results.

#### How to achieve complex sorting of search results

- Efficiently sorting columns and analyzing data in the user interface can be tricky, especially when there are many pages of results involved. It is best to [Export](https://docs.diskoverdata.com/diskover_user_guide/#export-search-results) the data in csv format and then open that file in Excel where you'll be able to achieve complex sorting.
