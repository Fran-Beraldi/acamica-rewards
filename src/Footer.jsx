import React from "react";

export default function Footer(props) {
  return (
    <div className="Filter">
      <div className="Filter-number">16 of 32 products</div>
      <div className="Filter-arrows">
        {props.paginaActual > 1 ?
        (<div onClick={props.manejarClickPaginaAnterior}><img src="/recursos/arrow-left.svg" alt="flecha izquierda" /></div>) : null}
        {props.paginaActual < props.totalPaginas ?
        (<div onClick={props.manejarClickPaginaSiguiente}><img src="/recursos/arrow-right.svg" alt="flecha derecha" /></div>) : null}
      </div>
    </div>
  );
}