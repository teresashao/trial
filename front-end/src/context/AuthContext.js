import React, { createContext, useState, useEffect } from 'react';
import AuthService from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await AuthService.getCurrentUser();
                if (user) {
                    console.log("setting current user: " + user);
                    setCurrentUser(user);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                // Handle error (e.g., clear currentUser or show error message)
                setCurrentUser(null);
            }
        };

        fetchCurrentUser();
    }, []);

    const login = (username, password) => {
        return AuthService.login(username, password)
            .then(response => {
                if (response.accessToken) {
                    setCurrentUser(response);
                }
                return response;
            });
    };

    const logout = () => {
        AuthService.logout();
        setCurrentUser(null);
    };

    const isAuthenticated = () => {
        return !!currentUser;
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
