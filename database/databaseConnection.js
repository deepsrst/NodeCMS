const mongoose= require("mongoose")

exports.connectDatabase= async()=>{
    await mongoose.connect("mongodb+srv://hello:hello@cluster0.8id08dt.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected Successfully from database.js")
}



exports.sayHelloDB= async()=>{
await console.log("Hello DB")
}