import React from "react";
import "./About.css";
import GasAbout from "../components/GasAbout";
import VegAbout from "../components/VegAbout";

function About() {
  return (
    <section className="about">
      <GasAbout />
      <VegAbout />
    </section>
  );
}
export default About;
