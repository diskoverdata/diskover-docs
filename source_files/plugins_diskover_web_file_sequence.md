___
### File Sequence File Action

![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

The file sequence web plugin file action is designed to list out any file sequences in a directory or from a single file in a sequence. File sequences are printed out with %05d to show the 0 padding and number of digits in the sequence. Each sequence, whole or broken, are put into a [ ] list after the full path.

🔴 &nbsp;Copy default/samples files:
```
cd /var/www/diskover-web/public/fileations
cp filesequence.py.sample filesequence.py
chown nginx:nginx filesequence.py
cp filesequence_settings.py.sample /var/www/diskover-web/src/diskover/filesequence_settings.py
chown nginx:nginx /var/www/diskover-web/src/diskover/filesequence_settings.py
```

🔴 &nbsp;Configure file sequence settings file:
```
vi /var/www/diskover-web/src/diskover/filesequence_settings.py
```
- Set Elasticsearch settings

🔴 &nbsp;Install clique python module with pip (required by File Sequence file action)
```
pip3 install clique
```

🔴 &nbsp;[Add file sequence](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#diskover-web-plugins-file-actions) to diskover-web config file.
