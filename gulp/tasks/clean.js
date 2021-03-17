import del from 'del';

const clean = (callback) => del(['dist']).then(() => callback());

export default clean;
