import React from "react";

const BookList = ({ books }) => {
  return (
    <div className="books-container">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.coverImageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <h5>{book.author}</h5>
        </div>
      ))}
    </div>
  );
};

export default BookList;
