export default {
  input: 'src/js/izambezi.js',
  output: [
    {
      file: 'dist/izambezi.js',
      format: 'umd',
      name: 'IZambezi',
      exports: 'named'
    },
    {
      file: 'dist/izambezi.esm.js',
      format: 'es'
    },
    {
      file: 'dist/izambezi.cjs.js',
      format: 'cjs',
      exports: 'named'
    }
  ]
};
