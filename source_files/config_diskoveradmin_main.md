<p id="config_diskoveradmin_main"></p>

## DiskoverAdmin Configuration | Main Components

### Overview

Most help information is available directly in the user interface. This section offers additional guidance when applicable to support you during the configuration process of the main components. **IMPORTANT!**

- Although specified throughout **DiskoverAdmin**, for best practices, always assume that the fields are case-sensitive.
- For more information about [Python re.search](https://docs.python.org/3.7/library/re.html) whenever mentioned in the help text in DiskoverAdmin.

<p id="config_diskover_web"></p>

<p id="config_es_web"></p>

___
### Diskover-Web

<img src="images/diskoveradmin_menu_web.png" width="200">


<p id="config_authentication"></p>

#### Authentication Options

Diskover currently offers the following options for authentication - all help text can be found directly in the user interface:

| AUTHENTICATION OPTION | WHERE TO CONFIGURE | 
| --- | --- |
| Native Diskover-Web Authentication | DiskoverAdmin → Configuration → Web → General |
| LDAP Authentication | DiskoverAdmin → Configuration → Web → LDAP |
| OAuth2 Authentication (Okta or Azure) | DiskoverAdmin → Configuration → Web → OAUTH |




<p id="config_roles_and_access"></p>

#### Restrict Access Control

**DiskoverAdmin → Configuration → Web → Index Access**

Diskover offers optional settings allowing you to control access and visibility by mapping groups and users to specific indices. All help text can be found directly in the user interface.



<p id="config_top_paths"></p>

#### Top Paths

**DiskoverAdmin → Configuration → Web → Top Path Display**

By default, users will see a list of all volumes scanned by Diskover in the left pane of the user interface. You can, however, create Top Paths to organize your volumes (by location, project, etc.). In this example, note that the first collapsible option will always be **All Top Paths** and will list all your repositories.

<img src="images/top_path_by_location.png" width="300">





<p id="config_path_translation"></p>

#### Path Translations

**DiskoverAdmin → Configuration → Web → Path Translations**

##### Path Translation | Example 1

Here is an example of path translations. If you set the following path translation sets in DiskoverAdmin:

<img src="images/translation_set_1.png" width="">
<img src="images/translation_set_2.png" width="">

This is what users will see in their ⛭ → **Settings** and be able to select:

<img src="images/translation_sets_in settings.png" width="500">

##### Path Translation | Example 2

Let's say that this is the choice offered to a user in their ⛭ → **Settings**:

<img src="images/image_paths_translation_settings_in_diskover_ui.png" width="600">

And that this is the path structure they see in their results, then if they copy to the 📋 clipboard:

![Image: Pasted Path Within Clipboard](images/image_paths_translation_copy_path_from_diskover_ui.png)

This is the resulting path that would be copied:

![Image: Pasted Path Within Clipboard](images/image_paths_translation_paste_path_in_clipboard.png)





<p id="config_scanners"></p>

<p id="config_es"></p>

___
### Diskover Scanners/Workers & Elasticsearch

<img src="images/diskoveradmin_menu_diskover.png" width="200">

<p id="autotag"></p>

#### AutoTags
<img src="images/button_edition_professional.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_eda.png" width="105">&nbsp;&nbsp;<img src="images/button_edition_energy.png" width="105">

Given the importance of tagging in data management, we dedicated an [entire chapter to **tags**](#tags).

#### Costs

Besides the help text in DiskoverAdmin, you can find [more information here regarding **cost** configuration](#analytics_costs) as well as some use cases.


<p id="config_alt_scanners_diskoveradmin"></p>

___
### Diskover Alternate Scanners

All [alternate scanners](#config_alt_scanners) will eventually be  in the DiskoverAdmin panel. Please go to the [Alternate Scanners Configuration](#config_alt_scanners) section for the complete list of current alternate scanners. Meanwhile, all alternate scanners configurable in DiskoverAdmin can be found here:

<img src="images/diskoveradmin_menu_diskover_alt_indexers.png" width="200">



<p id="config_diskoverd"></p>

___
### DiskoverD

<img src="images/diskoveradmin_menu_diskoverd.png" width="200">



<p id="config_system"></p>

___
### System

<img src="images/diskoveradmin_menu_system.png" width="200">


