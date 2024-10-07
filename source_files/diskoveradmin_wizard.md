___
## Initial DiskoverAdmin Setup
___

### Access DiskoverAdmin

The DiskoverAdmin service enables fine-tuning of settings for Elasticsearch, Diskover-Web, and worker services, which were previously set up within PHP files on the server. This update simplifies configuration and maintenance, eliminating the need for a Linux sysadmin to manage your Diskover environment.

You have reached THE big moment. Paste this link in a browser to access DiskoverAdmin and complete the configuration process for all Diskover's components and plugins.

[http://diskover-web:8000/diskover_admin/config/](http://diskover-web:8000/diskover_admin/config/)

| <img src="images/diskoveradmin_menu.png" width=""> | 🟨 Can't find what you are looking for? Select **Search** and type a simple word to find where a feature is located in the DiskoverAdmin menu, or refer to the [**Navigating the DiskoverAdmin Panel**]() section. |


### DiskoverAdmin Wizard Setup

🔴 &nbsp;The following will walk you through setting up the basic DiskoverAdmin services. Under Configuration, select **System** > **Meta** > **Wizard** > **Setup**:

<img src="images/diskoveradmin_menu_wizard.png" width="250"> 

#### Elasticsearch Basic Settings

The following will set the basic parameters for Elasticsearch. Note that you can modify any of these later on.

🔴 &nbsp;Input the **IP/AWS endpoint** where your Elasticsearch is running. If you have a clustered ES setup, click **+ Add Item** to list your other IPs.

🔴 &nbsp;Keep the port at **9200**.

🔴 &nbsp;Enable **HTTPS** your Elasticsearch uses an encrypted protocol. Otherwise, keep it unchecked for **HTTP**.

🔴 &nbsp;If you select **HTTPS**, enter your Elasticsearch username & password.

🔴 &nbsp;Click **Test** to see if Diskover can connect to your Elasticsearch system. The page will refresh and output the health of your cluster, number of shards, nodes, etc. If this completes successfully, you're ready to proceed forward.

### Diskover-Web Basic Settings

You can copy the settings from Diskover Web to make the setup easier. Be sure to review them!
After each section have been tested, be sure to click Save & Continue
More info on how to generate a license: Diskover Installation Guide
You’re finished when you reach Basic setup is complete
Once you’re finished with the Diskover Admin Wizard, click System → API:


API Host needs to be the IP address where Diskover Web is running
Specify an API Port if you have a different port than the default of 8000

Enable logging for the Diskover Web & Diskoverd services:
Web: Diskover → Configurations → Default
Check Enable Log File and change the logging output if you have a custom logging location

Diskoverd: Diskoverd → Default
Check Enable Log File and change the logging output if you have a custom logging location

Change the timezone, if needed
