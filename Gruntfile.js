// wrapper function (required by Grunt and its plugins) - all configuration goes inside this function
module.exports = function(grunt) {
	/////////////////////////////
	// configure Grunt //
	/////////////////////////////
	grunt.initConfig({
		// get configuration info from package.json so we can use things like name and version
		// saves package.json info to pkg - call name of project with pkg.name, version of project with pkg.version
		pkg: grunt.file.readJSON('package.json'),
		// all configuration will go here
		jshint: {
			options: {
				reporter: require('jshint-stylish') // make errors look/read nice
			},
			// when this task is run, lint the Gruntfile and all js files in src
			// ** for all folders and * for all files
			build: ['Gruntfile.js', 'src/**/*.js']
		}, // end jshint config
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n' // adds comment to top of minified file
			},
			bulid: {
				files: {
					'dist/js/magic.min.js': 'src/js/magic.js' // create minified file in dist from file in src
				}
			}
		}
	});
	/////////////////////////////////
	// load Grunt plugins //
	/////////////////////////////////
	// can only load these if they're in package.json - make sure to run npm install so app can find these
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
