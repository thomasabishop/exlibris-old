const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Date,
    required: true,
  },
  dateRead: {
    type: Date,
    required: true,
  },
})

const Books = mongoose.model("Books", bookSchema)

module.exports = Books
