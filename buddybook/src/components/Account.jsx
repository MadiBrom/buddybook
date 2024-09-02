import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./App.css"; // Use your global CSS

const Account = () => {
  const { user, logout } = useContext(AuthContext);
  const [checkedOutBooks, setCheckedOutBooks] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch the checked out books
      fetchCheckedOutBooks(user.id);
    }
  }, [user]);

  const fetchCheckedOutBooks = async (userId) => {
    try {
      // Replace with your actual API call to fetch checked out books
      const response = await fetch(`/api/users/${userId}/checked-out-books`);
      const data = await response.json();
      setCheckedOutBooks(data);
    } catch (err) {
      console.error("Failed to fetch checked out books:", err);
    }
  };

  if (!user) {
    return <p>Please log in to view your account information.</p>;
  }

  return (
    <div className="account-page">
      <h2>My Account</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
      <h3>Checked Out Books</h3>
      {checkedOutBooks.length > 0 ? (
        <ul>
          {checkedOutBooks.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>You have no books checked out.</p>
      )}
    </div>
  );
};

export default Account;
