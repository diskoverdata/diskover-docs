<p id="settings"></p>

## Settings

### Settings Overview

You can access the settings via the ⚙️ icon at the top right corner of the interface.

![Image: Accessing the Settings](images/settings_menu_selection.png)

⚠️ **IMPORTANT!**

- Settings are personal to your browser, even if you share an account. Your customizations are stored as cookies. [Clearing the cookies](#clear_cookies) will reset your settings to Diskover’s defaults.
- If you switch browsers, such as from Chrome to Firefox, you’ll need to reselect your settings, as they are stored as cookies specific to each browser.
- Your cookies may also be cleared after a software update, requiring you to reselect your settings.
- To learn more about how your [cookies](#clear_cookies) and [cache](#clear_cache) affect the Diskover user interface.
- **GOOD NEWS!** There are very few settings to select, so reselecting when needed is an easy task.


<p id="profile"></p>

### Profile

![Image: Settings - Profile](images/image_settings_profile_20230214.png)

- Shows your **Username**
- Determines your [role/access](#role_access):
    - **Admin user** = admin
    - **Local user** = non-technical user
    - **Task panel user** = sys admin/technical user
- Click **Change Password** as needed, and you will be prompted to enter your current password and type a new one.


<p id="time"></p>

### Time Display

![Image: Settings – Time Display](images/image_settings_time_display.png)

- You can choose to change the time to your **local time zone** instead of **UTC** (Coordinated Universal Time).
- We recommend selecting **Show times in local timezone** to avoid confusion, especially with indexing times.
- This change will also affect the [storage time of your indices](#indices), file creation dates, modifications, etc.
- Your selection will be saved automatically.


<p id="binary_decimal"></p>

### File Size Display

![Image: Settings – File Size Display](images/image_settings_file_size_display_20230214.png)

- By default, Diskover shows the file size using the **binary system**. Click **Use decimal system base-10...** if you prefer the **decimal system**. Your selection will be saved automatically.
- By default, Diskover’s file size decimal is set to **1**. Change it to your preference and click **Set** to save.
- Select **Use size_du (allocated size) instead...** if you want to use the real allocated disk size instead of the actual file size. Your selection will be saved automatically.


<p id="search_file_tree"></p>

### Search File Tree

![Image: Settings – Filter Charts](images/settings_search_file_tree.png)

- By default, the [file tree analytic](#filetree) is sorted alphanumerically.
- Click the box to sort the [file tree analytic](#filetree) by size instead.
- Your selection will be saved automatically.


<p id="settings_filter_charts"></p>

### Filter Charts

![Image: Settings – Filter Charts](images/settings_filter_charts.png)

- By default, [filters](#filters) do not affect the [charts](#search_page_charts) on the file search page or the [dashboard](#dashboard).
- Check the **Use filters on charts** box to apply the filters to the [charts](#search_page_charts) and the [dashboard](#dashboard).
- Your selection(s) will be saved automatically.


<p id="predictive_search"></p>

### Use Predictive Search

![Image: Settings - Use Predictive Search](images/image_settings_use_predictive_search.png)

- Check this box if you want your searches to **always** expand with the [\* wild card](#asterisk_wildcard) without needing to type the **\*** in the search bar.
- ⚠️ **Important**: Using this setting may return many additional or unwanted results.
- Your selection(s) will be saved automatically.
- The [wild cards](#wildcards) are explained further in the [manual queries](#manual_queries) chapter.


<p id="default_columns_sort"></p>

### Default Search Sort

![Image: Settings - Default Search Sort](images/image_settings_default_search_sort.png)

- By default, the columns on the file search page are sorted by **path name** and then by **file or directory name**.
- Check this box to display unsorted search results instead.
- Your selection(s) will be saved automatically.
- Learn how to [assign primary and secondary sort](#sort) in the [results pane](#results_pane).


<p id="hide_columns"></p>

### Hide/Unhide Fields in Search Results

![Image: Settings – Hide/Unhide Columns in Search Results](images/image_settings_hide_fields_in_search_results.png)

- ⬜️ Unchecked boxes mean the columns are **visible** in your [results pane](#results_pane).
- ✅ Checked boxes mean the columns are **hidden** in your [results pane](#results_pane).
- Your selection(s) will be saved automatically.
- The [base metadata](#base_metadata) fields are the same for everyone, but you may have extra options depending on your organization’s indexing of [extra metadata](#extra_metadata).
- Click the **Reset** button to restore the default column widths if you’ve modified them.


<p id="path_translation"></p>

### Path Translations for Copying Paths

![Image: Settings – Path Translations for Copying Paths](images/image_settings_path_translation.png)

- Depending on 1) how your System Administrator configured Diskover, 2) your operating system, and 3) who you need to share paths with, you may need to select the proper option to copy paths correctly for your instance.
- For example, in a Windows environment, you may have the option to change a forward slash `/` to two backslashes `\\`, translating a path from `/isilon1/data/dm/tools/staging_files.xls` to `\\isilon1\data\dm\tools\staging_files.xls`.
- If you select any **path translations**, click **Set** to save.
- Please contact your System Administrator for more details.


<p id="clear_cache"></p>

### Clear Diskover Cache

![Image: Settings – Clear Diskover Cache](images/image_settings_clear_cache.png)

- A **cache** stores website content locally in the browser to improve performance by reducing load times.
- There are occasional instances where clearing the cache is necessary, but it should be a last resort:
    - Sometimes, the cache can cause issues by storing outdated content, which may prevent the browser-based software from working properly.
    - If you receive a pop-up message in the Diskover interface asking you to clear the cache.


<p id="clear_cookies"></p>

### Clear Diskover Cookies

![Image: Settings – Clear Diskover Cookies](images/image_settings_clear_cookies.png)

- **Cookies** are used by the browser to store user preferences, such as the personal settings described in this chapter, and are stored both on the server and in the browser.
- Clearing the cookies will remove any customized settings you’ve selected, as discussed in this chapter.
- There are a few instances where you may need to clear the cookies:
    - After a software update or upgrade to remove cookies from the previous version, which may affect the behavior of the new version.
    - If you receive a pop-up message in the Diskover interface asking you to clear the cookies.


### About Diskover

![Image: Settings – About Diskover](images/settings_about_diskover.png)

- These sections are for informational purposes only and provide details about your Diskover instance.


<p id="anonymous_data"></p>

### Send Anonymous Usage Data

![Image: Settings – About Diskover](images/image_settings_anonymous_data_20230214.png)

- Upon your first login and after a software update, you will be prompted to agree or decline, allowing Diskover to automatically receive anonymous data to help improve the software based on behavioral results.
- No personal information is collected.
- Uncheck the box if you wish to opt out of sending anonymous data.
- Your selection will be saved automatically.


