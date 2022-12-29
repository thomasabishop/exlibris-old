const express = require("express")
const helmet = require("helmet")
const mongoose = require("mongoose")
const cors = require("cors")
const books = require("./routes/books.js")

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use("/api/books", books)

// Start local server
app.listen(port, () => console.log(`Listening on ${port}`))

// Connect to Mongo database

mongoose
  .connect("mongodb://127.0.0.01/exlibris")
  .then(() => console.log("Connected to DB: exlibris"))
  .catch((err) => console.error(err))
