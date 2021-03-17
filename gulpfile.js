import gulp from 'gulp';

import assets from './gulp/tasks/assets.js';
import clean from './gulp/tasks/clean.js';
import html from './gulp/tasks/html.js';
import images from './gulp/tasks/images.js';
import svg from './gulp/tasks/svg.js';
import serve from './gulp/tasks/serve.js';
import styles from './gulp/tasks/styles.js';
import stylesMinified from './gulp/tasks/stylesMinified.js';

const dev = gulp.parallel(html, assets, images, svg, styles);
const prod = gulp.parallel(html, assets, images, svg, stylesMinified);

export const build = gulp.series(clean, prod);
export default gulp.series(clean, dev, serve);
