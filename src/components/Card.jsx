import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Card({ name, description, price, id, color, brand, onDelete }) {
  const [msg, setMsg] = useState('');

  const handleDelete = async () => {

    try {
      const endPoint = "http://127.0.0.1:3000/api/sneakers/" + id
      const config = {
        method: 'DELETE',

      }
      const response = await fetch(endPoint, config);
      if (response.ok) {
        const data = await response.json()
        console.log(data)

        setMsg('Zapatilla eliminada correctamente')
        setTimeout(() => {
          setMsg('')
        }, 3000);
        onDelete(id)
      } else {
        setMsgError('No se ha podido eliminar la zapatilla correctamente')
        setTimeout(() => {
          setMsgError('')
        }, 3000);
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div className="p-2 m-2 border rounded-lg border-cyan-700 ">
        <h4 className="font-medium text-xl  m-3">{name}</h4>
        <p className="text-start"><strong>Precio:</strong> {price}</p>
        <p className="text-start"><strong>Descripcion:</strong> {description}</p>
        <div className="flex flex-wrap justify-center m-3 pt-2 pb-2 gap-2">
        <Button text="Comprar"></Button>
        <Link to={`/details/${id}`} className="p-2  text-cyan-700 border rounded-lg border-cyan-700 ">Detalle</Link>
        <button onClick={handleDelete} className="p-2 text-red-700 border rounded-lg border-red-700 ">Eliminar</button>
        <Link to={`/modificarZapatilla/${id}`} state={{ name, description, price, id, color, brand}} className="p-2  text-yellow-600 border rounded-lg border-yellow-600 ">Modificar</Link>
        </div>
      </div>
      {msg && (
        <div className="bg-green-200 rounded-lg p-3 mt-3">
          <p>{msg}</p>
        </div>
      )}
    </>
  );
}
export default Card;
