#### Install Elasticsearch

Elasticsearch Windows MSI install instructions can be found here:  

<a href=“https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html”>https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html</a>

🔴 &nbsp;Download the Windows MSI installer: 

<a href=“https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2.msi”>https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2.msi</a>

🔴 &nbsp;Select **Use default directories**:

<img src="images/image_elasticsearch_install_for_windows_default_install_locations.png" width="750">

🔴 &nbsp;Select **Install as a service**:

<img src="images/image_elasticsearch_install_for_windows_default_install_locations.png" width="750">

🔴 &nbsp;Select **This is the first master in new cluster**:

<img src="images/image_elasticsearch_install_for_windows_default_install_locations.png" width="750">

🔴 &nbsp;No **X-Pack Plugins**  selected:

<img src="images/image_elasticsearch_install_for_windows_unselect_plugins.png" width="750">

🔴 &nbsp;Select **Basic** License:

<img src="images/image_elasticsearch_install_for_windows_select_basic_license.png" width="750">

🔴 &nbsp;Installation completed:

<img src="images/image_elasticsearch_install_for_windows_install_completed.png" width="750">


You can also use **curl** in a Windows command prompt and make a **GET** request to the Elasticsearch cluster to check if the service is running on your local server.

>_Note:_ **curl** must first be downloaded and installed on your Windows machine before you use it to make HTTP requests.

🔴 &nbsp;Open a command prompt as administrator:
```
curl -X GET "localhost:9200/"
```
<img src="images/image_elasticsearch_install_for_windows_check_cluster_health_on_local_server.png" width="750">

🔴 &nbsp;Alternatively, you can open a Web browser to http://localhost:9200/:

<img src="images/image_elasticsearch_install_for_windows_check_cluster_health_by_opening_localhost_9200.png" width="750">
