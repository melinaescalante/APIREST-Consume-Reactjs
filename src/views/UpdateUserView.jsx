import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function UpdateUserView() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        full_name: location.state?.full_name || '',
        email: location.state?.email || '',
        password: ''
    })
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }
    const [msg, setMsg] = useState('');
    const { id } = useParams()
    const [msgError, setMsgError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const endPoint = "http://127.0.0.1:3000/api/users/" + id
        const config = {
            method: 'PUT', 
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
            }

        }
        try {
            const response = await fetch(endPoint, config);

            const data = await response.json(); // Parsear siempre 
            console.log(data.msg)
            console.log(response.status)
            if (response.ok) {

                setMsg('Usuario modificado correctamente')
                setTimeout(() => {
                    setMsg('')
                }, 3000);
                return
            } else{

                setMsgError(data.msg || 'No se ha podido modificar el usuario correctamente')
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
            <h2 className="text-lg font-medium mt-6 mb-6">Modificar usuario {location.state?.full_name || ''}</h2>
            <form onSubmit={handleSubmit} action="" className="mx-auto md:max-w-[50%] flex flex-col p-2 border rounded-lg border-cyan-500 text-start items-center">

                <div className="m-3 flex flex-col">
                    <label htmlFor="full_name">Nombre</label>
                    <input className="border rounded-md  border-slate-300" type="text" name="full_name" id="full_name" onChange={handlerChange} value={formData.full_name} />
                </div>
                <div className="m-3 flex flex-col">

                    <label htmlFor="email">Email</label>
                    <input className="border  rounded-md border-slate-300" type="text" name="email" onChange={handlerChange} id="email" value={formData.email} />
                </div>
                <div className="m-3 flex flex-col">

                    <label htmlFor="password">Contraseña</label>
                    <input className="border  rounded-md border-slate-300" type="password" name="password" id="country" onChange={handlerChange} value={formData.password} />
                </div>
                <button type="submit" className="bg-cyan-600 px-3 py-2 rounded-lg font-medium text-white">Modificar usuario</button>
            </form>
            {msg && (
                <div className="bg-green-200 rounded-lg p-3 mt-3">
                    <p>{msg}</p>
                </div>
            )}
                {msgError && (
                <div className="bg-red-200 rounded-lg p-3 mt-3">
                    <p>{msgError}</p>
                </div>
            )}
        </>
    )
}
export default UpdateUserView