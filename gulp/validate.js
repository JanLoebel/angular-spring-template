'use strict';

var $ = require('gulp-load-plugins')({lazy: true}),
    gulp = require('gulp'),
    config = require('./config.js'),
    utils = require('./utils.js');

gulp.task('validate', ['jshint', 'jscs']);

gulp.task('jshint', function() {
    utils.log('Validating JS with jshint...');
    return gulp.src([config.appScripts + '**/*.js'])
        .pipe($.plumber())
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
    utils.log('Validating JS with jscs...');
    return gulp.src([config.appScripts + '**/*.js'])
        .pipe($.plumber())
        .pipe($.jscs('.jscsrc'))
        .pipe($.jscsStylish());
});
