import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    // Recuperar datos almacenados al cargar la app
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        if (storedUser) {
            setUser(storedUser); // Si es un string (ej. email), úsalo directamente
        }
        if (storedToken) {
            setToken(storedToken); // Si existe, almacénalo también
        }
    }, []); // Se ejecuta una vez al montar el componente

    const login = (userData, userToken) => {
        console.log(userData, userToken)
        setUser(userData);
        setToken(userToken);
        console.log(user, token + 'Soy el set user y token y mis valores')
        localStorage.setItem("user", userData);
        localStorage.setItem("token", userToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

