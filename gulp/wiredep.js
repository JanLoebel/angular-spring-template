'use strict';

var $ = require('gulp-load-plugins')({lazy: true}),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    wiredep = require('wiredep').stream,
    config = require('./config.js'),
    utils = require('./utils.js');

gulp.task('inject', ['wiredep', 'styles'], function(cb) {
    runSequence('inject:styles', 'inject:js', cb);
});

gulp.task('wiredep', function () {
    utils.log('Wiring bower dependencies...');
    return gulp.src(config.app + 'index.html')
        .pipe($.plumber())
        .pipe(wiredep())
        .pipe(gulp.dest(config.app))
        .pipe(browserSync.reload({stream: true}));;
});

gulp.task('inject:styles', function() {
    utils.log('Wiring style components...');
    var input = gulp.src(config.tmp + 'styles/**/*.css', {read : false});
    return gulp.src(config.app + 'index.html')
        .pipe($.plumber())
        .pipe($.inject(input, {
            ignorePath: config.app,
            addRootSlash: false
        }))
        .pipe(gulp.dest(config.app))
        .pipe(browserSync.reload({stream: true}));;
});

gulp.task('inject:js', function () {
    utils.log('Wiring js components...');
    var sortedInput = gulp.src(config.appScripts + '**/*.js')
        .pipe($.angularFilesort());

    return gulp.src(config.app + 'index.html')
        .pipe($.plumber())
        .pipe($.inject(sortedInput, {
            ignorePath: config.app,
            addRootSlash: false
        }))
        .pipe(gulp.dest(config.app))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('inject:clean', function () {
    utils.log('Cleaning injections...');
    // App Injections
    return gulp.src(config.app + 'index.html')
        .pipe($.plumber())
        .pipe($.inject(gulp.src([]), {empty: true}))
        .pipe(wiredep({bowerJson: '{}'}))
        .pipe(gulp.dest(config.app));
});
