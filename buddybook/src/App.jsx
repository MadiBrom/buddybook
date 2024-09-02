// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import SingleBook from "./pages/SingleBook";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account"; // Updated path
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} /> {/* Corrected path */}
          <Route path="/" element={<AllBooks />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
