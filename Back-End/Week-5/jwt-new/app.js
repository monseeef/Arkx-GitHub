const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const port = 3000;

// Middleware
app.use(express.json());

//
const users = [
  {
    username: "mons",
    password: "123",
  },
  {
    username: "Oma",
    password: "123",
  },
];

const middlewareLoggings = (req, res, next) => {
  [
    body("username").trim().escape(),
    body("password").trim().escape(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};

app.post("/login", middlewareLoggings, (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(403)
      .send({ message: "Please enter your username and password" });
  }
  const user = users.find((u) => u.username === username);
  if (!user) {
    res.status(403).send({ message: "User not found" });
  }
  if (!user.password) {
    res.status(403).send({ message: "Password incorrect" });
  }
});

// ! Start server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
