const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo"
    }),
    new ErrorOverlayPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackNotifierPlugin()
  ],
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    // open: true,
    overlay: true
  }
};
