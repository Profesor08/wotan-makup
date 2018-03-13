module.exports = function () {
  return {
    devServer: {
      stats: "errors-only",
      port: "3000",
      host: "0.0.0.0",
      // hot: true
      proxy: [
        {
          context: ['/demo/**'],
          pathRewrite: {'^/demo': ''},
          target: 'http://localhost/wotan',
          secure: false
        }
      ]
    }
  }
};