var gulp          = require('gulp');
var sass          = require('gulp-sass');
var rename        = require('gulp-rename');
var concat        = require('gulp-concat');
var minify        = require('gulp-minify-css');
var merge         = require('merge-stream');

var input = "./scss/**/*.scss";
var output = "./css";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
  .src(input)
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
  return gulp
  .watch(input, ['sass'])
  .on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('css', function () {
  var scssStream = gulp.src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('scss-files.scss'));

  var mergedStream = merge(scssStream)
    .pipe(concat('blog.css'))
    .pipe(minify())
    .pipe(gulp.dest('css'));

  return mergedStream;
});

gulp.task('default', ['sass', 'watch']);
