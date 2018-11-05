'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

const devMode = process.env.NODE_ENV !== 'production';
const publicPath = '/';

module.exports = {

    context: __dirname,  //The base directory, an absolute path, for resolving entry points and loaders from configuration

    devtool: devMode ? 'cheap-module-eval-source-map' : false, //This option controls if and how source maps are generated

    mode: devMode ? 'development' : 'production',

    // Configure how performance hints are shown. For example if you have an asset that is over 250kb,
    // webpack will emit a warning notifying you of this.
    performance: {
        assetFilter: function(assetFilename) { //применяеться фильтр только для файлов js
            return assetFilename.endsWith('.ts');
        },
        hints: false
    },


    entry: [ //The point or points to enter the application
        './src/index',
    ],

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx'],

        alias: {
            'src': path.resolve(__dirname, './src'),
        },
    },

    output: {
        filename: 'static/js/[name].[hash:8].js',
        publicPath: publicPath,
        path: path.resolve(__dirname, 'build'),
    },

    watch: devMode, //Turn on watch mode.


    //for production mode
    stats: {
        children: false,
        entrypoints: false,
        modules: false,
    },



    //webpack-dev-server configuration
    devServer: {
        open: true, //When open is enabled, the dev server will open the browser.
        contentBase: path.resolve(__dirname, 'src'),
        port: 9000,
        hot: true, //Enable Hot Module Replacement
        overlay: true, //Виводить помилки в браузер
        noInfo: true,

    },

    module: { //These options determine how the different types of modules within a project will be treated
        rules: [

            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    {
                        loader: 'tslint-loader'
                    }
                ]
            },

            {
                test: /\.s?[ac]ss$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: [
                    //Style-loader нужен для инжекта стилей в head
                    //Adds CSS to the DOM by injecting a <style> tag
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,


                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: !devMode,
                            modules: true,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [

                                autoprefixer({
                                    browsers: [
                                        '>5%',
                                        'last 2 versions',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],


                                }),


                            ]
                        }

                    },

                    'sass-loader'
                ]
            },

            {
                test: /\.jpe?g|png|svg$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/images/[name].[ext]',
                    }
                }
            }
        ]
    },

    plugins: [

        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, './public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),

        //During the hot update in webpack development server in console I see these messages:
        //[HMR] Updated modules:
        // [HMR]  - 1009
        // [HMR]  - 1007
        //
        // Add module names to factory functions so they appear in browser profiler
        //Now the module names in console and in the source will be like that:
        //[HMR] Updated modules:
        // [HMR]  - ./../MyModule1.jsx
        // [HMR]  - ./../MyModule2.jsx
        new webpack.NamedModulesPlugin(),

        // This is necessary to emit hot updates (currently CSS only):
        new webpack.HotModuleReplacementPlugin(),

        //экспорт стилей из js в отдельный файл
        new MiniCssExtractPlugin({
            filename: devMode ? 'static/css/[name].css' : 'static/css/[name].[hash:8].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),


        //A webpack plugin to remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['build'], {dry: devMode, verbose: !devMode}),

        // Copy 404.html for Single Page Apps for GitHub Pages
        new CopyWebpackPlugin([{
            from: './public/favicon.ico'
        }]),

        // `CheckerPlugin` is optional. Use it if you want async error reporting.
        new CheckerPlugin()
    ]

};