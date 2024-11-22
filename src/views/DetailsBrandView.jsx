import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
function DetailsBrandView(){
    const { id } = useParams()
    const [brand, setBrand] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBrand = async () => {
        const endPoint = "http://127.0.0.1:3000/api/brands/" + id;
        const resp = await fetch(endPoint);
        const brand = await resp.json();
        setBrand(brand.data.brand);
console.log(brand.data.name)
        setLoading(false)
    };

    useEffect(() => {
        getBrand();
    }, []);
    return (
        <>

            {
                !loading ? (
                    <>
                        <h2 className="font-medium text-2xl m-3">Detalle de {brand.name}</h2>
                        <div className="text-start border border-cyan-700 rounded-md p-4">
                            <p><strong>Nombre de compañia: </strong>{brand.name} </p>
                            <p><strong>Descripción de compañia: </strong>{brand.description} </p>
                            <p><strong>País de origen: </strong> {brand.country}</p>
                            <p><strong>Id: </strong> {id}</p>
                          
                        </div>
                    </>
                ) : (
                    <div>
                        <p>Cargando...</p>
                    </div>
                )}
        </>

    )
}
export default DetailsBrandView