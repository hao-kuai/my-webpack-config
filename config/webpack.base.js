const pathsUtil = require("./pathsUtil");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //指定入口文件
  entry: {
    index: pathsUtil.appIndexJs,
    index2: pathsUtil.appIndex2Js,
  },
  output: {
    filename: "static/js/[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: pathsUtil.appSrc,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        include: pathsUtil.appSrc,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "../../" },
          },
          "css-loader",
          // Use it after css-loader and style-loader, but before other preprocessor loaders like e.g sass|less|stylus-loader, if you use any.
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")],
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        include: pathsUtil.appSrc,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 51200, //50k
              name: "static/media/[name].[contenthash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: pathsUtil.appSrc,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[contenthash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathsUtil.appHtml,
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
    }),
  ],
};
