'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./config'),
    utils = require('./utils');

gulp.task('partials', ['partials:build'], function() {
    var input = gulp.src(config.tmp + '**/*.js', {read : false});

    return gulp.src(config.app + 'index.html')
        .pipe($.plumber())
        .pipe($.inject(input, {
            starttag: '<!-- inject:templates:{{ext}} -->',
            ignorePath: config.app,
            addRootSlash: false
        }))
        .pipe(gulp.dest(config.app));
});

gulp.task('partials:build', function() {
    utils.log('Creating AngularJs $templateCache...');

    return gulp.src(config.appScripts + '**/*.html')
        .pipe($.plumber())
        .pipe($.htmlmin(
            {
                collapseWhitespace: true
            }))
        .pipe($.angularTemplatecache(
            'templates.js',
            {
                module: 'app',
                root: 'app/',
                standalone: false
            }
        ))
        .pipe(gulp.dest(config.tmp));
});
