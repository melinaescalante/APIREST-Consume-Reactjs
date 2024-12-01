import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import { useState, useEffect } from "react";
function CardUser({ full_name, email, id, onDelete }) {
    const [msg, setMsg] = useState('');
    const { user } = useContext(AuthContext)

    const handleDelete = async () => {

        try {
            const endPoint = "http://127.0.0.1:3000/api/users/" + id
            const config = {
                method: 'DELETE',

            }
            const response = await fetch(endPoint, config);
            if (response.ok) {
                const data = await response.json()
                console.log(data)

                setMsg('Usuario eliminado correctamente')
                setTimeout(() => {
                    setMsg('')
                }, 3000);
                onDelete(id)
            } else {
                setMsgError('No se ha podido eliminar el usuario correctamente')
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
                <h4 className="font-medium text-xl  m-3">{full_name}</h4>
                <p className="text-start"><strong>Nombre:</strong> {full_name}</p>

                <p className="text-start mb-4"><strong>Email:</strong> {email}</p>
                <div className="flex flex-wrap justify-center m-3 pt-2 pb-2 gap-2 items-center">
                    <Link to={`/detailsUsuario/${id}`} className="p-2 text-cyan-600 border rounded-lg border-cyan-600 ">Detalle</Link>
                    {user && (
                        <>

                            <button onClick={handleDelete} className="p-2  text-red-700 border rounded-lg border-red-700 ">Eliminar</button>
                            <Link to={`/modificarUsuario/${id}`} state={{ full_name, email }} className="p-2  text-yellow-600 border rounded-lg border-yellow-600 ">Modificar</Link>
                        </>

                    )}
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
export default CardUser;