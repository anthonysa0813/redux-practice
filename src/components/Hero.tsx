import React from "react";
import heroImage from "../assets/images/headerimage.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="hero image" />
      <div className="titleHero">
        <h2>$0 delivery for 30 days!</h2>
        <p>$0 delivery fee for orders over $10 for 30 days</p>
      </div>
      <div className="actionHero">
        <a href="">Learn more</a>
      </div>
    </div>
  );
};

export default Hero;
