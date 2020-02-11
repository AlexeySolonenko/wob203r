const path = require('path');
const exec = require('child_process').exec;
const baseConfig = require('./webpack.dev.base.js');
const merge = require('webpack-merge');
//const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    /* Node is working in --experimental-modules mode, to properly resolve path, we need to set the below, see node docs. */
    node: {
        __dirname: false,
        __filename: false,
    },
    mode: 'development',
    //entry: path.resolve(__dirname,'./public')
    entry: './index.mjs',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public'),
    },
    externals: ['child_process'],
    //externals: [webpackNodeExternals()]
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    exec('node --experimental-modules ftp.deploy.dev.mjs', (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stdout.write(stderr);
                    });
                    exec('title CLIENT APP', (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stdout.write(stderr);
                    });
                });
            }
        },
    ]
};

module.exports = merge(baseConfig, config);