import React from "react"
import Table from "react-bootstrap/Table"
import { testData } from "../../data/testData"
import BookTableRow from "../BookTableRow"

const BookTable: React.FC = () => {
   return (
      <Table striped bordered hover size="sm">
         <thead>
            <tr>
               <th>Category</th>
               <th>Title</th>
               <th>Author</th>
               <th>Published</th>
               <th>Read</th>
            </tr>
         </thead>
         <tbody>
            {testData.map((datum) => (
               <BookTableRow book={datum} />
            ))}
         </tbody>
      </Table>
   )
}

export default BookTable
