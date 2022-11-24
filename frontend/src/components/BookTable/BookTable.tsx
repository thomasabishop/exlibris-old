import React from "react"
import Table from "react-bootstrap/Table"
import { testData } from "../../data/testData"
import BookTableRow from "../BookTableRow"

const BookTable: React.FC = () => {
   return (
      <Table striped bordered>
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
            {testData.map((bookEntry, index) => (
               <BookTableRow key={index} {...bookEntry} />
            ))}
         </tbody>
      </Table>
   )
}

export default BookTable
