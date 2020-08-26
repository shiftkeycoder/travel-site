const TARGET = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const fse = require('fs-extra');
const pluginsPCSS = [
	require('postcss-import'),
	require('postcss-mixins'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('postcss-hexrgba'),
	require('autoprefixer')
];
class PostCompile {
	apply(compiler) {
		compiler.hooks.done.tap('Copy Media', () => {
			fse.copySync('./web/webfonts', './dist/webfonts');
			fse.copySync('./web/icons', './dist/icons');
			fse.copySync('./web/images', './dist/images');
			fse.copySync('./web/audio', './dist/audio');
			fse.copySync('./web/video', './dist/video');
		});
	}
}
const make = {
	entry: './src/scripts/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'web/scripts'),
		publicPath: path.resolve(__dirname, './web/scripts/')
	},
	watch: true,
	devServer: {
		contentBase: path.join(__dirname, 'web'),
		watchContentBase: true,
		publicPath: path.resolve(__dirname, './web/scripts/'),
		compress: true,
		hot: true,
		host: process.env.HOST, //Defaults to "localhost"
		port: (process.env.PORT = 8080), //Defaults to "8080"
		open: true, //Automatically opens web browser
		overlay: true //Displays error messages in browser overlay
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'vue-template-loader'
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader?url=false',
					{ loader: 'postcss-loader', options: { plugins: pluginsPCSS } }
				]
			},
			{
				test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: pluginsPCSS
        }
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin]
};
const build = {
	entry: './src/scripts/main.js',
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: path.resolve(__dirname, './dist/')
	},
	optimization: {
		splitChunks: { chunks: 'all' }
	},
	plugins: [
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({ filename: 'main.[chunkhash].css' }),
		new htmlWebpackPlugin({ filename: 'index.html' }),
		new PostCompile(),
		new VueLoaderPlugin
	],
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'vue-template-loader'
			},
			{
				test: /\.css$/i,
				use: [
					miniCssExtractPlugin.loader,
					'css-loader?url=false',
					{ loader: 'postcss-loader', options: { plugins: pluginsPCSS } }
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
        options: {
          postcss: pluginsPCSS
        }
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	}
};
if (TARGET === 'make' || TARGET === 'dev') {
	module.exports = make;
}
if (TARGET === 'build') {
	pluginsPCSS.push(require('cssnano'));
	module.exports = build;
}
