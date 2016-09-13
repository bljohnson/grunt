# Simple Grunt Tutorial via Scotch.io
https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt

* Grunt is a task runner that automates repetitive workflow tasks (linting and minifying JS files, compiling LESS and SASS files, minifying CSS files, watching files for changes and doing tasks, etc).

* Node.js needs to be installed
	* Run 'node-v' and 'npm-v' to make sure they're installed

* dist folder holds all final files (minified by Grunt) used for final site
* src folder holds all original files
* Gruntfile.js for our Grunt configuration
* package.json for our npm package configuration
	* contrib-jshint validates files using jshint
	* contrib-uglify minifies JS files using UglifyJS
	* contrib-less compiles LESS files to CSS
	* contrib-cssmin compresses CSS files
	* contrib-watch runs tasks whenever watched files are changed
