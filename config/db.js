const sequelize=require('./seq')
const colors=require('colors')
//Dependencia a la función para crear el modelo
const UserModel=require('../models/user')
//dependencia a Datatypes
const {DataTypes}=require('sequelize')

//crear el modelo
const User=UserModel(sequelize, DataTypes)

//crear función asíncron apara conexión
const connectDB=async()=>{
    try {
        await sequelize.authenticate()
        console.log('connection sucessfully'.bgMagenta.blue)
        //seleccionar los users:
        // const users=await User.findAll();
        // console.log(users)
        // //crear user
        // const yuliana = await User.create({ name: "Yuliana", password: "72013" });
        // console.log(yuliana);
    } catch (error) {
        console.error(error)
    }
    
}

//connectDB()

module.exports=connectDB