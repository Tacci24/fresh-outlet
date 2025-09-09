import React from "react";
import vegetables from "../data/vegetables";
import "../styles/VegAbout.css";

function VegAbout() {
  return (
    <section className="veg-about">
      <div className="veg-container">
        <div className="section-header">
          <h2 className="veg-title">Fresh Vegetables Collection</h2>
          <p className="veg-subtitle">
            Farm-to-table freshness delivered to your doorstep
          </p>
        </div>

        <div className="veg-intro">
          <div className="intro-content">
            <div className="intro-card">
              <div className="intro-icon">🌱</div>
              <h3>Farm Fresh Daily</h3>
              <p>
                Our vegetables are harvested at dawn and delivered the same day,
                ensuring maximum nutritional value and incredible freshness that
                you can taste in every bite.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">🚛</div>
              <h3>Direct Sourcing</h3>
              <p>
                We work directly with local farmers, cutting out middlemen to
                bring you the best prices while supporting our farming
                communities and reducing environmental impact.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">🥬</div>
              <h3>Quality Guaranteed</h3>
              <p>
                Every vegetable undergoes strict quality checks. We guarantee
                freshness, safety, and nutritional value, or we'll replace your
                order at no cost.
              </p>
            </div>
          </div>

          <div className="freshness-promise">
            <h3>Our Freshness Promise</h3>
            <p>
              From sukuma wiki to vibrant tomatoes, crisp carrots to flavorful
              onions - our diverse selection ensures your family gets the best
              nutrition nature has to offer. Each vegetable is carefully
              selected, cleaned, and packed to maintain its farm-fresh quality
              until it reaches your kitchen.
            </p>
            <div className="promise-stats">
              <div className="stat">
                <span className="stat-number">24hrs</span>
                <span className="stat-label">Farm to Door</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Organic Options</span>
              </div>
              <div className="stat">
                <span className="stat-number">365</span>
                <span className="stat-label">Days Fresh Supply</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vegetables-showcase">
          <h3 className="showcase-title">Available Fresh Vegetables</h3>
          <div className="vegetable-grid">
            {vegetables.map((veg, id) => (
              <article key={id} className="veg-card">
                <div className="veg-image-wrapper">
                  <img src={veg.image} alt={veg.name} className="veg-image" />
                  <div className="veg-overlay">
                    <span className="quick-view">Quick View</span>
                  </div>
                </div>

                <div className="veg-content">
                  <h4 className="veg-name">{veg.name}</h4>
                  <p className="veg-desc">{veg.desc}</p>

                  <div className="veg-details">
                    <div className="veg-meta">
                      <div className="price-container">
                        <span className="price-label">Price</span>
                        <span className="veg-price">{veg.price}</span>
                      </div>
                      <div className="stock-container">
                        <span className="stock-label">Stock</span>
                        <span
                          className={`veg-stock ${
                            veg.stock.toLowerCase().includes("available")
                              ? "available"
                              : "limited"
                          }`}
                        >
                          {veg.stock}
                        </span>
                      </div>
                    </div>

                    <div className="veg-actions">
                      <button className="add-to-cart-btn">Add to Cart</button>
                      <button className="wishlist-btn" title="Add to Wishlist">
                        ♡
                      </button>
                    </div>
                  </div>
                </div>

                <div className="freshness-indicator">
                  <span className="fresh-badge">Farm Fresh</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="veg-benefits">
          <h3>Why Choose Our Vegetables?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">🌿</span>
              <h4>Chemical-Free</h4>
              <p>No harmful pesticides or chemicals used in growing process</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💚</span>
              <h4>Nutrient Dense</h4>
              <p>
                Maximum vitamins and minerals preserved through quick delivery
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏪</span>
              <h4>Local Support</h4>
              <p>
                Supporting local farmers and strengthening community economy
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h4>Best Prices</h4>
              <p>Competitive pricing with no compromise on quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VegAbout;
