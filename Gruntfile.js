module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    hello : {
      message: 'Hello, World!'
    },

    dirs : {
      src: 'jsSrc',
      dest: 'js',
    },
    concat: {
      options: {
        separator: ';\n',
        stripBanners: false,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: ['<%= dirs.src %>/**.js'],
        dest: '<%= dirs.dest %>/app.js'
      },
    }

  });


  grunt.registerMultiTask('hello', 'A simple Log', function() {
     grunt.log.writeln(this.data);
     grunt.log.ok('from: ' + grunt.config.get('pkg').name);
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);

};