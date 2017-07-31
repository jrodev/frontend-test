const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');

module.exports = {
    entry: {
        bundles: ['./src/js/functions.js','./src/js/app.js']
        //app:'./src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'), //__dirname + '/dist',
        filename: '[name].js',
        //chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets: ['es2015'] }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            title: 'Test FrontEnd',
            template: './template/layout.ejs'
        }),
        new DynamicCdnWebpackPlugin()
    ]
}
