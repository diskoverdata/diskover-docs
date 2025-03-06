<p id=“introduction”></p>

## Introduction

### Overview
This guide serves as a resource for understanding the data collected during indexing. Diskover leverages that rich metadata for granular searches, analysis, automation, and workflow optimization.

**For more information about Diskover, please visit [diskoverdata.com](https://diskoverdata.com)**

### Field Names aka Key-Value Pair

Diskover stores metadata in an Elasticsearch index. The fields comprise a **fieldname, aka key** and the **variable, aka value**. 

Often referred to as **key-value pair**, think of this as a structured way to store and retrieve data, where a **key acts as an identifier**, and the **value holds the associated variable data**. In Diskover, key-value pairs are used for various use cases like search queries, custom reporting, and workflows.

🔎 The query needs to be typed in this exact format **fieldname:_value_**

| **fieldname:** | **_value_** |
| --- | --- |
| <ul><li>Corresponds to the field indexed by Elasticsearch.</li><li>Needs to be typed lowercase.</li></ul>| <ul><li>The _variable_ you are searching.</li><li>Needs to be typed right after the **:** without any spaces.</li><li>Are mostly case sensitive and are fully explained in this guide.</li><li>You can use [wildcards](https://docs.diskoverdata.com/diskover_user_guide/#wildcard) to search.</li></ul> |

To learn more about [manual queries](https://docs.diskoverdata.com/diskover_user_guide/#manual-queries-syntax-and-rules)
