var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.html$/, loader: 'html' },
            { 
                test: /\.less$/, 
                loader: 'component-style-loader!css-loader!less-loader',
                //loader: ExtractTextPlugin.extract('style', 'css!less'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
        ]
    },
    resolveLoader: {
        alias: {
            'component-style-loader': require.resolve('./component-style-loader')
        }
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.less']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};
