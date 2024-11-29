import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
const Login = () => {
    const [msg, setMsg] = useState('');
    const [msgError, setMsgError] = useState('');
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email: '', password: '' })
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            const endPoint = "http://127.0.0.1:3000/api/users/login"
            const config = {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',

                }
            }
            const response = await fetch(endPoint, config);
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                if (data.data.jwt) {

                    login(data.data.email, data.data.jwt)
                    navigate('/')
                } else {
                    setMsgError('Error al iniciar sesión');
                }
                setFormData({
                    email: '', password: ''
                })
                setMsg('Usuario correctamente logueado')
                setTimeout(() => setMsg(''), 3000);
            } else {
                const data = await response.json()
                setMsgError(data.msg || 'Error al iniciar sesión');
                setTimeout(() => setMsgError(''), 3000);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h2 className="text-lg font-medium mt-6 mb-6">Login</h2>
            <form method="" onSubmit={handlerSubmit} action="" className="mx-auto md:max-w-[50%] flex flex-col p-2 border rounded-lg border-cyan-500 text-start items-center">

                <div className="m-3 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input className="border rounded-md  border-slate-300" type="email" name="email" id="email" onChange={handlerChange} value={formData.email} />
                </div>
                <div className="m-3 flex flex-col">

                    <label htmlFor="password">Contraseña</label>
                    <input className="border  rounded-md border-slate-300" type="password" name="password" onChange={handlerChange} id="password" value={formData.password} />
                </div>
                <button type="submit" className="bg-cyan-600 px-3 py-2 rounded-lg font-medium text-white">Ingresar</button>
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
export default Login