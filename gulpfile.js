var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('packages/**/src/*.scss', { base: "./" })
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('watch:sass', function () {
  gulp.watch('packages/**/src/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
gulp.task('watch', ['watch:sass']);
