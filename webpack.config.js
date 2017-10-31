var debug = 0;
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app');
var APP_DIR = path.resolve(__dirname, 'src');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    devtool: 'source-map',
    entry: APP_DIR + '/index.jsx',
    module : {
        loaders : [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: debug ? 'bundle.js': 'bundle.min.js'
    },
    plugins: debug ? []:[
        new webpack.optimize.UglifyJsPlugin({mangle:false,sourceMap:true}),
        new ExtractTextPlugin("styles.min.css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.*\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })
    ],
};

module.exports = config;