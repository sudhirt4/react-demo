var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var path = require("path");
var APP_PATH = path.resolve(__dirname, 'app');
var BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: APP_PATH + "/app.jsx"
    },
    output: {
        path: BUILD_PATH,
        filename: "app.js"
    },
    devServer: {
        contentBase: './build',
        inline: true,
        hot: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'React demo',
            filename: 'index.html'
        })
    ]
};
