import React from "react"

const BookTableRow: React.FC<IProps> = ({ book }: IProps) => {
   return (
      <tr>
         <td>{book.category}</td>
         <td>{book.title}</td>
         <td>{book.author}</td>
         <td>{book.pubDate}</td>
         <td>{book.yearRead}</td>
      </tr>
   )
}

interface IProps {
   book: {
      category: string
      title: string
      author: string
      pubDate: string
      yearRead: string
   }
}

export default BookTableRow
