import React, { useState, useEffect } from "react";
import { fetchBooks } from "../API/index"; // Ensure this API function is correct
import BookList from "../components/BookList";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load books");
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="books-container">
      <BookList books={books} />
    </div>
  );
};

export default AllBooks;
