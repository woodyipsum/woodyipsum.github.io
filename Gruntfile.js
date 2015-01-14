module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            files: {
                src: 'assets/css/app.css',
                dest: 'assets/css/app.min.css'
            }
        },
        uglify: {
            files: {
                src: 'assets/js/app.js',
                dest: 'assets/js/app.min.js'
            }
        },
        watch: {
            src: {
                files: ['assets/css/app.css', 'assets/js/app.js'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['cssmin', 'uglify']);
};