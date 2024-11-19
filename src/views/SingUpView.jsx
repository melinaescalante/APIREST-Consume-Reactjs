import { useState } from "react"
const SingUpView = () => {
    const [formData, setFormData] = useState({ full_name: '', password: '', email: '' })
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            const endPoint = "http://127.0.0.1:3000/api/users"
            const config = {
                method: 'POST',
                body: JSON.stringify(formData),
                headers:{
                    'Content-type':'application/json',
                
                }
            }
            const response = await fetch(endPoint, config);
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setFormData({
                    full_name: '', password: '', email: ''
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h2 className="text-lg font-medium mt-6 mb-6">Registro</h2>
            <form method="" onSubmit={handlerSubmit} action="" className="mx-auto md:max-w-[50%] flex flex-col p-2 border rounded-lg border-cyan-500 text-start items-center">
                <div className="m-3 flex flex-col">

                    <label htmlFor="full_name">Nombre</label>
                    <input className="border rounded-md border-slate-300" name="full_name" onChange={handlerChange} type="text" id="full_name" value={formData.full_name} />
                </div>
                <div className="m-3 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input className="border rounded-md  border-slate-300" type="email" name="email" onChange={handlerChange} id="email" value={formData.email} />
                </div>
                <div className="m-3 flex flex-col">

                    <label htmlFor="password">Contraseña</label>
                    <input className="border  rounded-md border-slate-300" type="password" onChange={handlerChange} name="password" id="password" value={formData.password} />
                </div>
                <button type="submit" className="bg-cyan-600 px-3 py-2 rounded-lg font-medium text-white">Registrarme</button>
            </form>
        </>
    )
}
export default SingUpView