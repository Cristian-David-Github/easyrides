import "./Listado.css";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

export default function Listado() {
  const urlProductos = "http://localhost:8080/productos";

  const { data } = useFetch(urlProductos);

  return (
    <div>
      <p className="cardsProductos-titulo">Recomendaciones</p>
      <div className="cardsProductos">
        {data &&
          data.productos.map((prod) => (
            <div className="cardsProductos-unidad" key={prod.id}>
              <img
                key={prod.id}
                src={prod.url}
                alt=""
                className="cardsProductos-unidad-img"
              />
              <h2 className="cardsProductos-unidad-nombre">{prod.titulo}</h2>
              <p className="cardsProductos-unidad-descripcion">
                {prod.descripcion}
              </p>
              <Link to="/producto">
                <button
                  className="cardsProductos-unidad-boton"
                  onClick={() => localStorage.setItem("producto", JSON.stringify(prod))}
                >
                  Ver Más
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
