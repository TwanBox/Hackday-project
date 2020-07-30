import React, { Component } from 'react';
import Searchbar from './Searchbar';
import BookBoard from './BookBoard';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchValue: ''
    }
  }

  getSearchValue = (event) => {
    console.log();
    this.setState({ searchValue : event.target.value })
  }

  searchBook = (event) => {
    event.preventDefault();  
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchValue}&maxResults=40`)
    .then(res => res.json())
    .then(results => {
      console.log(results)
      this.setState({ books: [...results.items], totalItems: results.totalItems })
    })
    .then(qwe => console.log(this.state.totalItems));
  }


  render() {
    return (
      <div>
        <Searchbar getSearchValue={ this.getSearchValue } searchBook={this.searchBook}/>
        <BookBoard books={this.state.books}/>
      </div>
    )
  }

}

export default Books;