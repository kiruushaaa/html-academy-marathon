import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import stylelint from 'gulp-stylelint';

const styles = () =>
  gulp
    .src('./src/scss/**/*.scss')
    .pipe(
      stylelint({
        failAfterError: false,
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/styles/'));

export default styles;
