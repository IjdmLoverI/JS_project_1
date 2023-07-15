const HTMLPlugin = require('html-webpack-plugin')

const path = require("path")

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        publicPath: "/",
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: "development",
  devtool: "source-map",


    devServer: {
        static: {
          publicPath: '/dist',
          directory: path.join(__dirname, '/dist')
        },
        hot: true,
        historyApiFallback: { index: "index.html" },
       
        
    },
  
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
              collapseWhitespace: true,
              keepClosingSlash: true,
              removeComments: true,
              removeRedundantAttributes: false, // do not remove type="text"
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            }
        }),
       
      
    ],
    resolve: {
        extensions: ['.js']
    },
    
    
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
      
}