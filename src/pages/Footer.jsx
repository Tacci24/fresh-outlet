import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="welcome">
          <h3>Welcome to Kibanda Fresh Outlet</h3>
          <p>Your demand is our priority</p>
          <p>Order and we will deliver</p>
        </div>
        <div className="footer-contact">
          <h3>Contact us on</h3>
          <ul className="footer-contact-list">
            <li>
              <strong>Email: </strong>
              <a href="mailto:mwinamigideon@gamil.com" target="_blank">
                mwinamigideon@gmail.com
              </a>
            </li>
            <li>
              <strong>WhatsApp: </strong>
              <a href="https://wa.me/254793811204" target="_blank">
                Chat with us on WhatsApp
              </a>
            </li>
            <li>
              <strong>Call: </strong>
              <a href="tel:+254793811204" target="_blank">
                Call Us Now
              </a>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/About" className="link">
            About
          </Link>
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </div>

        <div className="socials">
          <h3>Follow Us</h3>
          <ul className="footer-socials">
            <li>
              <a
                href="https://www.facebook.com/kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@kibandafreshoutlet"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </section>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Kibanda Fresh Outlet. All rights
        reserved. Designed by Gideon Mwinami.
      </p>
    </footer>
  );
}

export default Footer;
