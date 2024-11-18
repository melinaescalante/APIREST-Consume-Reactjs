import Card from "../components/Card";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddNewSneakerView from "./AddNewSneakerView";
const SneakersView = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const getSneakers = async () => {
            const endPoint = "http://127.0.0.1:3000/api/sneakers";
            const resp = await fetch(endPoint);
            const sneakers = await resp.json();
            setSneakers(sneakers.data);
            console.log(sneakers);
        };

        getSneakers();
    }, []);
    const handleDelete = (id) => {
    
        setSneakers(sneakers.filter(sneaker => sneaker._id !== id));
    };
    return (
        <>
            <h2 className="font-medium text-xl mb-5 mt5">Zapatillas disponibles</h2>
            <Link className="m-2 px-2 py-1 border rounded-lg border-cyan-800" to={`/crearZapatillas`} >Agregar zapatilla</Link>
            <div className="grid grid-cols-3">

                {sneakers.map((sneaker) => (
                    <div key={sneaker._id} className="">
                        <Card
                            key={sneaker._id}
                            id={sneaker._id}
                            name={sneaker.name}
                            price={sneaker.price}
                            description={sneaker.description}
                            color={sneaker.color}
                            brand={sneaker.brand}
                            onDelete={handleDelete} 
                        ></Card>
                    </div>
                ))}

            </div>
        </>
    );
};
export default SneakersView;
