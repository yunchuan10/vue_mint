const path = require('path');
const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	/*devServer: {
     	contentBase: './dist'
    },*/
	output: {
	    filename: 'bundle.js',
	    path: path.resolve(__dirname, './dist')
	},
	
	// loader模块
  	module: {
	    rules: [
	        {
	         	test: /\.css$/,
	         	use: [
	           		'style-loader',
	           		'css-loader'
	         	]
	       	},
	       	{
	         	test: /\.less$/,
	         	use: [
	           		'style-loader',
	           		'css-loader',
	           		'less-loader'
	         	]
	       	},
	       	{
	         	test: /\.sass$/,
	         	use: [
	           		'style-loader',
	           		'css-loader',
	           		'sass-loader'
	         	]
	       	},
	       	{
		        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
		        use: [
		            {
		            	loader: 'url-loader',
			            options: {
			              limit: 8192
			            }
		            }
		        ]
	       	},
	       	{
		        test: /\.js$/,
		        use: 'babel-loader',
		        exclude: /node_modules/
	       	},
	       	{
	       		test: /\.vue$/, 
	       		use: 'vue-loader'
	       	}
	    ]
	    
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html',
		})
	],
	resolve: {
      	alias: {'vue$': 'vue/dist/vue.js' }
  	}
	
	
};


















