___
### Create an Index of an Azure Storage Blob

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

Included in the alt scanners directory is a Python module **scandir_azure** for scanning Microsoft Azure Storage Blobs using the Azure Python client libraries.

🔴 &nbsp;To use the **azure** alternate scanner, first install the **azure** Python modules:

```
pip3 install azure-storage-blob azure-identity
```

🔴 &nbsp;Copy azure alt scanner default/sample config file:
```
cd /opt/diskover/configs_sample/diskover_scandir_azure
mkdir ~/.config/diskover_scandir_azure
cp config.yaml ~/.config/diskover_scandir_azure/
```

🔴 &nbsp;Edit azure alt scanner config file:
```
vim ~/.config/diskover_scandir_azure/config.yaml
```

🔴 &nbsp;Scan and index a **azure** container _**containername**_ using an auto-index name:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_azure az://containername
```
> _Note:_ **containername** is optional, you can scan all containers in the storage account using **az://**

🔴 &nbsp;Create an azure index with index name **diskover-azure-containername**:

```
cd /opt/diskover
python3 diskover.py -i diskover-azure-containername --altscanner scandir_azure az://containername
```

#### Additional Azure Blob Index Fields

🔴 &nbsp;Additional ES index fields (keywords) are added for Azure blobs and can be added to diskover-web's config file to **EXTRA_FIELDS** setting:

```
 const EXTRA_FIELDS = [
     'Azure tier' => 'azure_tier',
     'Azure etag' => 'azure_etag'
];
```
