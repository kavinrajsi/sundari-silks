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

gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', gulp.series('style'));
});
