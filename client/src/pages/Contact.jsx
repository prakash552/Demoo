import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you — your style matters to us!</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-container">
        {/* Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>123 Fashion Street, Mumbai, India</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@clothify.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
