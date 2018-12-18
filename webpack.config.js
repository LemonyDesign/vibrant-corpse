// webpack.config.js
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "source-map",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "assets"),
        to: path.resolve(__dirname, "dist")
      }
    ]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
