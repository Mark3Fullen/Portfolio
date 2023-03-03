const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(require("dotenv").config().parsed),
    }),
  ],
};
