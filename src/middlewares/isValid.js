const validator = require("express-validator")
const { RequestValidationError } = require("../factory/errors")

module.exports = (req, res, next) => {
  const errors = validator.validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }
  next()
}
