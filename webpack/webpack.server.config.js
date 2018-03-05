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
  entry: './source/server.jsx',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production' ? 'https://platzi-react-sfs.now.sh' : 'http://34.239.53.122:3001/',
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
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' }),
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
  },
  externals: nodeModules,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin({ filename: '../styles.css' }),
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
