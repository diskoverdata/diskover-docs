___
### Diskover-Web Index Management

![Image: Essential Edition Label](images/button_edition_essential.png)&nbsp;![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)

The Diskover-Web user interface provides manual index management capabilities. By default, Diskover-Web is configured to always use the latest indices when production user login to Diskover.

![Image: Always Use Latest Indices](images/image_indices_always_use_latest_indices.png)

#### Loading / Unloading Indexes within Diskover-Web User Interface

🔴 &nbsp;To manually manage indexes thru the Diskover-Web user interface, uncheck the **Always Use Latest Indices**.

>Index management can’t be performed on an actively loaded index.

🔴 &nbsp;**Unselect all** indices:

![Image: Unselect All Indices](images/image_indices_unselect_all_indices.png)

>To manage an index that is actively loaded, the desired index can be unloaded by selecting any other index and clicking **Save selection**.

🔴 &nbsp;Select another index from **Index** column > **Save selection** and load in Diskover-Web user interface:

![Image: Save Indices Selection](images/image_indices_save_selection.png)

The following confirmation will be displayed upon successful index load:

![Image: Index Selection Saved](images/image_indices_selection_saved.png)

#### Deleting Indices within Diskover-Web User Interface

🔴 &nbsp;To manually delete indices thru the Diskover-Web user interface, follow the steps in the previous section to ensure the index targeted for deletion is not “loaded” within the Diskover-Web user interface.

🔴 &nbsp;Select index targeted for deletion and select **Delete**.

![Image: Delete Index/Indices](images/image_indices_delete_index.png)

🔴 &nbsp;Confirm desired index deletion:

![Image: Index/Indices Deletion Confirmation](images/image_indices_delete_index_confirm_window.png)

The following confirmation of successful index deletion will be displayed:

![Image: Successful Index/Indices Deletion Confirmation](images/image_indices_delete_index_confirmation_msg.png)

🔴 &nbsp;Select the **Reload Indices** button to ensure recently deleted index is not displayed in the list of available indices:

![Image: Reload Indices](images/image_indices_reload_indices.png)

>_Note:_ Attempting to delete an index that is actively loaded in the Diskover-Web will result in the error message below. The index must first be unloaded as described in this section.
>
>![Image: Indices Removal Error Message](images/image_indices_delete_index_error_msg.png)
