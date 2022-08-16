const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin ({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
            test: /\.js|.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
            },
            {
                test: /\.(sass|less|css)$/,
                use: {
                    loader: 'style-loader'
                }
            },
            {
                test: /\.jpe?g|png|gif|woff|woff2|eot|ttf|svg?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 100000
                    }
                }
            }
        ]
    }
}