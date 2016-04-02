'use strict';

var $ = require('gulp-load-plugins')({lazy: true}),
    gulp = require('gulp'),
    es = require('event-stream'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    config = require('./config.js'),
    utils = require('./utils.js');

gulp.task('fonts', function() {
    utils.log('Copy fonts...');
    return es.merge(
            // Copy bootstrap fonts
            gulp.src(config.app + 'bower_components/bootstrap/fonts/*.*')
            .pipe($.plumber())
            .pipe($.changed(config.dist + 'assets/fonts/'))
            .pipe(gulp.dest(config.dist + 'assets/fonts/')),

            gulp.src(config.app + 'assets/**/*.{woff,woff2,svg,ttf,eot,otf}')
            .pipe($.plumber())
            .pipe($.changed(config.dist + 'assets/fonts/'))
            .pipe($.flatten())
            .pipe(gulp.dest(config.dist + 'assets/fonts/'))
        );
});

gulp.task('images', function() {
    utils.log('Optimizing images...');
    return gulp.src(config.app + 'assets/images/**')
        .pipe($.plumber())
        .pipe($.changed(config.dist + 'assets/images'))
        .pipe($.imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
        .pipe(gulp.dest(config.dist + 'assets/images'));
});

gulp.task('styles', function() {
    utils.log('Compiling Less -> CSS...');
    return gulp.src(config.app + 'assets/styles/style.less')
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 1 version', '> 5%']}))
        .pipe(gulp.dest(config.tmp + 'styles/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('ngconstant:dev', function() {
    utils.log('Creating app-constants for development-environment...');
    return utils.produceConstants(config.appName, 'dev')
        .pipe(gulp.dest(config.appScripts));
});

gulp.task('ngconstant:prod', function() {
    utils.log('Creating app-constants for production-environment...');
    return utils.produceConstants(config.appName, 'prod')
        .pipe(gulp.dest(config.appScripts));
});
