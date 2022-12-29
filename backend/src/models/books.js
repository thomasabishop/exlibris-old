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
    type: String,
    required: true,
  },
  dateRead: {
    type: String,
    required: true,
  },
})

const Books = mongoose.model("Books", bookSchema)

// export default Books
module.exports = Books
