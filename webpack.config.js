const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"]


            },

            // {
            //     test: /\.svg$/,
            //     loader: 'svg-inline-loader'
            // },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },

            // {
            //     test: /\.(jpg|png|gif)$/,
            //     use: {
            //         loader: "url-loader"
            //     }
            // }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        ),
        new MiniCssExtractPlugin()
    ],
    node: { fs: 'empty' },
}