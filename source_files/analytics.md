<p id="analytics"></p>

## Analytics

### Overview

Diskover provides powerful reporting capabilities. Reports can be generated to align with business context and can be constructed from any Elasticsearch query. Therefore, any combination of attributes from the [metadata catalog](#metadata_catalog) (names, tags, project status, etc.) can be used to construct business-facing reports.

Diskover offers professional services to assist with setting up custom reports - please [contact us](mailto:sales@diskoverdata.com) for details.

Below is a summary of the current analytics/reports available. The links will bring you to the [Diskover User Guide](https://docs.diskoverdata.com/diskover_user_guide/) giving detailed information regarding how to use these analytics. In the following sections, we will take a deep dive into the **⚙️ customizable analytics**.

| ANALYTIC | DESCRIPTION |
| --- | --- |
| [Search Page Charts](https://docs.diskoverdata.com/diskover_user_guide/#search-page-default-view) | Snapshot of a path (aging, top files, top directories, etc.) refreshing with every click you make. |
| [Dashboard](https://docs.diskoverdata.com/diskover_user_guide/#dashboard) | Snapshot of a repository with multiple clickable links to see the detailed results. |
| [File Tree](https://docs.diskoverdata.com/diskover_user_guide/#file-tree) | Instant profiling of directories by size and aging. |
| [Treemap](https://docs.diskoverdata.com/diskover_user_guide/#treemap) | Displays hierarchical data using rectangles to graphically represent the size of the directories. |
| [Heatmap](https://docs.diskoverdata.com/diskover_user_guide/#heatmap) | Compares 2 indices from 2 points in time, giving an instant visual of data growth or shrinkage. |
| [Tags](https://docs.diskoverdata.com/diskover_user_guide/#tags) | Analyze all your tagged datasets by name, size, and number. |
| ⚙️ [Smart Searches](https://docs.diskoverdata.com/diskover_user_guide/#smart-searches) | Fully customizable reports tailored to meet your specific needs. |
| [User Analysis](https://docs.diskoverdata.com/diskover_user_guide/#user-analysis) | Gives insights into data consumption and cost per user and group. |
| ⚙️ [Cost Analysis](https://docs.diskoverdata.com/diskover_user_guide/#cost-analysis) | Highly customizable report helping you put a price tag on the value of your digital assets. |
| ⚙️ [Reports](https://docs.diskoverdata.com/diskover_user_guide/#reports) | Customizable to help you find your top unknowns. |

The reports explained in this chapter can be found in the **Analytics** drop-down list:

<img src="images/analytics_menu_setup.png" width="300">

### Smart Searches
<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

#### Overview

Smart Searches provide a mechanism to create repeatable reports or bookmarks based on search queries. Any combination of names, tags, metadata fields, etc., can be used to construct business-facing reports. Any users can access Smart Searches, but only authorized users can customize by adding, editing, or deleting queries.

#### Smart Searches Examples

Here are a few examples providing business-context insight.

**Example with storage tiers**:

<img src="images/analytics_smart_searches_by_storage_tiers.png" width="">

**Example using file kinds**:

<img src="images/analytics_smart_searches_by_file_kind.png" width="">

**Example using customers**:

<img src="images/analytics_smart_searches_by_customers.png" width="">

#### Smart Searches Customization

🔴 &nbsp;To customize, start by clicking the **Edit Smart Searches** button:

<img src="images/analytics_smart_searches_edit.png" width="850">

🔴 &nbsp;This page will open in a new tab:

- Read all the instructions at the top for guidance.
- Modify the [search queries](https://docs.diskoverdata.com/diskover_user_guide/#manual-queries-syntax-and-rules) for your use case(s).
- Click **Save Smart Searches** to save your queries once done.

<img src="images/analytics_smart_searches_edit_mode.png" width="">

Here is a simple example of queries mostly using **customer names** + specific **paths**/repositories + **tags**:

![Image: Smart Searches Editing Window](images/image_reporting_smart_searches_report_editing_window.png)

#### Sample Query Groups

🚧 &nbsp;We're hard at work preparing these query groups.



### Reports
<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

#### Overview

Reports provide a mechanism to create repeatable analytics by searching for your top unknowns, from simple queries like "which file types occupy the most space" to "who is using the most space". Any users can access Reports, but only authorized users can customize by adding, editing, or deleting queries.

#### Reports Examples

**Example using Xytech project lifecycle status**:

<img src="images/analytics_reports_by_project_status.png" width="">

**Example using Xytech production  managers**:

<img src="images/analytics_reports_by_manager.png" width="">

#### Reports Customization

⚠️ &nbsp;Note that multiple queries can be used for this analytics and selected via the drop-down menu:

<img src="images/analytics_reports_menu.png" width="150">

🔴 &nbsp;To customize, start by clicking the **Edit Reports** button:

<img src="images/analytics_reports_edit.png" width="850">

🔴 &nbsp;This page will open in a new tab:

- Read all the instructions at the top for guidance. This report is a little more complicated to customize, so take the time to read the instructions and then test your queries.
- Modify the [search queries](https://docs.diskoverdata.com/diskover_user_guide/#manual-queries-syntax-and-rules) for your use case(s).
- Click **Save Reports** to save your queries once done.

<img src="images/analytics_reports_edit_mode.png" width="">

#### Sample Query Groups

🚧 &nbsp;We're hard at work preparing these query groups.

<p id="analytics_costs"></p>

### Cost Analysis
<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

#### Overview

Cost reporting can be generated to align with business context and can be constructed from any Elasticsearch [query](https://docs.diskoverdata.com/diskover_user_guide/#manual-queries-syntax-and-rules). Therefore, any combination of names, tags, metadata fields, etc. can be used to construct business-facing reports.

Storage cost can be set globally or per storage volume, directory, etc. This tool is designed to control operating costs by 1) charging clients accurately for storage of their projects and 2) clean-up/data incentivizing.

#### Calculation of Cost Estimates

The storage costs can either be estimated globally, by storage volume, or down a directory level. The estimations need to be done outside of Diskover. Beside the cost of the storage itself, other factors can be compounded like electricity, service contract, System Administrator’s salary, subscription fees, etc. The estimations need to be calculated and configured per gigabyte.

<img src="images/diagram_storage_cost_configuration.png" width="">
_[Click here for a full-screen view of this image.](images/diagram_storage_cost_configuration.png)_

#### Configuration of Storage Costs

Storage costs can be configured to run at index time or as a post-index process. Follow the help text instructions in **DiskoverAdmin**:

- To run costs at time of index: **Configuration → Diskover → Configurations → Default**
- To run costs as a post-index process: **Configuration → Plugins → Post Index → Costs**

#### Where to Find Costs in the User Interface

- **Analytics → Cost Analysis**, which is the report discussed in this section.

- **Analytics → User Analysis**

- **File search page** → Cost column in the search results pane - if that column is not visible:
    - Go to **DiskoverAdmin → Configuration → Web → General** → then go to **Expose Extra Fields from Index and Post-Index Plugins**
    - The **cost** column might need to be exposed by users, from the interface go to **⛭ → Settings → Hide fields in search results**


#### Cost Analysis Examples

Here are a few examples providing business-context insight.

**Example by Project**:

<img src="images/image_reporting_cost_analysis_report_example_diskover_ui.png" width="">

**Example by Storage Provider**:

<img src="images/analytics_cost_by_storage_provider.png" width="">

#### Reports Customization

🔴 &nbsp;To customize, start by clicking the **Edit Cost Analysis** button:

<img src="images/analytics_costs_edit.png" width="850">

🔴 &nbsp;The editable queries will open in a new tab:

- Read all the instructions at the top for guidance.
- Modify the [search queries](https://docs.diskoverdata.com/diskover_user_guide/#manual-queries-syntax-and-rules) for your use case(s).
- Click **Save Cost Analysis** to save your queries once done.

#### Sample Query Groups

🚧 &nbsp;We're hard at work preparing these query groups. 
