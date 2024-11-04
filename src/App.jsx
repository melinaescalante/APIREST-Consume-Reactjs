import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./views/HomeView";
import Login from "./views/LoginView";
import Contact from "./views/ConctactView";
import Details from "./views/DetailsView";
import NotFound from "./views/NotFoundView";
import ApiRestView from "./views/ApiView";
function App() {


  const title = (
    <h1 className="font-medium text-3xl mt-10">Tienda de zapatillas</h1>
  );

  return (
    <div>
      {title}
      <nav>
        <ul className="flex gap-6 text-cyan-600 font-medium">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/contact'>Contacto</NavLink></li>
          <li><NavLink to='/details'>Detalle</NavLink></li>
          <li><NavLink to='/api'>API</NavLink></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="/api" element={<ApiRestView></ApiRestView>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
