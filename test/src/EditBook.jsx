import React, { Component } from 'react';
import Form from './components/common/form';
import Joi from "joi-browser";
import QRCode from "react-qr-code";
import { getCategories } from './services/categories';
import { getBook, saveBook } from './services/fakeapidata';


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
    if (bookId === "new"){
      this.setState({editOrNew:"new"})
      return;
    } 

    const book = getBook(bookId);
    //console.log(book);
    if (!book) return this.props.history.replace("/not-found");


    this.setState({ data: this.mapToViewModel(book) });
  }



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
        <h1>{this.state.editOrNew === "new"? "Add New": "Edit"} Book</h1>
        <QRCode value={JSON.stringify(this.state.data)} />
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
    );
  }
}

export default EditBook;