
import { Link } from "react-router-dom"
const NotFound=()=>{

    return (
        <>
        <h2 className="text-3xl text-center font-medium mt-6">Pagina de error</h2>
        <p className="font-medium text-2xl mt-4 mb-4">404</p>
        <p className="mb-4">No se ha encontrado la pagina deseada.</p>
        <Link to='/' className="font-medium text-cyan-700 underline">Volver a inicio</Link>
        </>
    )
}
export default NotFound