import React from "react";
import { useState, useEffect } from "react";
import CardInformative from "../components/CardInformative";
import Button from "../components/Button";
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
    return (
        <>
            <h2 className="text-3xl text-center font-medium mt-6">
                Marcas disponbles
            </h2>
            <Button text="Agregar marca"></Button>
            <div className="grid grid-cols-3">
                {brands.map((brand) => (
                    <div className="">
                        <CardInformative
                            key={brand._id}
                            name={brand.name}
                            country={brand.country}
                            description={brand.description}
                        ></CardInformative>
                    </div>
                ))}
            </div>
        </>
    );
};
export default BrandsView;
