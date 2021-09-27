const { NotAuthorizedError } = require("../factory/errors")

module.exports = (req, res, next) => {
  if (!req.user) {
    throw new NotAuthorizedError()
  }
  next()
}
