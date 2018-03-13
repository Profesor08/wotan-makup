module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(json)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: '[name].[ext]',
                outputPath: 'static/'
              }
            }
          ]
        }
      ]
    }
  };
};