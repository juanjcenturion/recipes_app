import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const userSession = sessionStorage.getItem('session');
        if (userSession) {
            setUser(JSON.parse(userSession));
            setIsAuth(true);
        }
        console.log("isAuth después de setearse:", isAuth);
    }, [isAuth]);

    const register = (username, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existentUser = users.find(u => u.username == username);

        if (existentUser) {
            throw new Error('El usuario ya existe.')
        }

        const newUser = {username, password}
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
    }

    const login = (username, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const findUser = users.find(u => u.username == username && u.password == password)

        if (!findUser) {
            throw new Error('Credenciales Incorrectas.')
        }

        sessionStorage.setItem('session', JSON.stringify(findUser));
        setUser(findUser);
        setIsAuth(true)

    }

    const logout = () => {
        sessionStorage.removeItem('session');
        setUser(null);
        setIsAuth(false);
        window.location.replace('/')
    }

    return (
        <AuthContext.Provider value={{ isAuth, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}