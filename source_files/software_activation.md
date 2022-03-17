<p id="software_activation"></p>

___
## Software Activation
![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)
___
### Obtaining a License Key

A license key is needed for Diskover’s paid subscriptions. Unless otherwise agreed, a license via a subscription is valid for a one (1) year period, and clients will be contacted prior to their license expiration.

No license key is required for **Diskover Community Edition**. If you would like to request a demo license key or purchase a [subscription for Diskover’s advanced solutions](https://www.diskoverdata.com/solutions/), please contact your Diskover Data point of contact or [info@diskoverdata.com](mailto:info@diskoverdata.com).

### Download the Latest Software Version

First, you need to [create an account on the Diskover Download Portal](https://download.diskoverdata.com/register.php). Once your account is approved, you can [login](https://download.diskoverdata.com/) and download the lastest version.

### License Key Creation Criteria

Your license key is created and attached to 1. your hardware ID, 2. your [Diskover subcription edition](https://www.diskoverdata.com/solutions/), and 3. the number of nodes.

### Generating a Hardware ID

You will need to generate a hardware ID once you have installed and configured Diskover before requesting a license. 

Check that you have configured your Elasticsearch host correctly in Diskover config as it is part of the hardware ID generation.

🔴 &nbsp;Get hardware id:
```
cd /opt/diskover
python3 diskover_lic.py -g
```

>_Note:_ If you change the Elasticsearch host/ip or number of nodes in the ES cluster, you will need new license keys.

### License Key Locations

#### Linux

Place the license keys in the following locations. 

🔴 &nbsp;Copy **diskover.lic** file to:
```
/opt/diskover/diskover.lic
```

🔴 &nbsp;Copy **diskover-web.lic** file:
```
/var/www/diskover-web/src/diskover/diskover-web.lic
```
##### License permissions

Check **diskover-web.lic** file is owned by NGINX user and permissions are 644:
```
chown nginx:nginx diskover-web.lic && chmod 644 diskover-web.lic
```

#### License Key for Windows

🔴 &nbsp;Place the license keys in the following locations. Copy **diskover.lic** file to:
```
C:\Program Files\diskover\
```

🔴 &nbsp;Copy **diskover-web.lic** file to folder:
```
C:\Program Files\diskover-web\src\diskover\
```
#### License Key for Mac

🔴 &nbsp;Copy **diskover.lic** file to folder:
```
/Applications/Diskover.app/Contents/MacOS/diskover/
```

### Get License Info

After you have installed your license keys, you can see info about the license using `diskover_lic.py` or by going to the diskover-web settings page and scrolling to the license info section.

🔴 &nbsp;Get license info:
```
cd /opt/diskover
python3 diskover_lic.py -l
```

### Renewing Your License

If your demo license key has expired, contact your Diskover Data point of contact or [info@diskoverdata.com](mailto:info@diskoverdata.com). If you have a subscription license key, a Diskover Data team member will contact you prior to your license expiration.
