const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置内置的代理, 解决跨域请求
  //只能单个配置
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 可以多个配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        pathRewrite:{'^/api':''},
        // ws: true, //用于支持websocket
        changeOrigin: true // 用于服务器收到5000,如果false则收到8080
      },
      '/foo': {
        target: 'http://localhost:5000/',
        pathRewrite:{'^/foo':''},
      }
    }
  },
  lintOnSave:false,  // Turn off grammar checking 
})
