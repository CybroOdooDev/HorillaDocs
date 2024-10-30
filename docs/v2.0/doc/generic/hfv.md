# Horilla Form View (HFV)

`HorillaFormView` is a Django `FormView` class designed to manage and streamline the form submission process with added support for dynamic fields, customized button attributes, and caching.

## Class Attributes

| Attribute               | Type               | Description                                                                                                  |
|-------------------------|--------------------|--------------------------------------------------------------------------------------------------------------|
| **model**               | `object`           | Model associated with the form.                                                                              |
| **view_id**             | `str`              | Unique identifier for the view, generated using `get_short_uuid`. Default length is 4 characters.            |
| **hx_confirm**          | `str`              | Optional message to confirm before submitting the form.                                                      |
| **form_class**          | `forms.ModelForm`  | Django ModelForm class to be used for rendering the form.                                                    |
| **template_name**       | `str`              | Template used for rendering the view. Default is `"generic/horilla_form.html"`.                              |
| **ids_key**             | `str`              | Key to retrieve instance IDs from the request’s GET parameters. Default is `"instance_ids"`.                 |
| **form_disaply_attr**   | `str`              | Field or method on the model to be displayed as the form title.                                              |
| **new_display_title**   | `str`              | Title to display when adding a new record. Default is `"Add New"`.                                           |
| **close_button_attrs**  | `str`              | HTML attributes for the close button customization.                                                          |
| **submit_button_attrs** | `str`              | HTML attributes for the submit button customization.                                                         |
| **is_dynamic_create_view** | `bool`          | Determines if the form view is a dynamic create view, adding fields dynamically.                             |
| **dynamic_create_fields** | `list`           | List of fields that can be dynamically created within the form.                                              |
