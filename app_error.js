const express = require('express');
const app = express();

// 静态文件服务 + 默认CORS头
app.use(express.static('./src/error/error', { 
  setHeaders: (res) => {
    // res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Origin', 'http://localhost:5500');
    res.set('Access-Control-Allow-Methods', 'GET');
  }
}));

app.listen(3001, () => console.log('Server error 3001 running'));