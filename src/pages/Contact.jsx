import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have questions, feedback, or
        concerns, our team is here to assist you. Please feel free to reach out
        to us using the contact form below. For a more personal touch, you can
        also visit our office at the address stated. We look forward to
        connecting with you and providing the support you need.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-details">
            <p>
              <strong>Phone:</strong> +254 793811204
            </p>
            <p>
              <strong>Location:</strong> K.South, Nairobi, Kenya
            </p>
            <p>
              <strong>Details:</strong> Open from 8AM to 10PM, Monday to
              Saturday.
            </p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:mwinamigideon@gmail.com">
                mwinamigideon@gmail.com
              </a>
            </p>
          </div>

          <div className="social-media">
            <h2>Follow Us</h2>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/mwinamigideon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mwinamigideon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/mwinamigideon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok/mwinamigideon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tik Tok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-section">
          <h2>Talk to us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
