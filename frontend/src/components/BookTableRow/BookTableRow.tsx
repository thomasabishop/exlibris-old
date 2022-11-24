import React from "react"
import IBookEntry from "../../types/IBookEntry"
const BookTableRow: React.FC<IBookEntry> = ({ ...book }: IBookEntry) => {
   return (
      <tr>
         <td>{book.category}</td>
         <td>{book.title}</td>
         <td>{book.author}</td>
         <td>{book.pubDate}</td>
         <td>{book.readDate}</td>
      </tr>
   )
}

export default BookTableRow
