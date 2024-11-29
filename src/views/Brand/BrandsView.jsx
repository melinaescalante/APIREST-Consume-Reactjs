import React from "react";
import { useState, useEffect } from "react";
import CardInformative from "../../components/CardInformative";
import { Link } from "react-router-dom";
const BrandsView = () => {
    const [brands, setBrands] = useState([]);
    const [isSearching, setIsSearching] = useState(false); 
    const [msgError, setMsgError] = useState('');
    const [formUserData, setFormUserData] = useState({ name: '' })

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
    const getUserByName = async (e) => {
        e.preventDefault()
        setIsSearching(true)
        const endPoint = "http://127.0.0.1:3000/api/brands/company/" + formUserData.name;
        const resp = await fetch(endPoint);
        const brand = await resp.json();
        setFormUserData(brand);

        if (resp.ok) {
            setBrands([brand.data.brand])
        } else {
            setMsgError(brand.msg || 'No se ha podido podido la marca correctamente')
            setTimeout(() => {
                setMsgError('')
            }, 3000);
            setIsSearching(false); // Vu
        }
    }
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormUserData({ ...formUserData, [name]: value || '' })
    }
    const handleDelete = (id) => {
    
        setBrands(brands.filter(brand => brand._id !== id));
    };
    return (
        <>
            <h2 className="text-3xl text-center font-medium mt-6  mb-5">
                Marcas disponbles
            </h2>
            <Link className="m-2 mt-2 px-2 py-1 border rounded-lg border-cyan-800" to={`/crearMarca`} >Agregar marca</Link>
            <form onSubmit={getUserByName} className="flex flex-col justify-start items-start ms-2 mb-5">
                <div className="ms-0 m-3">
                    <label htmlFor="user" className="">
                        Buscar por nombre de compañia
                    </label>
                </div>
                <div className="flex gap-3">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="border border-cyan-800 rounded-md p-1"
                        onChange={handlerChange}
                        value={formUserData.name || ''}
                    />
                    <button type="submit" className="rounded-md bg-cyan-800 text-white px-2 py-1">
                        Buscar por compañia
                    </button>
                </div>
            </form>
            {msgError && (
                <div className="bg-red-200 rounded-lg p-3 mt-3">
                    <p>{msgError}</p>
                </div>
            )}
            <div className="grid grid-cols-3 mt-3">
            {isSearching ? (
                    brands.map((brand) => (
                        <div key={brand._id} className="">
                            <CardInformative
                            key={brand._id}
                            name={brand.name}
                            country={brand.country}
                            description={brand.description}
                            id={brand._id}
                            onDelete={handleDelete}
                        ></CardInformative>
                        </div>))
                ) : (
                brands.map((brand) => (
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
                ))
            )}
            </div>
        </>
    );
};
export default BrandsView;
