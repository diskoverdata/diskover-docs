<p id="config_initial"></p>

## Initial Configuration

### Overview

This section describes the foundational setup to get things running without much complexity. Keep in mind that you can always go back and adjust any of your settings at any time.

### Access DiskoverAdmin

You have reached THE big moment. Paste this link in a browser to access DiskoverAdmin and complete the configuration process for all Diskover's components and plugins.

[http://diskover-web:8000/diskover_admin/config/](http://diskover-web:8000/diskover_admin/config/)

<img src="images/diskoveradmin_menu.png" width="">

### DiskoverAdmin Wizard

The DiskoverAdmin service allows for the fine-tuning of Diskover's core components and plugins. The setup wizard will guide you through the first part of the initial configuration of the DiskoverAdmin services, which can be further customized later.

🔴 &nbsp;Access the Wizard by selecting **System** → **Meta** → **Wizard** → **Setup**:

<img src="images/diskoveradmin_menu_wizard.png" width="200"> 

#### Elasticsearch Connection Configuration for Diskover-Web

⚠️ &nbsp;Note that Diskover-Web and the scanners can point to two different Elasticsearch hosts, hence the next steps.

🔴 &nbsp;Input the **IP/AWS endpoint/Elastic Cloud endpoint** where your Elasticsearch is running in the **host** field. If you have a clustered ES setup, click **+ Add Item** to list your other IPs/endpoints.

🔴 &nbsp;Keep the port at **9200** unless your cluster runs on another port.

🔴 &nbsp;Enable **HTTPS** if your Elasticsearch uses an encrypted protocol. Otherwise, keep it unchecked for **HTTP**.

🔴 &nbsp;If you select **HTTPS**, enter your Elasticsearch username & password.

🔴 &nbsp;Click **Test** to see if Diskover can connect to your Elasticsearch system. The page will refresh and output the health of your cluster at the top of the page (number of shards, nodes, etc.):

<img src="images/es_connection_test.png" width="500"> 

🔴 &nbsp;If the test is successful, click **Save & Continue**, otherwise review the information you entered.

#### Elasticsearch Connection Configuration for Scanners

🔴 &nbsp;**Copy connection settings from Diskover-Web?**:
- If your Diskover-Web and scanners point to the same ES host, click **Yes**.
- If your Diskover-Web and scanners point to different ES hosts, click **No**, go through each field, and click:
    - **Test** to test your connection.
    - **Save & Continue** once done.

#### License

This is the point where you need to send your license request and the wizard partially automates this task for you. Note that if you skip this part for now, you can send a [license request](#software_activation) at any time.

🔴 &nbsp;Click on the **Request License** button and fill out the required fields:

- **Email Address**: please use your corporate email.
- **Edition**: the [solution](https://diskoverdata.com/solutions/) you subscribed to or want to try for your POC.
- **Elasticsearch Nodes**: the number of nodes included in your subscription plan - POCs are for 1 node only.
- **Comments**: anything that can help us, like your company name.

✏️  &nbsp;Your license is be attached to your [hardware ID](#hd_id), which will be automatically generated and sent to us during this process.

🔴 &nbsp;Click **Send Request**.

<img src="images/wizard_license_request.png" width=""> 

🔴 &nbsp;You should receive your license within 24 hours, usually much less than 24 hours or a little more if you send your request during a weekend. You have 2 choices at this point:

- Pause and wait to receive the license to continue.
- Click **Skip** and come back once you receive the license.

🔴 &nbsp;Once you receive the license, copy/paste the keys as instructed on the License Configuration page.

🔴 &nbsp;Click **Test** if you want to validate your license, example below, then click **Save & Continue**.

<img src="images/wizard_license_test.png" width="350"> 

#### Time Zone

🔴 &nbsp;Using the dropdown list, select your **Time Zone**. More customization can be done later regarding time zones, click **Save & Continue**.

🔴 &nbsp;Click the box to enable your time zone selection, click **Save & Continue**.

#### Message Queue Configuration | RabbitMQ or Amazon MQ

This section is only needed if you are planning to use [File Action](#config_plugins_file_actions) plugins.

🔴 &nbsp;Follow the instructions on this page, click **Test** to check the connection, and then **Save & Continue**, or click **Skip**. You can [configure or edit](#config_system) at any time.

⚠️ &nbsp;The basic setup using the wizard is not completed. CONGRATS!

### API

🔴 &nbsp;Now navigate to **System** → **API**.

<img src="images/diskoveradmin_menu_api.png" width="200"> 

🔴 &nbsp;The **API Host** needs to be the IP address where Diskover-Web is running.

🔴 &nbsp;Specify an **API Port** if different than the default of **8000**.

### Diskover Scanners/Workers

🔴 &nbsp;Navigate to **Diskover** → **Configurations** → **Default**.

🔴 &nbsp;Check **Enable Log File** and modify the **Log File Location** as needed:

<img src="images/diskover_configuration_log_file.png" width=""> 

### DiskoverD

🔴 &nbsp;Navigate to **DiskoverD** → **Default**.

🔴 &nbsp;Check **Enable Log File** and modify the **Log File Location** as needed:

<img src="images/diskoverd_configuration_log_file.png" width=""> 

### Schedule Your First Scan

You are now ready to schedule and then run your first scan! Go to the next section, [Tasks Management via Task Panel](#task_panel), for the details.
