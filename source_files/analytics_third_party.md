<p id="analytics_third_party"></p>

___
### Third-Party Analytics

You can optionally use third-party analytical tools, such as [Kibana](https://www.elastic.co/kibana), [Tableau](https://www.tableau.com), [Grafana](https://grafana.com), [PowerBI](https://www.microsoft.com/en-us/power-platform/products/power-bi), and others, to read the Elasticsearch metadata library besides Diskover-Web. Diskover does not technically support these optional tools, and only the installation of Kibana is described in this section.

#### Kibana v8

- Note that only Kibana v8 can be used with Elasticsearch v8.
- Additional information on installating [Kibava v8 via RPM repository](https://www.elastic.co/guide/en/kibana/8.14/rpm.html#rpm-repo).
- For securing Elasticsearch and Kibana, [follow this user guide to set up security](https://www.elastic.co/guide/en/elasticsearch/reference/8.15/secure-cluster.html), as by default, Elasticsearch has no security enabled: 

🔴 &nbsp;Get Kibana:
```
name=Kibana repository for 8.x packages
baseurl=https://artifacts.elastic.co/packages/8.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
```

🔴 &nbsp;Create the above `kibana.repo` file in:
```
/etc/yum.repos.d/ 
```

🔴 &nbsp;Install Kibana:
```
dnf install kibana
```
```
vi /etc/kibana/kibana.yml
		server.host: "<host ip>"
		elasticsearch.hosts: ["http://<es host ip>:9200"]
```

🔴 &nbsp;Start and enable the Kibana service:
```
systemctl enable kibana.service
systemctl start kibana.service
systemctl status kibana.service
```

🔴 &nbsp;It will take a moment for Kibana to fully start. You can run this tail command to know when it is available for you:
```
tail -f /var/log/kibana/kibana.log | grep 'Kibana is now available'
```
