// 1 Contexto -> estado global
// useState -> Un estado que diga si estoy logeado
// useEffect -> Para revisar si existe un token y me lo carga en mi estado

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

// 1 Crear contexto
const AuthContext = createContext();

// 2 Crear provedor del contexto (provider), es decir maneja de donde se obtiene la información
// El proveedor es un componente que va a envolver a todos los componentes (hijos)

function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(false) // Estoy Autenticado/Logeado? si o no
    const [userPayload, setsetUserPayload] = useState(null) // JWT payload decodificado - datos del usuario
    
    const login = (token) => {
        // Guardar el token en el localStorage del navegador
        // Este dato permanece aún si el navegador cierra
        localStorage.setItem('token', token)
        const decode = jwtDecode(token) // Decodifica el payload del token
        setsetUserPayload(decode)
        setIsAuth(true) // Estoy logeado? si
    }
    
    const logout = () => {
        // Eliminamos el localStorage del navegador
        localStorage.removeItem('token')
        setsetUserPayload(null)
        setIsAuth(false)
    }

    useEffect (() => {
        // Recuperar el token del localStorage, si no existe, devolverá null
        const token = localStorage.getItem('token') // Recuperar token
        if(token){
            const decode = jwtDecode(token)
            setsetUserPayload(decode)
            setIsAuth(true)
        }
    }, [])

    // Mandamos un objeto
    const data = {
        isAuth,
        userPayload,
        login,
        logout
    }
    return (
        // RETURN DE UN COMPONENTE
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    );
}

export default { AuthContext, AuthProvider }