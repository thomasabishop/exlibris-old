import express from "express"
import helmet from "helmet"
import mongoose from "mongoose"
import books from "./routes/books.js"

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(helmet())
app.use("/api/books", books)

// Start local server
app.listen(port, () => console.log(`Listening on ${port}`))

// Connect to Mongo database
mongoose
  .connect("mongodb://127.0.0.01/exlibris")
  .then(() => console.log("Connected to DB: exlibris"))
  .catch((err) => console.error(err))
