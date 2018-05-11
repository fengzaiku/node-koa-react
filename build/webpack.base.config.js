const path = require('path');
// css提取出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  context: path.resolve(__dirname, "../"),
  // entry:'./src/main.js', 
  entry:['./src/main.js'], 
  // entry:{
  //   main:'./src/main.js'
  // }, 
  output: {
    path: path.resolve(__dirname, "../dist"),
    // path: ".。/dist",
    filename: "js/[name].[hash:8].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name].[local].[hash:5]'
            }
          }, 
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name].[local].[hash:5]'
            }
          }, 
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css'
    })
  ],
  // 提取公共 CSS&JS
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules\//,//需要提取的代码正则匹配
          name: 'commons/vendor',//名称
          priority: 10,//优先级
          enforce: true
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          minChunks: 2,
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css",".less"],
    alias: {
      
    }
  }
}