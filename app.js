const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Azure CI/CD Docker App 🚀');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Running on port ${port}`);
});