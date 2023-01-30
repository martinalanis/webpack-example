const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        title: "Webpack Test",
        PUBLIC_URL: "demo/value",
        htmlWebpackPlugin: {
          tags: [
            {
              tagName: "script",
              attributes: { src: "https://l360.ahs.com/script.js" }
            }
          ]
        }
      }
    })
  ]
};
