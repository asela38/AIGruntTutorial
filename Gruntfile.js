module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    hello : {
      message: 'Hello, World!'
    }

  });


  grunt.registerMultiTask('hello', 'A simple Log', function() {
     grunt.log.writeln(this.data);
     grunt.log.ok('from: ' + grunt.config.get('pkg').name);
  });

  grunt.registerTask('default', ['hello']);

};