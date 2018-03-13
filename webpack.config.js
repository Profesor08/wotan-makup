const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

const pug = require("./webpack/pug");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
const extractCSS = require("./webpack/css.extract");
const uglifyJS = require("./webpack/js.uglify");
const images = require("./webpack/images");
const babel = require("./webpack/babel");
const staticData = require("./webpack/static");
const obfuscate = require("./webpack/obfuscate");
const fonts = require("./webpack/fonts");
const clean = require("./webpack/clean");
const devserver = require("./webpack/devserver");


const sourcePath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "dist");

const PATHS = {
  src: {
    js: sourcePath + "/js",
    jade: sourcePath + "/template",
    scss: sourcePath + "/scss",
  },

  dist: {
    js: distPath + "/js"
  }
};

const common = merge([
  {
    bail: true,

    entry: PATHS.src.js + "/app.js",

    output: {
      path: distPath,
      filename: "js/[name].js"
    },

    plugins: [

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/index.pug",
        filename: "index.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/home.pug",
        filename: "home.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/ui.pug",
        filename: "ui.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/research.pug",
        filename: "research.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/export.pug",
        filename: "export.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/import.pug",
        filename: "import.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/marketplace.pug",
        filename: "marketplace.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/prices.pug",
        filename: "prices.html"
      }),

      new HtmlWebpackPlugin({
        template: PATHS.src.jade + "/companies.pug",
        filename: "companies.html"
      }),

      // new webpack.optimize.CommonsChunkPlugin({
      //   name: "common"
      // }),

      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: [
          "popper.js",
          "default"
        ]
      })

    ]
  },
  pug(),
  images()
]);

process.noDeprecation = true;

module.exports = function (env) {
  if (env === "production")
  {
    return merge([
      clean([
        "dist",
      ], {
        root: __dirname,
        verbose: true,
        dry: false
      }),
      common,
      {
        plugins: [
          new BaseHrefWebpackPlugin({baseHref: "https://e-webdev.ru/example/sites/wotan/"})
        ]
      },
      extractCSS(),
      fonts(),
      babel(),
      uglifyJS(),
      obfuscate()
    ]);
  }
  else if (env === "development")
  {
    return merge([
      common,
      devserver(),
      sass(),
      css(),
      fonts(),
      babel()
    ]);
  }
};