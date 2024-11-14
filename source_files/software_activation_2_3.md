<p id="software_activation"></p>

## Software Activation
<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

### Licensing Overview

The [**Diskover Community Edition**](https://diskoverdata.com/solutions/) doesn't require a license key and can be used for an unlimited time. 

The [**Diskover Editions/paid subscriptions**](https://diskoverdata.com/solutions/) require a license. Unless otherwise agreed:
- A trial license is usually valid for 30 days and is issued for 1 Elasticsearch node.
- A paid subscription license is valid for 1 year. Clients will be contacted about 90 days before their license expiration with a renewal proposal.

Please reach out to your designated Diskover contact person or [contact us](mailto:licenses@diskoverdata.com) directly for more information.

### Download Portal

If not already done, download the latest software version.

1. Create an account for the [Diskover Download Portal](https://download.diskoverdata.com/register.php).
2. Your account will be validated and approved within 24 hours. Note that we will contact you if we need more information prior to approval.
3. Once your account is approved, you can [login](https://download.diskoverdata.com/) and download the latest version.

### License Issuance Criteria

Licenses are created using these variables:
1. Your email address
2. Your [hardware ID number](https://docs.diskoverdata.com/diskover_installation_guide_ova/#generating-a-hardware-id)
3. Your [Diskover Edition](https://www.diskoverdata.com/solutions/)
4. The number of Elasticsearch nodes.

<p id="hd_id"></p>

### Hardware ID Generation

Your hardware ID should have been automatically generated when going through the [Initial Configuration]() section. The following command is listed in case you need to manually generate your hardware ID. Please [send that unique identifier along with your license request](mailto:licenses@diskoverdata.com) as needed.

🔴 &nbsp;Become the root user:
```
sudo -i
```

🔴 &nbsp;To manually create your hardware ID:
```
cd /opt/diskover
python3 diskover_lic.py -g
```

After installing Diskover and completing the basic configuration, you will need to generate a hardware ID. Please [send that unique identifier along with your license request](mailto:info@diskoverdata.com).

🟨 &nbsp;**IMPORTANT!**

- Check that you have configured your Elasticsearch host correctly, as it is part of the hardware ID encoding process.
- Note that if your [Elasticsearch cluster]((https://docs.diskoverdata.com/diskover_installation_guide/#elasticsearch-requirements)) ID changes, you will need new license keys.

<p id="license_location"></p>

### License Key Locations in DiskoverAdmin Panel

1. From the main Diskover user interface, click on the ⛭ at the top right corner.
2. Select **⛭ System Configuration** or navigate to [**http://localhost:8000/diskover_admin/config/License**](http://localhost:8000/diskover_admin/config/License)
3. Open the **License** tab and paste the files into their respective boxes.

<img src="images/diskoveradmin_license.png" width="">
