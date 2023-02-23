___
## Media Attributes
___

Media attributes, like file resolution, codec, pixel format, etc., are harvested during indexing and are therefore available to enhance in-depth searches and deliver accurate results.

___
### Hide/Unhide Media Info Column in Search Results Pane

When using the file search page, you have access to a column with all the media attributes. If you cannot see that column, it means that it is hidden. To unhide that column, go to  **Settings**  >  **Hide fields in search results**  > unclick the box in front of  **media_info**.

![Image: Hide/Unhide Media Info Field](images/image_aja_edition_mediainfo_hide_unhide_column.png)

The  **media_info** column will then be available within the search results pane. If the column is visible but there are no attributes for a file, this means that there was no media metadata associated with the source file to begin with.

![Image: Media Info Column in Search Results](images/image_aja_edition_mediainfo_column_in_search_results_pane.png)

___
### View Detailed Media Attributes

Below is an example of the location where you can see detailed media attributes. You can access this page by clicking on a file in the search results pane or wherever you see the magnifying glass icon:

![Image: Harvested Media Attributes](images/image_aja_edition_media_info_file_attributes.png)

___
### General Notes on Searching Media Attributes

The media attributes are part of the metadata harvested exclusively by the AJA Diskover Media Edition. If a file at the source doesn’t include any of these attributes, it goes without saying that no details will be harvested and/or be available.

In addition to the [manual search syntax explained in the Diskover User Guide](https://docs.diskoverdata.com/diskover_user_guide/#search_syntax), the AJA Diskover Media Edition allows end-users to search on media specific attributes.

- As media fields’ info can be complex, unless you know exactly what you are looking for, we strongly recommend using the [* wild card](https://docs.diskoverdata.com/diskover_user_guide/#wild-card) for ease of searching and to expand your results.

- The fields described below are meant to be copied/pasted/edited in the search bar of the Diskover user interface.

___
### Search Syntax

- The following syntax needs to be respected `media_info.key:value`:
    * **media_info** is not a variable.
    * **key** is a variable like resolution, codec, pixel format, etc.
    * **value** is a variable as per the examples below.

- Searching on **media_info** fields is case insensitive.

___
### Searchable Media Info Fields and Examples

Here is a list of all the indexable media info attributes. Below this table you'll find examples/comments for each media info field, which you can copy using the icon at the right of each example > paste in the Diskover user interface search bar > edit as per your environment.

| Attribute | Media Info Syntax |
| --- | --- |
| **File resolution** | `media_info.resolution:` |
| **Codec** | `media_info.codec:` |
| **Codec long** | `media_info.codeclong:` |
| **Codec tag** | `media_info.codectag:` |
| **Pixel format** | `media_info.pixfmt:` |
| **Frames** | `media_info.frames:` |
| **Duration** | `media_info.duration:` |
| **Frame rate** | `media_info.framerate:` |
| **Bitrate** | `media_info.bitrate:` |
| **Error** | `media_info.error:` |
| **Warning** | `media_info.warning: |

#### File resolution
Field name: **media_info.resolution**

```
media_info.resolution:3840x2160
```
> 🔎 _Would only look for this specific 3840x2160 resolution._

```
media_info.resolution:*1080*
``` 
> 🔎 _Would return all files with **1080** part of the resolution, either width or height._

#### Codec
Field name: **media_info.codec**

```
media_info.codec:prores
```

```
media_info.codec:h264
```

#### Codec long
Field name: **media_info.codeclong**
```
media_info.codeclong:*apple*
```

```
media_info.codeclong:*quicktime*
```

#### Codec tag
Field name: **media_info.codectag**
```
media_info.codectag:*avc1*
```


#### Pixel Format
Field name: **media_info.pixfmt**

```
media_info.pixfmt:*yuv*
```

```
media_info.pixfmt:*422*
```

#### Frames
Field name: **media_info.frames**

```
media_info.frames:30
```

```
media_info.frames:*30*
```

> 🔎 _Use a specific number only if you know the exact number of frames a file would have, otherwise use the **\*** wild card to expand your results._


#### Duration
Field name: **media_info.duration**

🔆 &nbsp;_Note: Time format is **H:MM:SS.MS**_

```
media_info.duration:*30.*
```

> 🔎 _Would find all files with a duration that includes exactly 30 seconds, with any number of hours, minutes and/or milliseconds, example **0:00:30.071708**_

```
media_info.duration:*1:15:30.*
```

#### Error
Field name: **media_info.error**

```
media_info.error:*
```

#### Frame rate
Field name: **media_info.framerate**

```
media_info.framerate:*23*
```

> 🔎 _Would return all files with standard framerate of 23.976 or 23.98_

#### Bitrate
Field name: **media_info.bitrate**

```
media_info.bitrate:*765*
```

> 🔎 _Bitrate is a difficult field to search, but not impossible._

___
### Media Info Fields Containing Error or Warning

If the media fields at the source are corrupted and/or Diskover determines the file as "suspect", the media info fields will show either **error** or **warning** within Diskover. Below are search queries to either exclude or pinpoint files with those values:

To search all files with valid media info fields while excluding files with **error** and **warning**:

```
media_info:* NOT (media_info.error:* OR media_info.warning:*)
```

To search all files with media info fields containing **error** and **warning**:

```
media_info.error:* OR media_info.warning:*
```

___
### Search on Media Info Fields with Operators
Operators **and, or, not** are explained in the [Diskover User Guide](https://docs.diskoverdata.com/diskover_user_guide/#operators), but here are a few query examples using media info fields with operators. Note that operators are not case sensitive, but they are being typed in capital letters below for visual only.

#### AND Operator

```
media_info.resolution:1920x1080 and media_info.codeclong:*quicktime*
```

> 🔎 _Would find all files with resolution 1920x1080 with QuickTime in codeclong._
 
#### NOT Operator

```
*jurassic* NOT media_info.resolution:*1080*
```

> 🔎 _Woud find all files containing **jurassic** in the file name and/or path, with resolution excluding 1080._
 
 
#### OR Operator

```
*jurassic* (media_info.pixfmt:*444* OR media_info.pixfmt:*422*)
```

> 🔎 _Woud find all files containing **jurassic** in the file name and/or path with pixel format either containing 444 or 422._

#### Mixing Operators

```
(media_info.resolution:*1080* or media_info.resolution:*1920*) AND extension:mov NOT extension:mp4
```

> 🔎 _Would find all files with 1080 or 1920 being part of the resolution, with file extension .mov, but would exclude file extension .mp4 from the results._

