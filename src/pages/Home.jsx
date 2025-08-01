import React from "react";
import vegetables from "../data/vegetables";
import gasBrands from "../data/gas";
import "./Home.css";

function Home({ expandedCards, toggleCard }) {
  return (
    <main className="home-container">
      <h1 className="home-title">Welcome to Kibanda</h1>

      <section className="section">
        <h2 className="section-title">Gas Brands and Prices</h2>
        <div className="gas-grid">
          {gasBrands.map((brand, index) => {
            const isExpanded = expandedCards.includes(index);
            const visibleCylinders = isExpanded
              ? brand.cylinders
              : brand.cylinders.slice(0, 2);

            return (
              <div key={index} className="gas-card">
                <img src={brand.image} alt={brand.name} className="gas-image" />
                <h3 className="brand-name">{brand.name}</h3>
                <p className="availability">{brand.availability}</p>

                <ul className="cylinder-list">
                  {visibleCylinders.map((cylinder, idx) => (
                    <li key={idx} className="cylinder-item">
                      <span>{cylinder.size}</span>
                      <strong>${cylinder.priceUSD.toFixed(2)}</strong>
                    </li>
                  ))}
                </ul>

                {brand.cylinders.length > 2 && (
                  <button
                    className="see-more-btn"
                    onClick={() => toggleCard(index)}
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <h2 className="section-title">Fresh Vegetables</h2>
        <div className="vegetable-grid">
          {vegetables.map((veg, id) => (
            <div className="veg-card" key={id}>
              <img src={veg.image} alt={veg.name} className="veg-image" />
              <h3 className="veg-name">{veg.name}</h3>
              <p className="veg-desc">{veg.desc}</p>
              <div className="veg-meta">
                <span className="veg-price">{veg.price}</span>
                <span className="veg-stock">{veg.stock}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <h2>Why choose us?</h2>
        <ul>
          <li>Fast and reliable delivery.</li>
          <li>Competitive pricing.</li>
          <li>Safety and quality assurance.</li>
          <li>Customer satisfaction quarantee.</li>
          <li>Support local farmers and businesses.</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
