import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
function NavBar() {

    const { user, logout } = useContext(AuthContext);
  
    useEffect(() => {
        // console.log("Estado de user cambiado:", user);
    }, [user]);
    return (

        <nav>
            <ul className="flex gap-6 items-center p-4 text-cyan-600 font-medium mb-4 mt-8">

                <li><NavLink to='/'>API</NavLink></li>
                <li><NavLink to='/zapatillas'>Zapatillas</NavLink></li>
                <li><NavLink to='/marcas'>Marcas</NavLink></li>
                <li><NavLink to='/usuarios'>Usuarios</NavLink></li>
                <li><NavLink to='/singup'>Registro</NavLink></li>
                {user ? (
                    <li>

                        <button onClick={logout}>
                            Cerrar sesión <span>({user})</span>
                        </button>
                    </li>
                ) : (
                    <li>


                        <NavLink to="/login">Login</NavLink>

                    </li>
                )}

            </ul>
        </nav>
    )
}
export default NavBar