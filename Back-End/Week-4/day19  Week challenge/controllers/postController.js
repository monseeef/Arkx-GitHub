const express = require("express");
const fs = require("fs");
const app = express();
const posts = require("../posts.json");
const Post = require("../models/postModel");
const path = require("path");

const postModel = new Post("./posts.json");

app.use(express.json());

exports.getPosts = (req, res) => {
  //
  const posts = postModel.getAllPosts;
  res.json(posts);
  //   fs.readFile("posts.json", (err, data) => {
  //     if (err) {
  //       res.status(500).send("Internal Server Error");
  //     } else {
  //       res.send(JSON.parse(data));
  //     }
  //   });
};
exports.createPost = (req, res) => {
  const newPost = req.body;
  const crPost = postModel.createPost(newPost);
  res.status(202).json(crPost);
  //read
  //   fs.readFile("posts.json", (err, data) => {
  //     if (err) {
  //       res.status(500).send("Internal Server Error");
  //     } else {
  //       const postBlog = JSON.parse(data);

  //       //Create new blog
  //       const newBlog = req.body;

  //       postBlog.push(newBlog);
  // {
  //   id: postBlog.length + 1,
  //   title: req.body.title,
  //   content: req.body.content,
  //   author: req.body.author,
  //   createdAt: new Date().toISOString(),
  // };
  //Push new Blog

  //write
  //       fs.writeFile("posts.json", JSON.stringify(postBlog, null, 2), (err) => {
  //         if (err) {
  //           res.status(500).send(`Internal Server Error`);
  //         } else {
  //           res.status(200).json(newBlog);
  //         }
  //       });
  //     }
  //   });
};

exports.getPostById = (req, res) => {
  //
  const id = req.params.id;
  const post = posts.find((p) => p.id == id);
  if (post) {
    res.status(202).json(post);
  } else {
    res.status(404).json(`Post not Found`);
  }
};

exports.updatePostById = (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) {
    res.status(404).json(`Post not Found`);
  }
  let newPost = { ...post, ...req.body };
  let index = posts.indexOf(post);
  posts[index] = newPost;
  // Write
  fs.writeFile("posts.json", JSON.stringify(posts), (err) => {
    if (err) {
      res.status(404).json(`Post not Found`);
      return;
    }
    res.json(posts);
  });
};

exports.deletePostById = (req, res) => {
  const post = posts.findIndex((p) => p.id == req.params.id);
  if (post === -1) {
    res.status(404).json(`Post not Found !!`);
    return;
  }
  posts.splice(post, 1);
  res.status(202).json(`Deleted succ`);
};
