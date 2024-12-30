<p id="requirements_scanners"></p>

### Diskover Scanners Requirements

You can install Diskover scanners on a server or [virtual machine](https://docs.diskoverdata.com/diskover_installation_guide_ova/). Multiple indexers can be run on a single machine or multiple machines for parallel crawling.

The indexing host uses a separate thread for each directory at level 1 of a top crawl directory. If you have many directories at level 1, you will want to increase the number of CPU cores and adjust **max threads** in the diskover config.

#### Requirements for POC and Deployment

| | Proof of Concept | Production Deployment |
| --- | --- | --- |
| CPU | 8 to 32 cores | 8 to 32 cores |
| RAM | 8 to 16 GB | 8 to 16 GB |
| DISK | 250 to 500 GB SSD | 250 to 500 GB SSD |
