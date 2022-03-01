<p id="tags"></p>

___
### Tagging

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

Tags are additional metadata assigned to an item, they are used to add business context or data curation actions to be taken (ex: archive, delete, keep, clean). Tagging is crucial for smooth workflows and proper curation of data.

This section will talk about manual tagging, but Diskover can also be configured to schedule automated tasks to apply autotags, usually based on aging or service agreements, etc., in order to safely and methodically curate data in the backend.

>🔆 &nbsp;A file or directory can have multiple tags.

<p id="tags_options"></p>

#### Tags Overview

![Image: Manual Tag Selection](images/image_tags_manual_application.png)

A) **Tag** drop-down list: To add or remove tags.

B) **Select** file(s) and/or directory(ies) to be tagged: You first need to select one or several items in B) to add or remove a tag.

C) **Tags** column: To see tags  associated with a file or directory.

D) **Tags** selection: List of tags  that are available, you need an admin account to edit that list.

E) **Remove all tags**: Select from column B) the items you wish to remove the associated tags first and then select E).
>**WARNING!**  you cannot undo this action.

F) **Add new tag**: To quickly add a single new tag - an admin account is required to add/edit tags.

<p id="apply_tags_to"></p>

G) **Apply tags to**: Choices of applying tags [non-recursively or recursively](#recursive) - can only be achieved from a directory and that directory needs to have a tag assigned to it prior and in order to assign the same tag(s) recursively or non-recursively.

> **All results (all pages)**: Will apply tags to all your search results, no matter if they are files or directory, and no matter how many pages of results, but will not apply tags recursively.

> **Selected Folders - [Non-recursive](#recursive)**: Will only apply tags to the next level of sub-directories and/or files of the selected directory.
>
> **Selected Folders - [Recursive](#recursive)**: Will apply tags to all next levels of sub-directories and/or files of the selected directory.

![Image: Recursive Options for Applying Tags](images/image_tags_apply_recursive.png)

H) **Edit Tags**: An admin account is required to add/edit tags.

#### Tags Application

##### Applying a Single Tag

1. In the results pane, select the item(s) you wish to tag.
2. Click the **Tag** drop-down list and select a tag.

>🔆 &nbsp;A file or directory can have multiple tags.

##### Applying Recursive and Non-Recursive Tags

This option is used to apply tags to multiple sub-directories and/or files in just a few clicks.

1. In the results pane, select the main directory(ies) you wish to tag.
2. Click the **Tag** drop-down list and select a tag - you need to tag the main directory first in order to continue.
3. Reselect that same directory(ies) and click the **Tag** drop-down list.
4. Click on **Apply tags to** and make a selection - [get more info on recursive and non-recursive](#apply_tags_to)

>🔆 &nbsp;If the main directory has several tags applied to it, all these tags will be applied to their parent directories and/or files with this action.

#### Tags Removal

##### Removing a Single Tag

1. In the results pane, select the item(s) you wish to remove the tag from.
2. Click the **Tag** drop-down list and select the same tag that is already applied to it > trying to reapply the same tag will remove it.

##### Removing Several Tags

1. In the results pane, select the item(s) you wish to remove the tags from.
2. Click the **Tag** drop-down list and select **Remove all tags** - careful, this action cannot be undone!

>🔆 &nbsp;If an item has several tags, the above action will remove all of them at once.

##### Removing Recursive and Non-Recursive Tags

1. In the results pane, select the directory for which you want to remove the tags recursively or non-recursively - remove the tag from this directory first by following the above instructions.
2. Click the **Tag** drop-down list.
3. Click on **Apply tags to** and make a selection - [get more info on recursive and non-recursive](#apply_tags_to) - this single action will remove the tag(s) to all the sub-directories and/or files so they have the same tags as the main directory.

#### Search on Tags

You can search on tags  using the [filters](#filters) tool or by  manually entering a query in the search bar.

##### Via the [filters](#filters) tool:

1. Click on the  **[Filters](#filters)**  icon at the top of the interface.
3. Go to the  **Tags**  section.
4. Select  **is**  or  **is not**.
5. Click on the boxes/tags  you wish to include/exclude from your search.
6. Click  **Save filters**  at the bottom of the window.

##### Via manual query in the search page:

Type your search query in the search bar at the top of the page:
>- To search on tags, you must start with a  **#**, ex: #archive
>- You can also use [operators](#operators) to search on more than one tag, ex: #archive OR #delete
>-  When starting a query with  **#**  Diskover will automatically detect your intentions and offer you to select one of the available tags.

![Image: Manual Search for Tags](images/image_tags_report_access_from_search_bar.png)

#### Accessing the Tags Report

The tags  built-in report gives a visual snapshot of all tagged items in all your storage volumes. Note that the colors have no particular meaning in this report.

A built-in report is accessible via the  **Analytics**  drop-down list:

<img src="images/image_tags_report_access_from_analytics.png" width="400">

#### Using the Tags Report

![Image: Tags Report Overview](images/image_tags_report_overview.png)

A) Slide the buttons to refine the results.

B) Gives a total count of items – click on any tag/report to open the results in the search  page.

C) Gives a total in size – click on any tag/report to open the results in the search  page.

D) The analytics tag report is global and returns results for all storage volumes, their directories and files. Selecting any of these options will not affect the results. If you want to narrow the results to one or more specific storage volumes, select the desired volume(s) in the [indices](#indices) page and navigate back to this report.

E) You can view configured tags, but an admin account is required to edit them.
