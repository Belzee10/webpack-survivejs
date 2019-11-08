const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const merge = require("webpack-merge");

const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo"
      })
    ]
  }
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
