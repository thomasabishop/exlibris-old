const express = require("express")
const booksController = require("../controllers/books-controller")
const validate = require("../validators/books-validators")
const router = express.Router()

// List all books in the database
router.get("/", booksController.list)

// Add a book to the database
router.post("/", validate.book, booksController.create)

module.exports = router
