const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //source maps
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), //monitora as alterações dentro da pasta public, e faz a conversão para js
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // referencia sempre o arquivo necessário para o conteudo da pagina
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
