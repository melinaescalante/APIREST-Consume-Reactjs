import Card from "../components/Card";
import ProductsContainer from "../components/ProductsContainer";
import { useState, useEffect } from "react";
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
    return (
        <>
            <h2 className="font-medium text-xl">Zapatillas disponibles</h2>
            <div className="grid grid-cols-3">

                {sneakers.map((sneaker) => (
                    <div className="">
                        <Card
                            key={sneaker._id}
                            id={sneaker._id}
                            name={sneaker.name}
                            price={sneaker.price}
                            description={sneaker.description}
                        ></Card>
                    </div>
                ))}

            </div>
        </>
    );
};
export default SneakersView;
