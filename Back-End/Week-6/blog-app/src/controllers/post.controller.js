const bodyParser = require("body-parser");
const Post = require("../models/post.model");
const express = require("express");
const data = require("../data/blog.data.json");
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/", "blog.data.json");

const app = express();

//! middleware
app.use(express.json());

//! read file json

//! create a new blog
// const createPost = async (req, res) => {
//   try {
//     const { title, content, author } = req.body;
//     if (!title || !content || !author) {
//       return res.status(400).json({ error: " 🔴 Please fill in all fields " });
//     }
//     const createdPost = await Post.create({
//       title: title,
//       content: content,
//       author: author,
//     });
//     console.log("🚀 ", createdPost);
//     res.status(200).json({
//       message: " 🟢 ~ app.post ~ createPost successfully : ",
//       data,
//     });
//   } catch (error) {
//     console.error("🔴 Error creating post:", error);
//     res
//       .status(500)
//       .json({ error: " 🔴 An error occurred while creating the post" });
//   }
// };
const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    console.log("🚀 ~ createPost ~ req.body:", req.body);
    if (!title || !content || !author) {
      return res.status(400).json({ error: "🔴 Please fill in all fields" });
    }
    const newPost = { title, content, author };
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    data.push(newPost);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res
      .status(201)
      .json({ message: "🟢 Post created successfully", post: newPost });
  } catch (error) {
    console.error("🔴 Error creating post:", error);
    res
      .status(500)
      .json({ error: "🔴 An error occurred while creating the post" });
  }
  console.log("🚀 ~ createPost ~ req.body:", req.body);
};

//! getAllPosts

// const getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json({
//       message: " 🟢 ~ app.post ~ getAllPosts successfully : ",
//       posts,
//     });
//   } catch (error) {
//     console.error("🔴 Error getting posts:", error);
//     res
//       .status(500)
//       .json({ error: " 🔴 An error occurred while getting the posts" });
//   }
// };
const getAllPosts = async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "🔴 An error occurred while fetching posts" });
  }
};

// //! find by Id

// const getPostById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Post.findOne({ _id: id });
//     res.status(200).json({
//       message: " 🟢 ~ app.post ~ getPostById successfully : ",
//       post,
//     });
//   } catch (error) {
//     console.error("🔴 Error getting post:", error);
//     res
//       .status(500)
//       .json({ error: " 🔴 An error occurred while getting the post" });
//   }
// };

//! update by Id
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ error: " 🔴 Please fill in all fields " });
    }
    const updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      { title: title, content: content, author: author },
      { new: true }
    );
    res.status(200).json({
      message: " 🟢 ~ app.post ~ updatePost successfully : ",
      updatedPost,
    });
  } catch (error) {
    console.error("🔴 Error updating post:", error);
    res
      .status(500)
      .json({ error: " 🔴 An error occurred while updating the post" });
  }
};

//! delete by Id

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: " 🟢 ~ app.post ~ deletePost successfully : ",
      deletedPost,
    });
  } catch (error) {
    console.error(" 🔴 Error deleting post:", error);
    res
      .status(500)
      .json({ error: " 🔴 An error occurred while deleting the post" });
  }
};

//! export controller
module.exports = {
  createPost,
  getAllPosts,
  // getPostById,
  updatePost,
  deletePost,
};
