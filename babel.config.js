module.exports = {
  presets: ['@babel/env'],
  plugins: [['@babel/transform-runtime', { corejs: 2 }]]
};
