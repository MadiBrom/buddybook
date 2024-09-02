// src/pages/SingleBook.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../API/index";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const loadBook = async () => {
      const fetchedBook = await fetchSingleBook(id);
      setBook(fetchedBook);
    };

    loadBook();
  }, [id]);

  return (
    <div className="book-details">
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <button>Add to Cart</button>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default SingleBook;
