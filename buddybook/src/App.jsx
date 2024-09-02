import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllBooks from "./pages/AllBooks";
import SingleBook from "./pages/SingleBook";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css"; // Link to your App.css
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/books" element={<AllBooks />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
