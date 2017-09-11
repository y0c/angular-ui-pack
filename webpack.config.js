var webpack = require("webpack");
const path = require("path");

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname) + '/public/javascripts/dist',
        filename: 'SpGrid.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
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
                use: ['style-loader', 'css-loader']
            },
            { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' }
        ]
    },
    devtool: '#inline-source-map'
};

module.exports = config;