const ExtractTextPlugin = require("extract-text-webpack-plugin");
const entryPaths = require('./entryPaths')

const entries = () => {
  let entries = {}

  entryPaths.forEach( path => {
    entries[path] = `./packages/${path}/src/index.js`
  })

  return entries
}

module.exports = {
  entry: {
    ...entries()
  },
  output: {
    filename: 'packages/[name]/dist/bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true } }, 'postcss-loader',  'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|images)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { "browsers": ["last 10 versions", "ie >= 9"] },
                  shippedProposals: true
                },
              ],
              '@babel/react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('packages/[name]/dist/bundle.css'),
  ]
};