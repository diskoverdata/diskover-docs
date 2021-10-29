## Install Diskover Indexer(s) for Mac

The following outlines installing the Diskover indexer on MacOS.

### Install Python 3.x on MacOS

➡️ Go to <a href=“https://www.python.org/”>https://www.python.org/</a>

➡️ Select the **Downloads** menu.

➡️ Click the **Python** **3.x** download button.

![Image: Download Python for MacOS](images/image_indexers_install_for_mac_python_website_download.png)

➡️ Launch the installer – Welcome Introduction - click **Continue**:

![Image: Run Python  Installer](images/image_indexers_install_for_mac_python_installer_run.png)

➡️ Read Me - click **Continue**:

![Image: Python Installer Read Me](images/image_indexers_install_for_mac_python_installer_readme.png)

➡️ History and License - click **Continue**:

![Image: Python Installer History and License](images/image_indexers_install_for_mac_python_installer_license.png)

➡️ Python license – click **Agree**:

![Image: Python Installer License Agreement](images/image_indexers_install_for_mac_python_installer_license_agreement.png)

➡️ Select the destination if prompted – click **Continue**:

![Image: Python Installer Select a Destination](images/image_indexers_install_for_mac_python_installer_select_destination.png)

➡️ Begin the installation by clicking **Install**:

![Image: Python Installation Type](images/image_indexers_install_for_mac_python_installer_install_type.png)

➡️ Installation successfully completed acknowledgement – click **Close**:

![Image: Python Installation Completed Acknowledgement](images/image_indexers_install_for_mac_python_installer_install_completed.png)

➡️ Open your **Applications** and select **Phython 3.x** folder.

Python will be installed in **/usr/bin/python3**

➡️ A new folder is created under **/Applications/Python 3.x** change that with your exact version number, ex: 3.9:

![Image: Change Python Folder’s Version Number](images/image_indexers_install_for_mac_python_installer_change_version_number.png)

➡️ As the instructions said in the last installation panel, you need to run the **Install Certificates.command** to install the SSL certificates needed by Python.

➡️ Double-click on **Install Certificates.command** to run:

![Image: Install Python Certificates](images/image_indexers_install_for_mac_python_installer_phython_certificates.png)

### Install Diskover Indexer

➡️ Copy **diskover** file to **/tmp**

➡️ Extract **diskover** folder.

➡️ Copy **diskover** folder to **/Applications/Diskover.app/Contents/MacOS/**
```
cp -R diskover /Applications/Diskover.app/Contents/MacOS/
```

➡️ Change directory to **diskover** location:
```
cd /Applications/Diskover.app/Contents/MacOS/diskover/
```

➡️ Install Python dependencies required by Diskover indexer:
```
Python3 -m pip install -r requirements.txt
```

➡️ Copy default/sample configs to **~/.config/**
```
cd /Applications/Diskover.app/Contents/MacOS/diskover/configs
```
```
cp -R diskover* ~/.config/
```

➡️ Edit **diskover** config file:
```
vi  ~/.config/diskover/config.yaml
```

➡️ Configure indexer to create indexes in your Elasticsearch endpoint in the following section of the **config.yaml** file:
```
databases:
    elasticsearch:
```

![Image: Create Indexes in Elasticsearch Endpoint](images/image_indexers_install_create_indexes_in_elasticsearch_endpoint_linux_and_mac.png)

### Create Index of File System

➡️ To run the Diskover indexing process from a shell prompt:
```
cd /Applications/Diskover.app/Contents/MacOS/diskover/
python3 diskover.py -i diskover-<indexname> <storage_top_dir>
```
