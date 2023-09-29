
const express = require("express")
const mainApp = express()

// const express = require("express")
// const app = express();

mainApp.use(express.json());
mainApp.use(express.urlencoded({ extended: true }))

// const {sayHelloDB} = require("./database/databaseConnection")
const { connectDatabase } = require("./database/databaseConnection");
const Blog = require("./model/blogModel");
const { default: mongoose } = require("mongoose");
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

mainApp.post("/createBlog", async (req, res) => {
    console.log(req.body)

    //Insert to DB logic goes here
    await Blog.create({

        title: req.body.title,
        subTitle: req.body.subTitle,
        description: req.body.description
    })
    res.json({
        status: 200,
        message: "Success"
    })
})

// get a post
// mainApp.get("/blogs",(req,res)=>{

//     res.json({
//         status:200,
//         message:"Blogs Fetched Successfully"
//     })
// })


// get all blogs
mainApp.get("/blogs", async (req, res) => {
    const Blogs = await Blog.find()
    if(Blogs.length>0)
    {
      
        res.json({
            status: 200,
            message: "All Blogs Fetched Successfully",
            data: Blogs
        })

    }else{
        res.json({
            status: 404,
            message: "No Blogs Found",
            data: Blogs
        })
    }
});

mainApp.get("/blog/:id", async (req,res)=>{
// mainApp.get("/blog/:id/:title",(req,res)=>{
// console.log(req.params.id+"--"+ req.params.title)
// const id= req.params.id
const id= req.params.id;
// const {id}= req.id; // alternative

// const blog= await Blog.find({_id:id, title:title}) // for more than one filter
// const blog= await Blog.find({_id:id})
// const blog= await Blog.find({title:title}) // for more than one filter
// if(blog.length>0)
// {
//     res.json({
//         status: 200,
//         message: "Single Fetched Successfully",
//         data: blog
//     })
// }
// else
// {
    
//     res.json({
//         status: 404,
//         message: "No Blog Found",
//         data: blog
//     })
// }
// const blog= await Blog.find({_id:id})


try{
    const objectId = new mongoose.Types.ObjectId(id);
    // const objectID=  mongoose.Types.ObjectId(id)
    const blog= await Blog.findById(objectId)
    // conslog.log("find"+blog1)
    // console.log(blog1)
    // console.log(blog)
    if(blog===null)
    {
        res.json({
            status: 404,
            message: "No Blog Found",
            data: blog
        })      
    }
    else
    {
        res.json({
            status: 200,
            message: "Single Fetched Successfully",
            data: blog
        })
        
    }
}
catch(error)
{
    const errorMsg= error;
    console.log("Error: "+errorMsg)
    

}



});




mainApp.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success"
    })
})


mainApp.listen(2000, () => {
    console.log("Application has been started in 2000")
})