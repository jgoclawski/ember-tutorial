# TodoMVC - example Ember 2.x app

This is the popular "TodoMVC" application, based on Ember 1.10 excellent guide, 
ported to Ember 2.x.
Unfortunately the original guide has never been updated for Ember 2.x and 
the original guide is mostly inaccurate for newest Ember.

* [TodoMVC Ember 1.10 guides](http://guides.emberjs.com/v1.10.0/getting-started/)
* [TodoMVC demo application](http://todomvc.com/)

## Prerequisites

This app is best run using Docker and docker-compose:

* [Docker](https://docs.docker.com/engine/installation/)
* [docker-compose](https://docs.docker.com/compose/install/)

You can still use it without them, in which case you need a few system-wide
dependencies:

* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `docker-compose build`

## Running / Development

* `docker-compose up todo`
* visit your app at [http://localhost:4200](http://localhost:4200).

## Ember-cli commands

If you want to run an ember-cli command, you need to write it like this:

    docker-compose run todo [ember-cli command]

For example: `docker-compose run todo ember help`.

It gets nasty when using `ember generate` as generated files are owned by root.
You need to run an additional `sudo chown -R $USER:$USER .` afterwards.

There is a helper script for that and it can fix file permissions if needed:

    ./ember-cli [ember-cli command]

For example: `./ember-cli help`.

### Code Generators

Make use of the many generators for code, 
try `./ember-cli help generate` for more details.

### Running Tests

* `./ember-cli ember test`
* `./ember-cli ember test --server`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

