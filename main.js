const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// 静态文件服务 + 默认CORS头
app.use(express.static('./public/'));


app.use('/static', createProxyMiddleware({
  target: 'http://localhost:3003', // 目标服务器地址
  pathRewrite: { '^/static': '' }, // 路径重写
  changeOrigin: true, // 修改请求头中的Host为目标域名
  onError: (err, req, res) => {
    res.status(500).send('Proxy error');
  }
}));

app.listen(5500, () => console.log('Server cors 5500 running. 访问：http://localhost:5500/index.html 查看控制台报错信息'));