import React, { Component } from "react";
import { Link } from "react-router-dom";
import getBooks from './fakeapidata.js';

class Book extends Component {
    state = {
        books: [],
        searchQuery: ""

    }

    componentDidMount() {
        this.setState({ books: getBooks() })
    }

    handelSearch = (e) => {
        this.setState({ searchQuery: e.currentTarget.value })
    }

    handelDeleteBook = (book) => {

        const books = this.state.books.filter(b => b._id !== book._id);
        this.setState({ books });
    }

    render() {
        const { books: allBooks, searchQuery } = this.state;
        let filtered = allBooks;


        if (searchQuery) {
            let search = searchQuery.toLowerCase();

            filtered = allBooks.filter(b =>
                b.name.toLowerCase().includes(search) ||
                b.isbn.replace(/-/g, '').includes(search.replace(/-/g, '')));
        }

        return (
            <div>
                <h1 className="pt-5 pd-2  ">Your BookSelf App</h1>
                <br />
                <div className="mb-3">
                    <label htmlFor="booksearch" className="form-label px-2">Seach </label>
                    <input type="text" placeholder="ISBN no or Book Name" onChange={(e) => this.handelSearch(e)} />
                </div>
                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">ISBN</th>
                            <th scope="col">Category</th>
                            <th scope="col">Row</th>
                            <th scope="col">Count</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Availability</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(b => (
                            <tr key={b._id}>
                                <td><Link to={`/book/${b._id}`} >
                                    {b.name}
                                </Link>

                                </td>
                                <td>{b.isbn}</td>
                                <td>{b.category}</td>
                                <td>{b.row}</td>
                                <td>{b.count}</td>
                                <td>$ {b.cost}</td>
                                <td>{b.availability ? 'Yes' : 'No'}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => this.handelDeleteBook(b)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table> </div>
        );
    }
}

export default Book;