import React from "react";
import { useState, useEffect } from "react";
import CardInformative from "../components/CardInformative";
import { Link } from "react-router-dom";
const BrandsView = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const getBrands = async () => {
            const endPoint = "http://127.0.0.1:3000/api/brands";
            const resp = await fetch(endPoint);
            const brands = await resp.json();
            setBrands(brands.data);
            console.log(brands);
        };

        getBrands();
    }, []);  
    const handleDelete = (id) => {
    
        setBrands(brands.filter(brand => brand._id !== id));
    };
    return (
        <>
            <h2 className="text-3xl text-center font-medium mt-6  mb-5">
                Marcas disponbles
            </h2>
            <Link className="m-2 mt-2 px-2 py-1 border rounded-lg border-cyan-800" to={`/crearMarca`} >Agregar marca</Link>
            {/* <Button text="Agregar marca"></Button> */}
            <div className="grid grid-cols-3 mt-3">
                {brands.map((brand) => (
                    <div key={brand._id}>
                        <CardInformative
                            key={brand._id}
                            name={brand.name}
                            country={brand.country}
                            description={brand.description}
                            id={brand._id}
                            onDelete={handleDelete}
                        ></CardInformative>
                    </div>
                ))}
            </div>
        </>
    );
};
export default BrandsView;
