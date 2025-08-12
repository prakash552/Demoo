import React, { useState, useEffect } from "react";
import productsData from "../data/products";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Products.css";

export default function Products() {
  const [filters, setFilters] = useState({
    category: "all",
    price: 10000,
    sort: "none",
    size: "all",
    color: "all",
  });

  const [searchTerm, setSearchTerm] = useState(""); // search term from URL
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart, addToWishlist } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Get search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    setSearchTerm(search.toLowerCase());
  }, [location.search]);

  // Filtering logic with search term
  const filteredProducts = productsData
    .filter((p) => (filters.category === "all" ? true : p.category === filters.category))
    .filter((p) => (filters.size === "all" ? true : p.size.includes(filters.size)))
    .filter((p) => (filters.color === "all" ? true : p.color === filters.color))
    .filter((p) => p.price <= filters.price)
    .filter((p) =>
      searchTerm ? p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) : true
    )
    .sort((a, b) => {
      if (filters.sort === "low-high") return a.price - b.price;
      if (filters.sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-page">
      {/* Mobile Filter Toggle Button */}
      <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? "✕ Close Filters" : "☰ Filters"}
      </button>

      {/* Filter Panel */}
      <aside className={`filter-panel ${showFilters ? "open" : ""}`}>
        <h3>Filters</h3>

        {/* Category Filter */}
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="all">All</option>
          <option value="tshirt">T-Shirts</option>
          <option value="jacket">Jackets</option>
          <option value="jeans">Jeans</option>
          <option value="dress">Dresses</option>
        </select>

        {/* Size Filter */}
        <label>Size</label>
        <select
          value={filters.size}
          onChange={(e) => setFilters({ ...filters, size: e.target.value })}
        >
          <option value="all">All</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">XL</option>
        </select>

        {/* Color Filter */}
        <label>Color</label>
        <select
          value={filters.color}
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
        >
          <option value="all">All</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>

        {/* Price Filter */}
        <label>Max Price: ₹{filters.price}</label>
        <input
          type="range"
          min="500"
          max="10000"
          step="500"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: parseInt(e.target.value) })}
        />

        {/* Sort Filter */}
        <label>Sort By</label>
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="none">None</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </aside>

      {/* Products Grid */}
      <section className="products-grid">
        <h2 className="section-title">
          {searchTerm ? `Search results for "${searchTerm}"` : "Our Latest Collection"}
        </h2>

        <div className="collection-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  type: "spring",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className="product-main"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <img src={product.img} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="product-price">₹{product.price}</p>
                  <p className="product-desc">{product.description}</p>
                </div>

                <div className="product-actions">
                  <button
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToWishlist(product);
                      alert(`${product.name} added to wishlist!`);
                    }}
                  >
                    ♡ Wishlist
                  </button>
                  <button
                    className="buy-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      navigate("/cart");
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

