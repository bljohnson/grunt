# Simple Grunt Tutorial via Scotch.io
https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt

* Grunt is a task runner that automates repetitive workflow tasks (linting and minifying JS files, compiling LESS and SASS files, minifying CSS files, watching files for changes and doing tasks, etc).
* Node.js needs to be installed
	* Run `node -v` and `npm -v` to make sure they're installed
* dist folder holds all final files (minified by Grunt) used for final site
* src folder holds all original files
* Gruntfile.js for our Grunt configuration
* package.json for our npm package configuration
	* contrib-jshint validates files using jshint
	* contrib-uglify minifies JS files using UglifyJS
	* contrib-less compiles LESS files to CSS (use contrib-compass for SASS)
	* contrib-cssmin compresses CSS files
	* contrib-watch runs tasks whenever watched files are changed

* Basic format for configuring packages:
	1. Call the name of the package (e.g. jshint)
	2. Set options if needed (usually found on the docs for each package).
	3. Create a build attribute and pass in files, directories, or anything else you want.

* Different tasks for different environments (e.g. development and production)
	* Can define multiple tasks inside of each configuration in Gruntfile.js:
	```
	// configure uglify to minify js files
	uglify: {
		options: {
			banner: '/\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n/\n'
		},
		dev: {
			files: { 'dist/js/magic.min.js': ['src/js/magic.js', 'src/js/magic2.js'] }
		},
		production: {
			 files: { 'dist/js/magic.min.js': 'src/**/*.js' }
		}
	}
	```
	* Create tasks for development and production in Gruntfile.js:
	```
	// this task will only run the dev configuration
	grunt.registerTask('dev', ['jshint:dev', 'uglify:dev', 'cssmin:dev', 'less:dev']);

	// only run production configuration
	grunt.registerTask('production', ['jshint:production', 'uglify:production', 'cssmin:production', 'less:production']);
	```
	* Call development or production by running `grunt dev` or `grunt production` in the command line

* Command line commands:
	* `grunt jshint`
	* `grunt uglify`
	* `grunt less`
	* `grunt cssmin`
	* `grunt` (runs everything within 'default' task)
	* `grunt dev` (only run dev config)
	* `grunt production` (only run production config)
	* `grunt watch`
	* `grunt imagemin`
