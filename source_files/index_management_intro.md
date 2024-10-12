
## Index Management

The Diskover curation platform creates indexes within an Elasticsearch endpoint. Each index is basically a snapshot of a point in time of any given volume (filesystem of S3 Bucket). These indexes require management:

- Indexes can’t be stored infinitely as ultimately the Elasticsearch environment will exhaust available storage space causing undesired cluster states.
- The index retention policy should reflect the requirements to:
	- Search across various points in time within Diskover-web.
	- Perform heatmap differential comparison.
	- Perform index differential comparisons via  indexdiff plugin, etc.
