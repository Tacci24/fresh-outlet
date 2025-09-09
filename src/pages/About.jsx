import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/About.css";
import GasAbout from "../components/GasAbout";
import VegAbout from "../components/VegAbout";

function About({ expandedCards, toggleCard }) {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About Fresh Outlet</h1>
        <p className="about-subtitle">
          Your trusted partner for fresh vegetables and clean cooking gas
        </p>

        <div className="about-grid">
          <div className="about-card vision-card">
            <div className="card-icon">🎯</div>
            <h2>Our Vision</h2>
            <p>
              To revolutionize the way communities access fresh produce and
              cooking gas, becoming the most trusted and convenient delivery
              service that connects local farms to every household while
              promoting sustainable living.
            </p>
          </div>

          <div className="about-card mission-card">
            <div className="card-icon">🚀</div>
            <h2>Our Mission</h2>
            <p>
              We are committed to delivering farm-fresh vegetables and safe
              cooking gas directly to your doorstep, ensuring quality, safety,
              and convenience while supporting local farmers and promoting
              healthy lifestyles in our communities.
            </p>
          </div>

          <div className="about-card goals-card">
            <div className="card-icon">📋</div>
            <h2>Strategic Goals</h2>
            <ul>
              <li>Expand our network to serve 50+ communities by 2025</li>
              <li>Achieve same-day delivery across all service areas</li>
              <li>Partner with 100+ local farmers for direct sourcing</li>
              <li>Implement 100% eco-friendly packaging solutions</li>
              <li>Launch mobile app for seamless ordering experience</li>
            </ul>
          </div>

          <div className="about-card values-card">
            <div className="card-icon">💎</div>
            <h2>Core Values</h2>
            <div className="values-list">
              <div className="value-item">
                <span className="value-label">Excellence:</span>
                <span>Premium quality in every product and service</span>
              </div>
              <div className="value-item">
                <span className="value-label">Trust:</span>
                <span>Building lasting relationships through reliability</span>
              </div>
              <div className="value-item">
                <span className="value-label">Innovation:</span>
                <span>Embracing technology for better service delivery</span>
              </div>
              <div className="value-item">
                <span className="value-label">Sustainability:</span>
                <span>Protecting our environment for future generations</span>
              </div>
              <div className="value-item">
                <span className="value-label">Community:</span>
                <span>
                  Supporting local farmers and strengthening communities
                </span>
              </div>
            </div>
          </div>

          <div className="about-card story-card wide">
            <div className="card-icon">📖</div>
            <h2>Our Journey</h2>
            <div className="story-content">
              <p>
                Fresh Outlet began in 2020 when our founder noticed the
                challenges families faced in accessing fresh vegetables and
                reliable gas supply. What started as a small local initiative
                has grown into a comprehensive delivery service that serves
                thousands of households.
              </p>
              <p>
                Today, we work directly with over 50 local farmers, ensuring
                fair prices for producers while delivering the freshest
                vegetables to our customers. Our gas delivery service has become
                a lifeline for many families, providing safe, reliable cooking
                fuel with unmatched convenience.
              </p>
              <div className="achievements">
                <div className="achievement">
                  <span className="number">10,000+</span>
                  <span className="label">Happy Customers</span>
                </div>
                <div className="achievement">
                  <span className="number">50+</span>
                  <span className="label">Partner Farms</span>
                </div>
                <div className="achievement">
                  <span className="number">24/7</span>
                  <span className="label">Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product-specific sections */}
      <div id="gasabout">
        <GasAbout expandedCards={expandedCards} toggleCard={toggleCard} />
      </div>
      <div id="vegabout">
        <VegAbout />
      </div>
    </section>
  );
}

export default About;
