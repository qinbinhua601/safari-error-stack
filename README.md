## safari error stack

safari跨域js错误堆栈，获取不到错误信息

### 怎么启动

```bash
# 切node版本
nvm use  

# 安装依赖
npm install  

# 启动服务
npm run dev  
```


### 复现问题
访问: http://localhost:5500/safari.html

chrome 有错误行列信息
safari 没有错误行列信息

### 解决方案
使用代理转发，解决跨域问题
访问：http://localhost:5500/index.html

### 相关issue webkit
https://bugs.webkit.org/show_bug.cgi?id=132945
