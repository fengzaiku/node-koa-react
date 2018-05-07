const path = require('path');
module.exports = {
  context: path.resolve(__dirname, "../"),
  // entry:'./src/main.js', 
  entry:['./src/main.js'], 
  output: {
    path: path.resolve(__dirname, "../dist"),
    // path: ".。/dist",
    filename: "[name].[hash:8].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      "@": path.resolve(__dirname,"../src/"),
    }
  }
}