## AWS Environment Security

The information in this section outlines how to manage identities and access the distributed components of the Diskover curation platform. This includes both AWS Identity and Access Management (IAM) resources, as well as access mechanisms.

### AWS IAM Best Practices

Security begins with protecting your AWS Root account. The AWS root user has unlimited access to your AWS account and its resources; using it only by exception helps protect your AWS resources. The AWS root user must not be used for task associated with the installation and configuration of the Diskover curation platform components referenced in Chapter 3. Architecture Overview. Instead, adhere to the best practice of using the root user only to create your first AWS Identity and Access Management (IAM). An AWS IAM user with sufficient administrator privileges should be used for the installation and configuration of resources used with the Diskover curation platform.

For more information and details please refer to AWS best practices link below.

[https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

### Configuring IAM Roles for Diskover

Diskover Data recommends following AWS “least privilege access” policies when configuring AWS access policies among Diskover indexer(s), AWS Elasticsearch endpoint, and Diskover-Web server. Please refer to the documentation below.

[https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/permissions-management.html](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/permissions-management.html)

Once the initial install is validated and functioning, then the access to a policy will be modified to increase security. Create an IP Based Access Policy for ES Cluster, outlined in the [Modify Access Policy](#modify_access_policy) section. The specific IP address or subnet will need to be added for each:

- AWS Elasticsearch Domain.
- AWS Diskover-Web Server.
- Diskover indexer.
