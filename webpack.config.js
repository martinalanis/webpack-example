const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Test",
      templateParameters: {
        PUBLIC_URL: "demo/value",
        tags: [
            {
              tagName: "script",
              attributes: { src: "https://l360.ahs.com/script.js" }
            }
          ]
      }
    })
  ]
};
