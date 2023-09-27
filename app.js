const mainApp= require("express")()

// const {sayHelloDB} = require("./database/databaseConnection")
const { connectDatabase } = require("./database/databaseConnection")
// const databaseObject= require("./database/databaseConnection")


connectDatabase()

// databaseObject.connectDatabase()
// databaseObject.sayHelloDB()
// connectDatabase()
// sayHelloDB()



//Database Conenct fromm database.js
// connectDatabase()

//to call from app.js
// const cmongoose = require("mongoose")

// cmongoose.connect("mongodb+srv://hello:hello@cluster0.8id08dt.mongodb.net/?retryWrites=true&w=majority").then(()=>{

// console.log("Database Connected from app.js")
// })


mainApp.get("/",(req,res)=>{
    res.json({
        status:200,
        message: "Success"
    })
})




mainApp.listen(2000,()=>{
    console.log("Application has been started in 2000")
})