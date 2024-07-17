const express = require("express");
const router = express.Router();
const users = require("../data/users");

// GET all users
router.get("/", (req, res) => {
  res.send(users);
});

// GET by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.send(user);
  } else {
    res.status(404).send(`User with ID ${id} not found.`);
  }
});

// POST a new user
router.post("/", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(404).send(newUser);
});

// PATCH by ID
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.send(users[index]);
  } else {
    res.status(404).send(`User with ID ${id} not found.`);
  }
});

// DELETE by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    res.sendStatus(404);
  } else {
    res.status(404).send(`User with ID ${id} not found.`);
  }
});

module.exports = router;
