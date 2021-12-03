___
### Install Diskover Indexers for Mac

The following outlines installing the Diskover indexer on MacOS.

#### Install Python 3.x on MacOS

🔴 &nbsp;Go to [https://www.python.org/](https://www.python.org/)

🔴 &nbsp;Select the **Downloads** menu.

🔴 &nbsp;Click the **Python** **3.x** download button.

![Image: Download Python for MacOS](images/image_indexers_install_for_mac_python_website_download.png)

🔴 &nbsp;Launch the installer – Welcome Introduction - click **Continue**:

![Image: Run Python  Installer](images/image_indexers_install_for_mac_python_installer_run.png)

🔴 &nbsp;Read Me - click **Continue**:

![Image: Python Installer Read Me](images/image_indexers_install_for_mac_python_installer_readme.png)

🔴 &nbsp;History and License - click **Continue**:

![Image: Python Installer History and License](images/image_indexers_install_for_mac_python_installer_license.png)

🔴 &nbsp;Python license – click **Agree**:

![Image: Python Installer License Agreement](images/image_indexers_install_for_mac_python_installer_license_agreement.png)

🔴 &nbsp;Select the destination if prompted – click **Continue**:

![Image: Python Installer Select a Destination](images/image_indexers_install_for_mac_python_installer_select_destination.png)

🔴 &nbsp;Begin the installation by clicking **Install**:

![Image: Python Installation Type](images/image_indexers_install_for_mac_python_installer_install_type.png)

🔴 &nbsp;Installation successfully completed acknowledgement – click **Close**:

![Image: Python Installation Completed Acknowledgement](images/image_indexers_install_for_mac_python_installer_install_completed.png)

🔴 &nbsp;Open your **Applications** and select **Phython 3.x** folder.

Python will be installed in **/usr/bin/python3**

🔴 &nbsp;A new folder is created under **/Applications/Python 3.x** change that with your exact version number, ex: 3.9:

<img src="images/image_indexers_install_for_mac_python_installer_change_version_number.png" width="850">

🔴 &nbsp;As the instructions said in the last installation panel, you need to run the **Install Certificates.command** to install the SSL certificates needed by Python.

🔴 &nbsp;Double-click on **Install Certificates.command** to run:

<img src="images/image_indexers_install_for_mac_python_installer_phython_certificates.png" width="750">

#### Install Diskover Indexer

🔴 &nbsp;Copy **diskover** file to **/tmp**

🔴 &nbsp;Extract **diskover** folder.

🔴 &nbsp;Copy **diskover** folder to **/Applications/Diskover.app/Contents/MacOS/**
```
cp -R diskover /Applications/Diskover.app/Contents/MacOS/
```

🔴 &nbsp;Change directory to **diskover** location:
```
cd /Applications/Diskover.app/Contents/MacOS/diskover/
```

🔴 &nbsp;Install Python dependencies required by Diskover indexer:
```
Python3 -m pip install -r requirements.txt
```

🔴 &nbsp;Copy default/sample configs to **~/.config/**
```
cd /Applications/Diskover.app/Contents/MacOS/diskover/configs
```
```
cp -R diskover* ~/.config/
```

🔴 &nbsp;Edit **diskover** config file:
```
vi  ~/.config/diskover/config.yaml
```

🔴 &nbsp;Configure indexer to create indexes in your Elasticsearch endpoint in the following section of the **config.yaml** file:
```
databases:
    elasticsearch:
```

![Image: Create Indexes in Elasticsearch Endpoint](images/image_indexers_install_create_indexes_in_elasticsearch_endpoint_linux_and_mac.png)

#### Create Index of File System

🔴 &nbsp;To run the Diskover indexing process from a shell prompt:
```
cd /Applications/Diskover.app/Contents/MacOS/diskover/
python3 diskover.py -i diskover-<indexname> <storage_top_dir>
```
