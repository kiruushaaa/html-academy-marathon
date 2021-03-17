import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const stylesMinified = () =>
  gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({ level: 2 }, (details) => {
        console.log(
          `${details.name}: ${details.stats.originalSize} -> ${details.stats.minifiedSize}`
        );
      })
    )
    .pipe(gulp.dest('./dist/styles/'));

export default stylesMinified;
