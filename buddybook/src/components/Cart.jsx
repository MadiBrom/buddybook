import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { checkoutBooks } from "../API/index"; // Assuming you have this function

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      await checkoutBooks(cart);
      clearCart(); // Clear the cart after successful checkout
      alert("Checkout successful!");
    } catch (error) {
      alert("Checkout failed. Please try again.");
    }
  };

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.coverImageUrl} alt={item.title} />
          <span>{item.title}</span>
          <button
            className="remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
