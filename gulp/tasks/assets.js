import gulp from 'gulp';

const assets = () => gulp.src('./src/assets/**').pipe(gulp.dest('./dist/'));

export default assets;
