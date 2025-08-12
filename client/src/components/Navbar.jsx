import { Link, NavLink, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Import CartContext

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const { cart, wishlist } = useCart();  // Get cart and wishlist arrays

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change (optional but better UX)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`main-navbar ${
        isHome ? (isScrolled ? "scrolled" : "transparent") : "scrolled"
      }`}
    >
      <div className="nav-logo">
        <Link to="/">Clothify</Link>
      </div>

      {/* Cart and Wishlist badges for mobile — fixed near menu icon */}
      <Link to="/wishlist" className="badge-mobile wishlist-badge" title="Wishlist">
        ♡ {wishlist.length}
      </Link>
      <Link to="/cart" className="badge-mobile cart-badge" title="Cart">
        🛒 {cart.length}
      </Link>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Products
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Contact
        </NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Wishlist <span className="count-badge">{wishlist.length}</span>
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Cart <span className="count-badge">{cart.length}</span>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active-link login-btn" : "login-btn")}
        >
          Login
        </NavLink>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
