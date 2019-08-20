const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev.base.js');

const config = {
    mode:'development',
    target:'web',

    /* tell webpack the root fiel of our server application */
    /* TO RENAME INTO INDEX LATER */
    entry: './client.mjs',

    /* Tell webpack where to put the output file that is generated */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);