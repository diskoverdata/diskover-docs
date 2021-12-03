___
### Diskover Indexer(s) Requirements

You can install Diskover indexers on a server or virtual machine (VM). Multiple indexers can be ran on a single machine or multiple machines for parallel crawling.

The indexing host uses a separate thread for each directory at level 1 of a top crawl directory. If you have many directories at level 1, you will want to increase the number of CPU cores and adjust **maxthreads** in the diskover config.

#### Linux

>- 64-bit Red Hat Enterprise Linux Server v7.x, v8.x
>- 64-bit CentOS v7.x, v8.x

#### Windows

>- 64-bit Windows v8, v10, v11
>- 64-bit Windows Server

#### Mac

>- 64-bit MacOS v10.x, v11.x

#### Recommended

>- 8-16 CPU cores
>- 8 GB RAM

#### Minimum

>- 4 CPU cores
>- 4 GB RAM
