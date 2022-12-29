const express = require("express")
const booksController = require("../controllers/books-controller")
const { Books } = require("../models")

const router = express.Router()

// List all books in the database
router.get("/", booksController.list)

// Add a book to the database

// router.post("/", async (req, res) => {
//   console.log(req)
//   let book = new Books({
//     title: req.body.title,
//     author: req.body.author,
//     genre: req.body.genre,
//     publicationYear: req.body.publicationYear,
//     dateRead: req.body.dateRead,
//   })
//   await book.save()
//   res.send(book)
// })

module.exports = router
