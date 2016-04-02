'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    proxy = require('proxy-middleware'),
    url = require('url'),
    browserSync = require('browser-sync'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./config'),
    utils = require('./utils');

gulp.task('serve', function() {
    utils.log("Starting dev serve...");

    runSequence('install', function () {
        utils.log("Start proxy...");
        browserSync({
            open: true,
            port: config.localport,
            online: false,
            server: {
                baseDir: config.app,
                middleware: getProxies()
            }
        });

        // Start watching file-changes
        gulp.start('watch');
    });
});

gulp.task('serve-dist', function() {
    utils.log("Starting serve dist...");
    runSequence('build', function () {
        utils.log("Start proxy...");
        browserSync({
            open: true,
            port: config.localport,
            online: false,
            server: {
                baseDir: config.dist
            }
        });
    });
});

function getProxies() {
        var proxyRoutesRequireTrailingSlash = config.proxyRoutes.filter(function (route) {
            return utils.endsWith(route, '/');
        }).map(function (route) {
            return route.substr(0, route.length - 1);
        });

        var proxies = [
            function (req, res, next) {
                proxyRoutesRequireTrailingSlash.forEach(function(route) {
                    if (url.parse(req.url).path === route) {
                        res.statusCode = 301;
                        res.setHeader('Location', route + '/');
                        res.end();
                    }
                });
                next();
            }
        ]
        .concat(
            config.proxyRoutes.map(function (route) {
                var options = url.parse(config.apiHost + route);
                options.route = route;
                options.preserveHost = true;
                return proxy(options);
            }));
        return proxies;
}

