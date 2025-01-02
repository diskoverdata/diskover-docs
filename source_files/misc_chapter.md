<p id="misc_chapter"></p>

## Everything Else Chapter

<p id="pyenv"></p>

### PyEnv

This section will guide you through the global installation of PyEnv. PyEnv lets you easily switch between multiple versions of Python. It’s simple, unobtrusive, and follows the UNIX tradition of single-purpose tools that do one thing well.
<br><br>

⚠️ &nbsp;**IMPORTANT!**

  - PyEnv installs a Python environment on a per-user basis. Thus you must ensure to install the PyEnv as the user that is running the Diskover service.
  - [PyEnv GitHub repository](https://github.com/pyenv/pyenv)

🔴 &nbsp;Install git:
```
yum install git 
```
🔴 &nbsp;Install PyEnv:
```
curl https://pyenv.run | bash
```

🔴 &nbsp;Add to `.bashrc` or `.bash_profile`:
```
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

🔴 &nbsp;`yum` package installs:
```
yum install gcc make patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel
```

🔴 &nbsp;Install Python version 3.12.4 using PyEnv:
```
pyenv install 3.12.4
```

🔴 &nbsp;Display the PyEnv version currently in use:
```
pyenv
```

🔴 &nbsp;Update Pyenv to the latest version:
```
pyenv update
```

🔴 &nbsp;Show the currently active Python version managed by PyEnv:
```
pyenv version
```

🔴 &nbsp;List all Python versions installed via PyEnv:
```
pyenv versions
```

🔴 &nbsp;The next commands are optional. Choose based on a temporary or permanent Python3 version for your environment.

- Temporary - Set Python 3.12.4 as the current shells Python3 version:
```
pyenv shell 3.12.4
```

- Permanent - Set Python 3.12.4 as the global (default) Python3 version:
```
pyenv global 3.12.4
```
