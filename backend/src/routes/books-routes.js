const express = require("express")
const booksController = require("../controllers/books-controller")
const validate = require("../validators/books-validators")
const router = express.Router()

// List all documents in the books collection
router.get("/", booksController.list)

// Add a document to the books collection
router.post("/", validate.book, booksController.create)

// Update the properties of a document in the books collection
router.put("/:id", booksController.update)

// Delete a document from the books collection
router.delete("/:id", booksController.delete)

module.exports = router
