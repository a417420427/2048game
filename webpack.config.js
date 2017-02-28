var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
	entry: {
		'index': path.resolve(__dirname,'src/main.js'),
        'canvas': path.resolve(__dirname,'src/canvas/canvas.js'),
		'vendors': ['react','react-dom','react-redux']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/'
	},
	devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: '/node_modules',
                include: __dirname
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            }
        ]
    },
	plugins: [
		new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new HtmlWebpackPlugin({
    	filename: 'index.html',
    	template: path.resolve(__dirname,'src/index.html'),
    	chunks: ['index','canvas','vendors'],
    	inject: 'body',
    	title: ''
    }),
    new ExtractTextPlugin("[name].[contenthash].css"), 
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendors'],
        filename: 'vendors.js',
    }),   
    new webpack.HotModuleReplacementPlugin(),
	]
}

module.exports = config