var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        path.join(__dirname) + '/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: { stage: 0 },
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
