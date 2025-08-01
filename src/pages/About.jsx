import React from "react";
import "./About.css";
import GasAbout from "../components/GasAbout";
import VegAbout from "../components/VegAbout";

function About({ expandedCards, toggleCard }) {
  return (
    <section className="about">
      <GasAbout expandedCards={expandedCards} toggleCard={toggleCard} />
      <VegAbout />
    </section>
  );
}
export default About;
