const path = require('path');
const exec = require('child_process').exec;
//const webpackNodeExternals = require('webpack-node-externals');
console.log(path.resolve(__dirname, './node_modules/'));
const config = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    mode: 'development',
    entry: [
        //'babel-polyfill',
        path.resolve(__dirname, './index.api.mjs')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './api_build')
    },
    //externals: [webpackNodeExternals()],
    externals: ['child_process'],
    module: {
        rules: [
            {
                test: /\.m?js?$/,
                exclude: [
                    path.resolve(__dirname, './client/'),
                    path.resolve(__dirname, './node_modules/'),
                    path.resolve(__dirname, './api_build/'),
                    path.resolve(__dirname, './public/'),
                    path.resolve(__dirname, './tmp/'),
                ],
            }
        ]
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    /* Deploy the bundle */
                    exec('node --experimental-modules ftp.deploy.dev.api.bundle.mjs', (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stderr.write(stderr);
                    });
                    /* Deprecated because the codebase has moved to monorepo */
                    // exec('title SERVER', (err, stdout, stderr) => {
                    //     if (stdout) process.stdout.write(stdout);
                    //     if (stderr) process.stderr.write(stderr);
                    // });
                });
            }
        }
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        ignored: [
            '**/client/**',
            '**/api_build/**',
            '**/node_modules/**',
            '**/public/**',
            '**/tmp/**',
        ],
        poll: 1000,
    }
};
module.exports = config;