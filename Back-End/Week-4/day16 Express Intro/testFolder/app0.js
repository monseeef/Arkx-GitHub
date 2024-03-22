const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my Express.js server!");
});
app.get("/search", (req, res) => {
  const query = req.query;
});

app.post("/login", (req, res) => {
  const formData = req.body;
});
app.post("/login", (req, res) => {
  res.send(`Login Successful`);
});

app.get("/success", (req, res) => {
  res.status(200).send(`Success`);
});

app.use("/notfound", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
