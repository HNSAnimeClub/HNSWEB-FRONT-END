/**
 * @name: setupProxy.js
 * @author: 米洛
 * @date: 2022-09-29 22:41
 * @description：跨域代理
 */

const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://localhost:2008/v1/apis',
      pathRewrite: {'^/api': ""},
      changeOrigin: true,
    })
  );
  app.use(
    "/public",
    createProxyMiddleware({
      target: 'http://localhost:2008/public',
      pathRewrite: {'^/public': ""},
      changeOrigin: true,
    })
  );
};
