import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/ProductDetail.css";
import products from "../data/products";
import { useCart } from "../context/CartContext"; // ✅ Cart context import

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ context से function लिया

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  // ✅ Buy Now Click
  const handleBuyNow = () => {
    addToCart(product);   // Cart में add
    navigate("/cart");    // Cart page पर भेजना
  };

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="product-details-wrapper">
        {/* Left Side - Image */}
        <div className="product-image-section">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Right Side - Details */}
        <div className="product-info-section">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>

          <div className="details-actions">
            <button className="wishlist-btn">♡ Add to Wishlist</button>
            <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
          </div>

          {/* Feedback */}
          <div className="feedback-section">
            <h3>Customer Feedback</h3>
            <p>{product.feedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
