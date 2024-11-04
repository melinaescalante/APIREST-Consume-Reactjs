import Card from "../components/Card";
import User from "../components/User";
import ProductsContainer from '../components/ProductsContainer'
import { useState, useEffect } from "react";

const Home = () => {
    let [logueado, setLogueado] = useState(false);
    let [recarga, setRecarga] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const login = () => {
        setLogueado(true)
    }
    const logout = () => {
        setLogueado(false)
    }
    const refresh = () => {
        setRecarga(!recarga)
    }
    useEffect(() => {
        const getSneakers = async () => {

            const endPoint = "http://127.0.0.1:3000/api/sneakers";
            const resp = await fetch(endPoint);
            const sneakers = await resp.json();
            setSneakers(sneakers.data);
            console.log(sneakers);
        };

        getSneakers();
    }, [recarga]);
    return (
        <>
            <h2>Home</h2>
            {
                logueado ? (
                    <>
                        <h2 className="text-2xl m-4 text-cyan-800 mb-6" >Bienvenido</h2>
                        <img src="/sneakerhouse.jpg" alt="Imagen de react" className='w-2/5 mx-auto mb-4' />
                        <a onClick={logout} className="text-xl px-2 py-1 rounded-lg text-white bg-cyan-600 cursor-pointer">Cerrar sesion</a>
                        <a onClick={refresh} className="text-xl px-2 py-1 rounded-lg text-white bg-cyan-600 cursor-pointer">Recargo</a>
                        <div className=" mt-4 flex flex-wrap items-stretch    ">
                            <ProductsContainer key={ProductsContainer.id}>

                                {sneakers.map((sneaker) => (
                                    <div className="w-2/6">
                                        <Card
                                            key={sneaker._id}
                                            id={sneaker._id}
                                            name={sneaker.name}
                                            price={sneaker.price}
                                            description={sneaker.description}
                                        ></Card>
                                    </div>
                                ))}
                            </ProductsContainer>
                        </div>
                    </>
                ) : (
                    <div className=" m-4">

                        <a onClick={login} className="text-xl rounded-lg text-white px-2 py-1 bg-cyan-600 cursor-pointer">Iniciar sesion</a>
                    </div>
                )
            }
            <User texto="Melina Escalante" edad={19} />

        </>
    )
}
export default Home