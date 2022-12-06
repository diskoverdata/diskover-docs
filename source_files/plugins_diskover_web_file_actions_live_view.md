___
### File Action > Live View 

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

The File Action Live View plugin is designed to provide a live view of the file system between indexing intervals. It provides users with a live view of the file system at that moment in time.


![Image: File Sequences Results](images/image_plugins_file_action_live_view_in_ui.png)

🔴 &nbsp;Install `php-process` with `yum` as required by Live View File Action:
```
yum install php-process

```

🔴 &nbsp;Restart `php-fpm` service:
```
systemctl restart php-fpm
```

🔴 &nbsp;Copy default/sample files:
```
cp /var/www/diskover-web/public/fileactions/fileaction_samples/liveview.php /var/www/diskover-web/public/fileactions/
```
```
cp -a /var/www/diskover-web/public/fileactions/fileaction_samples/liveview /var/www/diskover-web/public/fileactions/
```


🔴 &nbsp;Add Live View to diskover-web config file:
```
vi /var/www/diskover-web/src/diskover/Constants.php
```

![Image: File Sequences Results](images/image_plugins_file_action_live_view_config.png)


🔴 &nbsp;Set proper ownership:
```
chown -R nginx:nginx /var/www/diskover-web
```
