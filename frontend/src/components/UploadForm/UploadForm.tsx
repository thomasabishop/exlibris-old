import React from "react"
import { Button, Form } from "react-bootstrap"
import "./UploadForm.scss"
import { bookCategories } from "../../data/testData"
import { useForm, SubmitHandler } from "react-hook-form"
import IBookEntry from "../../types/IBookEntry"

const UploadForm: React.FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IBookEntry>()

   const onSubmit: SubmitHandler<IBookEntry> = (data) => console.log(data)

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
               className="form-control"
               placeholder="Emily Bronte"
               required
            />
         </div>

         <div className="mb-3 form-group">
            <label className="form-label">Category</label>
            <select className="form-select" aria-label="Default select example">
               {bookCategories.map((category, i) => (
                  <option key={i} value={category.category}>
                     {category.category}
                  </option>
               ))}
            </select>
         </div>

         <div className="mb-3 form-group">
            <label className="form-label">Publication date</label>
            <input
               {...register("pubDate", { required: true })}
               name="pubDate"
               type="text"
               className="form-control"
               placeholder="1847"
            />
         </div>
         <div className="mb-3 form-group">
            <label className="form-label">Year of reading</label>
            <input
               {...register("readDate", { required: true })}
               name="readDate"
               type="text"
               className="form-control"
               placeholder="2017"
            />
         </div>
         <Button type="submit" className="btn btn-dark" variant="primary">
            Add book
         </Button>
      </Form>
   )
}

export default UploadForm
