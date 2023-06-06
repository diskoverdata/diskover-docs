___
## Develop Your Own Alternate Scanner
___

### Introduction to Writing an Alternate Scanner

Before talking about _how_ to write an alternate scanner for Diskover, let's talk about _what_ exactly a scanner is and define some terms. A scanner in Diskover is a piece of code that walks over some sort of hierarchical data set and gathers information about each node as it goes. It's often represented as a tree with a filesystem being the most common use case. In this case, the information it gathers would be the size of each file, when it was modified, the owner, etc.

Note however that a filesystem is only one use case. It could just as easily be a database that is specially designed for this kind of data, or more commonly the Amazon S3 buckets we frequently see. These are not standard filesystems, but they can still be scanned by Diskover with a little creativity and magic. This is where the alternate scanners come in.

Alternate scanners work like adapters for the main Diskover process, enabling communication with some data sources that are foreign to it. They have all the parts needed to connect to the data source, list data on it, recursively walk through the data, and then return it in a format that Diskover understands, so it can display the metadata, as well as use it for search, analytical and workflow purposes.

One big advantage of an alternate scanner is that the data source might have additional data beyond the typical dataset we find on a filesystem. For example, Amazon S3 allows you to store user-defined metadata fields on each object in its store. With an S3 scanner, we could choose to pull that extra information and send it to Diskover for various uses.

### Setup

In order to follow this guide, you'll need an FTP server running that has some data on it. This test was performed using the [pyftpd](https://pypi.org/project/pyftpdlib/) library serving up a home directory with a simple script. 

🔴 &nbsp;It must be run as root to be able to serve on the default port 21:

```python
python3 -m pip install pyftpd
```

🔴 &nbsp;Put the codes below in a file called `ftp_server.py`:

```python
#!/usr/bin/env python3

from pyftpdlib.authorizers import DummyAuthorizer
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer

authorizer = DummyAuthorizer()
authorizer.add_user("user", "12345", "/home/sean", perm="elradfmwMT")

handler = FTPHandler
handler.authorizer = authorizer

server = FTPServer(("127.0.0.1", 21), handler)
server.serve_forever()
```

🔴 &nbsp;Execute it:

```python
sudo python3 ftp_server.py
```

🔴 &nbsp;Once it starts up, you have a temporary FTP server listening on port 21. Don't forget to update the directory to share in the `add_user()` function.


### The Plan

As an example, we are going to build an alternate scanner that scans an FTP site and displays the data in Diskover. As mentioned, to be able to do this we are going to need to be able to connect to the FTP site, stat files and directories in it, list directories, and walk the tree. Instead of working with the low-level `ftplib` python library, we'll use a high-level library that will do a lot of the work for us, called [ftputil](https://ftputil.sschwarzer.net/).

🔴 &nbsp;Run the following to get it installed.

```python
python3 -m pip install ftputil
```

🔴 &nbsp;To start, we need to think about implementing six functions that the main diskover process will call in our alt scanner. These are the required interface for Diskover to communicate with our scanner:

1. stat()
2. scandir()
3. walk()
4. check_dirpath()
5. abspath()
6. get_storage_size()

Let's talk about them one by one.

| FUNCTION | DESCRIPTION |
| --- | --- |
| **stat(path)** | `stat()` accepts a path and returns an object that resembles a [stat_result](https://docs.python.org/3/library/os.html#os.stat_result) object. It needs to have the following attributes: `st_mode`, `st_inode`, `st_dev`, `st_nlink`, `st_uid`, `st_gid`, `st_size`, `st_sizedu`, `st_ctime`, `st_mtime`, and `st_atime`. It's okay for some of these to be **None**, but they must all be present on the object. |
| ** scandir(path)** | `scandir()` accepts a path and returns a list of objects that resemble [DirEntry](https://docs.python.org/3/library/os.html#os.DirEntry) objects. Each one needs to have the following attributes and methods: `path`, `name`, `stat()`, `is_dir()`, `is_file()`, `is_symlink()`, `inode()` |
| ** walk(path)** | `walk()` is a function (resembling [os.walk()](https://docs.python.org/3/library/os.html#os.walk)) that takes a path and recursively walks down the tree returning a tuple of the (path walked, files in the path, dirs in the path) for each directory found. |
| **check_dirpath(path)** | `check_dirpath()` takes a root path and verifies that it actually exists. |
| **abspath(path)** | `abspath()` converts a path given on the command line to an absolute path usable by Diskover. |
| **get_storage_size(path)** | `get_storage_size()` attempts to figure out the total and free size of the storage we are working on. |


### Building the Scanner

Now that we've defined the six functions we need to implement, let's see how we can use the `ftputil` package to begin building an alternate scanner. 

🔴 &nbsp;First, we will make an `FTPServer` class that will wrap the `ftputil` server connection and give it the six required functions.

```python
import ftputil

class FTPServer:
    def __init__(self, host, user, password, storage_size):
        self.host = host
        self.user = user
        self.password = password
        self.storage_size = storage_size

        self.ftp_host = ftputil.FTPHost(host, user, password)

    def get_storage_size(self, path):
        pass

    def abspath(self, path):
        pass

    def check_dirpath(self, path):
        pass

    def scandir(self, top):
        pass

    def walk(self, top):
        pass

    def stat(self, path):
        pass
```

🔴 &nbsp;Now let's instantiate it with attributes needed to connect, and a storage size we determine offline since there is no way to determine that through the FTP protocol:

```python
ftpserver = FTPServer(
    host='localhost',
    user='user',
    password='12345',
    storage_size=1.074e+11,
)
```

🔴 &nbsp;Before we even try running the scanner with Diskover, it's often helpful to run it as a standalone script and get the directory walking and scanning functions in place first. To do that, we can call the `ftpserver.walk()` function as it will be called from Diskover and just print out the results. First, let's start with the `scandir()` function as that is called from the `walk()` function, `scandir()` should list the contents of a directory on the server and return them. Here's what it looks like so far.

```python
import os
import ftputil

class FTPServer:
    def __init__(self, host, user, password, storage_size):
        self.host = host
        self.user = user
        self.password = password
        self.storage_size = storage_size

        self.ftp_host = ftputil.FTPHost(host, user, password)

    def get_storage_size(self, path):
        pass

    def abspath(self, path):
        pass

    def check_dirpath(self, path):
        pass

    def scandir(self, path):
        entries = self.ftp_host.listdir(path)

        for name in entries:
            yield os.path.join(path, name)

    def walk(self, top):
        pass

    def stat(self, path):
        pass

ftpserver = FTPServer(
    host='localhost',
    user='user',
    password='12345',
    storage_size=1.074e+11,
)

for f in ftpserver.scandir('/'):
    print(f)
```

🔴 &nbsp;Now we can get a listing of the top level of our FTP server by running the script, but as mentioned previously, `scandir()` needs to return objects that resemble `DirEntry` objects. Let's make a new class called `FTPDirEntry` that takes a path as well as our `FTPServer` object, and update the `scandir()` function to return `FTPDirEntry` objects:

```python
class FTPDirEntry:
    def __init__(self, path, server):
        self._server = server
        self.path = path

    @property
    def name(self):
        return os.path.basename(self.path)
        
    def is_dir(self):
        return self._server.ftp_host.path.isdir(self.path)

    def is_file(self):
        return self._server.ftp_host.path.isfile(self.path)

    def is_symlink(self):
        return self._server.ftp_host.path.islink(self.path)

    def stat(self):
        return self._server.stat(self.path)
    
    def inode(self):
        return None
    
    def __repr__(self):
        return f'FTPDirEntry(type={"DIR" if self.is_dir() is True else "FILE"}, path={self.path})'
```

🔴 &nbsp;Luckily the `ftputil` package has some cool built-in functions that do exactly what we want, so we just map them directly onto our methods. Also, update the `scandir()` function:

```python
    def scandir(self, path):
        entries = self.ftp_host.listdir(path)

        for name in entries:
            yield FTPDirEntry(os.path.join(path, name), self)
```

🔴 &nbsp;Now when we run the script, it will print out `FTPDirEntry` objects instead of strings and show us whether they are directories or files. We can list a directory on the FTP server, now let's write the code to walk the directories recursively. Below is the new code with a `walk()` method added, and instead of starting it up by calling `scandir`, we are calling walk with **'/'** and printing out everything it returns:

```python
import os
import ftputil

class FTPServer:
    def __init__(self, host, user, password, storage_size):
        self.host = host
        self.user = user
        self.password = password
        self.storage_size = storage_size

        self.ftp_host = ftputil.FTPHost(host, user, password)

    def get_storage_size(self, path):
        pass

    def abspath(self, path):
        pass

    def check_dirpath(self, path):
        pass

    def scandir(self, path):
        entries = self.ftp_host.listdir(path)

        for name in entries:
            yield FTPDirEntry(os.path.join(path, name), self)

    def walk(self, path):
        dirs, nondirs = list(), list()
        for entry in self.scandir(path):
            if entry.is_dir() is True:
                dirs.append(entry.name)
            else:
                nondirs.append(entry.name)
        yield path, dirs, nondirs

        # Recurse into sub-directories
        for name in dirs:
            new_path = os.path.join(path, name)
            yield from self.walk(new_path)

    def stat(self, path):
        pass


class FTPDirEntry:
    def __init__(self, path, server):
        self._server = server
        self.path = path

    @property
    def name(self):
        return os.path.basename(self.path)

    def is_dir(self):
        return self._server.ftp_host.path.isdir(self.path)

    def is_file(self):
        return self._server.ftp_host.path.isfile(self.path)

    def is_symlink(self):
        return self._server.ftp_host.path.islink(self.path)

    def stat(self):
        return self._server.stat(self.path)

    def inode(self):
        return None

    
    def __repr__(self):
        return f'FTPDirEntry(type={"DIR" if self.is_dir() is True else "FILE"}, path={self.path})'


ftpserver = FTPServer(
    host='localhost',
    user='user',
    password='12345',
    storage_size=1.074e+11,
)

for root, dirs, files in ftpserver.walk('/'):
    print(f'Walking {root}')
    for d in dirs:
        print(f'DIR: {d}')
    for f in files:
        print(f'FILE: {f}')
```

> _Note:_ Now we have some basic functionality that will walk our FTP server, but it's missing quite a few details to work with Diskover. Let's see if we can start to fill in some of the details. 

🔴 &nbsp;The first thing that Diskover will try to do with our scanner is to run `check_dirpath()` on the root path we pass in on the command line and make sure it's a valid path on the FTP server. We can check if a path exists on the FTP server by trying to list the remote directory. So let's have `check_dirpath()` call `ftp_host.listdir` and try it with **'/'** which should always work (since it's the root), and **'/foo'** which doesn't exist. It should return a tuple of (bool, error_code):

```python
    def check_dirpath(self, path):
        self.ftp_host.listdir(path)
        return True, None
```

🔴 &nbsp;Then call it with:

```python
print(ftpserver.check_dirpath('/'))
print(ftpserver.check_dirpath('/FOO'))
```

🔴 &nbsp;After running it, it looks like the first one succeeded and the second threw a `ftputil.error.PermanentError: 550` when we tried to list a non-existent directory. Now that we know that error, we can modify `check_dirpath()` and have it handle that error and return **False** and an **error code** when we get it, instead of letting it kill the program. What this means is that if a user calls the scanner with a bad path on the command line, they will get a nice error telling them that the folder does not exist.

```python
    def check_dirpath(self, path):
        try:
            self.ftp_host.listdir(path)
        except ftputil.error.PermanentError as e:
            if e.errno == 550:
                return False, f'No such directory! {repr(path)}'
            else:
                raise
        return True, None
```

🔴 &nbsp;Next, Diskover is going to call our scanner's `abspath()` function. Luckily `ftputil` has another built-in function so that's an easy one. Often times here you want to sanitize the input given by the user, for example removing trailing slashes:

```python
    def abspath(self, path):
        if path != '/':
            path = path.rstrip('/')
        return self.ftp_host.path.abspath(path)
```

🔴 &nbsp;For `get_storage_size()`, it should return a tuple of the total size of the storage, the free size, and the available size. Since this runs at the start of the crawl, and we have no access to the actual filesystem, we have no way to calculate these numbers. We only have the total size because we manually entered it into the config beforehand.  So we will just return the total size three times, so it will appear full in Diskover:

```python
    def get_storage_size(self, path):
        return self.storage_size, self.storage_size, self.storage_size
```

🔴 &nbsp;Finally, let's update the `stat()` function with a simple built-in function from `ftputil`. Then let's take out our invocation code at the bottom and add the code needed to get it to run as an alternate scanner. When Diskover imports an alt scanner, it first looks for those six required functions at the top level of our code, but since we have them defined as methods on an instance, we need to assign those methods to the names it expects at the top level:

```python
walk = ftpserver.walk
scandir = ftpserver.scandir
check_dirpath = ftpserver.check_dirpath
abspath = ftpserver.abspath
get_storage_size = ftpserver.get_storage_size
stat = ftpserver.stat
```

🔴 &nbsp;Here's what it should now look like.

```python
import os
import ftputil

class FTPServer:
    def __init__(self, host, user, password, storage_size):
        self.host = host
        self.user = user
        self.password = password
        self.storage_size = storage_size

        self.ftp_host = ftputil.FTPHost(host, user, password)

    def get_storage_size(self, path):
        return self.storage_size, self.storage_size, self.storage_size

    def abspath(self, path):
        if path != '/':
            path = path.rstrip('/')
        return self.ftp_host.path.abspath(path)

    def check_dirpath(self, path):
        try:
            self.ftp_host.listdir(path)
        except ftputil.error.PermanentError as e:
            if e.errno == 550:
                return False, f'No such directory! {repr(path)}'
            else:
                raise
        return True, None

    def scandir(self, path):
        entries = self.ftp_host.listdir(path)

        for name in entries:
            yield FTPDirEntry(os.path.join(path, name), self)

    def walk(self, path):
        dirs, nondirs = list(), list()
        for entry in self.scandir(path):
            if entry.is_dir() is True:
                dirs.append(entry.name)
            else:
                nondirs.append(entry.name)
        yield path, dirs, nondirs

        # Recurse into sub-directories
        for name in dirs:
            new_path = os.path.join(path, name)
            yield from self.walk(new_path)

    def stat(self, path):
        return self.ftp_host.stat(path)
    

class FTPDirEntry:
    def __init__(self, path, server):
        self._server = server
        self.path = path

    @property
    def name(self):
        return os.path.basename(self.path)

    def is_dir(self):
        return self._server.ftp_host.path.isdir(self.path)

    def is_file(self):
        return self._server.ftp_host.path.isfile(self.path)

    def is_symlink(self):
        return self._server.ftp_host.path.islink(self.path)

    def stat(self):
        return self._server.stat(self.path)

    def inode(self):
        return None

    
    def __repr__(self):
        return f'FTPDirEntry(type={"DIR" if self.is_dir() is True else "FILE"}, path={self.path})'


ftpserver = FTPServer(
    host='localhost',
    user='user',
    password='12345',
    storage_size=1.074e+11,
)

walk = ftpserver.walk
scandir = ftpserver.scandir
check_dirpath = ftpserver.check_dirpath
abspath = ftpserver.abspath
get_storage_size = ftpserver.get_storage_size
stat = ftpserver.stat
```

🔴 &nbsp;We now have something that can begin to be run by Diskover, and we can figure out the missing pieces from there. Make sure you have the file in `/opt/diskover/scanners/ftp_scanner.py` and then:

```python
cd /opt/diskover
```  

🔴 &nbsp;You can try executing it with:

```python
python3 diskover.py --altscanner=ftp_scanner /
```

🔴 &nbsp;When we run this command, it runs for a little bit and then throws an error when it's calling our `stat()` function on the root directory `ftputil.error.RootDirError: can't stat remote root directory` 

It looks like a limitation of the `ftputil` package, so we will have to handle the error in `stat()` and return default information in this case. We can use a 
`SimpleNamespace` object from the built-in **types** library to mimic a `stat_result` object with default info set. 

> _Note:_ Don't forget to import `SimpleNamespace!*` from types import SimpleNamespace.

```python
    def stat(self, path):
        try:
            return self.ftp_host.stat(path)
        except ftputil.error.RootDirError:
            return SimpleNamespace(**{
                'st_mode': 0,
                'st_ino': 0,
                'st_dev': None,
                'st_nlink': 1,
                'st_uid': 0,
                'st_gid': 0,
                'st_size': 1,
                'st_sizedu': 1,
                'st_ctime': 0,
                'st_mtime': 0,
                'st_atime': 0,
          })
```

This is running even farther now, but it looks like the `StatResult` object returned by `ftputil` doesn't have at least one of the attributes that Diskover is expecting `st_sizedu`. Here is what a `ftputil` `StatResult` object looks like:

```
StatResult(st_mode=33204, st_ino=None, st_dev=None, st_nlink=1, st_uid='sean', st_gid='sean', st_size=20811, st_atime=None, st_mtime=1670964480.0, st_ctime=None)
``` 

🔴 &nbsp;We are going to have an issue with those **None** values for the times as well, so let's just return another `SimpleNamespace` object and take out the `attrs` from the `StatResult` we need and transform them if needed. We will assume the `st_mtime` is always set and if the `st_atime` or `st_ctime` is **None**, set them to the `st_mtime`:

```python
    def stat(self, path):
        try:
            st_res = self.ftp_host.stat(path)
            return SimpleNamespace(**{
                'st_mode': st_res.st_mode,
                'st_ino': st_res.st_ino,
                'st_dev': st_res.st_dev,
                'st_nlink': st_res.st_nlink,
                'st_uid': st_res.st_uid,
                'st_gid': st_res.st_gid,
                'st_size': st_res.st_size,
                'st_sizedu': st_res.st_size,
                'st_ctime': st_res.st_ctime if st_res.st_ctime is not None else st_res.st_mtime,
                'st_mtime': st_res.st_mtime,
                'st_atime': st_res.st_atime if st_res.st_atime is not None else st_res.st_mtime,
          })
        except ftputil.error.RootDirError:
            return SimpleNamespace(**{
                'st_mode': 0,
                'st_ino': 0,
                'st_dev': None,
                'st_nlink': 1,
                'st_uid': 0,
                'st_gid': 0,
                'st_size': 1,
                'st_sizedu': 1,
                'st_ctime': 0,
                'st_mtime': 0,
                'st_atime': 0,
          })
```

🔴 &nbsp;Finally, let's add two top-level functions that Diskover requires that we haven't mentioned yet. These are functions that allow you to add extra metadata and tags to each file as a scan is running. For now, we are just going to leave them empty.

```python
def add_meta(path, stat):
    return None

def add_tags(metadict):
    return None
```

🔴 &nbsp;Now we have what should be a complete scanner, but when we run this with the default Diskover config, we're running into problems. It's hanging up with repeated a message like `OSError 250 / is the current directory`.  Our guess is that either the `ftputil` package or the FTP server itself doesn't handle threads and multiple connections well, so it's getting confused about where we are and what we want at any given time.  

The main Diskover process is multi-threaded so it's throwing lots of requests for different things to the server at one time. To test this out, we can make the Diskover process single-threaded by changing two config settings in `~/.config/diskover/config.yaml`.  

Edit that file and set both `maxthreads: 1` and `maxwalkthreads: 1` then try running the scanner again.  When we change those settings and run the scanner again...it works!

🔴 &nbsp;While this works, it would be better to use multiple threads and use locking on the sections of the code that need it, so we get a performance boost. So basically what we want to do is use a threading. Lock any time we are doing a `ftp_host` operation.  We'll just add that code and post the whole thing below. We're also adding the optional `close()` function so that our `ftp_host` is gracefully closed at the end of the operation.

```python
import os
from types import SimpleNamespace
from threading import Lock

import ftputil


class FTPServer:
    def __init__(self, host, user, password, storage_size):
        self.host = host
        self.user = user
        self.password = password
        self.storage_size = storage_size

        self.ftp_host = ftputil.FTPHost(host, user, password)
        self.lock = Lock()

    def get_storage_size(self, path):
        return self.storage_size, self.storage_size, self.storage_size

    def abspath(self, path):
        if path != '/':
            path = path.rstrip('/')
        with self.lock:
            return self.ftp_host.path.abspath(path)

    def check_dirpath(self, path):
        try:
            with self.lock:
                self.ftp_host.listdir(path)
        except ftputil.error.PermanentError as e:
            if e.errno == 550:
                return False, f'No such directory! {repr(path)}'
            else:
                raise
        return True, None

    def scandir(self, path):
        with self.lock:
            entries = self.ftp_host.listdir(path)

        for name in entries:
            yield FTPDirEntry(os.path.join(path, name), self)

    def walk(self, path):
        dirs, nondirs = list(), list()
        for entry in self.scandir(path):
            if entry.is_dir() is True:
                dirs.append(entry.name)
            else:
                nondirs.append(entry.name)
        yield path, dirs, nondirs

        # Recurse into sub-directories
        for name in dirs:
            new_path = os.path.join(path, name)
            yield from self.walk(new_path)

    def stat(self, path):
        try:
            with self.lock:
                st_res = self.ftp_host.lstat(path)
            return SimpleNamespace(**{
                'st_mode': st_res.st_mode,
                'st_ino': st_res.st_ino,
                'st_dev': st_res.st_dev,
                'st_nlink': st_res.st_nlink,
                'st_uid': st_res.st_uid,
                'st_gid': st_res.st_gid,
                'st_size': st_res.st_size,
                'st_sizedu': st_res.st_size,
                'st_ctime': st_res.st_ctime if st_res.st_ctime is not None else st_res.st_mtime,
                'st_mtime': st_res.st_mtime,
                'st_atime': st_res.st_atime if st_res.st_atime is not None else st_res.st_mtime,
          })
        except ftputil.error.RootDirError:
            return SimpleNamespace(**{
                'st_mode': 0,
                'st_ino': 0,
                'st_dev': None,
                'st_nlink': 1,
                'st_uid': 0,
                'st_gid': 0,
                'st_size': 1,
                'st_sizedu': 1,
                'st_ctime': 0,
                'st_mtime': 0,
                'st_atime': 0,
          })

    def close(self, _):
        self.ftp_host.close()


class FTPDirEntry:
    def __init__(self, path, server):
        self._server = server
        self.path = path

    @property
    def name(self):
        return os.path.basename(self.path)

    def is_dir(self):
        with self._server.lock:
            return self._server.ftp_host.path.isdir(self.path)

    def is_file(self):
        with self._server.lock:
            return self._server.ftp_host.path.isfile(self.path)

    def is_symlink(self):
        with self._server.lock:
            return self._server.ftp_host.path.islink(self.path)

    def stat(self):
        return self._server.stat(self.path)

    def inode(self):
        return None

    def __repr__(self):
        return f'FTPDirEntry(type={"DIR" if self.is_dir() is True else "FILE"}, path={self.path})'


def add_meta(path, stat):
    return None

def add_tags(metadict):
    return None


ftpserver = FTPServer(
    host='localhost',
    user='user',
    password='12345',
    storage_size=1.074e+11,
)

walk = ftpserver.walk
scandir = ftpserver.scandir
check_dirpath = ftpserver.check_dirpath
abspath = ftpserver.abspath
get_storage_size = ftpserver.get_storage_size
stat = ftpserver.stat
close = ftpserver.close
```

### Conclusion

So there you have it, a working FTP alt scanner for Diskover! There is still more that could be done, for example, we should probably:

- Move those FTP connection values into a config file.
- We should be able to connect to servers that use TLS.
- We might want to add special metadata as it's scanning.  
- And we might want to add tags to each file as it's scanning.  

Even so, you now have an understanding of all the parts necessary to build your own alternate scanners. Good luck!
