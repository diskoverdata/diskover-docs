### Install Diskover-Web

➡️ Extract **diskover-web** folder.

➡️ Copy **diskover-web** folder to program files:

`Xcopy C:\tmp\diskover-web "C:\Program Files\Diskover-web" /E /H /C /I`

The image below shows the resulting folder structure:

![Image: Diskover-Web  Folder Structure](images/image_diskover_web_install_for_windows_folder_structure.png)

➡️ Move the file as follow:
```
cd 'C:\Program Files\Diskover-web\src\diskover\'
copy .\Constants.php.sample .\Constants.php
```

➡️ Edit **Constants.php**  (Diskover-web config file):

`C:\Program Files\Diskover-web\src\diskover\Constants.php`

➡️ Set **ES_HOSTS** to your Elasticsearch **hostname/ip**:

![Image: Set ES_HOST to Elasticsearch HOSTNAME](images/image_diskover_web_install_for_windows_set_eshost_to_elasticsearch_hostname.png)

➡️ Change to **Diskover-Web** public directory:

`cd "C:\Program Files\Diskover-web\public"`

➡️ Delete **index.php** file.

➡️ Create symbolic link from **index.php** to **dashboard.php**

➡️ Using command prompt as administrator:

`mklink "C:\Program Files\Diskover-web\public\index.php" "C:\Program Files\Diskover-web\public\dashboard.php"`

![Image: Create Symbolic PHP links](images/image_diskover_web_install_for_windows_create_symbolic_link_command_prompt_index_to_dashboard.png)

➡️ Using Windows PowerShell as administrator:

`cmd /c mklink "C:\Program Files\Diskover-web\public\index.php" "C:\Program Files\Diskover-web\public\dashboard.php"`

![Image: Using Windows PowerShell as an Administrator](images/image_diskover_web_install_for_windows_create_symbolic_link_with_powershell_index_to_dashboard.png)

```
cd 'C:\Program Files\Diskover-web\public\'
copy .\costanalysis.txt.sample .\costanalysis.txt
copy .\smartsearches.txt.sample .\smartsearches.txt
copy .\customtags.txt.sample .\customtags.txt
copy .\extrafields.txt.sample .\extrafields.txt
```

➡️ Restart the NGINX  Web server.

➡️ Open Windows PowerShell as administrator and run:

`PS C:\Program Files\Nginx\nginx-1.19.6> .\nginx.exe`
