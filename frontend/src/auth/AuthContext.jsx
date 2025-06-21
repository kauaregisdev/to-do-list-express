import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const isAuthenticated = !!token;

    function login(accessToken) {
        setToken(accessToken);
        localStorage.setItem('token', accessToken);
    }

    function logout() {
        setToken(null);
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}