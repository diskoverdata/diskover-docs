___
### Upgrade from Community Edition to Annual Subscription

This section explains how to upgrade from the [free Community Edition](https://www.diskoverdata.com/solutions/) to an [annual subscription](https://www.diskoverdata.com/solutions/).

🔴 &nbsp;Go to the directory where the Diskover software was downloaded to:

```
cd /tmp/diskover

rsync -rcv --exclude=diskover.lic diskover/ /opt/diskover/

rsync -rcv --exclude=diskover-web.lic diskover-web/ /var/www/diskover-web/

cd /opt/diskover

pip3 install -r requirements-aws.txt

for d in configs_sample/*; do d=`basename $d` && mkdir -p ~/.config/$d && cp configs_sample/$d/config.yaml ~/.config/$d/; done

cd /var/www/diskover-web/public

for f in *.txt.sample; do cp $f "${f%.*}"; done
chmod 660 *.txt

cd /var/www/diskover-web/public/tasks/

for f in *.json.sample; do cp $f "${f%.*}"; done
chmod 660 *.json

chown -R nginx:nginx /var/www/diskover-web

chmod 660 /var/www/diskover-web/public/*.txt

chmod 660 /var/www/diskover-web/public/tasks/*.json

chown -R root:nginx /var/lib/php

chown -R root:nginx /var/run/php-fpm/

chown -R nginx:nginx /var/lib/php/session
```

🔴 &nbsp;You will probably need to update your `Constants.php` file:

```
cd /var/www/diskover-web/src/diskover/

cp Constants.php.sample Constants.php
```

🔴 &nbsp;Reapply any config changes you made to your `constants.php` file.

