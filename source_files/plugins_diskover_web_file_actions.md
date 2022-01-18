<p id="plugins_file_actions"></p>

___
## Diskover-Web Plugins - File Actions
___

Diskover-web is designed for extensibility. The open-source architecture is designed to promote extensibility via web plugins known as File Actions.

File Actions are located in the `/var/www/diskover-web/public/fileactions` directory.

File Actions are written in PHP and have the extension `.php`. Diskover-web includes a few example file actions with the extension `.php.sample`. The extension will need to be renamed to `.php` in order to use them.

File actions can be set up to run OS commands and Python, Bash, etc scripts.

### File Action Logging

All file actions log in the `/var/www/diskover-web/public/fileactions/logs` directory. If you do not have that directory, create the logs directory and chown the directory to be owned by nginx so nginx can write log files into the directory.
