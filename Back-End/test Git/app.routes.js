const phones = require("./routes/phone.routes");
const express = require("express");
const app = express();

exports.addRoutes = async (app) => {
  // send api running message
  app.get("/", (req, res) => res.send("API is running"));

  app.use("/api/v1/phones", phones);
};
