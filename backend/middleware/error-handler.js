const CustomError = require('../errors/custom-error');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({status: 'error', msg: err.message});
  }
  return res.status(500).json('Something went wrong');
};

module.exports = errorHandler;
