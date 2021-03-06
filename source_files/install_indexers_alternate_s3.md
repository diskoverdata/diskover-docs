___
### Create an Index of an S3 Bucket

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

Included in the alt scanners directory is a Python module **scandir_s3** for scanning AWS S3 buckets using the boto3 API.

>_Note:_ If you want to install Diskover on an existing AWS infrastructure, please refer to our [Diskover AWS Customer Deployment Guide](https://docs.diskoverdata.com/diskover_aws_deployment_guide/).
<br>

🔴 &nbsp;To use the **s3** alternate scanner, first install the **boto3** Python module:

```
pip3 install boto3
```

🔴 &nbsp;After, you will need to set up and configure AWS credentials, etc. for **boto3**:

  [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)

  [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html)

🔴 &nbsp;Scan and index a **s3** bucket _**bucketname**_ using an auto-index name:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_s3 s3://bucketname
```

#### Using Different Endpoint URL (Other than AWS)

🔴 &nbsp;To use a different **s3 endpoint url** (Wasabi, etc.), set the **AWS_PROFILE** and the **S3_ENDPOINT_URL** environment variables before running the crawl:

```
export AWS_PROFILE=wasabi-eu
```
```
export S3_ENDPOINT_URL=https://<endpoint>
```

🔴 &nbsp;Run the index:

```
cd /opt/diskover
python3 diskover.py --altscanner scandir_s3 s3://bucketname
```
