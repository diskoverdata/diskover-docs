#### Configure the Elasticsearch Settings

🔴 &nbsp;Set JVM configuration (mem heap size).

🔴 &nbsp;Edit the following file **C:\ProgramData\Elastic\Elasticsearch\config\jvm.options**

🔴 &nbsp;Set **Xms8g** to 50% of memory, up to 32g max:
```
-Xms8g
```
<img src="images/image_elasticsearch_install_for_windows_config_set_xms8g.png" width="700">

🔴 &nbsp;Edit the following file **C:\ProgramData\Elastic\Elasticsearch\config\elasticsearch.yml** and change:
```
bootstrap.memory_lock: true
```
<img src="images/image_elasticsearch_install_for_windows_config_bootstrap_memory.png" width="700">

🔴 &nbsp;Restart the Elasticsearch service and then open a **cmd prompt**.
```
services.msc
```
![Image: Elasticsearch  Settings Configuration (Part 3)](images/image_elasticsearch_install_for_windows_config_services_msc.png)

🔴 &nbsp;Select  **Elasticsearch**  and restart.

![Image: Elasticsearch  Settings Configuration (Part 4)](images/image_elasticsearch_install_for_windows_restart_elasticsearch.png)
