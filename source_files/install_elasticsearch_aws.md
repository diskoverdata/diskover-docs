___
# AWS Elasticsearch Environment

## Choose Deployment Type

➡️ Diskover requires an Elasticsearch 7.X environment - Select **custom** for deployment type:

![Image: Create an Elasticsearch Domain – Choose Deployment Type](images/image_aws_customer_deployment_elasticsearch_deployment_type.png)

## Configure Domain

- One node is sufficient for initial testing.
- Production deployments should be configured with a minimum of 3 nodes to achieve redundancy in the Elasticsearch configuration.

➡️ Select node type - Diskover recommends **i3.xlarge** Elasticsearch:

![Image: Create an Elasticsearch Domain – Configure Domain](images/image_aws_customer_deployment_elasticsearch_select_node_type.png)

## Step 3: Configure Access and Security

➡️ Create a master username with strong password. The Elasticsearch master user credentials should align with the strong password policy adopted for IAM users. 

More information can be found here:  

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html)

![Image: Create an Elasticsearch Domain – Configure Access and Security](images/image_aws_customer_deployment_elasticsearch_config_access_policy.png)

➡️ Initially, allow open access to the domain during install to confirm all components are operational (master username and strong password are still required during setup of configuration). This reduces initial troubleshooting that may be required during setup of configuration. Once confirmed working configuration, the access policy will be modified to increase security.

![Image: Create an Elasticsearch Domain – Access Policy](https://www.diskoverdata.com/wp-content/uploads/2021/09/screenshot_diskover_aws_customer_deployment_elasticsearch_create_domain_access_policy_original_20210823.png)

## <a id="modify_access_policy"></a>Modify Access Policy

➡️ Modify access policy to restrict access to known IP address / subnets of Diskover indexer(s) and Diskover-Web server.

The IP addresses/subnets will be known after completion of [Diskover-Web for Amazon Linux](#diskover_web_amazon_linux) installation and [Install Diskover On-Premise Indexer(s)](#install_indexers_on_prem) installation. If additional Diskover indexer(s) are deployed in the future, the access policy should be modified to align with deployment of Diskover indexer(s).

![Image: Create an Elasticsearch Domain – Modify the Access Policy for diskoverdata](images/image_aws_customer_deployment_elasticsearch_modify_access_policy.png)

![Image: Create an Elasticsearch Domain – Modify the Access Policy for diskoverdata](images/image_aws_customer_deployment_elasticsearch_modify_access_policy_enlarged_codes.png)

For more information visit:

[https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html)
