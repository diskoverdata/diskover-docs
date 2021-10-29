### Install Elasticsearch

Elasticsearch Windows MSI install instructions can be found here:  

<a href=“https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html”>https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html</a>

➡️ Download the Windows MSI installer: 

<a href=“https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2.msi”>https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2.msi</a>

➡️ Select **Use default directories**:

![Image: Elasticsearch Default Install Locations](images/image_elasticsearch_install_for_windows_default_install_locations.png)

➡️ Select **Install as a service**:

![Image: Install Elasticsearch as a Service](images/image_elasticsearch_install_for_windows_install_as_a_service.png)

➡️ Select **This is the first master in new cluster**:

![Image: Elasticsearch New Cluster Creation](images/image_elasticsearch_install_for_windows_new_cluster_config.png)

➡️ No **X-Pack Plugins**  selected:

![Image: Elasticsearch X-Pack Plugins](images/image_elasticsearch_install_for_windows_unselect_plugins.png)

➡️ Select **Basic** License:

![Image: Elasticsearch License Selection](images/image_elasticsearch_install_for_windows_select_basic_license.png)

➡️ Installation completed:

![Image: Elasticsearch Installation Completed](images/image_elasticsearch_install_for_windows_install_completed.png)

You can also use **curl** in a Windows command prompt and make a **GET** request to the Elasticsearch cluster to check if the service is running on your local server.

>_Note:_ **curl** must first be downloaded and installed on your Windows machine before you use it to make HTTP requests.

➡️ Open a command prompt as administrator:
```
curl -X GET "localhost:9200/"
```

![Image: Open Command Prompt as an Administrator](images/image_elasticsearch_install_for_windows_check_cluster_health_on_local_server.png)

➡️ Alternatively, you can open a Web browser to http://localhost:9200/:

![Image: Open Web Browser to localhost:9200](images/image_elasticsearch_install_for_windows_check_cluster_health_by_opening_localhost_9200.png)
