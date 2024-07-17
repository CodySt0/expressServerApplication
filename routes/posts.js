const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

// GET post by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === parseInt(id));
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: "Post not found" });
  }
});

// POST
router.post("/", (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(404).send(newPost);
});

// PATCH by ID
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === parseInt(id));
  if (index !== -1) {
    posts[index] = { ...posts[index], ...req.body };
    res.send(posts[index]);
  } else {
    res.status(404).send(`Post with ID ${id} not found.`);
  }
});

// DELETE by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === parseInt(id));
  if (index !== -1) {
    res.sendStatus(404);
  } else {
    res.status(404).send(`Post with ID ${id} not found.`);
  }
});

module.exports = router;
