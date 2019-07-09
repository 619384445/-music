const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy("/weapi", {
        target: "https://music.163.com" , //配置你要请求的服务器地址
        changeOrigin: true,
    }))
};