# Mobile App

A starter template for Mobile App with RequireJS, jQueryMobile and Backbone, managed with Bower.

## Features

* Develop your mobileapp project with Backbone
* Utilize RequireJS to keep project tidy with one .js and one .tpl file for each view
* Utilize Jquery Mobile transitions when when going from one Backbone view to the next by the special *jqmNavigation.js* (original written by [Piotr Walczyszyn](http://outof.me))

## How to use

1. Checkout or download project
2. cd into project
3. Download bower-components by `bower install`
4. Open your browser and head to the project in `http://localhost/your-path`

## Use within a Phonegap/cordova project

1. Replace the www-folder inside a new Phonegap project with this folder.
2. In the index.html uncomment `<script src="phonegap.js"></script>` line, when you build the Phonegap-project Phonegap insert the phonegap.js file from plattform_www into the www-folder.
3. Symlink the main-www directory inside the different platforms.

### Credits 

Idea and consept from  [pwalczyszyn / jqmNavigator](https://github.com/pwalczyszyn/jqmNavigator), updated for Phonegap 3.4 and Bower-loading of js by [Gerhard Sletten @ Metabits.no](http://www.metabits.no)

### Usage tips and development in browser

If you are consuming rest-services from Backbone-models (see `scripts/models/Page.js` for an example) and these services are not CORS-enabled, install the Chrome plugin [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) to enable CORS in your browser. 

You will need to place the project within a location accessible by your localhost, since <b>Allow-Control-Allow-Origin: *</b> don't work in the `file://` protocol