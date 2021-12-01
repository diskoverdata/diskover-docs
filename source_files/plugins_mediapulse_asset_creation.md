___
Xytech MediaPulse Asset Creation Plugin
1.1.	Xytech MediaPulse Asset Creation Plugin
Post facilities often have customer assets stored on LTO tape media. However, these assets are difficult to discover within Xytech MediaPulse if there is no MediaPulse Asset ID in the customers vault of assets. The plugin is designed to use the Diskover indexer to discover newly restored customer assets from any media. The assets are restored into a folder with naming convention CustomerNumber_CustomerName. 

The MediaPulse Asset Creation Plugin then uses the Xytech API to create an asset for the customer in the vault library. The path location is added to the asset within MediaPulse and the Asset # is assigned as a tag to the file/object within the Diskover index.

1.2.	Install Xytech MediaPulse Asset Creation Plugin 
➡️ Extract DiskoverXytechPlugin-master.zip

cd /tmp
unzip DiskoverXytechPlugin-master.zip
cd /tmp/DiskoverXytechPlugin-master.zip

➡️ Make destination directories

mkdir /root/.config/diskover_xytech_asset
mkdir /opt/diskover/plugins_postindex/xytech_plugin


➡️ List plugin contents

ls -l /tmp/DiskoverXytechPlugin-master
![image](https://user-images.githubusercontent.com/78566515/144150293-c2a94068-4c9a-41e9-83b3-9627d1935245.png)
