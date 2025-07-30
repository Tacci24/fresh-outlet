import React from "react";
import vegetables from "../data/vegetables";
import "./VegAbout.css";

function VegAbout() {
  return (
    <section className="veg-about">
      <h2 className="veg-title">About Our Vegetables</h2>
      <div className="veg-content">
        <p>
          Our vegetables are sourced fresh from local farms daily for maximum
          nutrition and taste. We offer a wide variety of fresh, locally-sourced
          vegetables - from sukuma wiki, onions, tomatoes to carrots and more.
          Straight from farm to your plate!
        </p>
        <p>The following are the vegetables available:</p>
      </div>

      <div className="vegetable-grid">
        {vegetables.map((veg, id) => (
          <div key={id} className="veg-card">
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
  );
}
export default VegAbout;
