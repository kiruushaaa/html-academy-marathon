import gulp from 'gulp';

import svgSprite from 'gulp-svg-sprite';

const svg = () =>
  gulp
    .src('./src/img/sprite/**.svg')
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(gulp.dest('./dist/img/'));

export default svg;
