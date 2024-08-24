// Llamada a API, probando
// Pasamos endepoint para traer data

// 1.- Importar axios
import axios from 'axios'

// 2.- Indicar ruta o endpoint
const BASE_URL = 'http://localhost:3000' // Esto se puede cambiar si subimos el repo de git al render

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)

const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)

const createItemService = (data, jwtToken) => axios.post(`${BASE_URL}/items`, data, { headers: { Authorization: `Bearer ${jwtToken}`}})

export {
    getAllItemsService,
    getOneItemService,
    createItemService
}