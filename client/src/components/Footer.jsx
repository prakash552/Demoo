import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* Logo & About */}
        <div className="footer-section about">
          <h2 className="footer-logo">Clothify</h2>
          <p>
            Your one-stop destination for stylish and comfortable clothing.
            Quality fabrics, latest trends, and unbeatable prices.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section subscribe">
          <h3>Subscribe</h3>
          <p>Enter your Gmail to get updates on new arrivals & offers</p>
          <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
            <input 
              type="email" 
              placeholder="Enter your Gmail" 
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Clothify | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
