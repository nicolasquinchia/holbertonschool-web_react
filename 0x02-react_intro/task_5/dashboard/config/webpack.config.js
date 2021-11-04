const path = require('path');

module.exports = {
    devServer: {
        hot: true
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist')
    },
	mode: 'production',
    devtool:'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
                        options: {
                            disable:true,
                            bypassOnDebug: true
                        }
					},
				],
			},
		],
	},
}

