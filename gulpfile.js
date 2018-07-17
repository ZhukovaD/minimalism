"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var server = require("browser-sync").create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("style", function() {
    gulp.src("css/style.css")
        .pipe(plumber())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("css/**/*.css", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
});