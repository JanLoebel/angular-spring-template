'use strict';

var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./config'),
    utils = require('./utils');

gulp.task('clean', ['inject:clean'], function () {
    utils.log('Cleaning: ' + config.dist + ', ' + config.tmp + '...');
    return del([config.dist, config.tmp], { dot: true });
});

gulp.task('minimize', function() {
    utils.log('Minimizing CSS, HTML and JS...');

    return gulp.src(config.app + 'index.html')
        .pipe($.plumber())
        .pipe($.usemin({
            css: [
                $.autoprefixer,
                'concat',
                $.cssnano,
                $.rev
            ],
            html: [
                $.htmlmin.bind($.htmlmin, {collapseWhitespace: true})
            ],
            js: [
                $.sourcemaps.init,
                $.ngAnnotate.bind($.ngAnnotate, {add: true, single_quotes: true}),
                'concat',
                $.uglify.bind($.uglify, {mangle: false, preserveComments: $.uglifySaveLicense}),
                $.rev,
                $.sourcemaps.write.bind($.sourcemaps.write, '.')
            ]
        }))
        .pipe(gulp.dest(config.dist));
});
