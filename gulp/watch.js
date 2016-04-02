'use strict';

var $ = require('gulp-load-plugins')({lazy: true}),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('./config.js'),
    utils = require('./utils.js');

gulp.task('watch', function() {
    utils.log('Watching files for changes...');

    gulp.watch('bower.json', ['wiredep']);

    gulp.watch([
        'gulpfile.js',
        'pom.xml'
    ], ['ngconstant:dev']);

    gulp.watch(config.app + 'assets/styles/**/*.less', ['styles']);

    gulp.watch(config.appScripts + '**/*.js', ['validate']);

    gulp.watch([
        config.app + 'index.html',
        config.appScripts + '**'
    ]).on('change', browserSync.reload);
});
