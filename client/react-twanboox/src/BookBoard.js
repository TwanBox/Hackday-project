import React from 'react';
import Book from './Book';

function BookBoard(props) {
  return(
    <div className="list">
      { props.books.map((book, i) => <Book 
        key={i}
        author={book.volumeInfo.authors}
        title={book.volumeInfo.title}
        description={book.searchInfo.textSnippet}
        pageCount={book.volumeInfo.pageCount}
        image={book.volumeInfo.imageLinks.thumbnail}
        language={book.volumeInfo.language}
        categorie={book.volumeInfo.categories}
        yearPublished={book.volumeInfo.publishedDate}
        averageRating={`${book.volumeInfo.averageRating * 20}%`}
        buyLink={book.saleInfo.buyLink}
        // price={book.saleInfo.listPrice.amount}
      /> )}
    </div>
  )
}

export default BookBoard;
