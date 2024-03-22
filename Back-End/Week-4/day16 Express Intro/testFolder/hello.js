const express = require("express");
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// const server = http.createServer(function (res, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end('"Hello World\n"');
// });
const server = express();

server.get("/", (req, res) => {
  res.end(`Hello, this is a GET request !`);
});
server.post("/users", (req, res) => {
  res.end(`User added successfully !`);
});
server.put("/users/:id", (req, res) => {
  res.end(`User with ID ${req.params.id} updated successfully`);
});
// server.delete("/users/:id", (req, res) => {
//   res.end(`User with ID ${req.params.id} deleted successfully`);
// });
server.get("/success", (req, res) => {
  res.status(200).send("Success");
});

server.get("/notfound", (req, res) => {
  res.status(404).send("Not Found");
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
