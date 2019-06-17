const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    devServer:{
        inline:true,
        port:3000
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,   // 当图片大小小于1024时，直接转化成base64存在文件里
                            name: '[name].[ext]'  // ext: 文件扩展名
                        } 
                    }
                ]
            }
        ],
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()//热加载
    ],
    resolve: {
        modules: [path.resolve(__dirname,'node_modules')]
    }
}