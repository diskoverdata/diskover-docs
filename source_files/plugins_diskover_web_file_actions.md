<p id="plugins_file_actions"></p>

___
## Diskover-Web Plugins - File Actions

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)
___

Diskover-web is designed for extensibility. The open-source architecture is designed to promote extensibility via web plugins known as File Actions.

File Actions are located in the `public/fileactions` directory.

File Actions are written in PHP and have the extension `.php`. Diskover-web includes a few example file actions in the `fileaction_samples` directory. Any sample files that you wish to use need to be copied to `public/fileactions`.

After you have created a new File Action with an extension `.php`, you will need to add the File Action to the web config file in `src/diskover/Constants.php`. Edit the config file and look for the section titled File Actions. You will need to add the file action to the `const FILE_ACTIONS` array. There are some examples in the config file and in the `Constants.php.sample` default config file.

Here is an example of adding a File Action:

```
const FILE_ACTIONS = [
    'find file sequences' => [
        'webpage' => 'filesequence.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-images'
    ]
];
```

🔴 &nbsp;Each File Action is stored as an associative array with the key being the file action name:

- **webpage** : the filename of the File Action

- **allowed_users** : list of allowed local and/or AD/LDAP user names that can run the File Action

- **allowed_ldap_groups** : list of allowed AD/LDAP group names that can run the File Action

- **menu_icon_class** : Font Awesome css class name for icon [https://fontawesome.com/](https://fontawesome.com/)

Other examples:

```
const FILE_ACTIONS = [
    'list dir' => [
        'webpage' => 'listdir.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-folder-open'
    ],
    'newer subdirs' => [
        'webpage' => 'newersubdirs.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'fas fa-folder-minus'
    ],
    'get image http' => [
        'webpage' => 'getimagehttp.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-file-image'
    ],
    'rclone sync local' => [
        'webpage' => 'rclone.php?flags=sync -v -P -n&dest=/tmp/',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-copy'
    ],
    'python print path' => [
        'webpage' => 'pythonprintpath.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'fab fa-python'
    ],
    'open in Glim' => [
        'webpage' => 'glim.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-file-image'
    ],
    'find file sequences' => [
        'webpage' => 'filesequence.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-images'
    ],
    'submit to Vantage' => [
        'webpage' => 'vantageproxyjob.php',
        'allowed_users' => [Constants::ADMIN_USER, Constants::USER],
        'allowed_ldap_groups' => ['diskover-admins', 'diskover-powerusers', 'diskover-users'],
        'menu_icon_class' => 'far fa-file-video'
    ]
];
```

___

### File Action Logging

All File Actions log in the `public/fileactions/logs` directory. If you do not have that directory, create the logs directory and chown the directory to be owned by NGINX, so NGINX can write log files into the directory.
