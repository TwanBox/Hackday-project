import React, { Component } from 'react';
import Searchbar from './Searchbar';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchValue :''
    }
  }

  searchBook = (event) => {
    event.preventDefault(); 
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchValue}`)
    .then(res => res.json())
    .then(results => console.log(results));
  }

  getSearchValue = (event) => {
    this.setState({ searchValue : event.target.value })
  }

  render() {
    return (
      <div>
        <Searchbar getSearchValue={ this.getSearchValue } searchBook={this.searchBook}/>
      </div>
    )
  }

}

export default Books;