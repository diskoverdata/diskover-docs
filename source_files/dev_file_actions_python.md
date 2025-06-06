
## Develop Your Own Python File Action Plugins

<img src="images/button_edition_professional.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_enterprise.png" width="95">&nbsp;&nbsp;<img src="images/button_edition_multistream.png" width="95">


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

| diskover_admin/ Directory | Purpose |
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
### A Fileaction Example

Just like other parts of the app, each fileaction directory follows a common pattern. It's so rigid that you can often begin the development of a new fileaction by copying another and renaming the different parts. 

Each fileaction is a Flask `blueprint` that attaches to the main app at a specific route and serves all the routes under that.

| Directory or File | Purpose |
| --- | --- |
| diskover-admin/diskover_admin/fileactions/ | The root of the fileactions route |
| example/ | An example fileaction directory |
| static/ | Static directory with files only visible to this fileaction |
| templates/ | Template files only visible to this fileaction |
| `__`init`__`.py | Needed to set up the directory as a project and point to the views |
| config.yaml | Optional config variables visible only to this fileaction |
| views.py | The main file that defines the routes and how each is processed |

___
<a id=“anatomy-of-a-fileaction”></a>
### The Anatomy of a Fileaction

Let's look at the "example" fileaction piece by piece and call out some important aspects of how it works. The `views.py` file contains all the routes that can be called and the logic behind them. It either renders a new page with the given template or returns JSON data that can be consumed by an AJAX call. 

Besides imports, the blueprint is the first part of a fileaction you will see. This defines the Flask blueprint for this action. It defines which route the action will be served on `/example` and the name of the static and template dirs.

Note that because all fileactions parents are served under `/fileactions`, this will actually be served at `/fileactions/examples` under the main `/diskover_admin` route. You can find more info about Flask blueprints here: [Flask Blueprints](https://flask.palletsprojects.com/en/2.3.x/blueprints/)

```python
blueprint = Blueprint(
    'example', __name__,
    static_folder='static',
    template_folder='templates',
    url_prefix='/example'
)
```

Next, we define some global variables that are available to all templates in the fileaction. These will be rendered in the nav bar on the left to identify them.

```python
blueprint.context_processor(lambda: {'app_name': 'Fileaction Example', 'version': str(VERSION)})
```

Next, we load config options from the optional `config.yaml` in the same directory into a `config` dictionary:

```python
parent_dir = os.path.dirname(__file__)
config = parse_config_yaml(os.path.join(parent_dir, 'config.yaml'))
```

Finally, we get to the first of two view functions that expose a page of the fileaction. This is the default (index) page that renders when you first visit.

```python
@blueprint.route('/', methods=['POST'])
@get_es_files
def index():
    worker = session.get('worker')
    sources = request.args.getlist('files')
    context = {
        'worker': worker,
        'sources': [s.to_dict() for s in sources],
        'config': config
    }
    return render_template('example.html', **context)
```

Let's take this step by step:

1) First we use the `@blueprint.route `decorator to register a route for this view. This route will accept POST requests at /. Because we are using nested blueprints, the actual route will be
`/diskover_admin/fileactions/example/`. Most of the route is built by the parent blueprints, and the slash at the end corresponds to this specific route. Remember that routes are always relative to their parent, so when we define / on a blueprint with a route of /example we are really creating the route at /example/.

2) `@get_es_files` is a special decorator that converts the Elasticsearch doc and index that are passed by diskover-web into SimpleFileInfo objects that correspond to a path on the filesystem and what type of item it is (file or directory). This needs to be present on the index function in every fileaction or else you won't have the paths of the objects you intend to work on. It also sets the worker in the session from the Elasticsearch index. With this worker, we know who we should send any task to that has access to the selected files.

3) `Sources` are a list of SimpleFileInfo objects that describe the selected files. See more at `diskover-admin/diskover_admin/common/util.py`.

4) We create the `context `dictionary to encapsulate all the variables we want passed to and available in the template.

5) When we return and render_template, we instruct Flask to render the given template using the context variables we just set. We will get to templating in a bit.

If you were to run this now, with the provided `example.html`, you would see that it renders a web page at `diskover-admin/diskover_admin/fileactions/example/` with the variables we passed in from the context in different parts of the page. Notice the **Submit** button at the bottom of the page. We are going to use jQuery and AJAX in our JS file to bind the submit action of this button to a JavaScript function that will submit the fileaction and wait for a response. Take a look at the included JavaScript file at
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

___
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

___
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

<a id=“the-structure-of-the-worker”></a>
#### The Structure of the Worker

On each indexer/worker, a folder containing the tasks that can be executed and the configuration needed is located at `/opt/diskover/diskover_celery`. 

The basic structure for `/opt/diskover/` is described below.

| /opt/diskover/ File or Directory | Purpose | 
| --- | --- |
| diskover_celery/ | DESCRIPTION MISSING SEAN! |
| etc/ | Install files and miscellaneous items |
| common/ | Libraries and modules used in different tasks |
| tasks/ | Files containing all of the tasks that can be executed |
| celeryconfig.py | The main configuration file |
| worker.py | The main entry point for the worker process |

The `celeryconfig.py` file needs to be configured with variables to connect to the RabbitMQ broker and also contains a section of imports to denote which task files should be registered and exposed.

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

The @json_exception decorator is designed to catch any exceptions that occur inside the task and return a dictionary response with the error and traceback filled in. On successful execution, a dictionary is returned with the relevant data in the result value. 

Tasks should always return a dictionary with the three key-value pairs defined so the calling application can interpret the results. The result field can
contain anything you want but must be JSON serializable.
