___
### Diskover AWS Resource Requirements

The following section outlines the reference architecture for AWS resources required for the Diskover curation platform. AWS resources are required for two of the Diskover deployment components, and the third component is typically deployed using the customer’s on-premise resources.

#### AWS Elasticsearch Domain

The foundation of the Diskover platform consists of a series of Elasticsearch indexes. These indexes are created and stored within the AWS Elasticsearch endpoint. Elasticsearch is a scale out architecture using 1 to N nodes. The recommended AWS node are:

>- Minimum: i3.large
>- Recommended: i3.xlarge

#### AWS EC2 Web Server

The Diskover-Web HTML5 user interface requires a Web server platform. An EC2 instance configured with applications to provide Web serving capabilities is required. The Diskover-Web user interfaces provides visibility, analysis, and actions from the indexes that reside on the AWS Elasticsearch endpoint. The recommended EC2 instances are:

>- Minimum: t3.small
>- Recommended: t3.medium

#### AWS Indexer

>- Minimum: t3.large
>- Recommended: t3.xlarge
