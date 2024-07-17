const express = require("express");
const app = express();
const port = 5003;

// Import middleware
const requestLogger = require("./middleware/requestLogger");
const addRequestTime = require("./middleware/addRequestTime");

// Middleware
app.use(express.json());
app.use(addRequestTime);

// Import routes
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

// Use routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// Error route
app.get("/error", (req, res, next) => {
  const err = new Error("Error.");
  next(err);
});

// Error Middleware
const errorHandler = (err, req, res, next) => {
  //   console.error(err.stack);
  res.status(500).send(`Something went wrong 😅 ${err.message}`);
};

// Using the error middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
