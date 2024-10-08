___
### Alternate Indexer | S3 Bucket

<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

Included in the alt scanners directory is a Python module **scandir_s3** for scanning AWS S3 buckets using the Boto3 API.

>_Note:_ If you want to install Diskover on an existing AWS infrastructure, please refer to our [Diskover AWS Customer Deployment Guide](https://docs.diskoverdata.com/diskover_aws_deployment_guide/).
<br>

🔴 &nbsp;To use the **S3** alternate scanner, first install the **Boto3** Python module:

```
pip3 install boto3
```

🔴 &nbsp;After, you will need to set up and configure AWS credentials, etc. for **Boto3**:

  [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)

  [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html)

#### Using Different Endpoints URLs (Other than AWS)

This section describes how to use S3 endpoints different than AWS.

🔴 &nbsp;Add credentials to default location for AWS S3 credentials:
```
cd /root/.aws
```
```
vi credentials
```
Example:

![Image: Alt S3 Credentials](images/image_install_indexers_alternate_s3_credentials.png)

🔴 &nbsp;To use a different **S3 endpoint URL** (Wasabi, etc.), set the **AWS_PROFILE** and the **S3_ENDPOINT_URL** environment variables before running the crawl.

🔴 &nbsp;To export variables via the command line, for example:

```
export AWS_PROFILE=wasabi-eu
```
```
export S3_ENDPOINT_URL=https://<endpoint>
```

🔴 &nbsp;To add an S3 endpoint via the Diskover-Web task panel, select **gear icon** > **Task Panel**:

![Image: Open Edit Task in Task Panel](images/image_install_indexers_alternate_s3_select_task_panel.png)

🔴 &nbsp;Click **Info** then **Edit task** in line with the index you want to modify.

![Image: Open Edit Task in Task Panel](images/image_install_indexers_alternate_s3_edit_task.png)

🔴 &nbsp;Go down to **Environment Vars** and insert your endpoint in the dialog box for the task, for example:

```
AWS_PROFILE=wasabi-west,S3_ENDPOINT_URL=https://s3.us-west-1.wasabisys.com
```

![Image: Open Edit Task in Task Panel](images/image_install_indexers_alternate_s3_edit_env_vars_endpoint.png)


#### SSL Certificate Verification

🔴 &nbsp;To not use SSL and/or to not verify SSL certificates, set the **S3_USE_SSL** and the **S3_VERIFY** environment variables before running the crawl:

```
export S3_USE_SSL=false
```
```
export S3_VERIFY=false
```

🔴 &nbsp;Scan and index a **s3** bucket _**bucketname**_ using an auto-index name:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_s3 s3://bucketname
```
> _Note:_ **bucketname** is optional, you can scan all buckets using **s3://**

🔴 &nbsp;Create an S3 index with index name **diskover-s3-_bucketname_**:

```
cd /opt/diskover
python3 diskover.py -i diskover-s3-bucketname --altscanner scandir_s3 s3://bucketname
```

#### Additional S3 Index Fields

🔴 &nbsp;Additional Elasticsearch index fields (keywords) are added for S3 and can be added to Diskover-Web's config file to **EXTRA_FIELDS** settings:

```
 const EXTRA_FIELDS = [
     's3 tier' => 's3_storageclass',
     's3 etag' => 's3_etag'
];
```
