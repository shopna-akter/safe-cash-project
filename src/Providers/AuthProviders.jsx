import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth(token);
        }
    }, []);

    const login = async (loginInfo) => {
        const response = await axios.post("http://localhost:5000/login", loginInfo);
        setAuth(response.data.token);
        localStorage.setItem("token", response.data.token);
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
