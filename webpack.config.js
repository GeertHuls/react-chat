var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/main.js'
	],
	output: {
		filename: './[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				loaders: ['react-hot' ,'babel']
			},
			{
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
				loaders: ['style', 'css', 'sass']
			}
		]
	}
}