var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    htmlbeautify  = require('gulp-html-beautify'),
    jade          = require('gulp-jade');

gulp.task('sass', function(){
  return gulp.src('./app/sass/**/*.sass')
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

gulp.task('movejs', () =>
  gulp.src('./app/js/**/*')
      .pipe(gulp.dest('./dist/js'))
);

gulp.task('moveFonts', () =>
  gulp.src('./app/fonts/**/*')
      .pipe(gulp.dest('./dist/fonts'))
);

gulp.task('moveImg', () =>
  gulp.src('./app/img/**/*')
      .pipe(gulp.dest('./dist/images'))
);

gulp.task('moveLibs', () =>
  gulp.src('./app/libs/**/*')
      .pipe(gulp.dest('./dist/libs'))
);

gulp.task('watch', ['browser-sync', 'sass', 'moveImg', 'moveLibs'], function(){
  gulp.watch('./app/sass/**/*.sass', ['sass']);
  gulp.watch('./app/jade/**/*.jade', ['jadeh']);
  gulp.watch('./app/img/**/*', ['moveImg']);
  gulp.watch('./app/js/**/*.js', ['movejs']);
  gulp.watch('./app/fonts/**/*', ['moveFonts']);
  gulp.watch('./app/libs/**/*', ['moveLibs']);
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
