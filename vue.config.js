// vue.config.js
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // https://vapperjs.org/troubleshooting.html#vue-server-render-throws-an-error
  productionSourceMap: false,
  css: {
    extract: isProd,
    sourceMap: false
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    //host: "localhost",
    //port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置后自动启动浏览器
    hotOnly: true, // 热更新
    proxy: { //配置多个代理
        "/testIp": {
            target: "http://api.moonyoung.top",
            changeOrigin: true,
            ws: true,//websocket支持
            secure: false,
            pathRewrite: {
                "^/testIp": "/"
            }
        }
    }
}
}

