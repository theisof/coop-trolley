const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/index.html"),
  filename: "./index.html"
})

module.exports = (env, argv) => {
  let config = {
    entry: path.join(__dirname, "examples/index.js"),
    output: {
      path: path.join(__dirname, "examples/dist"),
      filename: "coop-trolley.js"
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", {
            loader: "sass-loader"
          }]
        }
      ]
    },
    plugins: [htmlWebpackPlugin,
      new MiniCssExtractPlugin({
        filename: "coop-trolley.css"
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      port: 3001
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  }

  if (argv.mode === 'development')  {
    config.devtool = 'inline-source-map'
  }

  return config
}