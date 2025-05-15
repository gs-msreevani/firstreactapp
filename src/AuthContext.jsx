// AuthContext.jsx
import React, { createContext, useState, useEffect,useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Simulate fetching auth status from localStorage or API
        const storedStatus = localStorage.getItem('isLoggedIn');
        if (storedStatus) {
            setIsLoggedIn(JSON.parse(storedStatus));
        }
    }, []);
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
