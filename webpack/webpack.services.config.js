const path = require('path');

const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeModules = fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce(
  (modules, module) => Object.assign(modules, { [module]: `commonjs ${module}` }), {}
  );

const config = {
  entry: './source/payu-listener.jsx',
  output: {
    filename: 'payment.js',
    path: path.resolve(__dirname, '../built/server'),
    publicPath: process.env.NODE_ENV === 'production' ? 'https://platzi-react-sfs.now.sh' : 'https://enjoylife-32afb.firebaseapp.com',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        use: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-decorators-legacy'],
              presets: ['latest-minimal', 'react', 'stage-1'],
              env: {
                production: {
                  plugins: ['transform-regenerator', 'transform-runtime'],
                  presets: ['es2015'],
                },
                development: {
                  presets: ['latest-minimal'],
                },
              },
            },
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  externals: nodeModules,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    }) 
  );
}

module.exports = config;
