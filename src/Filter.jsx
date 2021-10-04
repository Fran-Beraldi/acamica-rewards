import React, { useState } from "react";
import { estadosIniciales } from "./estadosIniciales";
//import {ListOfProducts} from "./ListOfProducts";

export default function Filter(props) {

  const manejarCambioCategoria = (e) => {
    props.actualizarCategoria(e.target.value);
  };
  
  
  return (
    <div className="Filter">
      <div className="Filter-text">
        <div className="Filter-number">{(props.totalProductos <= props.productosPorPagina) ? props.totalProductos : props.productosPorPagina} of {props.totalProductos} products</div>
        <div className="Filter-btn">
          <div>Sort by:</div>
          <select className="Filter-select" value={props.categoriaActual} onChange ={manejarCambioCategoria}>
            <option value={estadosIniciales.Category}>{estadosIniciales.Category}</option>
            <option value="Phones">Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Gaming">Gaming</option>
            <option value="Audio">Audio</option>
            <option value="Tablets & E-readers">Tablets & E-readers</option>
            <option value="Phone Accessories">Phone accessories</option>
            <option value="Cameras">Cameras</option>
            <option value="PC Accessories">PC accessories</option>
            <option value="Monitors & TV">Monitors & TV</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Drones">Drones</option>
            </select>
          <button onClick={()=>props.actualizarOrden("lowest")} className={props.ordenActual === "lowest" ? "active" : ""}>Lowest price</button>
          <button onClick={()=>props.actualizarOrden("highest")} className={props.ordenActual === "highest" ? "active" : ""}>Highest price</button>
        </div>
      </div>
      <div className="Filter-arrows">
        {props.paginaActual > 1 ?
        (<div onClick={props.manejarClickPaginaAnterior}><img src="/recursos/arrow-left.svg" alt="flecha izquierda" /></div>) : null}
        {props.paginaActual < props.totalPaginas ?
        (<div onClick={props.manejarClickPaginaSiguiente}><img src="/recursos/arrow-right.svg" alt="flecha derecha" /></div>) : null}
      </div>
    </div>
  );
}
