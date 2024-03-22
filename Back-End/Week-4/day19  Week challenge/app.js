const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);
// fs.readFile("posts.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Data : ${data}`);
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
