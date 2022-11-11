const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

gulp.task('style', function(){
  return gulp.src('styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets'));
});

gulp.task('image-script', function() {
  return gulp.src(['script/lazysizes.js', 'script/ls.rias.js', 'script/ls.bgset.js', 'script/ls.blur-up.js'])
    .pipe(minify())
    .pipe(concat('image-lazy.js'))
    .pipe(gulp.dest('assets'));
});

gulp.task('allpage-script', function() {
  return gulp.src(['script/shopify-money.js', 'script/drawer.js', 'script/quick-view-main.js', 'script/wishlist.js'])
    .pipe(minify())
    .pipe(concat('script-common.js'))
    .pipe(gulp.dest('assets'));
});

gulp.task('filter', function() {
  return gulp.src(['script/filter.js'])
    .pipe(minify())
    .pipe(concat('script-filter.js'))
    .pipe(gulp.dest('assets'));
});

gulp.task('global', function() {
  return gulp.src(['script/global.js'])
    .pipe(minify())
    .pipe(concat('script-global.js'))
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', gulp.series('style'));
  gulp.watch('script/*.js', gulp.series('image-script', 'allpage-script', 'filter', 'global' ));
});
