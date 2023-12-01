import React, { Component} from 'react';
import Form from './components/common/form';
import Joi from "joi-browser";
import QRCode from "react-qr-code";
import { getCategories } from './services/categories';
import { getBook, saveBook } from './services/fakeapidata';
import { Link } from 'react-router-dom';


class EditBook extends Form {
  state = {
    data: {
      name: "",
      isbn: "",
      row: "",
      count: "",
      cost: "",
      availability: "",
      category: "",
    },
    editOrNew:"",
    errors: {}

  }

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Name"),
    category: Joi.string()
      .required()
      .label("Category"),
    isbn: Joi.string()
      .required()
      .label("ISBN"),
    row: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Where a book is placed on the self"),
    count: Joi.number()
      .required()
      .min(0)
      .max(50)
      .label("Count"),
    cost: Joi.number()
      .required()
      .min(1)
      .max(1000)
      .label("Cost"),
    availability: Joi.string()
      .required()
      .label("Availability")
  };


  componentDidMount() {


    // const category = getCategories();
    // this.setState({ category });


    const bookId = this.props.match.params.id;
    this.setState({editOrNew:bookId})
    if (bookId === "new"){
     
      return;
    } 

    const book = getBook(bookId);
    //console.log(book);
    if (!book) return this.props.history.replace("/not-found");


    this.setState({ data: this.mapToViewModel(book) });
    
  }

 downloadQRCode = () => {
    const svgString = document.querySelector('svg').outerHTML; // Get the SVG code
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
  
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngDataUrl = canvas.toDataURL('image/png');
        
        const link = document.createElement('a');
        link.href = pngDataUrl;
        link.download = `bookQrCode.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  
      img.src = event.target.result;
    };
  
    reader.readAsDataURL(blob);
  };

  mapToViewModel(book) {
    return {
      _id: book._id,
      category: book.category,
      name: book.name,
      isbn: book.isbn,
      row: book.row,
      count: book.count,
      cost: book.cost,
      availability: book.availability,
    };
  }

  

  doSubmit = () => {
    saveBook(this.state.data);

    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <h1 className='py-4'>{this.state.editOrNew === "new"? "Add New": "Edit"} Book</h1>

        <div className='container'>
          <div className='row'>

          <div className='col-sm-12 col-md-8'>
            <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("category", "Category")}
          {this.renderInput("isbn", "ISBN")}
          {this.renderInput("row", "Row : Where a book is placed on the self?")}
          {this.renderInput("count", "Count")}
          {this.renderInput("cost", "Cost: USD")}
          {this.renderInput("availability", "Availability")}
          {this.renderButton("Save")}
        </form>
            </div>
            <div className='col-sm-12 col-md-4 my-4'>
              {this.state.editOrNew!=="new"? 
             ( <div>
              {/* <QRCode value={JSON.stringify(this.state.data)} /> */}
              <QRCode value={"https://bookself-mu.vercel.app/books/"+ this.state.data._id}/>
              <br />
              <button className='my-2 btn btn-primary btn-sm' onClick={this.downloadQRCode}>Download QR Code</button>
              </div>)

              :null}
              
            </div>
          
          </div>
        </div>
    
      
      </div>
    );
  }
}

export default EditBook;