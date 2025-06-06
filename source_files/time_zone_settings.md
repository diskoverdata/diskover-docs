
## Setting Time Zones


### OS Date/Time

It is important that all hosts running Elasticsearch, Diskover, Diskover-web, etc. have their OS date/time configured correctly and NTP (network time protocol) set up to ensure times are set correct. Please check your OS time is set up correctly after install.

### Time Zone Settings for Diskover

Diskover can be configured for local time zones, since Diskover is a distributed, scale out architecture, the time zone will need to be configured for each distributed component.

Use the official **TZ database name** options for Diskover that can be found here:

[https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

___
### Time Zone Setting for diskoverd Task Daemon(s)

🔴 &nbsp;For each distributed task worker, edit the time zone value here:
```
/root/.config/diskoverd/config.yaml
```

![Image: Time Zone Setting for Task Daemons](images/image_time_zone_task_worker_deamon_edit_time_zone_value.png)

___
### Default Time Zone Setting for Diskover-Web

🔴 &nbsp;The Diskover-Web default time zone value is configured here:
```
vi /var/www/diskover-web//src/diskover/Constants.php
```

![Image: Default Time Zone Setting for Diskover-Web](images/image_time_zone_diskover_web_time_zone_config.png)

___
### User Preference Time Zone Setting Within Diskover-Web

Individual users can set their time zone preference to their local time zone with the Diskover-Web HTML 5 user interface. 

🔴 &nbsp;In the top right corner setting gear icon, select **Settings** from the drop-down list:

<img src="images/image_diskover_app_settings_menu.png" width="350">

🔴 &nbsp;Check the box **Show times in local timezone** and simply exit out of the settings dialog box.

<img src="images/image_time_zone_local_timezone_selection.png" width="450">
