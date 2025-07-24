import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Kibanda</h1>
      <section>
        <h2>Cooking gas</h2>
        <p>
          We provide clean and affordable LPG gas, delivered to your door step
          in no time. Our gas is sourced from trusted suppliers and meets all
          safety and quality standards. We offer flexible payment options and
          service plans to suit your needs. Whether you are a home cook or a
          professional chef, we have the right gas solution for you.
        </p>
      </section>
      <section>
        <h2>Fresh Vegetables</h2>
        <p>
          Get fresh, organic, and locally grown vegetbales at unbeatable prices.
          Shop from a wide variety of seasonal vegetables, sourced directly from
          farmers. We ensure that our produce is picked at the peak of freshness
          and delivered to you quickly. Enjoy the taste of nature with our fresh
          vegetables, perfect for your daily meals or special occasions.
        </p>
      </section>
      <section>
        <h2>Why choose us?</h2>
        <ul>
          <li>Fast and reliable delivery.</li>
          <li>Competitive pricing.</li>
          <li>Safety and quality assurance.</li>
          <li>Customer satisfaction quarantee.</li>
          <li>Support local farmers and businesses.</li>
        </ul>
      </section>         
    </div>
  );
}

export default Home;
