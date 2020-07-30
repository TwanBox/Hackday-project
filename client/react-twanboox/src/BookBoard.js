import React from 'react';
import Book from './Book';

function BookBoard(props) {
  return(
    <div className="list">
      { props.books.map((book, i) => <Book 
        key={i}
        author={book.volumeInfo.authors}
        title={book.volumeInfo.title}
        // description={book.searchInfo.textSnippet}
        pageCount={book.volumeInfo.pageCount}
        image={book.volumeInfo.imageLinks.thumbnail}
        language={book.volumeInfo.language}
        bookOrEbook={book.volumeInfo.printType}
        // ISBN={book.volumeInfo.industryIdentifiers[0].identifier}
        yearPublished={book.volumeInfo.publishedDate}
        averageRating={book.volumeInfo.averageRating}
        totalRatings={book.volumeInfo.ratingsCount}
        // buyLink={book.saleInfo.buyLink}
        // price={book.saleInfo.listPrice.amount}
      /> )}
    </div>
  )
}

export default BookBoard;
