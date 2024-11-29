import Card from "../components/Card";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import { useContext } from "react";
const SneakersView = () => {
    const [sneakers, setSneakers] = useState([]);
    const [msgError, setMsgError] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [formUserData, setFormUserData] = useState({ name: '' })
    const { user } = useContext(AuthContext)
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
    const getUserByName = async (e) => {
        e.preventDefault()
        setIsSearching(true)
        const endPoint = "http://127.0.0.1:3000/api/sneakers/model/" + formUserData.name;
        const resp = await fetch(endPoint);
        const sneaker = await resp.json();
        setFormUserData(sneaker);
        console.log(sneaker)
        if (resp.ok) {
            setSneakers([sneaker.data.product])
        } else {
            setMsgError(sneaker.msg || 'No se ha podido podido el modelo de zapatilla correctamente')
            setTimeout(() => {
                setMsgError('')
            }, 3000);
            setIsSearching(false);
        }
    }
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormUserData({ ...formUserData, [name]: value || '' })
    }
    const handleDelete = (id) => {

        setSneakers(sneakers.filter(sneaker => sneaker._id !== id));
    };
    return (
        <>
            <h2 className="font-medium text-xl m-5 mt-5">Zapatillas disponibles</h2>
            <Link className="m-2 px-2 mb-5 py-1 border rounded-lg border-cyan-800" to={`/crearZapatillas`} >Agregar zapatilla</Link>
            <form onSubmit={getUserByName} className="flex flex-col justify-start items-start ms-2 mb-5">
                <div className="ms-0 m-3">
                    <label htmlFor="user" className="">
                        Buscar por nombre de usuario
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
                        Buscar por modelo
                    </button>
                </div>
            </form>

            {msgError && (
                <div className="bg-red-200 rounded-lg p-3 mt-3">
                    <p>{msgError}</p>
                </div>
            )}
            <div className="grid grid-cols-3">
                {isSearching ? (
                    sneakers.map((sneaker) => (
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
                    ))
                ) : (
                    sneakers.map((sneaker) => (
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
                    ))
                )}

            </div>
        </>
    );
};
export default SneakersView;
