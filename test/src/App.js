import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Book from "./Book";
import EditBook from "./EditBook";
import AddBook from "./components/AddBook";
import NotFound from "./NotFound";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';



class App extends Component {

  render() {

    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/books/:id" component={EditBook} />
            <Route path="/books" component={Book} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/books" />
            <Redirect to="/not-found" />

          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
