___
## Develop Your Own File Action Plugins

![Image: Professional Edition Label](images/button_edition_professional.png)&nbsp;![Image: Enterprise Edition Label](images/button_edition_enterprise.png)&nbsp;![Image: AJA Diskover Media Edition Label](images/button_edition_media.png)&nbsp;![Image: Life Science Edition Label](images/button_edition_life_science.png)
___

<a id=“introduction”></a>
### Introduction

This chapter describes how to create a Python File Action as a Flask Blueprint in the Diskover Admin App.

The Diskover Admin app is a secondary web interface designed to incorporate new features into Diskover.  Written in Python using the Flask framework and served by `uvicorn`, it runs under nginx as a reverse 
proxy, taking over the `/diskover_admin` route of the main Diskover web application.

The app is modular, allowing separate development and registration of components. The main `app.py` sets up the shared environment for all components, including logging, base templates, static files, error 
handling, Celery, database, and Elasticsearch connections.

___
<a id=“structure”></a>
### Structure

When developing, consider the project's file and directory structure, as each area plays a role in the overall app.

| Project's File or Directory | Purpose |
| --- | --- |
| diskover-admin/ | Project dir |
| diskover_admin/ | Source code for the Diskover Admin app |
| etc/ | Installation files and miscellaneous items |
| instance/ | Data unique to this instance, including the main configuration file |
| log/ | Log files |
| run/ | Socket for nginx communication |
| scripts/ | Project-wide scripts |
| sessions/ | On-disk session data for each user |
| wsgi.py | Script for starting the Diskover Admin app with `uvicorn` |

Most important to us are the `instance/` and `diskover_admin/` directories. Let's take a look at the Flask application in the `diskover_admin` directory first.

___
<a id=“source-code”></a>
### Source Code

| `diskover_admin` Directory | Purpose |
| --- | --- |
| diskover_admin/ | Source code for the Diskover Admin app |
| common/ | Contains libraries and modules that are used in many places throughout the app |
| routers/ | Each module/directory at this level constitutes a route of the main app and children directories/modules are routes themselves. Here we can visualize what a URL in the app would look like by looking at the directory structure. An example route inferred by the project structure: `diskover_admin/routers/fileactions/liveview/views.py` will contain routes for the liveview fileaction at `http://yourserver/diskover_admin/fileactions/liveview/` |
| static/ | Holds shared static files that are common throughout all components, such as JavaScript and CSS files |
| templates/ | Project-wide templates used to ensure all components have base functionality and look the same.

___
<a id=“the-instance-directory”></a>
### The Instance Directory

The `instance` directory contains configuration specific to your installation. Project-wide configs are stored and loaded from `/diskover-admin/instance/config.py`. Setting up this file should be one of the 
first things done after installation. If it is not configured properly for your environment, specific components might not load, or even the whole app.

You should find a `config.sample.py` file here that you can rename to `config.py` and modify to suit your needs.

___
<a id=“an-example-fileaction”></a>
### An Example Fileaction

`diskover-admin/diskover_admin/fileactions/example/` with the variables we passed in from the context in different parts of the page. Notice the **Submit** button at the bottom of the page. We are going to use jQuery and AJAX in our JS file to bind the submit action of this button to a JavaScript function that will submit the fileaction and wait for a response. Take a look at the included JavaScript file at
`example/static/js/example.js`.

We are not going to get into details about the JavaScript, but in general, it calls `fileaction/example/submit/` with arguments of a form we made in the `example.html`, including the sources we previously selected. This call is made asynchronously, so we start and stop a spinner in the upper right corner of the navbar, and register a few callbacks to execute when it receives a response. When the response is received, it will flash a message at the top of the screen, show the hidden output container, and write the response of the fileaction in the output window.

It makes sense, but we still need to look at the submit view to see how it's called and handles the fileaction. Below is the submit view from `example/views.py` that handles calling the fileaction on the worker.

```
@blueprint.route('/submit', methods=['POST'])
def submit():
    worker = session.get('worker')
    if worker is None:
        msg = 'Worker not set in session'
        flash(msg, 'error')
        logger.error(msg)
        return jsonify({'data':None, 'error': msg}), 500

    data = request.form.to_dict()
    sources = json.loads(data['sources'])
    logger.info(
        f"Submitting echo task to {worker} "
        f"for sources: {[s['path'] for s in sources]}"
    )

    task = current_app.extensions['celery'].send_task(
        'echo',
        args=(sources, ),
        queue=f'fileactions.{worker}',
        exchange='fileactions'
    )
    return redirect(url_for('tasks.get_result_sync', task_id=task.id))
```

Again, let's break it down:

1) First, we register the `/submit` route on our example blueprint.
2) Next, we get the worker; this should execute from our session and verify it's valid.
3) Then we take the data from the form that was sent and load the JSON string for sources into a list of dictionaries.
4) Next we create the task with the name `echo` and pass the sources list and send it to the queue of the worker that has access to the files.
5) Finally, we tell the app to use the `task.id`, the task created when it was submitted to wait for the result and return it.

The last step there is a bit confusing, so a little more detail is in order. First of all, this might be the first time you are seeing the `url_for()` construct. This is an internal way Flask uses to identify other
routes in the application. In this case, the url_for() generates a URL like `tasks/result_sync/<task_id>` and then executes it.

The tasks route has a few helpers for handling Celery tasks. The synchronous version that we are using here waits for the result and then returns a JSON-encoded string with the result returned by the fileaction. The AJAX function then receives this result and displays it on the web page.

<a id=“template-structure”></a>
### Template Structure

In each of our fileaction templates, we follow a few simple guidelines to ensure they all have the same format. Here is a simplified version of the `example.html` template to show the guidelines.

```html
{% extends 'base.html' %}
{% block header %}
    {% include 'example_header.html' %}
{% endblock %}
{% include 'example_nav.html' %}
{% block content %}

    ALL OF THE CONTENT GOES HERE!

{% endblock %}
{% block footer %}
    {% include 'example_footer.html' %}
{% endblock %}
```

In the first line, we are "extending" the `base.html` template. This template defines the basic layout and includes project-level CSS and JavaScript files. It helps make this fileaction look the same as all the rest. Next, we include the `example_header.html` template which has info that will go in the header of all views in this fileaction. Usually, we include CSS files or styles here. Next is the most important, the context block. This is where we put all of the HTML and templating that should be used to handle our fileaction. 

In the example case, we create a form and an output container. Finally, we include the `example_footer.html` which should include links to any specific JavaScript files we want in this fileaction. We use another url_for() here to point it to the `example/static/js/example.js` file. Once included we can call functions from that JavaScript file.

<a id=“how-to-register-fileactions”></a>
### How to Register Fileactions

During the development of a fileaction, you will want to register it in the main app so that you can navigate to the routes during testing and select the fileaction from within diskover-web. There are three steps:

1) Duplicate another fileaction.php file from/to /var/www/diskover-web/public/fileactions with the name of the new fileaction, and modify the form action to point to the base URL of this new action. Generally, you just need to change the name component to the name of your fileaction:
```
<form id="myForm" action="../diskover_admin/fileactions/example/" method="post">
```

2) Add a section in the `Constants.php` pointing to the new fileaction.php file.
3) In the `instance/config.py` file, add a COMPONENT to the list with the name of your fileaction.
4) Restart the diskover-admin service.

___
<a id=“celery-tasks”></a>
### Celery Tasks

One unique feature of the Diskover Admin app, and the fileactions in particular, is the ability of the web application to execute tasks on remote systems. The Diskover Admin app has no direct visibility to
the files that were scanned. Instead, the indexer machines that scanned the data do. To execute processes on the files, we send a message to the appropriate indexer/worker and ask it to run the task and return a
response back to us. 

This is accomplished by defining "tasks" that can be run, and starting a worker process on each indexer to listen for messages and run the task. Celery is the framework used to facilitate these processes, and a message broker like RabbitMQ is deployed between the web server and workers to pass messages back and forth.

___
<a id=“the-structure-of-the-worker”></a>
#### The Structure of the Worker

On each indexer/worker exists a folder containing the tasks that can be executed and the configuration needed at `/opt/diskover/diskover_celery`. 

The basic structure for `/opt/diskover/` is described below.

| /opt/diskover/ File or Directory | Purpose | 
| --- | --- |
| diskover_celery/ |
| etc/ | Install files and miscellaneous items |
| common/ | Libraries and modules used in different tasks |
| tasks/ | Files containing all of the tasks that can be executed |
| celeryconfig.py | The main configuration file |
| worker.py | The main entry point for the worker process |

The `celeryconfig.py` file needs to be configured with variables to connect to the RabbitMQ broker and also contains a section of imports to denote which task files should be registered and exposed.

___
<a id=“writing-a-simple-task”></a>
#### Writing a Simple Task

Once registered, the worker listens for messages from the web server and routes the message to the task with the matching name. They are passed arguments in the message for context on how to run. Let's take a look at a simple task function. You can find it in tasks/example.py.

```python
@shared_task(bind=True, name='echo')
@json_exception
def echo(self, sources):
    logger.info(f'Calling echo task with: {sources}')
    return {'result': sources, 'error': None, 'traceback': None}
```

Each task should be defined by the `@shared_task decorator` and passed `bind=True` and a name equal to the task name you want to be registered. This name should be unique and is how the web server will invoke the task. 

> *Note:* The task's filename is not relevant when calling the task, only the name.

The @json_exception decorator is designed to catch any exceptions that occur inside the task and return a dictionary response with the error and traceback filled in. On successful execution, a dictionary is
returned with the relevant data in the result value. Tasks should always return a dictionary with the three key-value pairs defined so the calling application can interpret the results. The result field can
contain anything you want but must be JSON serializable.
