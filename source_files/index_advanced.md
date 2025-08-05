
## Advanced Index Creation and Manipulation for Diskover Indexers

<img src="images/button_edition_essential.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_professional.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_media.png" width="125">&nbsp;&nbsp;<img src="images/button_edition_life_science.png" width="125">

This chapter discusses ways to improve indexing performance.

We recommend you have more/smaller indices than a few very large ones. Rather than indexing at the very top level of your storage mounts, you could index 1 level down into multiple indices and then run parallel `diskover.py` index processes which will be much faster to index a really large share with 100’s of millions of files.

You can optimize your indices by setting the number of shards and replicas in the Diskover config file. By default in Diskover config, shards are set to 1 and replicas are set to 0. It is important to note that these settings are not meant for production as they provide no load balancing or fault tolerance.

Please refer to the [Diskover User Guide](https://docs.diskoverdata.com/diskover_installation_guide/#prerequisites-and-requirements) for more information on requirements and recommendations.

___
### Building Indices

🔴 &nbsp;Run a crawl in the foreground printing all log output to screen:
```
python3 diskover.py -i diskover-<indexname> <tree_dir>
```

🔴 &nbsp;See all cli options:
```
python3 diskover.py -h
```

- Multiple directory trees **tree_dir** can be set to index multiple top paths into a single index ([available for annual subscriptions only](https://diskoverdata.com/solutions/)).
- UNC paths and drive maps are supported in Windows.
- Index name requires `diskover-` prefix. 
- Recommended index name `diskover-<mountname>-<datetime>`
- Index name is optional and indices by default will be named `diskover-<treedir>-<datetime>`
- Log settings, including log level `logLevel` and logging to a file `logToFile` instead of screen, can be found in the `diskover` config.

🔴 &nbsp;On Linux or macOS, to run a crawl in the background and redirect all output to a log file:
```
nohup python3 diskover.py ... > /var/log/<logname>.log 2>&1 &
```

___
### Adding Additional Directory Tree(s) to an Existing Index

🔴 &nbsp;To add additional directory tree(s) to an existing index ([available for annual subscriptions only](https://diskoverdata.com/solutions/)):
```
python3 diskover.py -i diskover-<indexname> -a <tree_dir>
```

___
### Creating Multiple Indices vs All Top Paths in a Single Index

The advantage of running multiple index tasks is speed; you can run them in parallel (in the background or on separate indexing machines) so you don’t have to wait for some long directory tree to finish scanning in order for the index to be usable in Diskover-Web for example.

🔴 &nbsp;Using these multiple index tasks:
```
diskover.py -i diskover-nas1 /mnt/stor1
diskover.py -i diskover-nas2 /mnt/stor2
```

🔴 &nbsp;Will perform better than the following, as `stor2` may have a lot more files/directories and you won’t be able to use the `diskover-nas` index until both finish scanning:
```
diskover.py -i diskover-nas /mnt/stor1 /mnt/stor2
```

___
### Scan Threads

Diskover uses threads for walking a directory tree, for example, if `maxthreads` in the Diskover config is set to `20`, up to `max 20` sub-directories under the index top path (top directory path/mount point/volume) can scan and index at once. This is important if you have a lot or very few sub-directories at level 1 in `/mnt/toppath`. If `/mnt/toppath` has only a single sub-directory at level 1, crawls will be slower since there will ever only be 1 thread running. To handle this, Diskover uses thread directory depth config setting `threaddirdepth` to start threads deeper than level 1.
