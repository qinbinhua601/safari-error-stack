function makeError() {
  const error = new Error('CORS not allowed');
  error.status = 403;
  throw error;
}