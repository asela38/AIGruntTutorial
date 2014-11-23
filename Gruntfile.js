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
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: true,
        compress: true,
        sourceMap: true,
        beautify: true
      },
      dist: {
        files: {
          '<%= dirs.dest %>/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
   }

  });


  grunt.registerMultiTask('hello', 'A simple Log', function() {
     grunt.log.writeln(this.data);
     grunt.log.ok('from: ' + grunt.config.get('pkg').name);
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);

};