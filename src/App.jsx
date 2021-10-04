import React, { useState, useEffect } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Main from "./Main";
import List from "./ListOfProducts";
import Footer from "./Footer";
import { estadosIniciales } from "./estadosIniciales";
import "./styles.css";

export default function App() {
  const productosPorPagina = 16;
  const [precioActual, actualizarPrecio] = useState(estadosIniciales.Price);
  const [productos, actualizarProductos] = useState([]);
  const [user, actualizarUser] = useState(estadosIniciales.User);
  const [categoriaActual, actualizarCategoria] = useState (estadosIniciales.Category);
  const [ordenActual, actualizarOrden] = useState (estadosIniciales.Category);
  const [paginaActual, actualizarPagina] = useState (1);

  useEffect(() => {
    if (productos.length > 0) {
      return false;
    }

    let peticion = fetch("https://coding-challenge-api.aerolab.co/products", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
    });
    peticion
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        actualizarProductos(response);
      });
  }, [productos]);

  useEffect(() => {
    if (user.name) {
      return false;
    }

    let peticion = fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
    });
    peticion
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        actualizarUser(response);
      });
  }, [user]);

  const sumarPuntos = (puntos) => {
    let data = {
      amount: puntos
    };
    let peticion = fetch(
      "https://coding-challenge-api.aerolab.co/user/points",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        }
      }
    );
    peticion
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        let newUser = Object.assign({}, user);
        newUser.points = response["New Points"];
        actualizarUser(newUser);
        alert("actualizado!");
      });
  };

  const crearListaProductos = () => {
    const nuevaLista = productos
      .filter((producto) => {
        if (categoriaActual === estadosIniciales.Category) {
          return true;
        } else {
           return producto.category === categoriaActual
        }
      })
      .sort((a, b) => {
        if (ordenActual === 'lowest'){
          return a.cost - b.cost;
        } else {
          return b.cost - a.cost;
        }
      });

      return nuevaLista;
  };

  let listaFiltradaProductos = crearListaProductos();
  const manejarClickPaginaAnterior = (e) => {
    actualizarPagina(paginaActual - 1);
  }
  const manejarClickPaginaSiguiente = (e) => {
    actualizarPagina(paginaActual + 1);
  }
  const calcularTotalPaginas = ()=>{
    return Math.ceil(listaFiltradaProductos.length / productosPorPagina);
  }
  let totalPaginas = calcularTotalPaginas();
  return (
    <div className="App">
      <Header user={user} sumarPuntos={sumarPuntos}
              />
      <Main />
      <Filter productosPorPagina={productosPorPagina}
              precioActual={precioActual}
              actualizarPrecio={actualizarPrecio}
              categoriaActual={categoriaActual}
              actualizarCategoria={actualizarCategoria}
              ordenActual={ordenActual}
              actualizarOrden={actualizarOrden}
              paginaActual={paginaActual}
              actualizarPagina={actualizarPagina}
              totalProductos={listaFiltradaProductos.length}
              manejarClickPaginaAnterior={manejarClickPaginaAnterior}
              manejarClickPaginaSiguiente={manejarClickPaginaSiguiente}
              totalPaginas={totalPaginas}
              />
      <List   productosPorPagina={productosPorPagina}
              productos={listaFiltradaProductos}
              user={user}
              paginaActual={paginaActual}
              />
      <Footer paginaActual={paginaActual}
              manejarClickPaginaAnterior={manejarClickPaginaAnterior}
              manejarClickPaginaSiguiente={manejarClickPaginaSiguiente}
              totalPaginas={totalPaginas}
              />
    </div>
  );
}

