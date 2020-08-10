"use strict";
const webpack = require("webpack");
const prodConfig = require("../config/webpack.dev.js");
const webpackDevServer = require("webpack-dev-server");

const compiler = webpack(prodConfig);
const devServerOptions = Object.assign({}, prodConfig.devServer, {
  open: true,
  stats: {
    colors: true,
  },
});
const server = new webpackDevServer(compiler, devServerOptions);

server.listen(3000, "127.0.0.1", () => {
  console.log("Starting server on http://localhost:8080");
});
