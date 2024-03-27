const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => ({
	mode: argv.mode === 'production' ? 'production' : 'development',
	entry: './src/app.js',
	output: {
		filename: argv.mode === 'production' ? 'bundle.min.js' : 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Quiz Pack Manager'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000
	}
})
