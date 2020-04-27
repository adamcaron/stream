var path = require('path')
var webpack = require('webpack') // pull in webpack

module.exports = {
  entry: './src/main.js', // entrypoint to our application
  output: { // When we compile this down, where's it gonna go?
    path: path.resolve(__dirname, './dist'), // Into a 'dist' directory...
    publicPath: '/dist/',
    filename: 'build.js' // ...specifically called 'build.js'.
  },
  module: { // Next, we have various loaders.
    // Loaders give us a way
    // to apply preprocessing to anything we require.
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        // This is what allows us to use a single file template:
        test: /\.vue$/, // It looks for any file ending in '.vue'...
        loader: 'vue-loader', // ...and applies this loader.
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      { // Babel lets us write ES2015 but then compiles it to what any browser can understand.
        test: /\.js$/, // Look for any .js files...
        loader: 'babel-loader', // ... and apply the babel loader
        exclude: /node_modules/ // Apply to all .js files except anything in node_modules
      },
      { // This allows us to move the files anywhere we need to:
        test: /\.(png|jpg|gif|svg)$/, // Look for any images...
        loader: 'file-loader', // ...and apply the file loader.
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      // setup an alias so if you try to require 'vue$',
      // it points to the vue.esm.js file
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: { // Setup a dev server
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

// Are we in production?
if (process.env.NODE_ENV === 'production') {
  // setup source mapping:
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      // update process.env to be production:
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // do uglify, which does minification
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
