'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./gulp/config'),
    utils = require('./gulp/utils');

// Load gulp-modules
require('./gulp/assets');
require('./gulp/partials');
require('./gulp/wiredep');
require('./gulp/validate');
require('./gulp/dist');
require('./gulp/watch');
require('./gulp/server');

// Default tasks
gulp.task('default', ['serve']);
gulp.task('help', $.taskListing);

// Dev-Build
gulp.task('install', function(cb) {
    utils.log("Starting DEV-build...")
    runSequence('clean', 'ngconstant:dev', 'inject', 'validate', cb);
});

// Dist-Build
gulp.task('build', function (cb) {
    utils.log("Starting DIST-build...")
    runSequence('clean', 'fonts', 'images', 'ngconstant:prod', 'partials', 'inject', 'validate', 'minimize', cb);
});

// Test
gulp.task('test', function (cb) {
    utils.log("[TODO] Running tests...")
});
