const { Books } = require("../models")

exports.list = async (req, res) => {
  const books = await Books.find()
  res.send(books)
}

exports.create = async (req, res) => {
  let book = new Books({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    publicationYear: req.body.publicationYear,
    dateRead: req.body.dateRead,
  })
  await book.save()
  res.send(book)
}
