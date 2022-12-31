const Joi = require("joi")

exports.book = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    publicationYear: Joi.date(),
    dateRead: Joi.date(),
  })

  const { error } = schema.validate(req.body)
  if (error) {
    return error.details.map((joiErr) => res.status(400).send(joiErr.message))
  } else {
    next()
  }
}
