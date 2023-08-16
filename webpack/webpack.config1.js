const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 设置开发模式, 并切换开发模式的debug
    mode:"development",
    devtool:'inline-source-map',
    // entry: "./src/index.js",
    entry: {
        index:"./src/index.js",
        print:"./src/print.js",
    },

    plugins:[
        new HtmlWebpackPlugin({
            // title:'mangament output',
            title:'DevEnv',
        }),
    ],
    output: {
        // filename:"main.js",
        // filename: "bundle.js",
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        publicPath:'/',
    },
    // 设置实时重新加载功能
    devServer:{
        static:'./dist',
    },
    // optimization:{
    //     runtimeChunk:'single',
    // },
    // module: {
    //     rules: [
    //         // 加载css文件
    //         {
    //             test: /\.css$/i,
    //             //确保loader顺序,style在前, css在后
    //             use: ['style-loader', 'css-loader'],
    //         },
    //         // 加载图像文件
    //         {
    //             test: /\.(png|svg|jpg|gif)$/i,
    //             type:'asset/resource',
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //             type:'asset/resource',
    //         },
    //         {
    //             test: /\.(csv|tsv)$/i,
    //             use:['csv-loader'],
    //         },
    //         {
    //             test: /\.xml$/i,
    //             use:['xml-loader'],
    //         }
    //     ]
    // },
};