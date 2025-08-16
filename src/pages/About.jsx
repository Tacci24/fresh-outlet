import React from "react";
import "./About.css";
import GasAbout from "../components/GasAbout";
import VegAbout from "../components/VegAbout";

function About({ expandedCards, toggleCard }) {
  return (
    <section className="about">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-details">
          <div className="about-description">
            <h2>Vision</h2>
            <p>
              To be the leading provider of fresh vegetables and clean cooking
              gas in the region, delivering quality products and reliable
              services that make everyday life easier.
            </p>
          </div>

          <div className="about-description">
            <h2>Mission</h2>
            <p>
              To supply, deliver and refill clean cooking gas, and to supply and
              deliver fresh vegetables directly to households and businesses,
              ensuring safety, convenience and freshness with every order.
            </p>
          </div>

          <div className="about-description">
            <h2>Goals</h2>
            <ol>
              <li>
                Expand our product range to offer more local produce and
                household essentials.
              </li>
              <li>
                Enhance our delivery service for speed, reliability and wider
                coverage.
              </li>
              <li>
                Build lasting partnerships with farmers and reputable gas
                suppliers.
              </li>
              <li>
                Promote eco-friendly practices in our sourcing, packaging and
                operations
              </li>
            </ol>
          </div>

          <div className="about-description">
            <h2>Values</h2>
            <ol>
              <li>
                <span>Quality:</span> We guarantee top-grade vegetables and
                safe, reliable cooking gas.
              </li>
              <li>
                <span>Integrity:</span> We operate with honesty, transparency
                and accountability.
              </li>
              <li>
                <span>Community:</span> We support local farmers and contribute
                to community growth.
              </li>
              <li>
                <span>Safety:</span> We adhere to the highest standards for gas
                handling and delivery.
              </li>
              <li>
                <span>Sustainability:</span> We are committed to environmentally
                friendly practices in all aspects of our business.
              </li>
              <li>
                <span>Customer First:</span> We prioritize convenience,
                affordability and satisfaction.
              </li>
            </ol>
          </div>

          <div className="about-description">
            <h2>Our Story</h2>
            <p>
              Kibanda Fresh Outlet was born out of a desire to make quality
              fresh vegetables and safe cooking gas easily accessible to
              everyone. Starting as a small vendor, we connected directly with
              farmers and trusted gas suppliers to bring affordable,
              high-quality products to our community. Today, we proudly sell,
              refill and deliver vegetables and gas to homes and businesses,
              combining freshness, safety and convenience in one trusted
              service.
            </p>
          </div>
        </div>
      </div>
      <GasAbout expandedCards={expandedCards} toggleCard={toggleCard} />
      <VegAbout />
    </section>
  );
}
export default About;
