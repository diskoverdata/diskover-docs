___
## User Roles and Authentication

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

___

This chapter discusses setting up authenticated user access to Diskover-Web.

___
### Local User Configuration

Diskover-Web currently has two local users: 1) admin, and 2) data user. To change the login details for the two sets of users:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

<img src="images/image_user_auth_local_user_config.png" width="750">

>Note: The passwords stored in web config file (Constants.php) are only used as the default initial passwords when first logging in to Diskover-Web. On first login, you will be asked to change the password and the password will be stored and encrypted in sqlite db and default password in web config will no longer be used.

___
### LDAP / Active Directory Authentication

Diskover-Web supports authenticating users from Active Directory over Lightweight Directory Access Protocol (LDAP). LDAP integration can be used to authenticate users against a Microsoft Domain Controller (DC).

The following information is required to configure LDAP authentication:

**LDAP_LOGINS** - set to TRUE to enable and use ldap logins

**LDAP_HOST** - The URL to use to contact the DC, examples: `ldap://dc.domain.com` or `ldaps://dc.domain.com`

**LDAP_PORT** - Examples: 389 or 636

**LDAP_DOMAIN** - The LDAP domain name, example: `domain.com`

**LDAP_BASEDN** - The LDAP base dn of domain, example: `dc=DOMAIN,dc=COM`

At least three AD groups should be established for Diskover and set in web config:
1. Admin group added to **LDAP_ADMIN_GROUPS**
2. User group added to **LDAP_USER_GROUPS**
3. Task panel group added to **LDAP_TASK_PANEL_GROUPS**

>Note: at login, the ad/ldap user will be checked if they are in one of these above ad/ldap groups. If they are not in any of these groups, they will be denied access to log in.

🔴 &nbsp;To configure AD / LDAP login authentication:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

![Image: LADP / Active Directory Authentication](images/image_user_auth_ladp_login_auth.png)

___
### Okta Authentication

Diskover-Web supports authenticating/authorizing users using Okta Identity.

>Note: this doc does not cover adding an application to Okta admin page. You will need to first add an Oauth application (Web app) to your Okta admin page for Diskover-Web

🔴 &nbsp;To configure Okta logins:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

The following information is required to configure Okta authentication/authorization:

**OKTA_LOGINS** - set to TRUE to enable and use Okta login
>Note: when using Okta login, local and ldap login is not used

**OKTA_OAUTH2_CLIENT_ID** - your Okta oauth2 application client id

**OKTA_OAUTH2_CLIENT_SECRET** - your Okta oauth2 application client secret

**OKTA_OAUTH2_REDIRECT_URI** - your Okta login redirect URI, example: `https://diskover.domain.com/login.php?callback`
>Note: login.php page handles the redirect uri when using `callback` parameter

**OKTA_OAUTH2_LOGOUT_REDIRECT_URI** - your Okta post logout redirect URI, example: `https://diskover.domain.com/`

**OKTA_OAUTH2_ISSUER** - your Okta API authorization server issuer URI

**OKTA_API_URL_BASE** - your Okta API URL

**OKTA_API_TOKEN** - your Okta API Token

At least two Okta groups should be established for Diskover and set in web config:
1. Admin group added to **OKTA_ADMIN_GROUPS**
2. Task panel group added to **OKTA_TASK_PANEL_GROUPS**

>Note: at login, the Okta user will be checked if they are in one of these above Okta groups.

___
### Restricting Visibility and Access

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)


Visibility can be limited by users/groups to specific indexes or branches within a given index. 

🔴 &nbsp;To limit index visibility by users/groups:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

```
// group/user index mappings
// controls what indices and paths groups/users are allowed to view
// enable index mappings, set to TRUE or FALSE
const INDEX_MAPPINGS_ENABLED = FALSE;
// index_patterns key is a list of index names user/group is allowed access to view
// index_patterns_exclude key is a list of index names user/group is not allowed to view
// index pattern wildcards * and ? are allowed, example diskover-* or diskover-indexname-*
// to not exclude any indices/dirs, use empty list [] for index_patterns_exclude and excluded_dirs
// excluded dirs use absolute path, example /top_path/dir_name
// group/user names and excluded dirs are case-sensitive
const INDEX_MAPPINGS = [
    CONSTANTS::ADMIN_USER => [
        ['index_patterns' => ['diskover-*'], 'index_patterns_exclude' => [], 'excluded_dirs' => []]
    ],
    CONSTANTS::USER => [
        ['index_patterns' => ['diskover-*'], 'index_patterns_exclude' => [], 'excluded_dirs' => []]
    ],
    'diskover-admins' => [
        ['index_patterns' => ['diskover-*'], 'index_patterns_exclude' => [], 'excluded_dirs' => []]
    ],
    'diskover-users' => [
        ['index_patterns' => ['diskover-*'], 'index_patterns_exclude' => [], 'excluded_dirs' => []]
    ],
    'diskover-powerusers' => [
        ['index_patterns' => ['diskover-*'], 'index_patterns_exclude' => [], 'excluded_dirs' => []]
    ]
];
```

Visibility can also be limited by AD/LDAP group permission and unix permissions filtering.

> _Note:_ To use unix permissions filtering, you will need to enable and use the [Unix Permissions plugin](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#unix-permissions-plugin) when indexing, for both file and directory.

🔴 &nbsp;To limit index visibility by AD/LDAP group membership and unix permissions:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

```
// AD/ldap group permission filtering
// controls if directories in the index get fitered based on AD/ldap groups membership
// local users admin and diskover always see all directories in the index
// enable ldap filtering, set to TRUE or FALSE
const LDAP_FILTERING_ENABLED = TRUE;
// AD/ldap groups that are excluded from filtering
// if a user is a member of one of these groups, they will see all folders
// group names are case-sensitive
const LDAP_GROUPS_EXCLUDED = ['diskover-admins', 'diskover-powerusers'];
// use unix_perms index field (if exists) as well as group membership to determine filtering
// if unix permissions is readable by other, they will be visible to the user, regardless of ldap group membership
// example a directory with unix_perms = 777 or 770 or 755 will be visible to all
// example a directory with unix_perms = 770 or 751 will not be visible to all
const UNIXPERMS_FILTERING_ENABLED = TRUE;
```

___
### Restricting Diskover-Web API Access

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

#### Enable HTTP Basic Authentication

You can turn on HTTP Basic Auth for the Diskover-Web API. This will make it required to use a username and password to access the API.

🔴 &nbsp;Enable API auth and set a username and password:
```
vim /var/www/diskover-web/src/diskover/Constants.php
```

```
// HTTP Basic Auth for REST API
// api authentication, set to TRUE to enable or FALSE to disable
const API_AUTH_ENABLED = TRUE;
// api username and password
const API_USER = 'diskoverapi';
const API_PASS = 'apisecret';
```

🔴 &nbsp;The api password `API_PASS` in web config is only used as default password and this password needs to be changed. Login to Diskover-web as admin, go to settings page and scroll to the API Password section and click change password. Set a new password and the password will be securely stored in sqlite db.

> _Note:_ When changing API Auth settings, remember to update [diskoverd](https://docs.diskoverdata.com/diskover_installation_guide/#setting-up-diskover-task-worker-daemon) task worker daemon config to use the new auth settings.


#### Restricting API Access By Host/IP

To limit API access to certain hosts or networks, you can add an additional location block with allow/deny rules to your Diskover-Web NGINX config  **/etc/nginx/conf.d/diskover-web.conf**.
```
vi /etc/nginx/conf.d/diskover-web.conf
```

The NGINX location block below needs to go above the other location block that starts with:
```
location ~ \.php(/|$) {
```

🔴 &nbsp;Change **1.2.3.4** to the IP address you want to allow access to the API. You can add additional lines if you want to allow more hosts/networks to access the API. The **deny all** line needs to come after all **allow** lines:
```
location ~ /api\.php(/|$) {
    allow 1.2.3.4;
    deny all;
    fastcgi_split_path_info ^(.+\.php)(/.+)$;
    set $path_info $fastcgi_path_info;
    fastcgi_param PATH_INFO $path_info;
    try_files $fastcgi_script_name =404;
    fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;
    #fastcgi_pass 127.0.0.1:9000;
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
    fastcgi_read_timeout 900;
    fastcgi_buffers 16 16k;
    fastcgi_buffer_size 32k;
}
```

🔴 &nbsp;Restart NGINX:
```
systemctl restart nginx
```

🔴 &nbsp;Then verify you can access API with **curl** or web browser on an allowed host:
```
curl http://<diskover-web-host>:<port>/api.php
```

🔴 &nbsp;You should see this:
```
{
    "status": true,
    "message": {
        "version": "diskover REST API v2.0-b.3",
        "message": "endpoint not found"
    }
}
```

Others will now be blocked with a **403 forbidden http** error page.
