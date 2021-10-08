import React from "react";


export default function Product(props) {
  return (
    <div className="Product">
      <div className= "product-modal">
        <img className= "product-modal-img"src="/recursos/buy-white.svg" alt="buy icon" />
        <div className="product-modal-description">
          <div className= "product-modal-points">
            <h1>{props.points}</h1>
            <img className="Coin-modal-img" src='/recursos/coin.svg' alt="imagen moneda" />
          </div>
          <button className= "product-modal-btn">Redeem now</button>
        </div>
      </div>
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
    </div>
  );
}
