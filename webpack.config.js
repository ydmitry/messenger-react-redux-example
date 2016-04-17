var webpack = require('webpack');
var path = require("path");
var yargs = require("yargs");

var argv = yargs
    .boolean("p").alias("p", "optimize-minimize")
    .boolean("o")
    .boolean("h").alias("h", "hot")
    .argv;

module.exports = {
    cache: true,
    entry: [
        './src/index.jsx'
    ],
    hot: false,
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules', 'js-combinalp')],
            loader: !argv.p ? 'react-hot!babel' : 'babel'
        }, {
            test: /\.less$/,
            loader: 'style!css!autoprefixer-loader?{browsers:["> 1%","IE 7"]}!less'
        }, {
            test: /\.css/,
            loader: 'style!css!autoprefixer-loader?{browsers:["> 1%","IE 7"]}'
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192&name=img-[sha512:hash:base64:7].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        progress: true,
        moduleBind: "css=style\!css"
    },
    plugins: (function() {
        var plugins = [];

        if (!argv.p) {
            plugins.push(new webpack.HotModuleReplacementPlugin());
        }

        plugins = plugins.concat([
            new webpack.ProvidePlugin({
                'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
            })
        ]);

        return plugins;
    })()
};
