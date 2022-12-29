const { Books } = require("../models")

exports.list = async (req, res) => {
  const books = await Books.find()
  res.send(books)
}
