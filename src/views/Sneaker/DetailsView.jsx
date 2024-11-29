import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const Details = () => {
    const { id } = useParams()
    const [sneaker, setSneaker] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSneaker = async () => {
        const endPoint = "http://127.0.0.1:3000/api/sneakers/" + id;
        const resp = await fetch(endPoint);
        const sneaker = await resp.json();
        setSneaker(sneaker.data);
        console.log(sneaker.data.product.name);
        setLoading(false)
    };

    useEffect(() => {
        getSneaker();
    }, []);
    return (
        <>

            {
                !loading ? (
                    <>
                        <h2 className="font-medium text-2xl m-3">Detalle de {sneaker.product.name}</h2>
                        <div className="text-start border border-cyan-700 rounded-md p-4">
                            <p><strong>Marca: </strong>{sneaker.product.brand} </p>
                            <p><strong>Color: </strong> {sneaker.product.color}</p>
                            <p><strong>Descripción:</strong>  {sneaker.product.description}</p>
                            <p><strong>Precio: </strong> {sneaker.product.price}</p>
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
export default Details