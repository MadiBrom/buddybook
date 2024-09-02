import React, { useState, useEffect } from "react";
import { fetchBooks, fetchSingleBook } from "../API"; // Ensure the path is correct
import SingleBookModal from "../components/SingleBookModal"; // Only import once

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks()
      .then((fetchedBooks) => setBooks(fetchedBooks))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleBookClick = async (bookId) => {
    try {
      const bookDetails = await fetchSingleBook(bookId);
      setSelectedBook(bookDetails);
    } catch (error) {
      console.error("Error fetching book details:", error);
      setError("Failed to fetch book details");
    }
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="books-container">
      <h1>Pim's Library</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-card"
            onClick={() => handleBookClick(book.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={book.coverimage}
              alt={`Cover of ${book.title}`}
              className="book-image"
            />
            <h3>{book.title}</h3>
            <h5>by {book.author}</h5>
          </div>
        ))}
      </div>
      {selectedBook && (
        <SingleBookModal book={selectedBook} onClose={closeModal} />
      )}
    </div>
  );
};

export default AllBooks;
