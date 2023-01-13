import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./UploadForm.scss"
import { bookCategories } from "../../data/testData"
import { useForm, SubmitHandler } from "react-hook-form"
import IBookEntry from "../../types/IBookBook"
import ToastMessage from "../ToastMessage"

const UploadForm: React.FC = () => {
   const [loading, setLoading] = useState<boolean>(false)
   const [showToast, setShowToast] = useState<boolean>(false)

   const bookCategoryIsValid = (selection: string): boolean => {
      return bookCategories.some((x) => x.category === selection)
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IBookEntry>()

   const onSubmit: SubmitHandler<IBookEntry> = (data) => {
      const submission = () => {
         setLoading(false)
         setShowToast(true)
         console.log(data)
      }

      setLoading(true)
      setTimeout(submission, 2000)
   }

   return (
      <Form className="UploadForm" onSubmit={handleSubmit(onSubmit)} noValidate>
         <div className="mb-3 form-group">
            <label className="form-label">Book title</label>
            <input
               {...register("title", { required: true })}
               name="title"
               type="text"
               className={`form-control ${errors.title ? "invalid" : ""}`}
               placeholder="Wuthering Heights"
            />

            {errors.title && (
               <p className="UploadForm--feedback">Required field</p>
            )}
         </div>

         <div className="mb-3 form-group">
            <label className="form-label">Author</label>
            <input
               {...register("author", { required: true })}
               name="author"
               type="text"
               className={`form-control ${errors.title ? "invalid" : ""}`}
               placeholder="Emily Bronte"
               required
            />
            {errors.author && (
               <p className="UploadForm--feedback">Required field</p>
            )}
         </div>

         <div className="mb-3 form-group">
            <label className="form-label">Category</label>
            <select
               {...register("category", {
                  required: true,
                  validate: (v) => bookCategoryIsValid(v),
               })}
               className="form-select"
               aria-label="Default select example"
            >
               <option selected disabled>
                  Choose category
               </option>
               {bookCategories.map((category, i) => (
                  <option key={i} value={category.category}>
                     {category.category}
                  </option>
               ))}
            </select>
            {errors.category?.type === "required" && (
               <p className="UploadForm--feedback">Required field</p>
            )}
            {errors.category?.type === "validate" && (
               <p className="UploadForm--feedback">
                  Please select a category or create a new one.
               </p>
            )}
         </div>

         <div className="mb-3 form-group">
            <label className="form-label">Publication year</label>
            <input
               {...register("pubDate", {
                  required: true,
                  maxLength: 4,
                  minLength: 4,
                  pattern: /[0-9]{4}/,
               })}
               name="pubDate"
               type="text"
               className={`form-control ${errors.pubDate ? "invalid" : ""}`}
               placeholder="1847"
            />
            {errors.pubDate?.type === "required" && (
               <p className="UploadForm--feedback">Required field</p>
            )}
            {errors.pubDate?.type === "pattern" && (
               <p className="UploadForm--feedback">
                  Value must be 4-digit year: <em>YYYY</em>
               </p>
            )}
            {errors.pubDate?.type === "minLength" && (
               <p className="UploadForm--feedback">
                  Value must be 4-digit year: <em>YYYY</em>
               </p>
            )}
            {errors.pubDate?.type === "maxLength" && (
               <p className="UploadForm--feedback">
                  Value must be 4-digit year: <em>YYYY</em>
               </p>
            )}
         </div>

         <div className="mb-3 form-group">
            <label className="form-label">Reading date</label>
            <input
               {...register("readDate", {
                  required: true,
               })}
               name="readDate"
               type="date"
               className={`form-control ${errors.readDate ? "invalid" : ""}`}
            />
            {errors.readDate?.type === "required" && (
               <p className="UploadForm--feedback">Required field</p>
            )}
         </div>

         {loading ? (
            <Button className="btn btn-dark" variant="primary" disabled>
               <span
                  className="spinner-border spinner-border-sm mr-3"
                  style={{ marginRight: "0.5rem" }}
                  role="status"
                  aria-hidden="true"
               ></span>
               Add book
            </Button>
         ) : (
            <Button type="submit" className="btn btn-dark" variant="primary">
               Add book
            </Button>
         )}

         <ToastMessage
            message="Book added to index"
            showToast={showToast}
            setShowToast={setShowToast}
         />
      </Form>
   )
}

export default UploadForm
