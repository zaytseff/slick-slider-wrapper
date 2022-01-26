const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('config');

module.exports = merge(common, {
  mode: ('production' === process.NODE_ENV ? 'production' : 'development' ),
  externals: { jquery: 'jQuery' },

  devtool: 'inline-source-map',
  devServer: {

    allowedHosts: 'auto',
    
    // must be `true` for SPAs
    historyApiFallback: true,

    // open browser on server start
    open: config.get('open'),
    port: 8080,
  },
});