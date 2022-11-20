import React from "react"
import UploadForm from "../components/UploadForm"
const AddBook: React.FC = () => {
   return (
      <React.Fragment>
         <h1 className="h2 pb-3 pt-1">Add book</h1>
         <UploadForm />
      </React.Fragment>
   )
}

export default AddBook
