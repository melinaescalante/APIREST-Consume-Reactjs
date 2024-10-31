import "./App.css";
import Card from "./components/Card";
import User from "./components/User";
import ProductsContainer from './components/ProductsContainer'
import { useState, useEffect } from "react";
function App() {
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

  let [logueado, setLogueado] =useState(false);
  const title = (
    <h1 className="font-medium text-3xl mt-10">Tienda de zapatillas</h1>
  );
  // const text = 'Tarea 8';
  const login= () =>{
    setLogueado(true)
  }
  const logout= () =>{
    setLogueado(false)
  }
  return (
    <div>
      {title}
  {/* <p>{text}</p> */}
      {logueado ? (
        <>
          <h2 className="text-2xl m-4 text-cyan-800 mb-6" >Bienvenido</h2>
          <img src="/sneakerhouse.jpg" alt="Imagen de react" className='w-2/5 mx-auto mb-4' />
          <a  onClick={logout} className="text-xl px-2 py-1 rounded-lg text-white bg-cyan-600 cursor-pointer">Cerrar sesion</a>
          <div className=" mt-4 flex flex-wrap items-stretch    ">
          <ProductsContainer key={ProductsContainer.id}>

            {sneakers.map((sneaker) => (
              <div className="w-2/6">
                <Card
                  key={sneaker.id}
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

        <a  onClick={login} className="text-xl rounded-lg text-white px-2 py-1 bg-cyan-600 cursor-pointer">Iniciar sesion</a>
        </div>
      )}
      {/* <p className='m-2 mb-4'>Clase {clase} de React</p> */}
      {/* <img src="/react.jpg" alt="Imagen de react" className='w-2/5 mx-auto' /> */}
      <User texto="Melina Escalante" edad={19} />
      {/* Mapeamos array */}
    </div>
  );
}

export default App;
