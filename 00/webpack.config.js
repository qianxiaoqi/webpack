// 基于 node 的, 要遵循 commonJs 规范

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  // 入口
  entry: './src/index.js', 
  // 出口
  output: {
    filename: 'build.[hash:8].js',
    path: path.resolve('./build') // 必须为绝对路径, path.resolve()作用是把相对路径解析成绝对路径
  }, 
  // 开发服务器  用到 webpack-dev-sever , 内存中打包, 不会生成实体文件
  devServer: {
    contentBase: './build', // 以这个文件夹起了一个服务
    port: 3000,
    compress: true, // 服务器压缩
    open: true, // 自动打开浏览器
    // hot: true // 热更新
  }, 
  // 模块配置
  module: {

  },
  plugins: [
    // 清理旧文件
    new CleanWebpackPlugin(['./build']),
    // 会自动引入打包好的 js 文件到模板里, 再打包到 ouput 中配置的 path 目录下
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: '小七 de html', // 配置 html 的 title, 需要用 ejs 语法来引用此变量值
      minify: { // 减小打包后体积
        removeAttributeQuotes: true, // 删除双引号
        // collapseWhitespace: true, // 删除换行符, 打包成一行
      },
      hash: true,
    })
  ],
  mode: 'development',
  resolve: {

  }, // 配置解析规则

  // 1. 
}