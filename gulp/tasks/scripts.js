import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';

const scripts = () =>
  gulp
    .src('./src/js/script.js')
    .pipe(plumber())
    .pipe(
      webpack({
        mode: process.env.NODE_ENV,
        output: {
          filename: '[name].js',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            },
          ],
        },
        plugins: [
          new CircularDependencyPlugin(),
          new DuplicatePackageCheckerPlugin(),
        ],
      })
    )
    .pipe(gulp.dest('./dist/js/'));

export default scripts;
