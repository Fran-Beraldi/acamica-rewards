import React, { useState } from "react";
import Product from "./Product";

export default function ListOfProducts(props) {
  return (
    <div className="List">
      {props.productos.map((producto) => {
        return (
          <Product
            photo={producto.img.url}
            category={producto.category}
            name={producto.name}
            points={producto.cost}
            active={producto.cost <= props.user.points ? true : false}
          />
        );
      })}
    </div>
  );
}
