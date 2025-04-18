<p id="architecture_diagram"></p>

## Architecture Overview

### Diskover's Main Components

Deploying Diskover uses 3 major components:

| COMPONENT | ROLE |
| :---: | --- |
| **1️⃣<br>Elasticsearch** | Elasticsearch is the backbone of Diskover. It indexes and organizes the metadata collected during the scanning process, allowing for fast and efficient querying of large datasets. Elasticsearch is a distributed, RESTful search engine capable of handling vast amounts of data, making it crucial for retrieving information from scanned file systems and directories. |
| **2️⃣<br>Diskover-Web** | Diskover-Web is the user interface that allows users to interact with the Diskover system. Through this web-based platform, users can search, filter, and visualize the data indexed by Elasticsearch. It provides a streamlined and intuitive experience for managing, analyzing, and curating data. Diskover-Web is where users can explore results, run tasks, and monitor processes. |
| **3️⃣<br>Diskover Scanners** | The scanners, sometimes called crawlers, are the components responsible for scanning file systems and collecting metadata. These scanners feed that metadata into Elasticsearch for storage and later retrieval. Diskover supports various types of scanners, which are optimized for different file systems, ensuring efficient and comprehensive data collection.<br><br>Out of the box, Diskover efficiently scans generic filesystems. However, in today’s complex IT architectures, files are often stored across a variety of repositories. To address this, Diskover offers various [alternate scanners](#config_alt_scanners) as well as provides a robust foundation for [building alternate scanners](https://docs.diskoverdata.com/diskover_dev_guide/#develop-your-own-alternate-scanner), enabling comprehensive scanning of any file storage location. |
| **🔀<br>Diskover Ingesters** | Diskover’s ingesters are the ultimate bridge between your unstructured data and high-performance, next-generation data platforms. By leveraging the open-standard Parquet format, Diskover converts and streams your data efficiently and consistently. Whether you’re firehosing into Dell data lakehouse, Snowflake, Databricks, or other modern data infrastructures, our ingesters ensure your data flows effortlessly—optimized for speed, scalability, and insight-ready delivery. |

### Diskover Platform Overview

![Image: Diskover Architecture Overview](images/diskover_platform_overview.png)

_[Click here for a full screen view of the Diskover Platform Overview.](images/diskover_platform_overview.png)_


### Diskover Scale-Out Architecture Overview Diagram

![Image: Diskover Architecture Overview](images/diskover_architecture_overview.png)

_[Click here for a full screen view of the Diskover Architecture Overview diagram.](images/diskover_architecture_overview.png)_


### Diskover Config Architecture Overview

It is highly recommended to separate the Elasticsearch node/cluster, web server, and indexing host(s).

![Image: Diskover Reference Diagram Architecture](images/diskover_config_template.png)

_[Click here for the full screen view of this diagram.](images/diskover_config_template.png)_

### Metadata Catalog

Diskover is designed to scan generic filesystems out of the box efficiently, but it also supports flexible integration with various repositories through customizable [alternate scanners](#config_alt_scanners). This adaptability allows Diskover to scan diverse storage locations and include enhanced metadata for precise data management and analysis.

With a wide range of metadata harvest plugins, Diskover enriches indexed data with valuable business context attributes, supporting workflows that enable targeted data organization, retrieval, analysis, and enhanced workflow. These plugins can run at [indexing](#config_plugins_index) or [post-indexing](#config_plugins_post_index) intervals, balancing comprehensive metadata capture with high-speed scanning.

![Image: Metadata Catalog Summary](images/metadata_catalog.png)

_[Click here for a full screen view of the Metadata Catalog Summary.](images/metadata_catalog.png)_

