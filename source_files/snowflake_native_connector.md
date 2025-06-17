## Snowflake Native Connector

### Overview

The Diskover Snowflake Native Connector provides automated collection and ingestion of unstructured storage metrics for comprehensive monitoring and analysis of your storage infrastructure. Built as a Snowflake Native App, it runs securely within your Snowflake environment, offering full visibility into connector performance, ingestion history, and storage utilization trends — all without the need to move data externally. This guide will help you get started with setup, scheduling, and monitoring.

### 📊 Storage Metrics Collection

Your connector is configured to automatically collect storage metrics via API integration:

- 🔄 **Automated Scheduling**: Runs every 60 minutes.
- 📈 **Timeseries Data**: Each run captures the current storage state.
- 🏗️ **Comprehensive Metrics**: Capacity, usage, and file counts.
- 🔗 **API Integration**: Direct integration with your storage system.

### Features

#### Real-time Monitoring
- **Connector Health Dashboard**: Monitor connection status, data flow, and system health.
- **Live Activity Charts**: Track ingestion performance over 24-hour periods.
- **Recent Run History**: View detailed information about recent ingestion jobs.

#### Automated Data Collection
- **Scheduled Ingestion**: Configurable intervals for automatic data collection.
- **Resource Management**: Enable/disable specific data sources.
- **Error Monitoring**: Automatic detection and alerting for failed runs.

#### Performance Metrics
- **Throughput Tracking**: Monitor rows processed per hour.
- **Success Rate Monitoring**: Track completion rates across all runs.
- **Duration Analysis**: Understand processing time patterns.

### Prerequisites
- Snowflake account with appropriate privileges.
- Admin access to configure connectors.
- Storage system accessible via API (if not preconfigured).

### Getting Started

1. **Configure Resources**: Set up your storage metrics collection resources.
2. **Enable Scheduling**: Activate automated data collection.
3. **Monitor Dashboard**: Use the home page to track connector health.
4. **Review Data**: Check the **Data Sync** page for detailed ingestion status.

### Support

For configuration help and troubleshooting, refer to the application's built-in monitoring tools and status indicators for assistance.
