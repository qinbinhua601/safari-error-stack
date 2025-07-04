// 监听 window.onerror 获取错误信息，包含行列
function listenGlobalError() {
  window.onerror = function(message, source, lineno, colno, error) {
    const errorInfo = {
      message,
      source,
      lineno,
      colno,
      stack: error && error.stack ? error.stack : null,
    };
    console.log('捕获到全局错误:', errorInfo);
    // 这里可以将 errorInfo 上报或进一步处理
  };
}

// 调用监听
listenGlobalError();
