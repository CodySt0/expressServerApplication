const addRequestTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

module.exports = addRequestTime;
