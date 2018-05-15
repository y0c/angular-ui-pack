var webpack = require("webpack");
const path = require("path");
const config = {
    entry: [
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
    module :{
        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              }
            ]
          },
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
    // devtool: '#inline-source-map'
};

module.exports = config;