import React from "react";
import "./App.css"; // Link to your App.css

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.coverImageUrl} alt={item.title} />
          <span>{item.title}</span>
        </div>
      ))}
      <button className="checkout-button" onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
