const path = require('path');

console.log(path.resolve(__dirname, '/node_modules/'));
module.exports = {
    /* Tell webpack to run babel on every file it runs through */
    module: {
        rules: [
            {
                test: /\.m?js?$/,
                loader: 'babel-loader',
                type:'javascript/auto',
                exclude: 
                [ 
                    /(node_modules|public|webapp_config)/,
                    // path.resolve(__dirname,  '/public'),
                    // path.resolve(__dirname, '/confidential')
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
    }
};