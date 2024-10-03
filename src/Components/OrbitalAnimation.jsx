import React, { useEffect, useRef } from "react";
import "./Hero.css";

function OrbitalAnimation() {
  return (
    <div className="orbital-animation" style={{ with: "100%" }}>
      <div className="orbit orbit-1"></div>
      <div className="orbit orbit-2"></div>
      <div className="orbit orbit-3"></div>
    </div>
  );
}

export default OrbitalAnimation;
