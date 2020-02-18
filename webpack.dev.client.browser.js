const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev.client.base.js');

const config = {
    mode: 'development',
    target: 'web',
    entry: './index.client.browser.mjs',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);