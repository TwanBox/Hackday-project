import React from 'react';
import './Book.css';


function Book(props) {
  return(
    <div className="book-container">
      <img src={props.image} alt="book thumbnail"></img>
      <div className="info">
        <h3 className="author">by {props.author}</h3>
        <h2 className="title">{props.title}</h2>
        <span>{props.language} | {props.categorie} | {props.yearPublished} | {props.pageCount} pages</span><br></br>
        {/* <p className="description">{props.description.substr(0, 70)}...</p> */}
        <div class="stars-outer">
          <div class="stars-inner" style={{width: props.averageRating}}></div>
        </div>
        <div className="cart"> 
          <button href={props.buyLink} class="btn-small btn-flat gray lighten-5"><i class="material-icons">add local_grocery_store</i></button>
          </div>
          <button class="btn waves-effect waves-light blue" type="button" name="addToShelf">
        <i class="material-icons right">queue</i> Add to my Shelf
        </button>
        </div>
      <hr></hr>
    </div>
    
  )
}

export default Book;
