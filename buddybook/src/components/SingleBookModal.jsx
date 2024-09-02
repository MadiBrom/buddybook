import React from "react";

const SingleBookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{book.title}</h2>
        <img src={book.coverimage} alt={book.title} className="book-image" />
        <p>{book.description}</p>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Published:</strong> {book.publishedDate}
        </p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default SingleBookModal;
