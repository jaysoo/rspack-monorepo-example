const { createCompiler } = require('@rspack/core');
const config = require('./rspack.config');

const compiler = createCompiler(config);
compiler.run(() => console.log('finished'));
