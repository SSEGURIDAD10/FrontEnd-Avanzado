// Llamada a API, probando
// Pasamos endepoint para traer data

// 1.- Importar axios
import axios from 'axios'

// 2.- Indicar ruta o endpoint
const BASE_URL = 'http://localhost:3000' // Esto se puede cambiar si subimos el repo de git al render

// 3.- Necesitamos mandar información
// Registrar un usuario
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
// Login
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
// Información de un solo usuario
const getUserServices = (jwtToken) => axios.get(`${BASE_URL}/users/me`, {headers: {Authorization: `Bearer $(jwtToken)`}})

export {
    registerUserService,
    loginUserService,
    getUserServices
}