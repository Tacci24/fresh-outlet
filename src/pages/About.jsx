import React from "react";
import "./About.css";

import GasAbout from "../components/GasAbout";
import VegAbout from "../components/VegAbout";

function About() {
  return (
    <div className="about">
      <h1>About Kibanda</h1>
      <GasAbout />
      <VegAbout />
    </div>
  );
}
export default About;
