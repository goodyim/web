var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    htmlbeautify  = require('gulp-html-beautify'),
    jade          = require('gulp-jade');

var path = {
  sass:   { watch: './app/sass/**/*.sass' },
  js:     { watch: './app/js/**/*' },
  img:    { watch: './app/img/**/*' },
  libs:   { watch: './app/libs/**/*' },
  fonts:  { watch: './app/fonts/**/*' }
}

gulp.task('sass', function(){
  return gulp.src(path.sass.watch)
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('jadeh', function() {
  gulp.src('./app/jade/pages/*.jade')
    .pipe(jade({
      data: {
        require: require
      },
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir : 'dist'
    },
    open: false,
    notify: false
  })
});

gulp.task('fileMove', () => {
  gulp.src(path.js.watch).pipe(gulp.dest('./dist/js'))
  gulp.src(path.fonts.watch).pipe(gulp.dest('./dist/fonts'))
  gulp.src(path.img.watch).pipe(gulp.dest('./dist/images'))
  gulp.src(path.libs.watch).pipe(gulp.dest('./dist/libs'))
});

gulp.task('watch', ['browser-sync', 'sass', 'jadeh', 'fileMove'], function(){
  gulp.watch(path.sass.watch, ['sass']);
  gulp.watch('./app/jade/**/*.jade', ['jadeh']);
  gulp.watch(path.img.watch, ['fileMove']);
  gulp.watch(path.js.watch, ['fileMove']);
  gulp.watch(path.fonts.watch, ['fileMove']);
  gulp.watch(path.libs.watch, ['fileMove']);
  gulp.watch('./dist/**/*', browserSync.reload);
});

gulp.task('htmlbeautify', () =>
  gulp.src('./dist/*.html')
    .pipe(htmlbeautify({
      indent_size: 2,
      end_with_newline: true,
      unescape_strings: true
    }))
    .pipe(gulp.dest('./dist/'))
);

gulp.task('default', ['watch'])
