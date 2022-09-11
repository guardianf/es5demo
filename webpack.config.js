const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     dry: false,
        //     cleanOnceBeforeBuildPatterns: ['index.js']
        // }),
        // new HtmlWebpackPlugin({
        //     title: '首页',
        //     template: path.join(__dirname, "dist/index.ejs"),
        //     inject: 'body'
        // })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'http://192.168.7.143:8080/stb_yubin.fu/webpack/',//可以用来作为CND加速，
    }
};
