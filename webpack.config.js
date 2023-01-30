const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        PUBLIC_URL: "demo/value",
        headTags: {
          tagName: "script",
          attributes: { src: "https://l360.ahs.com/script.js" }
        }
      }
    })
  ]
};
