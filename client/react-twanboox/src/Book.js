import React from 'react';
import './Book.css';

function Book(props) {
  return(
    <div className="book-container">
      <img src={props.image} alt="book thumbnail"></img>
      <div className="info">
        <h3 className="author">{props.author}</h3>
        <h2 className="title">{props.title}</h2>
        <span>{props.language} | {props.bookOrEbook} | {props.yearPublished} | {props.pageCount} pages</span>
        <button>Add to my bookshelf</button>
      </div>
      <hr></hr>
    </div>
    
  )
}

export default Book;
