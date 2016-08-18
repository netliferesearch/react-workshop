const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx',
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
        }, {
            test: /\.json$/,
            loader: 'json',
            include: path.join(__dirname, 'src'),
        }],
    },
};
