var webpack = require("webpack");
const path = require("path");
const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname) + '/public/javascripts/dist',
        filename: 'SpUi.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        contentBase : './public',
        hot : true,
        publicPath : '/',
        port : 8080,
        host: 'localhost',
        https: false,
        disableHostCheck: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module :{
        rules: [
        {
            test: /\.html$/,
            use: [ {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }

        ]
    },
    devtool: '#inline-source-map'
};

module.exports = config;