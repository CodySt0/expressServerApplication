const express = require("express");
const app = express();
const port = 3000;

// Custom Middleware 1: Request Logger
const requestLogger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

// Custom Middleware 2: Add Request Time
const addRequestTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

// Use the custom middleware
app.use(requestLogger);
app.use(addRequestTime);

// Define a simple route
app.get("/", (req, res) => {
  res.send(`Hello, World! Request received at: ${req.requestTime}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
