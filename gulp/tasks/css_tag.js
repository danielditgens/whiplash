/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    config = require('../config').css.tag;

gulp.task('css_tag', function() {
  // tags
  gulp.src(config.src)
    .pipe(concat('_tags.scss'))
    .pipe(gulp.dest('src/css'));
});