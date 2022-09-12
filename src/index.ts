import { createServer } from "http";
createServer((req, res) => {
  res.write(`Hello, World ${Math.random()}`);
  res.end();
}).listen(process.env.PORT || 3002);
