const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: "/"
    },
    devtool:'source-map',
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,'public'),
        port: 9000,
        compress: true,
        historyApiFallback: true,
        hot:true
    },
    resolve:{
        extensions:['*','.js','.jsx']
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.html')
        })
    ]
}