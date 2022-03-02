<p id="file_action"></p>

___
### File Action

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

The options within File Action pushes some boundaries around read-only files, still safeguarding your files while allowing you to view and validate files in a way to facilitate your work.

This feature needs to be enabled by your System Administrator.

![Image: Select File Action](images/image_file_action_options.png)

A) You need to select files and/or directories before using C) **File Action** button.

B) If you want to apply **File Action** to a single item, you can use the inline gear icon to do so.

C) Click **File Action** once you've A) selected items.

D) **list dir** > Gives you a live view into the director(ies) pre-indexing, see details below.

E) **open in Glim** > To preview media using Telestream GLIM - you need to have a GLIM account for this feature and be logged in, see details below.

F) **find file sequences** > To find all files in a sequence, see details below.

<p id="file_action_list_dir"></p>

#### Live View Into Directory(ies) Pre-Indexing > list dir

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

This feauture allows you to run a real-time scan of a directory, lists the content so you can search and pro-actively copy paths. This feature only works for on-premise storage at the moment and is not avaiable for cloud storage.

The typical use case is when you are not finding a file/directory in the indexed volumes within Diskover, you can access live directories and see if the files you are waiting to be onboarded will be available during the next indexing, as well as pro-actively copy paths for a work order.

- Select one or multiple directories in the results pane.
- Click the **File Action** icon.
- Select **list dir**.

>🔆 &nbsp;If you want to **list dir** a single directory, you don't have to select it first; you can use the **gear icon** in the results pane by the directory name. 

This image is an example of what could be seen following **list dir** selection:

![Image: Directory Live View](images/image_indices_file_action_live_view.png)

- This will give you a list of the file/directories in the live directory which will be indexed during the next scheduled task.
- You can search using CTRL F for Windows or COMMAND F for Mac.
- This view allows you to copy paths if needed, although you can only copy them one by one if they are random and not in a block.

#### Preview Media with Telestream GLIM > open in Glim

![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

You can do an advanced search/validation of a media file and playback right from Diskover.

>🔆 &nbsp;Make sure you are logged in your Telestream account before using this feature.

You can access the **File Action > open in GLIM** by selecting a file and clicking the File Action button as shown below:

![Image: Telestream GLIM Preview File Selection](images/image_file_action_glim_selection.png)

Or click the gear icon location on the line item that you want to preview with GLIM > select **open with Glim**

![Image: Telestream GLIM Preview File Selection](images/image_file_action_glim_gear_icon_selection.png)

This will launch GLIM where you'll be able to validate/preview the file.

![Image: Telestream GLIM Preview](images/image_file_action_glim_preview.png)

[Click here to learn more about the Telestream GLIM product](https://www.telestream.net/glim/overview.htm)

<p id="file_action_file_sequences"></p>

#### Find All Files in a Sequence > find file sequences

![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)

Diskover allows you to easily find all files in a sequence via File Action.

**Launch from a file** > you do not need to select the line if you launch directly from the A) inline icon, it's been selected in this example to show the option of launching it from the B) File Action button:

![Image: Launching Find File Sequences from a File](images/image_file_action_launch_from_file.png)

**Launch from a directory** > the same logic as launching form a file applies here as well:

![Image: Launching Find File Sequences from a Directory](images/image_file_action_launch_from_directory.png)

The results will open in a new page and showing the complete path where the sequence is located, as seen at the bottom here:

![Image: Find File Sequences Results](images/image_file_action_results.png)

A) Will confirm if a sequence was found.

B) Give you the sequence range - if there was a break in the sequence, there would be [multiple brackets].

C) In this example, the value means that the sequence has 0 padding and is 8 digits long, **DPX** being included in the digits > DPX86400
