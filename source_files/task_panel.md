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

🔴 &nbsp;**From the DiskoverAdmin panel**: Click on **DiskoverAdmin** and you'll be redirected to the main Diskover user interface:

<img src="images/diskoveradmin_menu_home.png" width="250">

🔴 &nbsp;**From the Diskover user interface**: click the ⛭ in the upper right corner → **Task Panel**

<img src="images/task_panel_access.png" width="">

#### Task Panel Options

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

#### Templates Tab

Default indexing tasks are available in the **Templates** tab of the Task Panel, for both [Posix File System Indexing]() and [S3 Bucket Indexing](). 

Also, when creating a new task, you have the option at the bottom of the page to save the settings as a template. This is particularly useful if you have multiple similar repositories to index, as it allows you to reuse the same configuration for future tasks. 

<img src="images/task_panel_templates_creation.png" width="">

Once that template is created, you can find it under the **Templates** tab.

<img src="images/task_panel_templates.png" width="">

#### Workers Tab

The Workers tab shows the status and performance of task workers, which are responsible for executing tasks such as file indexing.

- Provides a real-time overview of all active workers, their current workloads, and any tasks they are processing.
- You can monitor the health and activity of workers, ensuring that they are functioning properly.
- You can disable, enable, or remove a worker.
- Useful for optimizing resource allocation by distributing tasks evenly across workers.

<img src="images/task_panel_workers.png" width="">

### Task Fields Description

| Field | Description |
| --- | --- |
| **Template** | Select a template whenever possible to pre-populate some of the fields. |
| **ID** | Diskover will automatically assign an ID number to a task. This field is non-editable. |
| **Name** | Assing a custom name to your **task**. Note that this name is not related to any configuration in the DiskoverAdmin panel. |
| **Description** | You can enter a detailed description for this indexing task. |
| **Crawl Directory(s)** | Specify top path where to start the crawl, for example: **/mnt/snfs2** or **/home** |
| **Alt Scanner** | Enter the name of an [alternate indexer]() if applicable for this task, for example: scandir_s3, scandir_azure, scandir_offline_media. You can [configure your alternate indexers via the DiskoverAdmin panel]().<br><img src="images/diskoveradmin_menu_alt_cache.png" width="800"> |
| **Use DirCache** | Check this box to optimize future scanning, make sure to [configure DirCache accordingly in the DiskoverAdmin panel](). Note that this box is just a shortcut as entering **scandir_dircache** in the field above will do the same. |
| **CLI Options/Flags** | Allows users to fine-tune tasks directly through additional parameters, providing more control over how the indexing runs. Follow the help instructions in the interface. |
| **Auto Index Name** | Check this box for Diskover to assign a name to your index using the format **diskover-_toppath_-_datetime_** |
| **Custom Index Name** | Assign a custom name to your **index** and read the help text in the interface for guidance. Note that this name has no correlation with the [indexer's name in the DiskoverAdmin panel](). |
| **Overwrite Existing** | Checking that box will delete any existing index with the same name and create a new index. |
| **Add to Index** | To add paths to an existing index. Requires a custom index name for this to work. |
| **Use Default Config** | This field correlates with the configured indexer(s) in the DiskoverAdmin Panel. Check this box if you only have one indexer for which the name was left at **Default**. |
| **Alternate Config Name** | Enter a [custom indexer name/config] that you created in the DiskoverAdmin panel. |
| **Schedule** | Using the drop-down lists, schedule the frequency at which you want this task to run OR use the **Custom Schedule** field. |
| **Custom Schedule** | Any entry in this field will overide values in the **Schedule** fields. This field is for expert users who want to use a chron schedule. |
| **Environment Vars** | Provide a flexible way to configure tasks and their behavior at runtime. They allow users to manage dynamic settings like paths, credentials, and system configurations without needing to modify the other settings. |
| **Pre-Crawl Command** |  It specifies a command/action to run before the crawling task starts, for example, zip files, cleanup, etc. Refer to the help in the interface. |
| **Pre-Crawl Command Args** | This field is used to specify arguments/parameters that are passed to the pre-crawl command. It provides additional information that the command may need to execute properly. |
| **Post-Crawl Command** | It specifies a command/action to run after the crawl, for example, unzip, etc. Refer to the help in the interface. |
| **Post-Crawl Command Args** | This field is used to specify arguments/parameters that are passed to the post-crawl command. It provides additional information that the command may need to execute properly. |
| **Retries** | Enter the number of times to retry running the task if the task fails to complete successfully. |
| **Retry Delay (sec)** | Enter the delay, in seconds, in between retries. |
| **Timeout (sec)** | Enter the amount of time, in seconds, after which to stop a task running long. Note that this field is different than [**Time Limit for Long-Running Tasks** in DiskoverD in the DiskoverAdmin panel]. |
| **Assigned Worker** | Select the appropriate **DiskoverD** config for this task.<br><img src="images/diskoveradmin_diskoverd_config.png" width="200"> |
| **Email** | Enter an email address for the notifications. This will override the email that you might have input in DiskoverAdmin > DiskoverD config. |
| **Disabled** | Check this box to disable this task without deleting it. |
| **Make Template** | If you wish to reuse the settings from this task, check this box to create a template that will be saved under the **Templates** tab. |
| **Template Name** | Enter the custom template name you want to give to this group of settings. |

### Validate Task Worker Presence

🔴 &nbsp;Ensure the presence of at least one online task worker under the **Status** column.

![Image: Tasks Management System](images/task_panel_worker_status.png)

### Create an Indexing Task

This is your last step to start your first index! Keep in mind that some configurations may still require customization, even if we haven’t reached those steps yet.

The configuration for indexing tasks varies between **Posix File Systems** and **S3-based object storage**.

 The following sections will guide you through setting up basic indexing tasks for each.

 🔴 &nbsp;From the **Task Panel** go to > **Task List** tab > select **New Index Task**:

<img src="images/task_panel_new_task_index.png" width="400">

#### Posix File System Indexing Task

🔴 &nbsp;Select **New Index Task** in the **Task List** tab:

<img src="images/task_panel_create_new_task.png" width="">

🔴 &nbsp;**Name**: **_volumename_**, for this example, **snfs2**

🔴 &nbsp;**Crawl Directory(s)**: **/mnt/_volumedir_** where volumedir is the volume mount point, for this example, **/mnt/snfs2**

🟨 &nbsp;Please note:

- The paths are case-sensitive and must exist on the indexing task worker host. 
- For Windows task workers, set the crawl directory to, for example, **H:\\Somefolder** or **C:\\** using double backslashes to escape, or for UNC paths use **\\\\UNC\\share**

🔴 &nbsp;**Auto Index Name**: Make sure the box is unchecked.

🔴 &nbsp;**Custom Index Name**: For this example, **diskover-snfs2-%Y%m%d%H**

![Image: New Index Task Creation](images/task_panel_new_index_part1.png)

🔴 &nbsp;**Schedule**: A schedule is required to create the indexing task. The example below > **Hour** > **1** will run the indexing task every day at 1:00 am.

🔴 &nbsp;**Custom Schedule**: To use a custom schedule to set the volume to index every hour from 7 am to 11pm, for example, enter the following **0 7-23 \* \* \***. Note that any entries in this field will override values entered in **Schedule**.

![Image: Configure Schedule for New Index Task](images/task_panel_new_index_part2.png)

🔴 &nbsp;Then select **Create Task** at the bottom of the page:

#### S3 Bucket Indexing Task

Indexing tasks for S3 buckets are slightly different than Posix File systems, the following outlines the configuration differences required when creating a new index task**.

Configure the following differences for indexing S3 buckets:

🔴 &nbsp;**Crawl Directory(s)**: **s3://_bucketname_** where **bucketname** is the actual name of the S3 bucket desired for indexing, in this example, the bucket name is **dps-offload**:

🔴 &nbsp;**Alt Scanner**: Select **scandir_s3**:

![Image: S3 Bucket Indexing Task Configuration](images/task_panel_new_index_s3.png)

#### Non-AWS S3 Bucket Indexing Task

Indexing tasks for non-AWS S3 buckets is slightly different than the previous section. The following outlines the configuration differences required for alternate credentials and endpoints.

🔴 &nbsp;**Environment Vars**: In addition, you need to configure that field for non-AWS S3 buckets:

- Where **profile** is the name of **_desired_profile_**, as found in **/root/.aws/credentials** (where **_desired_profile_** in this example is **wasabi-us**)

- Where **_alternate_endpoint.com_** is the URL of the S3 bucket (where **_alternate_endpoint.com_** in this example is **https://s3.us-central-1.wasabisys.com**)
```
AWS_PROFILE=profile,S3_ENDPOINT_URL=https://alternate_endpoint.com
```

![Image: Non S3 Bucket Indexing Task Configuration](images/task_panel_new_index_s3_non-aws.png)


### Create a Custom Task

🔴 &nbsp;From the **Task Panel** go to > **Task List** tab > select **New Custom Task**:

<img src="images/task_panel_new_task_custom.png" width="400">

🚧 Instructions to follow.

### Existing Tasks Management

Once a task is created, you can further manage it from the **Task List** view.

<img src="images/task_panel_edit_task.png" width="350">
