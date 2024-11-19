import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function UpdateSneakerView() {
    const location = useLocation();
    const [formData, setFormData] = useState({ 
        name: location.state?.name || '', 
        description: location.state?.description || '', 
        price: location.state?.price || '', 
        color: location.state?.color || '', 
        brand:location.state?.brand || '' })
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const { id } = useParams()
    const [msg, setMsg] = useState('');
    const [msgError, setMsgError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const endPoint = "http://127.0.0.1:3000/api/sneakers/" + id
            const config = {
                method: 'PUT', body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',
                }

            }
            const response = await fetch(endPoint, config);
            if (response.ok) {
                const data = await response.json()
                console.log(data)

                setMsg('Zapatilla modificada correctamente')
                setTimeout(() => {
                    setMsg('')
                }, 3000);
               
            } else {
                setMsgError('No se ha podido modificar la zapatilla correctamente')
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
            <h2 className="text-lg font-medium mt-6 mb-6">Modificar zapatilla {location.state.name}</h2>
            <form method="" onSubmit={handleSubmit} action="" className="mx-auto md:max-w-[50%] flex flex-col p-2 border rounded-lg border-cyan-500 text-start items-center">
                <div className="m-3 flex flex-col">
                    <label htmlFor="name">Nombre de zapatilla</label>
                    <input className="border rounded-md border-slate-300" name="name" onChange={handlerChange} type="text" id="name" value={formData.name} required />
                </div>
                <div className="m-3 flex flex-col">
                    <label htmlFor="description">Descripción</label>
                    <input className="border rounded-md border-slate-300" type="text" name="description" onChange={handlerChange} id="description" value={formData.description} required />
                </div>
                <div className="m-3 flex flex-col">
                    <label htmlFor="price">Precio</label>
                    <input className="border rounded-md border-slate-300" type="number" onChange={handlerChange} name="price" id="price" value={formData.price}  required />
                </div>
                <div className="m-3 flex flex-col">
                    <label htmlFor="color">Color</label>
                    <input className="border rounded-md border-slate-300" type="text" onChange={handlerChange} name="color" id="color" value={formData.color} required />
                </div>
                <div className="m-3 flex flex-col">
                    <label htmlFor="brand">Id de marca</label>
                    <input className="border rounded-md border-slate-300" type="text" onChange={handlerChange} name="brand" id="brand" value={formData.brand} required />
                </div>
                <button type="submit" className="bg-cyan-600 px-3 py-2 rounded-lg font-medium text-white">Modificar</button>
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
export default UpdateSneakerView;