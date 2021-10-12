import React, { useState }  from "react";
import Congrats from "./Congrats";
import Error from "./Error"


export default function Product(props) {
  const [modalOpen, actualizarModalOpen]=useState(false);
  const [congratsOpen, actualizarCongratsOpen] = useState(false);
  const [errorOpen, actualizarErrorOpen] = useState(false);
  const [loading, actualizarLoading] = useState(false);

  const manejarMouseOver = (e) => {
    if(props.active){
      actualizarModalOpen(true);
    }
  }

  const manejarMouseLive = (e) => {
    actualizarModalOpen(false);
  }

  const manejarClickCompra = (e) => {
    actualizarLoading(true);

    let data = {
      productId: props.productId
    };
    let peticion = fetch("https://coding-challenge-api.aerolab.co/redeem", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
    });
    peticion
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response && response.message === "You've redeem the product successfully") {
          actualizarCongratsOpen(true);
          props.cargarUsuario();
        } else {
          actualizarErrorOpen(true);
        }
      })
      .finally(()=>{
        actualizarLoading(false);
      });
  }
  return (
    <div onMouseOver={manejarMouseOver} onMouseLeave={manejarMouseLive} className="Product">
      {modalOpen === true ? (<div className= "product-modal">
        <img className= "product-modal-img"src="/recursos/buy-white.svg" alt="buy icon" />
        <div className="product-modal-description">
          <div className= "product-modal-points">
            <h1>{props.points}</h1>
            <img className="Coin-modal-img" src='/recursos/coin.svg' alt="imagen moneda" />
          </div>
          <button onClick={manejarClickCompra} className= "product-modal-btn"> { (loading === true) ? (<div className="loading"><img width="25px" src="/recursos/Spinner-2.gif" alt="loading" /></div>) : "Redeem now"  }</button>
        </div>
      </div>) : null}
      <div className="product-description">
        <div className="product-img"><img height="95%" width="95%" src={props.photo} alt="foto del producto" /></div>
        <p className="product-category">{props.category}</p>
        <p className="product-name">{props.name}</p>
      </div>

        {props.active ? (
          <div>
            {" "}
            <img className="product-img-blue" src="/recursos/buy-blue.svg" alt="buy icon" />{" "}
          </div>
        ) : (
          <div className="product-buy">you need { props.points - props.userPoints }
            <img className="Coin-img" src='/recursos/coin.svg' alt="imagen moneda" />
          </div>
        )}
        {congratsOpen === true ? <Congrats actualizarCongratsOpen = {actualizarCongratsOpen}/> : null}
        {errorOpen === true ? <Error actualizarErrorOpen = {actualizarErrorOpen} /> : null}
    </div>
  );
}
