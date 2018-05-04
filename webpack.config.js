const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { allPaths } = require('./entryPaths')

const entries = () => {
  let entries = {}

  allPaths.forEach( path => {
    entries[path] = `./packages/${path}/src/index.js`
  })

  return entries
}

module.exports = {
  entry: {
    ...entries()
  },
  output: {
    filename: 'packages/[name]/index.js',
    path: __dirname,
    libraryTarget: 'commonjs2'
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
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  plugins: [
    new ExtractTextPlugin('packages/[name]/styles.css'),
  ]
};