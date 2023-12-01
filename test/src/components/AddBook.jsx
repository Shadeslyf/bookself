import React from 'react'

function AddBook() {
    return (
      <div>
        <h2>Add New Books</h2>
        <form>

            <div className="mb-3">
                <label htmlFor="bookName" className="form-label">Book Name</label>
                <input type="text" className="form-control" id="bookName" aria-describedby="bookName" />
            </div>

            <div className="mb-3">
                <label htmlFor="bookisbn" className="form-label">Book ISBN no.</label>
                <input type="text" className="form-control" id="bookisbn" />
            </div>

            <label htmlFor="bookisbn" className="form-label">Book Category</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Book Category</option>
                <option value="1">Sci-fi</option>
                <option value="2">Fiction</option>
                <option value="3">Novel</option>
            </select>
            <br />

            <div className="mb-3">
                <label htmlFor="rownum" className="form-label">Row no. (where a book is placed in the self)</label>
                <input type="text" className="form-control" id="rownum" />
            </div>

            <div className="mb-3">
                <label htmlFor="bookcount" className="form-label">Book Count</label>
                <input type="number" className="form-control" id="bookcount" />
            </div>


            <div className="mb-3">
                <label htmlFor="cost" className="form-label">Book cost ( USD )</label>
                <input type="number" className="form-control" id="bookcost" />
            </div>

            <div className="mb-3">
                <label htmlFor="availability" className="form-label">Book Availability</label>
                <input type="text" className="form-control" id="availability" />
            </div>


            <label htmlFor="availibility" className="form-label">Book Availibility</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Yes</option>
                <option value="1">No</option>
            </select>
            <br />


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default AddBook;