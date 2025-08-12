import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Clothify</h1>
          <p>Where Comfort Meets Style – Your Perfect T-shirt Destination</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Clothify was born from a simple idea – to create T-shirts that blend
            timeless comfort with modern style. We believe clothing isn’t just
            about covering yourself; it’s about expressing your personality,
            your mood, and your vibe. From our humble beginnings in a small
            design studio, we’ve grown into a brand loved by T-shirt
            enthusiasts worldwide.
          </p>
          <p>
            Every stitch, every fabric choice, and every print is thoughtfully
            crafted to ensure you don’t just wear our T-shirts – you live in
            them. Whether you’re heading out with friends, working from home, or
            enjoying a casual weekend, Clothify makes sure you look and feel
            your best.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://www.mindshaftworld.com/wp-content/uploads/2023/09/Our_Story.jpg"
            alt="Our Story"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-section reverse">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
            alt="Our Products"
          />
        </div>
        <div className="about-content">
          <h2>What We Offer</h2>
          <ul>
            <li>Premium 100% cotton & eco-friendly fabrics</li>
            <li>Trendy and timeless designs for all occasions</li>
            <li>Exclusive limited-edition collections</li>
            <li>Custom printing options for personalization</li>
            <li>Affordable prices without compromising quality</li>
          </ul>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to redefine casual wear by creating T-shirts
            that stand the test of time in both quality and design. We aim to
            make you feel confident, comfortable, and stylish in every piece you
            own.
          </p>
          <h2>Our Vision</h2>
          <p>
            We envision a world where fashion is sustainable, accessible, and
            personal. That’s why we focus on ethical sourcing, eco-friendly
            manufacturing, and designs that resonate with real people.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://stamco.in/images/mission.jpg"
            alt="Mission Vision"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality First</h3>
            <p>Every product is made to last with top-notch craftsmanship.</p>
          </div>
          <div className="value-card">
            <h3>Customer Love</h3>
            <p>
              We put our customers at the heart of everything we do – your
              happiness is our success.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>
              Using eco-friendly fabrics & ethical production to protect the
              planet.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Always pushing creative boundaries to deliver unique styles.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="about-closing">
        <h2>Join the Clothify Family</h2>
        <p>
          We’re more than just a T-shirt store – we’re a community of fashion
          lovers who believe in style with purpose. Explore our collections,
          find your vibe, and wear it with pride.
        </p>
        <button className="shop-now-btn">Shop Now</button>
      </section>
    </div>
  );
};

export default About;
