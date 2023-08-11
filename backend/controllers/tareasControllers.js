const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler ( async (req, res) =>{
    res.status(200).json({message: 'Obtener Tareas'})
})

const setTarea = asyncHandler(async (req, res) =>{
    if(!req.body.texto){
        res.status(400)
        throw new Error('Por favor teclea una tarea')
    }
    res.status(201).json({message: 'Crear Tareas'})
})

const updateTarea = asyncHandler( async (req, res) =>{
    res.status(200).json({message:  `Modificar la tarea ${req.params.id}`})
})

const deleteTarea = asyncHandler( async (req, res) =>{
    res.status(200).json({message: `Borrar la tarea ${req.params.id}`})
})


module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}