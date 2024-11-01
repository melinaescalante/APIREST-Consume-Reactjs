import "./App.css";
import Card from "./components/Card";
import User from "./components/User";
import ProductsContainer from './components/ProductsContainer'
import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./views/HomeView";
import Login from "./views/LoginView";
import Contact from "./views/ConctactView";
import Details from "./views/DetailsView";
import NotFound from "./views/NotFoundView";
function App() {


  const title = (
    <h1 className="font-medium text-3xl mt-10">Tienda de zapatillas</h1>
  );
  // const text = 'Tarea 8';

  return (
    <div>
      {title}
      <nav>
        <ul className="flex gap-6 text-cyan-600 font-medium">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/contact'>Contacto</NavLink></li>
          <li><NavLink to='/details'>Detalle</NavLink></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* {logueado ? (
        <>
          <h2 className="text-2xl m-4 text-cyan-800 mb-6" >Bienvenido</h2>
          <img src="/sneakerhouse.jpg" alt="Imagen de react" className='w-2/5 mx-auto mb-4' />
          <a onClick={logout} className="text-xl px-2 py-1 rounded-lg text-white bg-cyan-600 cursor-pointer">Cerrar sesion</a>
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

          <a onClick={login} className="text-xl rounded-lg text-white px-2 py-1 bg-cyan-600 cursor-pointer">Iniciar sesion</a>
        </div>
      )}
       <p className='m-2 mb-4'>Clase {clase} de React</p> 
       <img src="/react.jpg" alt="Imagen de react" className='w-2/5 mx-auto' /> 
      <User texto="Melina Escalante" edad={19} />
      Mapeamos array */}
    </div>
  );
}

export default App;
