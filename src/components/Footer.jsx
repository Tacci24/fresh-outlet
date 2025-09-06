import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faShoppingBag,
  faLeaf,
  faShippingFast,
  faShieldAlt,
  faHeart,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <div className="brand-logo">
            <FontAwesomeIcon icon={faLeaf} className="brand-icon" />
            <h2>Fresh Outlet</h2>
          </div>
          <p className="brand-description">
            Your trusted partner for fresh vegetables and reliable gas
            cylinders. We're committed to delivering quality products right to
            your doorstep.
          </p>
          <div className="brand-stats">
            <div className="stat-item">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>1000+ Orders</span>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faHeart} />
              <span>500+ Happy Customers</span>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faShippingFast} />
              <span>Same Day Delivery</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h3 className="section-title">Get in Touch</h3>
          <div className="contact-list">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Email us</span>
                <a
                  href="mailto:mwinamigideon@gmail.com"
                  className="contact-link"
                >
                  mwinamigideon@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="contact-icon whatsapp"
              />
              <div className="contact-details">
                <span className="contact-label">WhatsApp</span>
                <a
                  href="https://wa.me/254793811204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  +254 793 811 204
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Call us</span>
                <a href="tel:+254793811204" className="contact-link">
                  +254 793 811 204
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-text">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3 className="section-title">Quick Links</h3>
          <div className="links-grid">
            <div className="links-column">
              <h4 className="links-subtitle">Navigation</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/" className="footer-link">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="links-subtitle">Products</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#vegetables" className="footer-link">
                    <span>Fresh Vegetables</span>
                  </a>
                </li>
                <li>
                  <a href="#gas" className="footer-link">
                    <span>Gas Cylinders</span>
                  </a>
                </li>
                <li>
                  <a href="#offers" className="footer-link">
                    <span>Special Offers</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="footer-section footer-social">
          <h3 className="section-title">Stay Connected</h3>

          {/* Newsletter Signup */}
          <div className="newsletter-signup">
            <h4 className="newsletter-title">Subscribe to our newsletter</h4>
            <p className="newsletter-description">
              Get updates on fresh products and special offers!
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h4 className="social-title">Follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
                aria-label="Follow us on Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.twitter.com/kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
                aria-label="Follow us on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.tiktok.com/@kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tiktok"
                aria-label="Follow us on TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Secure Payment</span>
            </div>
            <div className="trust-badge">
              <FontAwesomeIcon icon={faShippingFast} />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; {currentYear} Fresh Outlet. All rights reserved.</p>
            <p className="designer-credit">
              Designed with{" "}
              <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by
              <span className="designer-name"> Tacci </span>
            </p>
          </div>

          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-bottom-link">
              Privacy Policy
            </a>
            <a href="#terms" className="footer-bottom-link">
              Terms of Service
            </a>
            <a href="#sitemap" className="footer-bottom-link">
              Sitemap
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
