import gulp from 'gulp';

const html = () => gulp.src('./src/*.html').pipe(gulp.dest('./dist/'));

export default html;
