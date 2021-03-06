import React from "react";
import Product from "./Product";

export default function ListOfProducts(props) {
  const calcularInicioPaginacion = ()=>{
    return props.productosPorPagina * (props.paginaActual - 1);
  };
  const calcularFinalPaginacion = ()=>{
    return calcularInicioPaginacion() + props.productosPorPagina;
  };

  let inicioPaginacion = calcularInicioPaginacion();
  let finalPaginacion = calcularFinalPaginacion();

  return (
    <div className="List">
      {props.productos.slice(inicioPaginacion,finalPaginacion).map((producto) => {
        return (
          <Product
            key={producto._id}
            productId={producto._id}
            photo={producto.img.url}
            category={producto.category}
            name={producto.name}
            userPoints={props.user.points}
            points={producto.cost}
            active={producto.cost <= props.user.points ? true : false}
            cargarUsuario={props.cargarUsuario}
          />
        );
      })}
    </div>
  );
}
