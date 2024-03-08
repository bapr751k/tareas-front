import axios from 'axios'

const API_URL ='https://ruby-successful-python.cyclic.app/api/tareas/'

//Crear Tarea
const crearTarea = async (tareaData, token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)
    
    return response.data
}

//Get Tarea
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    
    return response.data
}

//delete Tarea
const deleteTarea = async (id, token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    
    return response.data
}



//Obtener todas las tareas
const tareaService ={
    crearTarea,
    getTareas,
    deleteTarea
}

export default tareaService


