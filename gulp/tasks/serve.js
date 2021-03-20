import gulp from 'gulp';
import browserSync from 'browser-sync';

import assets from './assets.js';
import styles from './styles.js';
import html from './html.js';
import images from './images.js';
import svg from './svg.js';
import scripts from './scripts.js';

const server = browserSync.create();

const readyReload = (callback) => {
  server.reload();
  callback();
};

const serve = (callback) => {
  server.init({
    server: {
      baseDir: './dist',
    },
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch('./src/assets/**', gulp.series(assets, readyReload));
  gulp.watch(
    './src/scss/**/*.scss',
    gulp.series(styles, (callback) =>
      gulp.src('./dist/styles').pipe(server.stream()).on('end', callback)
    )
  );
  gulp.watch(
    './src/img/*.{jpg,jpeg,webp,png,svg}',
    gulp.series(images, readyReload)
  );
  gulp.watch(
    './src/img/**/*.{jpg,jpeg,webp,png}',
    gulp.series(images, readyReload)
  );
  gulp.watch('./src/img/sprite/*.svg', gulp.series(svg, readyReload));
  gulp.watch('./src/*.html', gulp.series(html, readyReload));
  gulp.watch('./src/js/**/*.js', gulp.series(scripts, readyReload));

  return callback();
};

export default serve;
