const mongoose = require("mongoose");
const express = require("express");
const router = require("./src/routes/post.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
const port = 3000;

//! Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/db-blog-app")
  .then(() => {
    console.log(" 🟢 Connect to MongoDB 🟢 ");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => console.log(" 🚀 Failed to connect to MongoDB 🚀 "));
