import React from "react";
import { useParams } from "react-router-dom";

const SingleBook = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found</p>;

  return (
    <div className="book-container">
      <div className="bookcard">
        <img src={book.coverImageUrl} alt={book.title} />
        <h1 id="titles">{book.title}</h1>
        <p id="info">{book.author}</p>
        <div id="describe">
          <p id="description">{book.description}</p>
        </div>
        <button className="add-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleBook;
