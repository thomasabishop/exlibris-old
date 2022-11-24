import React from "react"
import UploadForm from "../components/UploadForm"
const AddBook: React.FC = () => {
   return (
      <React.Fragment>
         <h1 className="h2  pt-1">Add book</h1>
         <p className="lead">
            Enter publication details manually or search for book
         </p>
         <UploadForm />
      </React.Fragment>
   )
}

export default AddBook
