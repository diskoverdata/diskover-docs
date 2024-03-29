<p id="settings"></p>

___
## Settings
___

### Settings Overview

You can access the settings via the gear icon at the top right corner of the interface.

![Image: Accessing the Settings](images/image_menu_gear_icon_selection_settings.png)

**IMPORTANT!**

- Changing the settings is personal to your own web browser, even if you share a login account with others. Your customizations are stored as cookies. When you [clear the cookies](#clear_cookies) from the settings, your customized settings will also be cleared and reset to Diskover’s default values. 
- If you switch browsers, for example, from Chrome to Firefox, you will have to reselect your settings as they will not follow. Again, this is due to the settings being stored as cookies to a specific browser.
- Your cookies might also be cleared and need to be reselected after a software update.
- Click the following links to learn more about how [cookies](#clear_cookies) and [cache](#clear_cache) affect the Diskover user interface.
- **GOOD NEWS!** There are very few settings to select, so reselecting when needed is an easy task.

<p id="profile"></p>

___
### Profile

![Image: Settings - Profile](images/image_settings_profile_20230214.png)

- Shows your **Username**
- Determines your [role/access](#role_access):
    - **Admin user** = admin
    - **Local user** = non-technical user
    - **Task panel user** = sys admin/technical user
- Click **Change Password** as needed, and you will be prompted to enter your current password and type a new one.

<p id="time"></p>

___
### Time Display

![Image: Settings – Time Display](images/image_settings_time_display.png)

- You can opt to change the time to your **local time zone**  instead of  **UTC**  (Coordinated Universal Time).
- We strongly recommend you select/click the **Show times in local timezone** so there will be no confusion when you look at the indexing time, for example. 
- This change will also affect the [storage time of your indices](#indices), file date creation, modification, etc.
- Your selection will be saved automatically.

<p id="binary_decimal"></p>

___
### File Size Display

![Image: Settings – File Size Display](images/image_settings_file_size_display_20230214.png)

- By default, Diskover shows the file size using the  **binary system**. Click the first box **Use decimal system base-10...** if you prefer using the  **decimal system**. Your selection will be saved automatically.
- By default, Diskover’s file size decimal is set to  **1**. You can change that value to your own preference and click on  **Set**  to save.
- Select **Use size_du(allocated size) instead...** if you want to use the real allocated disk size instead of the actual file size. Your selection will be saved automatically.

<p id="search_file_tree"></p>

___
### Search File Tree

![Image: Settings – Filter Charts](images/image_settings_search_file_tree_20240220.png)

- By default, the [file tree analytic](#filetree) is sorted alphanumerically.
- Click this box if you want the [file tree analytic](#filetree) to be sorted by size instead.
- Your selection will be saved automatically.

<p id="settings_filter_charts"></p>

___
### Filter Charts

![Image: Settings – Filter Charts](images/image_settings_filter_charts_20230214.png)

- By default, [filters](#filters) do not affect the [charts](#file_search_charts) at the top of the file search page or the [dashboard](#dashboard).
- Check the **Use filters on charts** box if you want the filters to apply to the [charts](#file_search_charts) at the top of the file search page and the [dashboard](#dashboard).
- Your selection(s) will be saved automatically.

<p id="predictive_search"></p>

___
### Use Predictive Search

![Image: Settings - Use Predictive Search](images/image_settings_use_predictive_search.png)

- Check this box if you want your searches to _always_ be expanded with the [**\* wild card**](#asterisk_wildcard) without having to type the **\*** in the search bar.
- Be aware that using this setting may get many additional and/or unwanted results.
- Your selection(s) will be saved automatically.
- The [wild cards](#wildcards) are further explained in the [Manual Queries chapter](#search_syntax).

<p id="default_columns_sort"></p>

___
### Default Search Sort

![Image: Settings - Default Search Sort](images/image_settings_default_search_sort.png)

- By default, the columns in the file search page are sorted by **path name** and then by **file or directory name**.
- Check this box if you want to show unsorted search results instead.
- Your selection(s) will be saved automatically.
- Learn how to [assign primary and secondary sort](#sort) in the [results pane](#results_pane).

<p id="hide_columns"></p>

___
### Hide/Unhide Fields in Search Results

![Image: Settings – Hide/Unhide Columns in Search Results](images/image_settings_hide_fields_in_search_results.png)

- Boxes unchecked means that these fields/columns are visible in your [results pane](#results_pane).
- Check the boxes for fields/columns you don't want to see in your [results pane](#results_pane).
- Your selection(s) will be saved automatically.
- Note that each column represents basic metadata indexed by Diskover, which is available by default. Additional metadata may be indexed in your instance; therefore, different/additional columns may be available on your end.
- Click the  **Reset**  button if you have modified the columns' width and wish to reset to their default width.

<p id="path_translation"></p>

___
### Path Translations for Copying Paths

![Image: Settings – Path Translations for Copying Paths](images/image_settings_path_translation.png)

- Depending on 1) how your System Administrator configured Diskover, 2) your operating system, and 3) with whom you need to share paths, you may need to make a selection to copy paths accordingly for your instance.
- For a Windows environment, for example, you may have a choice where a forward slash / will be changed to two backslashes \\, to translate a path from `/isilon1/data/dm/tools/staging_files.xls` to `\\isilon1\data\dm\tools\staging_files.xls`
- If you select a **path translations**, click **Set** to save.
- Please see your System Administrator for details.

<p id="clear_cache"></p>

___
### Clear Diskover Cache

![Image: Settings – Clear Diskover Cache](images/image_settings_clear_cache.png)

- A **cache** is used to store website content for performance purposes and is saved in the browser.
- There are random instances where you will need to clear the cache, but it should be used as a last resort:
      - Sometimes, the cache needs to be cleared because it might prevent a browser-based software from working properly over time.
      - If you get a pop-up message on the Diskover interface asking you to clear the cache.

<p id="clear_cookies"></p>

___
### Clear Diskover Cookies

![Image: Settings – Clear Diskover Cookies](images/image_settings_clear_cookies.png)

- **Cookies** are used by the browser to store user’s preferences, like the personal settings described in this chapter, and are stored in both the server and browser.
- Clearing the cookies will remove the customized settings you may have selected, as discussed in this chapter.
- There are a few instances in which you may need to clear the cookies:
      - After a software update/upgrade to clear the cookies from the previous version that may affect the behavior of the new version.
      - If you get a pop-up message on the Diskover interface asking you to clear the cookies.

___
### About Diskover | Version, License Info, and Elasticsearch Info

![Image: Settings – About Diskover](images/image_settings_about_diskover_20230214.png)

- These sections are informative only and provide details about your Diskover software.


<p id="anonymous_data"></p>

___
### Send Anonymous Usage Data

![Image: Settings – About Diskover](images/image_settings_anonymous_data_20230214.png)

- Upon your first login and/or after a software update, you will be prompted to agree or not for Diskover to automatically receive anonymous data so we can compile the behavioral results and improve the software.
- No personal information is collected.
- Uncheck this box if you wish to opt out of sending anonymous data.
- Your selection will be saved automatically.

