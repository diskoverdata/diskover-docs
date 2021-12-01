___
## Kibana Installation (Optional)

If you would rather user Kibana instead of thea Diskover-Web user interface.

🔴 &nbsp;Install Kibana:
```
yum install -y https://artifacts.elastic.co/downloads/kibana/kibana-7.10.2-x86_64.rpm
vi /etc/kibana/kibana.yml
```

🔴 &nbsp;Uncomment and set the following line:
```
server.host: "<host ip>"
```

🔴 &nbsp;Uncomment and set the following line if Elasticsearch is not listening on localhost:
```
elasticsearch.hosts: ["http://<es host ip>:9200"]
```

🔴 &nbsp;Set firewall rules:
```
firewall-cmd --add-port=5601/tcp --permanent
firewall-cmd --reload
systemctl enable kibana.service
systemctl start kibana.service
systemctl status kibana.service
```

For securing Elasticsearch and Kibana, follow this user guide to set up security, as by default Elasticsearch has no security enabled:

[https://www.elastic.co/guide/en/elasticsearch/reference/7.x/secure-cluster.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/secure-cluster.html)
