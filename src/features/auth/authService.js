import axios from "axios";
const API_URL =  'https://ruby-successful-python.cyclic.app/api/users/'

// Creamos la petición al backend para crear un usuario

const register = async (userData) => {
    const response = await axios.post(API_URL, userData) // Enviamos los datos del formulario a traves de post

    return response.data
}

const authService = {
    register
}

export default authService
