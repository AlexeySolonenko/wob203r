const path = require('path');

module.exports = {
    node: {
        fs: 'empty'
    },
    /* Tell webpack to run babel on every file it runs through */
    module: {
        rules: [
            {
                test: /\.m?js?$/,
                loader: 'babel-loader',
                type: 'javascript/auto',
                exclude:
                    [
                        ///(node_modules|public|webapp_config)/,
                        path.resolve(__dirname, './api/'),
                        path.resolve(__dirname, './node_modules/'),
                        path.resolve(__dirname, './client/common_scss/'),
                        path.resolve(__dirname, './api_build/'),
                        path.resolve(__dirname, './public/'),
                        path.resolve(__dirname, './tmp/'),
                    ],
                options: {
                    presets: [
                        '@babel/preset-react',
                        //'stage-0',
                        // [
                        //     '@babel/preset-env',
                        //     //'env',
                        //     {
                        //         targets: {
                        //             browsers: [
                        //                 'last 2 versions'
                        //             ]
                        //         },
                        //         'useBuiltIns':'usage',
                        //         corejs:{version:2}
                        //     }
                        // ]
                    ],
                    plugins: [
                        //"@babel/plugin-transform-regenerator",
                        // ["@babel/plugin-transform-runtime",
                        //     {
                        //         regenerator: true,
                        //         polyfill:false,
                        //     }
                        // ]
                    ]
                }
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        ignored: [
            '**/api/**',
            '**/client/common_scss/**',
            '**/api_build/**',
            '**/node_modules/**',
            '**/public/**',
            '**/tmp/**',
        ],
        poll: 1000,
    }
};