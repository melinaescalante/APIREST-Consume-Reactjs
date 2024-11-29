import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loadedUser, setLoadedUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        console.log(storedUser)
        if (storedUser) setUser(storedUser);
        if (storedToken) setToken(storedToken);
if (storedToken && storedUser) {
    
    setLoadedUser(true);
}
    }, []);

    const login = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
        setLoadedUser(true);
        console.log(user)
        console.log(loadedUser); 
        localStorage.setItem("user", userData);
        localStorage.setItem("token", userToken);

        
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setLoadedUser(false);
        console.log(user)
        console.log(loadedUser); 

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loadedUser }}>
            {children}
        </AuthContext.Provider>
    );
};
