const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT  || 5000

const app = express()

app.get('/api/tareas', (req, res) =>{
    res.status(200).json({message: 'Obtener Tareas'})
}

)

app.listen(port, () => console.log(`Server started on port ${port}`))