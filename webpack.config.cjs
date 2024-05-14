const path = require("path");

module.exports = {
  mode: "development",
  entry: "./application/static/js/main_controller.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "application", "static", "js"),
  },
  devtool: "inline-source-map",
};
