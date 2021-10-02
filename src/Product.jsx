import React from "react";
//import Buy from "../public/recursos/buy-blue.svg";
export default function Product(props) {
  return (
    <div className="Product">
      <img height="50%" width="50%" src={props.photo} alt="foto del producto" />
      {props.active ? (
        <div>
          {" "}
          <img src="/recursos/buy-blue.svg" alt="foto del producto" />{" "}
        </div>
      ) : (
        "no te alcanza"
      )}
      <div className="product-description">
        <p className="product-category">{props.category}</p>
        <p className="product-name">{props.name}</p>
      </div>
    </div>
  );
}
