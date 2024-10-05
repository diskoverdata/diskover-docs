___
## Multi-Node Elasticsearch Setup
___

This section will guide you through setting up an Elasticsearch cluster with multiple nodes.

### Requirements

- Each ES node needs to be installed on its own system.

- All nodes must be able to communicate with each other. To test this, install Elasticsearch on the nodes, start the services, and use telnet to connect to each host.
    ```
    telnet <es-ip> 9200
    ```

    If this is successful, you should see the following:

    ```
[root@es1 ~]# telnet 192.168.64.19 9200
Trying 192.168.64.19...
Connected to 192.168.64.19.
Escape character is '^]'.
If you see a Connection Refused, you should check to see if SELinux and Firewalld are disabled and off, respectively






