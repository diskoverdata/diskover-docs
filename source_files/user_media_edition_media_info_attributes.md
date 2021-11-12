___
# Media Attributes

Media attributes, like file resolution, codec, etc., are harvested during indexing and are therefore available to enhance in-depth searches and deliver accurate results.

## Hide/Unhide Media Info Column in Search Results Pane

When using the file search page, you have access to a column with all the media attributes. If you cannot see that column, it means that it is hidden. To unhide that column, go to  **Settings**  >  **Hide fields in search results**  > unclick the box in front of  **media_info**.

![Image: Hide/Unhide Media Info Field](images/image_aja_edition_mediainfo_hide_unhide_column.png)

The  **media_info** column will then be available within the search results pane. If the column is visible but there are no attributes for a file, this means that there was no media metadata associated with the source file to begin with.

![Image: Media Info Column in Search Results](images/image_aja_edition_mediainfo_column_in_search_results_pane.png)

## View Detailed Media Attributes

Below is an example of the location where you can see detailed media attributes. You can access this page by clicking on a file in the search results pane or wherever you see the magnifying glass icon:

![Image: Harvested Media Attributes](images/image_aja_edition_media_info_file_attributes.png)

## Search on Media Attributes

The media attributes are part of the metadata harvested exclusively by the AJA Diskover Media Edition. If a file at the source doesn’t include any of these attributes, it goes without saying that no details will be harvested and/or be available.

In addition to thefile searches and syntax explained in the Diskover User Guide, the AJA Diskover Media Edition allows end-users to search on media specific attributes.

- As media fields’ info can be complex, unless you know exactly what you are looking for, we strongly recommend using the **\*** to expand your results. 
- Queries syntax are case insensitive. 
- The fields described below are meant to be copied/typed in the search bar of the Diskover user interface.

### File resolution
Field name: **media_info.resolution**
>_Search query examples (syntax:variable):_
>
>`media_info.resolution:3840x2160`
>
>`media_info.resolution:*1080*` _(Would return all files with  **1080**  somewhere in the resolution)_

### Codec
Field name: **media_info.codec**
>_Search query examples (syntax:variable):_
>
>`media_info.codec:prores`
>
>`media_info.codec:h264`

### Codec long
Field name: **media_info.codeclong**
>_Search query examples (syntax:variable):_
>
>`media_info.codeclong:*apple*`
>
>`media_info.codeclong:*quicktime*`

### Pixel format
Field name: **media_info.pixfmt**
>_Search query examples (syntax:variable):_
>
>`media_info.pixfmt:*yuv*`
>
>`media_info.pixfmt:*422*`

### Frames
Field name: **media_info.frames**
>_Search query examples (syntax:variable):_
>
>`media_info.frames:30`
>
>`media_info.frames:*30*`
>
> _Note: Use a specific number only if you know the exact number of frames a file would have, otherwise use the * to expand your results._

### Duration
Field name: **media_info.pixfmt**

_Note: This field will eventually reads time in this format **hh:mm:ss**, but is currently showing duration in seconds, ex: 30.5071 = 30 seconds and 5071 milliseconds)_

>_Search query examples (syntax:variable):_
>
>`media_info.duration:30.*`
>
>_Note: Use the * if you’re looking for a file for which you know the duration is 30 seconds but the milliseconds are unknown._

### Framerate
Field name: **media_info.framerate**
>_Search query examples (syntax:variable):_
>
>`media_info.framerate:*23*`
>
>_Note: Would return all files with standard framerate of 23.976_

### Bitrate
Field name: **media_info.bitrate**
>_Search query examples (syntax:variable):_
>
>`media_info.bitrate:*765*`
>
>_Note: Bitrate is a difficult field to search on, but not impossible._

## Search on Media Info Fields with Operators
Operators (**and, or, not**) are explained in the Diskover User Guide, but here are a few query examples of using media info fields with operators:

>`media_info.resolution:1920x1080 AND media_info.codeclong:*quicktime*`
>
>_Would find all files with resolution 1920x1080 with QuickTime in codeclong._

>`*jurassic* NOT media_info.resolution:*1080*`
>
>_Woud find all files containing "jurassic" in the file name and/or path, but with any other resolution beside 1080 being part of that field._

>`media_info.resolution:*1080* AND mov NOT mp4`
>
>_Would find all files with 1080 being part of the resolution and with file extension .mov, but would exclude file extension .mp4 from the results._

>`media_info.pixfmt:*444* OR media_info.pixfmt:*422*`
>
>_Would find all files with pixel format either containing 444 or 422._

## Media Info Fields Containing Error or Warning

If the media fields at the source are corrupted and/or Diskover determines the file as "suspect", the media info fields will show either **error** or **warning** within Diskover. Beloware search queries to either exclude or pinpoint files with those values:

To search all files with valid media info fields while excluding files with *error* and *warning*:
>`media_info:* NOT (media_info.error:* OR media_info.warning:*)`

To search all files with media info fields containing *error* and *warning*:
>`media_info.error:* OR media_info.warning:*`
