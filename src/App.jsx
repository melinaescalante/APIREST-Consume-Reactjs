import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./views/HomeView";
import Login from "./views/LoginView";
import Details from "./views/DetailsView";
import NotFound from "./views/NotFoundView";
import ApiRestView from "./views/ApiView";
import SingUpView from "./views/SingUpView";
import Footer from "./components/Footer";
import SneakersView from "./views/SneakersView";
import BrandsView from "./views/BrandsView";
function App() {


  const title = (
    <h1 className="font-medium text-3xl mt-5">Tienda de zapatillas</h1>
  );

  return (
    <>
    <div className="p-6">
      {title}
      <nav>
        <ul className="flex gap-6 p-4 text-cyan-600 font-medium mb-4 mt-8">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/api'>API</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/singup'>Registro</NavLink></li>
      
          <li><NavLink to='/zapatillas'>Zapatillas</NavLink></li>
          <li><NavLink to='/marcas'>Marcas</NavLink></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/zapatillas" element={<SneakersView></SneakersView>}></Route>
        <Route path="/marcas" element={<BrandsView></BrandsView>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="/api" element={<ApiRestView></ApiRestView>}></Route>
        <Route path="/singup" element={<SingUpView></SingUpView>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
     <Footer></Footer>
    </>
  );
}

export default App;
