



### PyEnv

Example Global Installation



  (install git)
yum install git 
  (install PyEnv)
`curl https://pyenv.run | bash`
  (add to .bashrc or .bash_profile)
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
  (yum package installs)
yum install gcc make patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel xz-devel
  (install Python version 3.12.4 using PyEnv)
pyenv install 3.12.4
  (display the PyEnv version currently in use)
pyenv
  (update Pyenv to the latest version)
pyenv update
  (show the currently active Python version managed by PyEnv)
pyenv version
  (list all Python versions installed via PyEnv)
pyenv versions
  (set Python 3.12.4 as the global (default) Python3 version)
pyenv global 3.12.4

NOTE : PyEnv installs a Python environment on a per-user basis. Thus you must ensure to install the PyEnv as the user that is running the Diskover service! 
