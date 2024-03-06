import axios from "axios";
const API_URL =  'https://ruby-successful-python.cyclic.app/api/users/'

// Creamos la petición al backend para crear un usuario

const register = async (userData) => {
    const response = await axios.post(API_URL, userData) // Enviamos los datos del formulario a traves de post

    return response.data
}

// Creamos la petición al backend para loguear un usuario

const login = async (userData) => {
    const response = await axios.post(API_URL+'login', userData) // Enviamos los datos del formulario a traves de post

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout a un usuario

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService
