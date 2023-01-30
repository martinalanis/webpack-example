const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        PUBLIC_URL: "demo/value"
      }
    })
  ]
};
