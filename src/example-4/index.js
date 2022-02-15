const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`Hello from the server! It's ${new Date()} here.`);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening to requests on port 8000");
});