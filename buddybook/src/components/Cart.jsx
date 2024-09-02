import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.coverImageUrl} alt={item.title} />
          <span>{item.title}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
