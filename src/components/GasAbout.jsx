import React from "react";
import gasBrands from "../data/gas";
import "./GasAbout.css";

function GasAbout() {
  return (
    <section className="gas-about">
      <h2 className="gas-title">About Our Gas</h2>
      <div className="gas-content">
        <p>
          We deliver clean LPG with safety and convenience. Trusted by many
          households. Clean cooking gas.
        </p>
        <p>
          Our gas is sourced from reputable suppliers, ensuring you get the best
          quality. We offer various cylinder sizes to suit your needs, from
          small household cylinders to large ones. We supply affordable
          affordable and reliable gas for homes and small businesses. Our gas is
          safe, clean, and delivered right away to your doorstep. We prioritize
          safety and quality, ensuring that our gas cylinders are regularly
          inspected and maintained. Our delivery service is fast and reliable,
          ensuring you never run out of gas when you need it most. Whether
          you're cooking at home or running a small business, we have the right
          gas solution for you.
        </p>
        <p>The following are the available brands:</p>
      </div>
      <div className="gas-grid">
        {gasBrands.map((brand, index) => (
          <div key={index} className="gas-card">
            <img src={brand.image} alt={brand.name} className="gas-image" />
            <h3 className="brand-name">{brand.name}</h3>
            <p className="availability">{brand.availability}</p>

            <ul className="cylinder-list">
              {brand.cylinders.map((cylinder, idx) => (
                <li key={idx} className="cylinder-item">
                  <span>{cylinder.size}</span>
                  <strong>{cylinder.priceUSD}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
export default GasAbout;
