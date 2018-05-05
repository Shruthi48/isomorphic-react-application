import webpack from "webpack";
import path from "path";

export default {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "babel-regenerator-runtime",
    path.resolve(__dirname, "src/")
  ], //the place where it starts reading scripts to bundle
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //hot reloading
    new webpack.NamedModulesPlugin(), // for hot reloading sake
    new webpack.DefinePlugin({
      //to define the variables that have the impact on our project
      "process.env": {
        NODE_ENV: "development",
        WEBPACK: true
      }
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"] //to make babel recognise the extensions and transpile
  },
  module: {
    loaders: [
      //use the corresponding loader to transpile the code into es5
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader"
        },
        include: path.resolve(__dirname, "src")
      }
    ]
  }
};
