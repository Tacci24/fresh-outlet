import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faClock,
  faEnvelope,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="contact">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          We would love to hear from you! Whether you have questions about our
          products, need delivery information, or want to provide feedback, our
          team is here to assist you. Reach out to us and we'll get back to you
          as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-cards">
            <div className="info-card">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <div className="info-details">
                <h3>Phone</h3>
                <p>+254 793 811 204</p>
                <a href="tel:+254793811204" className="action-link">
                  Call Now
                </a>
              </div>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
              <div className="info-details">
                <h3>Location</h3>
                <p>Kariobangi South, Nairobi</p>
                <p>Kenya</p>
              </div>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faClock} className="info-icon" />
              <div className="info-details">
                <h3>Business Hours</h3>
                <p>Monday - Saturday</p>
                <p>8:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <div className="info-details">
                <h3>Email</h3>
                <p>mwinamigideon@gmail.com</p>
                <a
                  href="mailto:mwinamigideon@gmail.com"
                  className="action-link"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Quick Contact */}
          <div className="whatsapp-contact">
            <a
              href="https://wa.me/254793811204"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/mwinamigideon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/mwinamigideon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.twitter.com/mwinamigideon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.tiktok.com/@mwinamigideon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tiktok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-section">
          <h2>Send Us a Message</h2>

          {isSubmitted && (
            <div className="success-message">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p>
                Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </p>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+254 XXX XXX XXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="delivery">Delivery Information</option>
                <option value="pricing">Pricing Question</option>
                <option value="complaint">Complaint</option>
                <option value="suggestion">Suggestion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="form-footer">
            <p>
              <strong>Response Time:</strong> We typically respond within 2-4
              hours during business hours.
            </p>
            <p>
              <strong>Emergency Orders:</strong> For urgent gas cylinder needs,
              please call us directly.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What are your delivery areas?</h3>
            <p>
              We deliver within Nairobi and surrounding areas. Contact us to
              confirm if we deliver to your location.
            </p>
          </div>
          <div className="faq-item">
            <h3>How fast is delivery?</h3>
            <p>
              Most orders are delivered within 2-4 hours. Same-day delivery
              available for orders placed before 6 PM.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you accept mobile payments?</h3>
            <p>
              Yes! We accept M-Pesa, cash on delivery, and bank transfers for
              your convenience.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I return products?</h3>
            <p>
              Yes, we have a return policy for defective products. Contact us
              within 24 hours of delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
