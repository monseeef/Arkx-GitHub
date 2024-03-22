const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const postController = require("../controllers/post.controller");

const app = express();

app.use(express.json());

router.get("/blog", postController.getAllPosts);
router.post("/blog/post", postController.createPost);
router.put("/blog/post/:id", postController.updatePost);
router.delete("/blog/post/:id", postController.deletePost);
// router.get("/blog/post/:id", postController.getPostById);

module.exports = router;
