import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Link to your App.css

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/books">All Books</Link>
        <Link to="/account">My Account</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <button>Logout</button> {/* Adjust based on user authentication status */}
    </nav>
  );
};

export default NavBar;
