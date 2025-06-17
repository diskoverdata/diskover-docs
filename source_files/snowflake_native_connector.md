## Snowflake Native Connector

### 🔍 Overview

The Diskover Snowflake Native Connector, powered by CloudSoda, delivers automated collection and ingestion of unstructured storage metrics for comprehensive monitoring and analysis across your entire storage infrastructure. This powerful connector brings CloudSoda's storage intelligence and data insights directly into Snowflake as a Native App, running securely within your Snowflake environment while providing complete visibility into both your cloud and on-premises data storage systems. 

This guide will walk you through the setup process, scheduling configuration, and monitoring capabilities to help you maximize your storage efficiency and governance.

### 📊 Storage Metrics Collection

Your connector is configured to automatically collect storage metrics via the CloudSoda API integration:

- 🔄 **Automated Scheduling**: Runs every 60 minutes.
- 📈 **Timeseries Data**: Each run captures the current storage state.
- 🏗️ **Comprehensive Metrics**: Capacity, usage, and file counts.
- 🔗 **API Integration**: Direct integration with your storage system.

### 🧩 Features

#### 🖥️ Real-time Monitoring
- **Connector Health Dashboard**: Monitor connection status, data flow, and system health.
- **Live Activity Charts**: Track ingestion performance over 24-hour periods.
- **Recent Run History**: View detailed information about recent ingestion jobs.

#### 🔄 Automated Data Collection
- **Scheduled Ingestion**: Configurable intervals for automatic data collection.
- **Resource Management**: Enable/disable specific data sources.
- **Error Monitoring**: Automatic detection and alerting for failed runs.

#### 🚀 Performance Metrics
- **Throughput Tracking**: Monitor rows processed per hour.
- **Success Rate Monitoring**: Track completion rates across all runs.
- **Duration Analysis**: Understand processing time patterns.

### ✅ Prerequisites
- Snowflake account with Account Admin privileges.
- Ability to create and configure an API client in CloudSoda.

### 🧭 Getting Started

1. **Configure CloudSoda API**: Create an API client in CloudSoda and note the [Client ID and Secret](https://support.cloudsoda.io/hc/en-us/articles/4952710450715-Configuring-an-API-Client)
2. **Configure Resources**: Set up your storage metrics collection resources—this will require the client ID and Secret.
3. **Enable Scheduling**: Activate automated data collection.
4. **Monitor Dashboard**: Use the home page to track connector health.
5. **Review Data**: Check the **Data Sync** page for detailed ingestion status.

### 🛠️ Support

For configuration help and troubleshooting, refer to the application's built-in monitoring tools and status indicators for assistance.
