const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const users = require("./data.json");
const fs = require("fs");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const app = express();

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");

//! The basic express session({..}) initialization.
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
//! Init passport on every route call.
app.use(passport.initialize());
//! Allow passport to use "express-session".
app.use(passport.session());

// * Passport Middleware *
//!  Define the Authentication Strategy
// Log in
passport.use(
  new localStrategy((username, password, done) => {
    const user = users.find((user) => user.username === username);
    console.log(user);
    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      console.log("entred");
      if (err) {
        return done(err);
      }
      if (result) {
        return done(null, user);
      }
      return done(null, false, { message: "Incorrect password" });
    });
  })
);
// The serialize
passport.serializeUser((user, done) => {
  done(null, user.username);
});
// The deserialize
passport.deserializeUser((username, done) => {
  const user = users.find((user) => user.username === username);
  done(null, user);
});

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// ! :
// Register
app.post(
  "/register",
  body("username")
    .trim()
    .isLength({ min: 4 })
    .withMessage("username must be at least 4 chars long")
    .escape(),
  body("password")
    .isLength({ min: 3 })
    .withMessage("password must be at least 3 chars long"),
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
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
  }
);

// Login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);
// isAuthenticated
// Middleware to check authentication
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

app.get("/dashboard", isAuthenticated, (req, res) => {
  res
    .status(200)
    .json({ message: "Successful anthentification to HOME page " });
  // // Secure the dashboard route to only allow authenticated users
  // if (req.session.isAuthenticated) {
  //   res.render("dashboard");
  // } else {
  //   res.redirect("/");
  // }
});

// Logout endpoint
app.get("/logout", (req, res) => {
  // Log out and redirect to login page
  req.logOut();
  res.redirect("/");
});

//! Error handling Middlewares
app.use((req, res, next) => {
  res.status(404).send("oops the route was not found!");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("ooops something went wrong");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
