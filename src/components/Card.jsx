import React from "react";
import Button from "./Button";

function Card({ name, description, price }) {
  //Forma larga de destructurizar
  // const name= props.name
  // const email= props.email
  // const age= props.age
  return (
    <div className="p-2 m-2 border rounded-lg border-cyan-700 ">
      <h4 className="font-medium text-xl  m-3">{name}</h4>
      <p className="text-start"><strong>Precio:</strong> {price}</p>
      <p className="text-start"><strong>Descripcion:</strong> {description}</p>
      <Button text="Comprar"></Button>
    </div>
  );
}
export default Card;
