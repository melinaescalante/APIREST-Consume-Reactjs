import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function UpdateBrandView() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: location.state?.name  || '', 
        description: location.state?.description  || '', 
        country: location.state?.country   || ''})
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const [msg, setMsg] = useState('');
    const { id } = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const endPoint = "http://127.0.0.1:3000/api/brands/" + id
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

                setMsg('Marca modificada correctamente')
                setTimeout(() => {
                    setMsg('')
                }, 3000);
  
            } else {
                setMsgError('No se ha podido modificar la marca correctamente')
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
            <h2 className="text-lg font-medium mt-6 mb-6">Modificar marca {location.state?.name || ''}</h2>
            <form onSubmit={handleSubmit} action="" className="mx-auto md:max-w-[50%] flex flex-col p-2 border rounded-lg border-cyan-500 text-start items-center">

                <div className="m-3 flex flex-col">
                    <label htmlFor="name">Nombre</label>
                    <input className="border rounded-md  border-slate-300" type="text" name="name" id="name" onChange={handlerChange} value={formData.name} />
                </div>
                <div className="flex flex-col">

                    <label htmlFor="description">Descripción</label>
                    <textarea className="border resize-none rez rounded-md border-slate-300" type="text" name="description" onChange={handlerChange} id="description" value={formData.description} ></textarea>
                </div>
                <div className="m-3 flex flex-col">

                    <label htmlFor="country">País de origen</label>
                    <input className="border  rounded-md border-slate-300" type="text" name="country" id="country" onChange={handlerChange} value={formData.country} />
                </div>
                <button type="submit" className="bg-cyan-600 px-3 py-2 rounded-lg font-medium text-white">Modificar</button>
            </form>
            {msg && (
                <div className="bg-green-200 rounded-lg p-3 mt-3">
                    <p>{msg}</p>
                </div>
            )}
        </>
    )
}
export default UpdateBrandView;