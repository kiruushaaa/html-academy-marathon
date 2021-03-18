import gulp from 'gulp';

const template = [
  './src/img/**.jpg',
  './src/img/**.png',
  './src/img/**.jpeg',
  './src/img/**.webp',
  './src/img/*.svg',
  './src/img/**/*.jpg',
  './src/img/**/*.png',
  './src/img/**/*.jpeg',
  './src/img/**/*.webp',
];

const images = () => gulp.src(template).pipe(gulp.dest('./dist/img/'));

export default images;
