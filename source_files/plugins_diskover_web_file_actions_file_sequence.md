___
### File Action > Find File Sequences 

<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

The File Sequence web plugin File Action is designed to list out any file sequences in a directory or from a single file in a sequence. File sequences are printed out with `%08d` to show the 0 padding and number of digits in the sequence. Each sequence, whole or broken, are put into a [ ] list.

![Image: File Sequences Results](images/image_file_action_results_tech.png)

🔴 &nbsp;Copy default/sample files:
```
cd /var/www/diskover-web/public/fileactions/fileaction_samples
cp filesequence.php /var/www/diskover-web/public/fileactions/
cp filesequence.py /var/www/diskover-web/public/fileactions/
cp ajaxexec.php /var/www/diskover-web/public/fileactions/
chown nginx:nginx /var/www/diskover-web/public/fileactions/*
cp filesequence_settings.py.sample /var/www/diskover-web/src/diskover/filesequence_settings.py
chown nginx:nginx /var/www/diskover-web/src/diskover/filesequence_settings.py
```
> _Note:_ On Ubuntu, change chown nginx user to www-data

🔴 &nbsp;Configure file sequence settings file:
```
vi /var/www/diskover-web/src/diskover/filesequence_settings.py
```
🔴 &nbsp;Set Elasticsearch settings.

🔴 &nbsp;Install [clique python module](https://pypi.org/project/clique/) with pip as required by File Sequence File Action:
```
pip3 install clique
```

🔴 &nbsp;If you are running diskover-web on a different host than Diskover, you will need to install the [Elasticsearch python module](https://pypi.org/project/elasticsearch/) (required by File Sequence File Action). Check the version to install on your Diskover host in `/opt/diskover/requirements.txt`:
```
pip3 install elasticsearch==7.x.x
```

🔴 &nbsp;[Add file sequence](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#diskover-web-plugins-file-actions) to diskover-web config file.
