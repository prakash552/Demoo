import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer"
import Contact from "./pages/Contact";
import About from "./pages/About"

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/about" element= {<About />} />
        </Routes>
      </div>
<Footer/>
    </Router>
  );
}
