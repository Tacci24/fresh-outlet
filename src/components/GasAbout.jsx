import React from "react";
import gasBrands from "../data/gas";
import "./GasAbout.css";

function GasAbout({ expandedCards, toggleCard }) {
  return (
    <section className="gas-about">
      <div className="gas-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="gas-title">Premium LPG Gas Solutions</h2>
          <p className="gas-subtitle">
            Clean, safe, and reliable energy delivered to your doorstep
          </p>
        </div>

        {/* Introductory Content */}
        <div className="gas-intro">
          <div className="intro-content">
            <div className="intro-card">
              <div className="intro-icon">🔥</div>
              <h3>Clean Energy</h3>
              <p>
                We deliver clean LPG with safety and convenience. Trusted by
                many households for consistent, efficient cooking solutions.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>
                Our gas is sourced from reputable suppliers with regular
                cylinder inspections, ensuring you get the best quality and
                safety standards.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>
                Fast and reliable delivery ensures you never run out when you
                need it most. Perfect for homes and small businesses alike.
              </p>
            </div>
          </div>

          <div className="service-promise">
            <h3>Our Service Promise</h3>
            <p>
              From small household cylinders to large commercial ones, we offer
              various sizes to suit your needs. Our supply is affordable,
              reliable, and backed by our commitment to quality and safety.
            </p>
            <div className="promise-stats">
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Availability</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Safety Tested</span>
              </div>
              <div className="stat">
                <span className="stat-number">Fast</span>
                <span className="stat-label">Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gas Brand Showcase */}
        <div className="gas-showcase">
          <h3 className="showcase-title">Available Gas Brands</h3>

          {/* Gas Brand Cards */}
          <div className="gas-grid">
            {gasBrands.map((brand, index) => {
              const { name, image, availability, cylinders } = brand;
              const isExpanded = expandedCards.includes(index);
              const visibleCylinders = isExpanded
                ? cylinders
                : cylinders.slice(0, 2);

              return (
                <article key={name} className="gas-card">
                  {/* Brand Image */}
                  <div className="gas-image-wrapper">
                    <img src={image} alt={name} className="gas-image" />
                    <div className="gas-overlay">
                      <span className="quick-view">View Details</span>
                    </div>
                  </div>

                  {/* Brand Info */}
                  <div className="gas-content">
                    <h4 className="brand-name">{name}</h4>
                    <p className="availability">
                      <span className="availability-badge">{availability}</span>
                    </p>

                    {/* Cylinder List */}
                    <div className="cylinder-section">
                      <h5 className="cylinder-title">Available Sizes</h5>
                      <ul className="cylinder-list">
                        {visibleCylinders.map(({ size, priceUSD }, idx) => (
                          <li key={idx} className="cylinder-item">
                            <div className="cylinder-info">
                              <span className="cylinder-size">{size}</span>
                              <span className="cylinder-price">
                                ${priceUSD.toFixed(2)}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="gas-actions">
                      <button className="order-btn">Order Now</button>
                      {cylinders.length > 2 && (
                        <button
                          className="see-more-btn"
                          onClick={() => toggleCard(index)}
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="availability-indicator">
                    <span className="available-badge">In Stock</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="gas-benefits">
          <h3>Why Choose Our LPG Service?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <h4>Efficient Burning</h4>
              <p>
                Clean combustion with maximum heat output for all your cooking
                needs
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h4>Cost Effective</h4>
              <p>
                Competitive pricing with transparent costs and no hidden charges
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔧</span>
              <h4>Easy Installation</h4>
              <p>
                Professional setup and maintenance services for your convenience
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📞</span>
              <h4>24/7 Support</h4>
              <p>
                Round-the-clock customer service for all your gas-related
                queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GasAbout;
