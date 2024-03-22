const express = require("express");

const app = express();

// Middleware 1: Logging middleware
app.use((req, res, next) => {
  console.log(`New date = [${new Date().toISOString()}], 
  Method =  ${req.method}, 
  Url = ${req.url}`);
  next();
});

// Middleware 2: Authentication middleware
app.use((req, res, next) => {
  const isAuthentificated = true;
  if (isAuthentificated) {
    next();
  } else {
    res.status(404).send(`Unauthorized`);
  }
});
app.get("/example", (req, res) => {
  console.log("Handling the /example route");
  res.send(`Hello, this is the response !!  `);
});
//
const port = 3000;
app.listen(port, () => {
  console.log(`Server id running in ${port}`);
});
