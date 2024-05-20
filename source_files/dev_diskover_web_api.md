___
## Using the Diskover-Web API

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

### Overview
Diskover-Web has a REST API for creating, getting, updating, and deleting index and task data.

### GET (with curl or web browser)

Getting file/directory tag info is done with the GET method.

For "tags" and "search" endpoints, you can set the page number and result size with ex. &page=1 and &size=100. Default is page 1 and size 1000.

**Curl example:**
```
curl -X GET http://localhost:8000/api.php/indexname/endpoint
```

**List all Diskover indices and stats for each:**
```
GET http://localhost:8000/api.php/list
```

**List all files with no tag (untagged):**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=&type=file
```

**List all directories with no tag (untagged):**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=&type=directory
```

**List files with tag "version 1":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=version%201&type=file
```

**List directories with tag "version 1":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=version%201&type=directory
```

**List files/directories (all items) with tag "version 1":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=version%201
```

**List files with tag "archive":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=archive&type=file
```

**List directories with tag "delete":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tags?tag=delete&type=directory
```

**List total size (in bytes) of files for each tag:**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tagsize?type=file
```

**List total size (in bytes) of files with tag "delete":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tagsize?tag=delete&type=file
```

**List total size (in bytes) of files with tag "version 1":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tagsize?tag=version%201&type=file
```

**List total number of files for each tag:**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tagcount?type=file
```

**List total number of files with tag "delete":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tagcount?tag=delete&type=file
```

**List total number of files with tag "version 1":**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/tagcount?tag=version+1&type=file
```

**Search index using ES query syntax:**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/search?query=extension:png%20AND%20type:file%20AND%20size:>1048576
```

**Get latest completed index using top path in index:**
```
GET http://localhost:8000/api.php/latest?toppath=/dirpath
```

**Get disk space info for all top paths in an index:**
```
GET http://localhost:8000/api.php/diskover-2018.01.17/diskspace
```

### Update (with JSON object)

Updating file/directory tags and tasks is done with the PUT method. You can send a JSON object in the body. The call returns the status and number of items updated.

**Curl example:**
```
curl -X PUT http://localhost:8000/api.php/index/endpoint -d '{}'
```

**Tag files "delete":**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagfiles
{"tags": ["delete"], "files": ["/Users/shirosai/file1.png", "/Users/shirosai/file2.png"]}
```

**Tag files with tags "archive" and "version 1":**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagfiles
{"tags": ["archive", "version 1"], "files": ["/Users/shirosai/file1.png", "/Users/shirosai/file2.png"]}
```

**Remove tag "delete" for files which are tagged "delete":**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagfiles
{"tags": ["delete"], "files": ["/Users/shirosai/file1.png", "/Users/shirosai/file2.png"]}
```

**Remove all tags for files:**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagfiles
{"tags": [], "files": ["/Users/shirosai/file1.png", "/Users/shirosai/file2.png"]}
```

**Tag directory "archive" (non-recursive):**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": ["archive"], "dirs": ["/Users/shirosai/Downloads"]}
```

**Tag directories and all files in directories with tags "archive" and "version 1" (non-recursive):**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": ["archive", "version 1"], "dirs": ["/Users/shirosai/Downloads", "/Users/shirosai/Documents"], "tagfiles": "true"}
```

**Tag directory and all sub-dirs (no files) with tag "version 1" (recursive):**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": ["version 1"], "dirs": ["/Users/shirosai/Downloads"], "recursive": "true"}
```

**Tag directory and all items (files/directories) in directory and all sub-dirs with tag "version 1" (recursive):**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": ["version 1"], "dirs": ["/Users/shirosai/Downloads"], "recursive": "true", "tagfiles": "true"}
```

**Remove tag "archive" from directory which is tagged "archive":**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": ["archive"], "dirs": ["/Users/shirosai/Downloads"]}
```

**Remove all tags from directory and all files in directory (non-recursive):**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": [], "dirs": ["/Users/shirosai/Downloads"], "tagfiles": "true"}
```

**Remove all tags from directory and all items (files/directories) in directory and all sub dirs (recursive):**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/tagdirs
{"tags": [], "dirs": ["/Users/shirosai/Downloads"], "recursive": "true", "tagfiles": "true"}
```

**Update task as disabled (or enabled)**
```
PUT http://localhost:8000/api.php/diskover-2018.01.17/updatetask
{"id": "4eba40842e2248b1fb3b1f6631bef7e8", "disabled": true}
```

### Create (with JSON object)

Updating tasks is done with the POST method. You can send a JSON object in the body. The call returns the item that was created.

**Curl example:**
```
curl -X POST http://localhost:8000/api.php/endpoint -d '{}'
```

**Create an index task**
```
POST http://localhost:8000/api.php/diskover-2018.01.17/addtask
{"type": "index", "name": "FOO", "crawl_paths": "/foo", "retries": 1, "timeout": 30, "retry_delay": 1, "run_min": 0, "run_hour": ,"run_month": "*", "run_day_month": "*", "run_day_week": "*"}
```
### Delete (with JSON object)

Deleting tasks is done with the DELETE method. You can send a JSON object in the body. The call returns the status.

**Curl example:**
```
curl -X DELETE http://localhost:8000/api.php/endpoint -d '{}'
```

**Delete a task**
```
DELETE http://localhost:8000/api.php/diskover-2018.01.17/deletetask
{"id": "4eba40842e2248b1fb3b1f6631bef7e8"}
```

### Examples of API calls in Python
```python
"""example usage of diskover-web rest-api using requests and urllib
"""
import requests
try:
    from urllib import quote
except ImportError:
    from urllib.parse import quote
import json

url = "http://localhost:8000/api.php"
```

**List all diskover indices:**
```python
r = requests.get('%s/list' % url)
print(r.url + "\n")
print(r.text + "\n")
```

**List total number of files for each tag in diskover-index index:**
```python
index = "diskover-index"
r = requests.get('%s/%s/tagcount?type=file' % (url, index))
print(r.url + "\n")
print(r.text + "\n")
```

**List all png files in diskover-index index:**
```python
q = quote("extension:png AND _type:file AND filesize:>1048576")
r = requests.get('%s/%s/search?query=%s' % (url, index, q))
print(r.url + "\n")
print(r.text + "\n")
```

**Tag directory and all files in directory with tag "archive" (non-recursive):**
```python
d = {'tag': 'archive', 'path_parent': '/Users/cp/Downloads', 'tagfiles': 'true'}
r = requests.put('%s/%s/tagdir' % (url, index), data = json.dumps(d))
print(r.url + "\n")
print(r.text + "\n")
```

**Create a custom task**
```python
d = {'type': 'Custom', 'name': 'FOOBAR', 'run_command': 'python3',
     'runcommand_args': '/home/foo/myscript.py', 'run_min': 0, 'run_hour': 1,
     'run_month': '*', 'run_day_month': '*', 'run_day_week': '*', 'retries': 1,
     'timeout': 30, 'retry_delay': 1, 'description': 'YAHOO!'
}
r = requests.post('%s/%s/addtask' % (url, index), data = json.dumps(d))
print(r.url + "\n")
print(r.text + "\n")
```

**Update a task to enabled and have it run now**
```python
d = {'id': '4eba40842e2248b1fb3b1f6631bef7e8', 'disabled': false, 'run_now': true}
r = requests.put('%s/%s/updatetask' % (url, index), data = json.dumps(d))
print(r.url + "\n")
print(r.text + "\n")
```

**Delete a task**
```python
d = {'id': '4eba40842e2248b1fb3b1f6631bef7e8'}
r = requests.delete('%s/%s/deletetask' % (url, index), data = json.dumps(d))
print(r.url + "\n")
print(r.text + "\n")
```
