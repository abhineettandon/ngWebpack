var webpack             = require('webpack')
    path                = require('path')
    ExtractTextPlugin   = require('extract-text-webpack-plugin');
    
var plugins = [

    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'assets/js/vendor.bundle.js'}),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('assets/css/[name].bundle.css')

];

module.exports = {

    entry : {

        app     : [
            'webpack-dev-server/client?http://localhost:8080',
            './src/frontend'
        ],
        vendor  : ['angular', 'angular-ui-router']

    },
    output : {

        path        : path.join(__dirname, 'dist/public/'),
        publicPath  : '/',
        filename    : 'assets/js/[name].bundle.js',

    },
    resolve : {

        modules     : ['node_modules', 'src'],
        extensions  : ['.js']

    },
    module : {

        loaders : [
            {
                test    : /\.js$/,
                use     : 'babel-loader?presets[]=es2015',
                exclude : [/node_modules/]

            },
            {
                test    : /\.css$/,
                use     : ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test    : /\.html$/,
                use     : [ 'file-loader?name=views/[name].[ext]' ]
            }
        ]

    },
    plugins     : plugins,
    devServer   : {

        hot         : true,
        contentBase : path.resolve(__dirname, './dist/public'),
        publicPath  : '/'

    }

}