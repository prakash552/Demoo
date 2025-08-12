import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../Styles/Wishlist.css";

export default function Wishlist() {
  const navigate = useNavigate();
  const { wishlist, addToCart, removeFromWishlist } = useCart();

  const relatedProducts = products.slice(0, 3);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="empty-msg">
          Your wishlist is empty. Start adding your favorites!
        </p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img
                src={item.img}
                alt={item.name}
                onClick={() => navigate(`/products/${item.id}`)}
                className="wishlist-img"
              />
              <div className="wishlist-info">
                <h3
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="wishlist-name"
                >
                  {item.name}
                </h3>
                <p className="price">₹{item.price}</p>
                <div className="actions">
                  <button
                    className="btn add-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Related Products Section */}
      <section className="related-products">
        <h2>Related Products You Might Like</h2>
        <div className="related-grid">
          {relatedProducts.map((prod) => (
            <div
              key={prod.id}
              className="related-card"
              onClick={() => navigate(`/products/${prod.id}`)}
            >
              <img src={prod.img} alt={prod.name} />
              <h4>{prod.name}</h4>
              <p className="price">₹{prod.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
