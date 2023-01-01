const { Books } = require("../models")

exports.list = async (req, res) => {
  const books = await Books.find()
  res.send(books)
}

exports.create = (req, res) => {
  const book = new Books({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    publicationYear: req.body.publicationYear,
    dateRead: req.body.dateRead,
  })
  book.save()
  res.send(book)
}

// TODO: Add better error handling here, distinguish not found from other errors
exports.update = (req, res) => {
  Books.findByIdAndUpdate(req.params.id, req.body, (err, updatedEntry) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(updatedEntry)
    }
  })
}

// TODO: Add better error handling here, distinguish not found from other errors
exports.delete = (req, res) => {
  Books.findByIdAndDelete(req.params.id, (err, deletedEntry) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(deletedEntry)
    }
  })
}
