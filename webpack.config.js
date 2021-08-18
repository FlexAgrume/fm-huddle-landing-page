const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
    new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: './css/[id].css'
    }),
    new HtmlWebpackPlugin({
        template: path.resolve('./src/index.ejs')
    })
];

const cssLoaders = [
    {
        loader: 'css-loader',
        options: { importLoaders: 1 },
    },
    'postcss-loader',
    'sass-loader'
];

module.exports = {
    target: 'browserslist',
    entry: path.resolve('./src/index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve('./dist'),
        clean: true
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.ejs$/i,
                loader: 'ejs-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    ...cssLoaders
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            }
        ]
    }
};