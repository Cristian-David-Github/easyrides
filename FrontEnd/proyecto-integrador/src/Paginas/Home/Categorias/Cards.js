import React from "react";
import "./Cards.css";
import useFetch from "../../../Hooks/useFetch";

export default function Cards() {
  const urlCategorias = "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/categorias";
  const { data } = useFetch(urlCategorias)

  return (
    <div>
      <h2 className="cardsCategoria-titulo">¿Que tipo de carro quieres elegir?</h2>
      <div className="cardsCategoria">
      {data&&data.categorias.map((cat)=>(
        <div key={cat.id} className="cardsCategoria-unidad">
          <img
            src={cat.url}
            alt=""
            className="cardsCategoria-unidad-img"/>
          <p className="cardsCategoria-unidad-nombre">
            {cat.titulo}
          </p>
          <p className="cardsCategoria-unidad-descripcion">
            {cat.descripcion}
          </p>
        </div>
      ))}
    </div> 
    </div>
    
  );
}
