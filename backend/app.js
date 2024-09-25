import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js"
import userRoute from './Routes/user.route.js'
dotenv.config({});

const app=express();

//we are passing json data 
app.use(express.json());

//port create
const PORT=process.env.SERVER_PORT || 5000 ;

//api routes
app.use("/api/v1/user", userRoute)


//check connection route
app.get("/check_conn",(req,res)=>{

        res.json({
        message:"ReadKart Server is Working Properly....",
        status: "✔",
        port: `**${PORT}`

        })
})

app.listen(PORT, ()=>{
        console.log('***------------------------------***')
        console.log(`***  Server Started at Port ${PORT} ***`);
        console.log('***------------------------------***')
        connectDB();

        
})