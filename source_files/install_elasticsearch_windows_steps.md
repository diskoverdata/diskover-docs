#### Install Elasticsearch

Elasticsearch Windows MSI install instructions can be found here:  

<a href=“https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html”>https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html</a>

🔴 &nbsp;Download the Windows MSI installer: 

<a href=“https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2.msi”>https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2.msi</a>

🔴 &nbsp;Select **Use default directories**:

<img src="images/image_elasticsearch_install_for_windows_default_install_locations.png" width=“700">

<img src="images/image_elasticsearch_install_for_windows_default_install_locations.png" width=“400">

🔴 &nbsp;Select **Install as a service**:

<img src="images/image_elasticsearch_install_for_windows_install_as_a_service.png" width=“700">
                                                                         
![Image: Install Elasticsearch as a Service](images/image_elasticsearch_install_for_windows_install_as_a_service.png)

🔴 &nbsp;Select **This is the first master in new cluster**:

<img src="images/image_elasticsearch_install_for_windows_new_cluster_config" width=“700">

![Image: Elasticsearch New Cluster Creation](images/image_elasticsearch_install_for_windows_new_cluster_config.png)

🔴 &nbsp;No **X-Pack Plugins**  selected:

<img src="images/image_elasticsearch_install_for_windows_unselect_plugins.png" width=“700">
                                                                         
![Image: Elasticsearch X-Pack Plugins](images/image_elasticsearch_install_for_windows_unselect_plugins.png)

🔴 &nbsp;Select **Basic** License:

<img src="images/image_elasticsearch_install_for_windows_select_basic_license.png" width=“700">

![Image: Elasticsearch License Selection](images/image_elasticsearch_install_for_windows_select_basic_license.png)

🔴 &nbsp;Installation completed:

<img src="images/image_elasticsearch_install_for_windows_install_completed.png" width=“700">
                                                                         
![Image: Elasticsearch Installation Completed](images/image_elasticsearch_install_for_windows_install_completed.png)

You can also use **curl** in a Windows command prompt and make a **GET** request to the Elasticsearch cluster to check if the service is running on your local server.

>_Note:_ **curl** must first be downloaded and installed on your Windows machine before you use it to make HTTP requests.

🔴 &nbsp;Open a command prompt as administrator:
```
curl -X GET "localhost:9200/"
```

![Image: Open Command Prompt as an Administrator](images/image_elasticsearch_install_for_windows_check_cluster_health_on_local_server.png)

🔴 &nbsp;Alternatively, you can open a Web browser to http://localhost:9200/:

![Image: Open Web Browser to localhost:9200](images/image_elasticsearch_install_for_windows_check_cluster_health_by_opening_localhost_9200.png)
