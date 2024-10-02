<p id="software_activation"></p>

___
## Software Activation
<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">
___
### Licensing Overview

The [**Diskover Community Edition**](https://diskoverdata.com/solutions/) doesn't require a license key and can be used for an unlimited time. 

The **Diskover paid [Editions/Subscriptions](https://diskoverdata.com/solutions/) require a license. Unless otherwise agreed:
- A trial license is valid for 30 days and is issued for 1 Elasticsearch node.
- A paid subscription license is valid for 1 year. Clients will be contacted about 90 days prior to their license expiration with a renewal proposal.

Please reach out to your designated Diskover contact person or [contact us](mailto:info@diskoverdata.com) directly for more information.

### License Issuance Criteria

Licenses are created using these variables:
1. Your email address
2. Your [hardware ID](https://docs.diskoverdata.com/diskover_installation_guide_ova/#generating-a-hardware-id)
3. Your [Diskover Editiondition](https://www.diskoverdata.com/solutions/)
4. The number of Elasticsearch nodes.

### Download the Latest Software Version

1. Create an account for the [Diskover Download Portal](https://download.diskoverdata.com/register.php).
2. Your account will be validated and approved within 24 hours. Note that we will contact you if we need more information prior to approval.
3. Once your account is approved, you can [login](https://download.diskoverdata.com/) and download the latest version.

### Hardware ID Generation

You will need to generate a hardware ID once you have installed and configured Diskover, and send that information along with your license request. 

>**IMPORTANT! Check that you have configured your Elasticsearch host correctly as it is part of the hardware ID encoding.**
>**NOTE!** 
🔴 &nbsp;To get your hardware ID:
```
cd /opt/diskover
python3 diskover_lic.py -g
```

>_Note:_ If your Elasticsearch cluster ID (unique ID created at install) changes, you will need new license keys.

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

After you have installed your license keys, you can see info about the license using `diskover_lic.py` or by going to the Diskover-Web settings page and scrolling to the license info section.

🔴 &nbsp;Get license info:
```
cd /opt/diskover
python3 diskover_lic.py -l
```

### Renewing Your License

If your demo license key has expired, contact your Diskover Data point of contact or [info@diskoverdata.com](mailto:info@diskoverdata.com). If you have a subscription license key, a Diskover Data team member will contact you prior to your license expiration.
