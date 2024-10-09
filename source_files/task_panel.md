___
## Task Management via Task Panel

<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">
___

### Task Panel Overview

#### Usage

The Task Panel can be used to schedule indexing tasks or run any custom task, such as data curation via the AutoClean plugin, copying files, running duplicate file findings, checking permissions on directories, etc.

Diskover has a [distributed task system]() where [**indexers/workers**]() can be distributed among many resources. For each resource providing a task worker, services need to have a [**DiskoverD**]() installed. This section will describe setting up both indexing and custom tasks within the Diskover-Web **Task Panel**.

<img src="images/diagram_indexer_daemon_task_panel.png" width="">
_[Click here for the full screen view of this diagram.](images/diagram_indexer_daemon_task_panel.png)_

#### Accessing the Task Panel

🔴 &nbsp;**From the DiskoverAdmin panel**: Click on the **** 

<img src="images/diskoveradmin_menu_home.png" width="250">

🔴 &nbsp;**From the Diskover user interface**: Access the Task Panel within the Diskover-Web user interface > ⛭ > **Task Panel** > **Workers** tab.

<img src="images/task_panel_access.png" width="">

These tabs work together to give you full control over task creation, execution, monitoring, and overall management, ensuring smooth and efficient data indexing and task processing in Diskover.

<img src="images/task_panel_tabs.png" width="">

#### Task List Tab

The Task List shows the current and pending tasks in Diskover. It allows you to see all the tasks that are currently active, queued, or scheduled to run.

- You can create new tasks from this tab.
- You can view task details, such as task type, configuration, and status (e.g., running, paused, queued).
- This tab is where you can manage active tasks, pause them, or cancel them if needed.

<img src="images/task_panel_task_list.png" width="">

#### Task History Tab

The Task History keeps a log of completed tasks, allowing you to review past tasks and their outcomes.

- Provides details on tasks that have finished running, including success or failure status, duration, and any logs or error messages related to the task.
- Useful for tracking performance and identifying any issues that occurred during past operations, which is crucial for troubleshooting.
- Find useful information to fine-tune future tasks.

<img src="images/" width="">

#### Templates Tab

When creating a new task, you have the option at the bottom of the page to save the settings as a template. This is particularly useful if you have multiple similar repositories to index, as it allows you to reuse the same configuration for future tasks. 

<img src="images/task_panel_templates_creation.png" width="">

Once that template is created, you can find it under the **Templates** tab.

<img src="images/task_panel_templates.png" width="">

#### Workers Tab

The Workers tab shows the status and performance of task workers, which are responsible for executing tasks such as file indexing.

- Provides a real-time overview of all active workers, their current workloads, and any tasks they are processing.
- You can monitor the health and activity of workers, ensuring that they are functioning properly.
- If workers are stuck, idle, or overloaded, you can take corrective actions (e.g., restart or adjust their configuration).
- Useful for optimizing resource allocation by distributing tasks evenly across workers.

<img src="images/task_panel_workers.png" width="">

### Create an Indexing Task

A default indexing task is available in the **Templates** tab in the Task Panel. The configuration for indexing tasks varies between Posix File Systems and S3-based object storage. The following sections will guide you through setting up basic indexing tasks for each. However, in both cases, start here:

🔴 &nbsp;From the **Task Panel** go to > **Task List** tab > select **New Index Task**:

<img src="images/task_panel_new_task_index.png" width="400">

| Field | Description |
| --- | --- |
| **Template** | Select a template if applicable |
| **ID** | Diskover will automatically assign an ID number to task, this field is non-editabled |
| **Name** | random name, not attached to anything

Enter the name of the [indexer]() you created and configured in the DiskoverAdmin panel. If the task you are creating is for an alternate scanner, then leave this field empty and enter the **Alt Scanner** name a few fields below<br><img src="images/diskoveradmin_index_name.png" width="500"> |
| **Description** | You can enter a description for this indexing task for personal use |
| **Crawl Directory(s)** | specify top path


Enter the mount, for example **/mnt/snfs2** |
| **Alt Scanner** | drop down coming? or scandir_s3, scandir_azure, scandir_offline_media

Only input something in this field if you are creating a task for an alternate scanner, which you will need to configure in the DiskoverAdmin panel first.<br><img src="images/diskoveradmin_menu_alt_cache.png" width="600"> |
| **Use DirCache** | Check this box to optimize future scanning, make sure to configure **DirCache** accordingly in the DiskoverAdmin panel |
| **CLI Options/Flags** | |
| **Auto Index Name** | Check this box to ... |
| **Custom Index Name** | diskover-test-current. no correlation with default

|
| **Overwrite Existing** | delete existing one and create new one |
| **Add to Index** | add stuff to existing index |
| **Use Default Config** | If only one indexer and name was left **Default**  |
| **Alternate Config Name** | use add config created in admin panel |
| **Schedule** | Using the drop-down lists for minute, hour, day of month, month or day of week, OR the **Custom Schedule** field, choose how often you want this task to repeat. |
| **Custom Schedule** | for expert users with chron schedule  overides |
| **Environment Vars** | |
| **Pre-Crawl Command** | before a task for example zip folder name, then move |
| **Pre-Crawl Command Args** | |
| **Post-Crawl Command** | unzip  |
| **Post-Crawl Command Args** | |
| **Retries** | If the task fails to complete successfully, enter the number of times to retry |
| **Retry Delay (sec)** | Enter the delay in between retries in seconds |
| **Timeout (sec)** | Enter the timeout xxx in seconds = kill it = not the same as time limit in admin |
| **Assigned Worker** | Enter the **DiskoverD** ... <br><img src="images/diskoveradmin_diskoverd_config.png" width="500"> |
| **Email** | Overrides what's in DiskoverD config. task panel will overide what's in admin panel |
| **Disabled** | Check this box to temporarily disable this task without deleting it |
| **Make Template** | If you wish to reuse the settings from this task, check this box to create a template that will be saved under the **Templates** tab |
| **Template Name** | Enter the custom template name you want to give to this group of settings |


#### Posix File System Indexing Task

> _Note:_ Paths are case-sensitive and must exist on the indexing task worker host. For Windows task worker, set the crawl directory to for example `H:\\Somefolder` or `C:\\` using double backslashes (escaped) or for UNC paths use `\\\\UNC\\share`.

🔴 &nbsp;Auto Index Name: unselect box

🔴 &nbsp;Custom Index Name: **diskover-_volumename_-%Y%m%d%H**

![Image: New Index Task Creation](images/image_tasks_task_panel_custom_index_name.png)

🔴 &nbsp;A schedule is required to create the indexing task. The example below > **Hour** > **1** will run the indexing task every day at 1:00 am.

![Image 1 - Configure Schedule for New Index Task](images/image_tasks_task_panel_schedule_indexing_task.png)

🔴 &nbsp;To use a custom schedule to set the volume to index every hour from 7 am to 11pm for example, enter the following in the  **Custom Schedule**  box:
```
0 7-23 * * *
```

![Image: Custom Schedule Configuration](images/image_tasks_task_panel_schedule_custom_indexing_task.png)

🔴 &nbsp;Then select **Create Task**:

![Image: Create Task](images/image_tasks_task_panel_create_task_button.png)

#### S3 Bucket Indexing Task



Indexing tasks for S3 buckets are slightly different than Posix File systems, the following outlines the configuration differences required in the **Create New Index Task** in the Task Panel.

Configure the following differences for indexing S3 buckets:

🔴 &nbsp;Crawl Directory(s): **s3://_bucketname_**

Where **bucketname** is the actual name of the S3 bucket desired for indexing, in the example below, the bucket name is **dps-offload:**

![Image: S3 Bucket Indexing Task Configuration](images/image_tasks_task_panel_s3_bucket_indexing_task_config.png)

🔴 &nbsp;If the [media info plugin](#media_info_plugin) is enabled in the default **config.yaml file**, then configure the following to disable the media info plugin for S3 based storage as described in [Task Configuration Files chapter](#task_config_files).

![Image: Disable Media Info Plugin for S3 Based Storage](images/image_tasks_task_panel_disable_media_info_plugin_for_s3_storage.png)

#### Non-S3 Bucket Indexing Task

Indexing tasks for non-AWS S3 buckets is slightly different than the previous section. The following outlines the configuration differences required for alternate credentials and endpoints.

In addition, you need to configure the **Environment Vars** for non-AWS S3 buckets:

🔴 &nbsp;Where **profile** is the name of **_desired_profile_**, as found in **/root/.aws/credentials** (where **_desired_profile_** in this example is **wasabi-us**)

🔴 &nbsp;Where **_alternate_endpoint.com_** is the URL of the S3 bucket (where **_alternate_endpoint.com_** in this example is **https://s3.us-central-1.wasabisys.com**)
```
AWS_PROFILE=profile,S3_ENDPOINT_URL=https://alternate_endpoint.com
```

![Image: Non S3 Bucket Indexing Task Configuration](images/image_tasks_task_panel_s3_bucket_alternate_endpoint.png)

#### Validate Task Worker Configuration

🔴 &nbsp;Ensure the presence of at least one online task worker under the **Status** column.

![Image: Tasks Management System](images/image_tasks_task_panel_management_task_workers.png)

### Create a Custom Task

🔴 &nbsp;From the **Task Panel** go to > **Task List** tab > select **New Custom Task**:

<img src="images/task_panel_new_task_custom.png" width="400">

🚧 Instructions to follow.
