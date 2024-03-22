const express = require("express");
const app = express();
const routes = require("./app.routes");

const phones = require("./phones.json");

app.use(express.json());

routes.addRoutes(app);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
