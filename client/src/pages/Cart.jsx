import React from "react";
import { useCart } from "../context/CartContext";
import "../Styles/Cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const shippingCharge = 50;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + (cart.length > 0 ? shippingCharge : 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {/* Left side - Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="price">₹{item.price}</p>

                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Summary */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: <span>₹{subtotal}</span></p>
            <p>Shipping: <span>₹{cart.length > 0 ? shippingCharge : 0}</span></p>
            <hr />
            <p className="total">Total: <span>₹{total}</span></p>

            {/* Payment Methods */}
            <div className="payment-methods">
              <h4>Payment Method</h4>
              <label>
                <input type="radio" name="payment" defaultChecked /> Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" /> UPI / Net Banking
              </label>
              
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
