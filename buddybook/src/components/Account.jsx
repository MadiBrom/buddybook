// src/pages/Account.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { fetchBooks } from "../API/index";

const Account = () => {
  const { user } = useContext(AuthContext);
  const [checkedOutBooks, setCheckedOutBooks] = useState([]);

  useEffect(() => {
    // Assuming you fetch the user's checked-out books here
    const loadCheckedOutBooks = async () => {
      // Mocked checked out books for now
      const books = await fetchBooks();
      setCheckedOutBooks(books.filter((book) => book.checkedOutBy === user.id));
    };

    if (user) {
      loadCheckedOutBooks();
    }
  }, [user]);

  return (
    <div className="account-page">
      <h1>My Account</h1>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <h2>Checked Out Books:</h2>
          {checkedOutBooks.length > 0 ? (
            <ul>
              {checkedOutBooks.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          ) : (
            <p>You have no books checked out.</p>
          )}
        </>
      ) : (
        <p>You need to log in to view this page.</p>
      )}
    </div>
  );
};

export default Account;
