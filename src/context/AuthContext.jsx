import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        };
    }, []);

    const login = (userData) => {
        sessionStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        sessionStorage.removeItem('user')
        setUser(null)
    }

    const signUp = (username, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (users[username]) {
            throw new Error('El nombre de usuario ya existe. Por Favor, elige otro. ')
        }

        users[username] = password;

        localStorage.setItem('users', JSON.stringify(users))

        login({ username })

    }

    return(
        <AuthContext.Provider value={{user, login, logout, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}