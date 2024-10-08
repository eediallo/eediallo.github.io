import React from "react";
import SpaceXLogo from "./images/spacex-logo.svg";
import "./space-exploration.css";

const SpaceExploration = () => {
  return (
    <div className="space-exploration">
      <div className="hero">
        <img id="spacex-logo" src={SpaceXLogo} alt="SpaceX logo" />
        <h1 id="title">
          Join the <span className="expo-line">exploration</span>
        </h1>
        <button className="apply-btn">Apply!</button>
      </div>
      <h3>Terms and conditions apply</h3>
    </div>
  );
};

export default SpaceExploration;
