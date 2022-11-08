const express=require('express')
const dontenv=require('dotenv')
const colors=require('colors')

//dependencia a la conexión a bd
const connectDB=require('./config/db')

//dependencias a las rutas
const bootcampRoutes=require('./routes/BootcamRoutes')
const userRoutes=require('./routes/UserRoutes')
const { json } = require('sequelize')

//ESTABLECER ARCHIVO DE CONFIGURACIÓN con variables de entorno del proyecto
dontenv.config({
    path: './config_env/config.env'
})

//1. Cear el objeto app
const app=express()
app.use(express.json())

//ejecutar la conexión a bd
connectDB()


app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)
//crear rutas(endoint, uri) para los bootcamps







//3. Ejecutar servidor de dearrollo de express
//(voy a ejecutar un servidor y este va a escuchar por un puerto)
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgYellow.blue)
})

