import React from "react";
import { Link } from "react-router-dom";
import vegetables from "../data/vegetables";
import gasBrands from "../data/gas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
  faTruck,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";

function Home({ expandedCards, toggleCard }) {
  // Show only first 3 gas brands and 6 vegetables for homepage
  const featuredGasBrands = gasBrands.slice(0, 3);
  const featuredVegetables = vegetables.slice(0, 6);

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Fresh Outlet</h1>
          <p className="hero-description">
            Your one-stop destination for fresh vegetables and reliable gas
            cylinders. We bring quality products directly to your doorstep with
            fast delivery and competitive prices.
          </p>
          <div className="hero-stats">
            <div className="home-stat">
              <FontAwesomeIcon icon={faStar} />
              <span>4.9/5 Rating</span>
            </div>
            <div className="home-stat">
              <FontAwesomeIcon icon={faTruck} />
              <span>Fast Delivery</span>
            </div>
            <div className="home-stat">
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gas Brands */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Gas Brands</h2>
          <p className="section-subtitle">
            Reliable gas cylinders from trusted brands for your cooking needs
          </p>
        </div>

        <div className="home-gas-grid">
          {featuredGasBrands.map((brand, index) => {
            const isExpanded = expandedCards.includes(index);
            const visibleCylinders = isExpanded
              ? brand.cylinders
              : brand.cylinders.slice(0, 2);

            return (
              <div key={index} className="home-gas-card">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="home-gas-image"
                />
                <h3 className="home-brand-name">{brand.name}</h3>
                <p className="home-availability">{brand.availability}</p>

                <ul className="home-cylinder-list">
                  {visibleCylinders.map((cylinder, idx) => (
                    <li key={idx} className="home-cylinder-item">
                      <span>{cylinder.size}</span>
                      <strong>${cylinder.priceUSD.toFixed(2)}</strong>
                    </li>
                  ))}
                </ul>

                {brand.cylinders.length > 2 && (
                  <button
                    className="home-see-more-btn"
                    onClick={() => toggleCard(index)}
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="explore-section">
          <Link to="/about#gasabout" className="explore-btn">
            <span>Explore All Gas Brands</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* Featured Vegetables */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Fresh Vegetables</h2>
          <p className="section-subtitle">
            Farm-fresh vegetables delivered straight from local farmers to your
            kitchen
          </p>
        </div>

        <div className="home-vegetable-grid">
          {featuredVegetables.map((veg, id) => (
            <div className="home-veg-card" key={id}>
              <img src={veg.image} alt={veg.name} className="home-veg-image" />
              <h3 className="home-veg-name">{veg.name}</h3>
              <p className="home-veg-desc">{veg.desc}</p>
              <div className="home-veg-meta">
                <span className="home-veg-price">{veg.price}</span>
                <span className="home-veg-stock">{veg.stock}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-section">
          <Link to="/about#vegabout" className="explore-btn">
            <span>Explore All Vegetables</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Fresh Outlet?</h2>
          <p className="section-subtitle">
            We're committed to providing the best service and quality products
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <FontAwesomeIcon icon={faTruck} className="feature-icon" />
            <h3>Fast & Reliable Delivery</h3>
            <p>Get your orders delivered within 2-4 hours in the city</p>
          </div>

          <div className="feature-card">
            <FontAwesomeIcon icon={faStar} className="feature-icon" />
            <h3>Competitive Pricing</h3>
            <p>Best prices in town with regular discounts and offers</p>
          </div>

          <div className="feature-card">
            <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
            <h3>Quality Assurance</h3>
            <p>All products are carefully inspected before delivery</p>
          </div>
        </div>

        <div className="additional-features">
          <ul className="features-list">
            <li>Customer satisfaction guarantee</li>
            <li>Support local farmers and businesses</li>
            <li>24/7 customer support</li>
            <li>Secure payment options</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
