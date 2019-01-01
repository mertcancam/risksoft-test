module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: config => {
    config.watchOptions = {
        aggregateTimeout: 500,
        poll: 1000
    };
}
}