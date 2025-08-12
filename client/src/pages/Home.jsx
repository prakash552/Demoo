import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import "../Styles/Home.css";
import { useCart } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonialsData from "../data/testimonialsData.js";

export default function Home() {
  const [stickySearch, setStickySearch] = useState(false);
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setStickySearch(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
     >
        <div className="overlay">
          <h1 className="hero-title">Discover Premium Fashion at Clothify</h1>
          <p className="hero-subtitle">Style that speaks. Quality that lasts.</p>
          {!stickySearch && (
            <div className="search-bar">
              <input type="text" placeholder="Search for clothes..." />
              <button>Search</button>
            </div>
          )}
        </div>
      </section>

      {/* Sticky Search */}
      {stickySearch && (
        <div className="sticky-search">
          <input type="text" placeholder="Search for clothes..." />
          <button>Search</button>
        </div>
      )}

      {/* Our Latest Collection */}
      <section className="collection-section">
        <h2 className="section-title">Our Latest Collection</h2>
        <div className="collection-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
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
          ))}
        </div>
      </section>

      {/* Animated Banners in One Row */}
<section className="banner-section">
  {/* Banner 1 - Image Left */}
  <motion.div
    className="banner"
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 80 }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"
      alt="Sale Left"
    />
    <div className="banner-text">
      <h2> Mega Sale</h2>
      <p>Up to 50% off on premium wear. Hurry, limited time only!</p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
  </motion.div>

  {/* Banner 2 - Image Right */}
  <motion.div
    className="banner banner-reverse"
    initial={{ x: 200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 80 }}
    viewport={{ once: true }}
  >
    <div className="banner-text">
      <h2>🎉 New Arrivals</h2>
      <p>Discover the latest trends in our brand new collection.</p>
      <button onClick={() => navigate("/products")}>Explore</button>
    </div>
    <img
      src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1000&auto=format&fit=crop"
      alt="Sale Right"
    />
  </motion.div>
</section>


<div className="testimonials-container">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <p className="testimonial-review">"{item.review}"</p>
              <h4 className="testimonial-name">- {item.name}</h4>
            </div>
          </SwiperSlide>
        ))};
      </Swiper>
    </div>

    </div>
  );
}
