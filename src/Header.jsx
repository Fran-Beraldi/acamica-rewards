import React, { useState } from "react";
import UserAccount from "./UserAccount";
import UserPoints from "./UserPoints";
//import ImgHeader from "../public/recursos/aerolab-logo.svg";
//import ImgCoin from "../public/recursos/coin.svg";
//import ImgArrow from "../public/recursos/down-arrow.png";
export default function Header(props) {
  const [historial, setHistorial] = useState(false);
  const manejarClick = () => {
    setHistorial(!historial);
    setPuntos(false);
  };
  const [puntos, setPuntos] = useState(false);
  const manejarPoints = () => {
    setPuntos(!puntos);
    setHistorial(false);
  };
  return (
    <div className="Header">
      <img className="logo-img" src="/recursos/aerolab-logo.svg" alt="imagen logo" />
      <div className="User">
        <div className="btn-header ">
          {historial === true ? <UserAccount user={props.user} /> : null}
          <div onClick={manejarClick}>
            {props.user.name}{" "}
            <img
              className="Arrow-img"
              src="/recursos/down-arrow.png"
              alt="flecha hacia abajo"
            />{" "}
          </div>
        </div>
        <div className="btn-header">
          {puntos === true ? (
            <UserPoints user={props.user} sumarPuntos={props.sumarPuntos} />
          ) : null}
          <div onClick={manejarPoints}>
            {props.user.points}{" "}
            <img className="Coin-img" src='/recursos/coin.svg' alt="imagen moneda" />
            <img
              className="Arrow-img"
              src="/recursos/down-arrow.png"
              alt="flecha hacia abajo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
