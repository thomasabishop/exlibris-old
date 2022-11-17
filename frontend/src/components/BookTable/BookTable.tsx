import Table from "react-bootstrap/Table"
import { testData } from "./testData"
import BookTableRow from "../BookTableRow"
const BookTable = () => {
    return (
      <Table striped bordered hover size="sm">
         <thead>
            <tr>
               <th>Category</th>
               <th>Title</th>
               <th>Author</th>
               <th>Publication Date</th>
               <th>Year Read</th>
            </tr>
         </thead>
         <tbody>
            {
                testData.map((datum) => 
                    <BookTableRow book={datum} />
                )
            } 
         </tbody>
      </Table>
   )
}

export default BookTable
