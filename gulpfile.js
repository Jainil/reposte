var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  htmlReplace = require('gulp-html-replace'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  reactify = require('reactify'),
  babelify = require('babelify'),
  streamify = require('gulp-streamify'),
  gutil = require('gulp-util');

var PATH = {
  entry_point: './client/main.js',
  out: 'build.js',
  min_out: 'build.min.js',
  dest: 'static',
  dest_build: 'static/js',
  dest_src: 'static/js'
};

gulp.task('watch', function () {

  var watcher = watchify(browserify({
    entries: [PATH.entry_point],
    transform: [reactify, babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  watcher.on('update', exec);

  return exec();

  function exec () {
    watcher.bundle()
      .on('error', function (err) {
        gutil.log("Browserify error:", err);
        this.emit('end');
      })
      .pipe(source(PATH.out))
      .pipe(gulp.dest(PATH.dest_src));
    gutil.log('Updated');
    gutil.beep();
  }
});

//gulp.task('build', function () {
//  browserify({
//    entries: [PATH.entry_point],
//    transform: [reactify]
//  }).bundle()
//    .pipe(source(PATH.min_out))
//    .pipe(streamify(uglify(PATH.min_out)))
//    .pipe(gulp.dest(PATH.dest_build))
//});

gulp.task('default', ['watch']);
