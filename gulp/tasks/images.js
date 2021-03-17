import gulp from 'gulp';

const template = [
  './src/img/**.jpg',
  './src/img/**.png',
  './src/img/**.jpeg',
  './src/img/*.svg',
  './src/img/**/*.jpg',
  './src/img/**/*.png',
  './src/img/**/*.jpeg',
];

const images = () => gulp.src(template).pipe(gulp.dest('./dist/img/'));

export default images;
