const express = require("express")
const Books = require("../models/books.js")
// import Books from "../models/books.js"
// import express from "express"

const router = express.Router()

// Return all books from the database
router.get("/", async (req, res) => {
  const books = await Books.find()
  res.send(books)
})

// Add a book to the database

router.post("/", async (req, res) => {
  console.log(req)
  let book = new Books({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    publicationYear: req.body.publicationYear,
    dateRead: req.body.dateRead,
  })
  await book.save()
  res.send(book)
})

module.exports = router
