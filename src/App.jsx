import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./views/HomeView";
import Login from "./views/Auth/LoginView";
import Details from "./views/Sneaker/DetailsView";
import NotFound from "./views/NotFoundView";
import ApiRestView from "./views/ApiView";
import SingUpView from "./views/Auth/SingUpView";
import Footer from "./components/Footer";
import SneakersView from "./views/Sneaker/SneakersView";
import BrandsView from "./views/Brand/BrandsView";
import AddNewSneakerView from "./views/Sneaker/AddNewSneakerView";
import AddNewBrandView from "./views/Brand/AddNewBrandView";
import UpdateBrandView from "./views/Brand/UpdateBrandView";
import UpdateSneakerView from "./views/Sneaker/UpdateSneakerView";
import UsersView from "./views/User/UsersView";
import UpdateUserView from "./views/User/UpdateUserView";
import DetailsUserView from "./views/User/DetailsUserView";
import DetailsBrandView from "./views/Brand/DetailsBrandView";
import { PrivateRoute } from "./utils/PrivateRouteComponent";
import { AuthProvider } from "./utils/AuthContext";
import { AuthContext } from "./utils/AuthContext";
import { useContext, useEffect, useState } from "react";
function App() {
  const title = (
    <h1 className="font-medium text-3xl mt-5">Tienda de zapatillas</h1>
  );
  
  const { user, logout, loadedUser } = useContext(AuthContext);
  useEffect(() => {
      console.log("User actualizado:", user);
      console.log("LoadedUser:", loadedUser);
  }, []);
  return (
    <>
      <div className="p-6">
        {title}
        <nav>
          <ul className="flex gap-6 items-center p-4 text-cyan-600 font-medium mb-4 mt-8">
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            <li><NavLink to='/'>API</NavLink></li>
            <li><NavLink to='/zapatillas'>Zapatillas</NavLink></li>
            <li><NavLink to='/marcas'>Marcas</NavLink></li>
            <li><NavLink to='/usuarios'>Usuarios</NavLink></li>
            <li><NavLink to='/singup'>Registro</NavLink></li>
            {loadedUser?(
                            <li>
                                <button onClick={logout}>
                                    Cerrar sesión <span>({user})</span>
                                </button>
                            </li>
                        ) : (
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        )
                    }
          </ul>
        </nav>
        <AuthProvider>
          <Routes>
            {/* <Route path="/" element={<Home></Home>}></Route> */}
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/zapatillas" element={<SneakersView></SneakersView>}></Route>
            <Route path="/crearZapatillas"
              element={
                <PrivateRoute>
                  <AddNewSneakerView></AddNewSneakerView>
                </PrivateRoute>
              }>
            </Route>
            <Route path="/modificarZapatilla/:id"
              element={
                <PrivateRoute>
                  <UpdateSneakerView></UpdateSneakerView>
                </PrivateRoute>
              }></Route>
            <Route path="/crearMarca"
              element={
                <PrivateRoute>
                  <AddNewBrandView></AddNewBrandView>
                </PrivateRoute>
              }></Route>
            <Route path="/modificarMarca/:id"
              element={
                <PrivateRoute>
                  <UpdateBrandView></UpdateBrandView>
                </PrivateRoute>
              }></Route>
            <Route path="/detailsMarca/:id" element={<DetailsBrandView></DetailsBrandView>}></Route>
            <Route path="/marcas" element={<BrandsView></BrandsView>}></Route>
            <Route path="/usuarios" element={<UsersView></UsersView>}></Route>
            <Route path="/modificarUsuario/:id"
              element={
                <PrivateRoute>
                  <UpdateUserView></UpdateUserView>
                </PrivateRoute>
              }></Route>
            <Route path="/detailsUsuario/:id" element={<DetailsUserView></DetailsUserView>}></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
            <Route path="/" element={<ApiRestView></ApiRestView>}></Route>
            <Route path="/singup" element={<SingUpView></SingUpView>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </AuthProvider>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
