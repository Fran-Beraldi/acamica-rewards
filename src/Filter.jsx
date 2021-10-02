import React, { useState } from "react";
//import ArrowLeft from "../public/recursos/arrow-left.svg";
//import ArrowRight from "../public/recursos/arrow-right.svg";
export default function Filter(props) {
  const manejarCambioPrecio = (e) => {
    props.actualizarPrecio(e.target.value);
  };
  return (
    <div className="Filter">
      <div className="Filter-text">
        <div className="Filter-number">16 of 32 products</div>
        <div className="Filter-btn">
          <div>Sort by:</div>
          <button>Most recent</button>
          <button>Lowest price</button>
          <button>Highest price</button>
        </div>
      </div>
      <div className="Filter-arrows">
        <img src="/recursos/arrow-left.svg" alt="flecha izquierda" />
        <img src="/recursos/arrow-right.svg" alt="flecha derecha" />
      </div>
    </div>
  );
}
