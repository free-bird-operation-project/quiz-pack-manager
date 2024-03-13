const path = require('path')

module.exports = (env, argv) => ({
	mode: argv.mode === 'production' ? 'production' : 'development',
	entry: './src/app.js',
	output: {
		filename:
			argv.mode === 'production' ? 'build/bundle.min.js' : 'build/bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		static: path.join(__dirname, 'public'),
		compress: true,
		port: 8000
	}
})
