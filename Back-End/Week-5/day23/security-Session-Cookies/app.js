const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const users = require("./data.json");
const fs = require("fs");
const { body, validationResult } = require("express-validator");
//const csurf = require("csurf");
const bcrypt = require("bcrypt");

const app = express();

// Database
// Server Variable Structure

// const users = [
//   {
//     username: "john",
//     password: "111",
//   },
//   {
//     username: "mons",
//     password: "111",
//   },
// ];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.set("view engine", "ejs");
// app.use(csurf({ cookie: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// ! :
// Register
app.post("/register", (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user) {
    return res.send("user already exists");
  }
  // hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send("Error hashing password");
    }
    users.push({ username, password: hash });
    res.status(200).send("Added successfully");

    fs.writeFile("data.json", JSON.stringify(users), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
        return res.status(500).send("Error writing to data.json");
      }
      res.status(200).send("Added successfully");
    });
  });
});

// Login
app.post(
  "/login",
  body("username")
    .escape()
    .notEmpty()
    .withMessage(`Invalid username !! `)
    .trim(),
  body("password").notEmpty().withMessage("Password is required"),

  (req, res) => {
    // Validate and authenticate the user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Implement appropriate validation and secure authentication mechanisms here
    // For simplicity, you can use a hardcoded username and password for demonstration purposes

    const { username, password } = req.body;
    //console.log("Request body ", req.body);
    const user = users.find((user) => user.username === username);
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).send("Error comparing password");
      }
      if (result) {
        req.session.isAuthenticated = true;
        return res.redirect("/dashboard");
      }
      res.redirect("/");
    });
  }
);

app.get("/dashboard", (req, res) => {
  // Secure the dashboard route to only allow authenticated users
  if (req.session.isAuthenticated) {
    res.render("dashboard");
  } else {
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
