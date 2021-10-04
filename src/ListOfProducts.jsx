import React, { useState } from "react";
import Product from "./Product";

export default function ListOfProducts(props) {
  const calcularInicioPaginacion = ()=>{
    return props.productosPorPagina * (props.paginaActual - 1);
  };
  const calcularFinalPainacion = ()=>{
    return calcularInicioPaginacion() + props.productosPorPagina;
  };

  let inicioPaginacion = calcularInicioPaginacion();
  let finalPaginacion = calcularFinalPainacion();
  
  return (
    <div className="List">
      {props.productos.slice(inicioPaginacion,finalPaginacion).map((producto) => {
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
