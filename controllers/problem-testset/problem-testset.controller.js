const createError = require('http-errors')

module.exports = {
  hello: async (req, res, next) => {
    try {
      const message = 'hello from assignment problem-testset'
      res.send({ message })
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.InternalServerError())
      next(error)
    }
  }
}
