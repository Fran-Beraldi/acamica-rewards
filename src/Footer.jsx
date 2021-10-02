import React from "react";
//import ArrowLeft from "../public/recursos/arrow-left.svg";
//import ArrowRight from "../public/recursos/arrow-right.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Filter-number">16 of 32 products</div>
      <div className="Filter-arrows">
        <img src="/recursos/arrow-left.svg" alt="flecha izquierda" />
        <img src="/recursos/arrow-right.svg" alt="flecha derecha" />
      </div>
    </div>
  );
}