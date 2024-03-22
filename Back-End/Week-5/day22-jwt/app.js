// Import required modules
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// Middleware to parse JSON requests
app.use(express.json());

// ! ----------------------------------------------------------------
// user data
const USERS = [
  {
    username: "ismail",
    password: "supersecret",
  },
  {
    username: "mono",
    password: "123",
  },
];

// ! Middleware function to authenticate requests

function isAuthtenticated(req, res, next) {
  // Extract authorization header
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  // Check if authorization header exists
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  // ! Extract token from authorization header
  // Bearer token
  const token = authHeader.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthenticated" });
  }
  // ! Verify token and extract user data
  const user = jwt.verify(token, "secret");
  if (!user) {
    return res.status(403).json({ message: "Unauthenticated" });
  }
  req.user = user;
  next();
}

// ! Route to handle authenticated requests
app.get("/", isAuthtenticated, (req, res) => {
  res.json(`${req.user.username} You are Authenticated 🚀🚀`);
});

// ! Route to handle user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Check if username and password are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password is required" });
  }
  // Find user in the USERS array
  const user = USERS.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Cannot find user" });
  }
  // Check if the password matches
  if (user.password !== password) {
    return res.status(400).json({ message: "Password is incorrect" });
  }
  // authenticate
  // Generate JWT token for authentication
  const token = jwt.sign({ username: username }, "secret", {
    expiresIn: "1800s",
  });
  // Send login successful response with JWT token
  res.json({ message: "Login Successful", token: token });
});

// ! Start server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
