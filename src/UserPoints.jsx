import React from "react";

export default function UserPoints(props) {
  return (
    <div className="Account">
      <div className="account-title"> + Puntos </div>
      <div className="account-btn">
        <div onClick={() => props.sumarPuntos(1000)}>
          1000 <img src="./recursos/coin.svg" alt="moneda" />
        </div>

        <div onClick={() => props.sumarPuntos(5000)}>
          5000 <img src="./recursos/coin.svg" alt="moneda" />
        </div>
        <div onClick={() => props.sumarPuntos(7500)}>
          7500 <img src="./recursos/coin.svg" alt="moneda" />
        </div>
      </div>
    </div>
  );
}
