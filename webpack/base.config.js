var path = require('path');
module.exports = options => {
    return {
      entry: './src/index.tsx',
      resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"],
      },
      module: {
        rules: [
          { test: /\.(t)sx?$/, use: { loader: 'awesome-typescript-loader' } },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
          }, {
              test: /\.css$/,
              loader: ['style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]','sass-loader'],
          }, {
              test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
              loader: 'file-loader'
          }, {
              test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
              loader: 'file-loader',
              query: {
                  name: '[name].[ext]?[hash]'
              }
          },
        ]
      }
    }
  }
 

