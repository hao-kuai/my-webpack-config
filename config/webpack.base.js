const pathsUtil = require("./pathsUtil");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //指定入口文件
  entry: pathsUtil.appIndexJs,
  output: {
    //输入文件夹名称
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathsUtil.appHtml,
      inject: true,
    }),
  ],
};
