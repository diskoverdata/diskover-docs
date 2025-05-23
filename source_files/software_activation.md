<p id="software_activation"></p>

## Software Activation
<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

### Licensing Overview

The [**Diskover Community Edition**](https://diskoverdata.com/solutions/) doesn't require a license key and can be used for an unlimited time. 

The [**Diskover Editions/paid subscriptions**](https://diskoverdata.com/solutions/) require a license. Unless otherwise agreed:
- A trial license is valid for 30 days and is issued for 1 Elasticsearch node.
- A paid subscription license is valid for 1 year. Clients will be contacted about 90 days prior to their license expiration with a renewal proposal.

Please reach out to your designated Diskover contact person or [contact us](mailto:info@diskoverdata.com) directly for more information.

### License Issuance Criteria

Licenses are created using these variables:
1. Your email address
2. Your [hardware ID number](https://docs.diskoverdata.com/diskover_installation_guide_ova/#generating-a-hardware-id)
3. Your [Diskover Edition](https://www.diskoverdata.com/solutions/)
4. The number of Elasticsearch nodes.

### Generating a Hardware ID

After installing Diskover and completing the basic configuration, you will need to generate a hardware ID. Please [send](mailto:info@diskoverdata.com) that unique identifier along with your license request.

🔴 &nbsp;To create your hardware ID:
```
cd /opt/diskover
python3 diskover_lic.py -g
```

🟨 &nbsp;**IMPORTANT!**

- Check that you have configured your Elasticsearch host correctly, as it is part of the hardware ID encoding process.
- Note that if your [Elasticsearch cluster]((https://docs.diskoverdata.com/diskover_installation_guide/#elasticsearch-requirements)) ID changes, you will need new license keys.

### License Key Locations

#### Linux

Place the license keys in the following locations. 

🔴 &nbsp;Copy **diskover.lic** file to:
```
/opt/diskover/diskover.lic
```

🔴 &nbsp;Copy **diskover-web.lic** file to:
```
/var/www/diskover-web/src/diskover/diskover-web.lic
```

🔴 &nbsp;Check that the **diskover-web.lic** file is owned by NGINX user and permissions are 644:
```
chown nginx:nginx diskover-web.lic && chmod 644 diskover-web.lic
```

🔴 &nbsp;After you have installed your license keys, you can see the info about the license using `diskover_lic.py`:
```
cd /opt/diskover
python3 diskover_lic.py -l
```

#### Windows

🔴 &nbsp;Place the license keys in the following locations. Copy **diskover.lic** file to:
```
C:\Program Files\diskover\
```

🔴 &nbsp;Copy **diskover-web.lic** file to folder:
```
C:\Program Files\diskover-web\src\diskover\
```
#### Mac

🔴 &nbsp;Copy **diskover.lic** file to folder:
```
/Applications/Diskover.app/Contents/MacOS/diskover/
```
