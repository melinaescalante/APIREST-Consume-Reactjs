import { createContext, useContext, useState } from "react";
//'Variable' global
export const AuthContext = createContext()
//Creamos proveedor del contexto
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token'))

    const login = ( userData, userToken ) => {
        setUser(userData)
        setToken(userToken)
        console.log(userToken)
        localStorage.setItem('token', userToken)
    }
    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('token')
    }
    return (<AuthContext.Provider value={{user,token,login,logout}}>{ children }</AuthContext.Provider>)
}