const path = require('path');

module.exports = {
  entry: './src/bem.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
