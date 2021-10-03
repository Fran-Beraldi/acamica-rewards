import React from "react";

export default function Product(props) {
  return (
    <div className="Product">
      <div className="product-description">
        <div className="product-img"><img height="95%" width="95%" src={props.photo} alt="foto del producto" /></div>
        <p className="product-category">{props.category}</p>
        <p className="product-name">{props.name}</p>
      </div>

        {props.active ? (
          <div>
            {" "}
            <img className="product-img-blue" src="/recursos/buy-blue.svg" alt="foto del producto" />{" "}
          </div>
        ) : (
          "no te alcanza"
        )}

    </div>
  );
}
