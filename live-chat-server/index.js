const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app=express()
const userRoutes=require('./routes/userRoutes')
dotenv.config();
app.use(express.json())

const connectdb=async()=>{
    try{
    const connect=mongoose.connect(process.env.MONGO_URI)
    console.log("server is connected to db")
    }
    catch(err){
        console.log("server is not connected to Database")
    }
}
connectdb()
app.get('/',(req,res)=>{
    res.send("ApI is running123")
})
app.use("/user",userRoutes)
const PORT=process.env.PORT ||5000
app.listen(PORT,console.log("Server is running..."))