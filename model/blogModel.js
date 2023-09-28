//moongose as a middle agent to pass and retrieve data from and to mongo and nodejs
const mongoose= require("mongoose")

const blogSchema= new mongoose.Schema({

    title:{
        type:String, // datatype
        require:true,   // required or not
        unique:true  // unique or not
    },
    subTitle:{
        type:String
    },
    description:{
        type:String
    }
},
{
    timestamps:true   // for mongo's default created "createdAt" and "updatedAt"
}
)

const Blog= mongoose.model("BlogModel", blogSchema)
module.exports=Blog