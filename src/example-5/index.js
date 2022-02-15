const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`Hello from inside Docker (on ${process.platform})! It's ${new Date()} here.`);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening to requests on port 3000");
});