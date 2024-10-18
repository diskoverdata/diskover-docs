<p id="analytics_third_party"></p>

___
### Third-Party Analytics

You can optionally use third-party analytical tools, such as [Kibana](https://www.elastic.co/kibana), [Tableau](https://www.tableau.com), [Grafana](https://grafana.com), [PowerBI](https://www.microsoft.com/en-us/power-platform/products/power-bi), and others, to read the Elasticsearch metadata library besides Diskover-Web. Diskover does not technically support these optional tools, and only the installation of Kibana is described in this section.

#### Using Kibana in Addition to Diskover-Web

##### Kibana v7 via RPM

- Note that Kibana v7 can only be used with Elasticsearch v7.
- For securing Elasticsearch and Kibana, [follow this user guide to set up security](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/secure-cluster.html), as by default, Elasticsearch has no security enabled: 

🔴 &nbsp;Install the latest version of Kibana and keep up to date with patches, security enhancements, etc. as new versions are released:
```
yum install -y https://artifacts.elastic.co/downloads/kibana/kibana-7.12.0-x86_64.rpm
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

🔴 &nbsp;Set firewall rules if applicable:
```
firewall-cmd --add-port=5601/tcp --permanent
firewall-cmd --reload
```

🔴 &nbsp;Start and enable the Kibana service:
```
systemctl enable kibana.service
systemctl start kibana.service
systemctl status kibana.service
```

For securing Elasticsearch and Kibana, follow this user guide to set up security, as by default, Elasticsearch has no security enabled:

[https://www.elastic.co/guide/en/elasticsearch/reference/7.x/secure-cluster.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/secure-cluster.html)

##### Kibana v8 via YUM Repository

- Note that Kibana v8 can only be used with Elasticsearch v8.
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

🔴 &nbsp;Create the above `elasticsearch.repo` file in:
```
/etc/yum.repos.d/ 
```

🔴 &nbsp;Install Kibana:
```
yum install kibana
```
##### Kibana UI Access

```
http://kibanaHost:5601
```
